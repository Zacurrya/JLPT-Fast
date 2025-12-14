"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Asteroid from "./components/Asteroid";
import FloatingText from "./components/FloatingText";
import Explosion from "./components/Explosion";
import GameSettingsModal from "./components/GameSettingsModal";
import GameOverScreen from "./components/GameOverScreen";
import { BackButton } from "./components/BackButton";
import { useRomajiInput } from "../../../hooks/useRomajiInput";
import { GAME_SETTINGS } from "./utils/gameSettings";
import { generateAsteroid, FallingAsteroid } from "./utils/asteroidGenerator";
import { useEnterSubmit } from "../../../hooks/useEnterSubmit";

interface ActiveExplosion {
    id: string;
    x: number;
    y: number;
}

interface FloatingItem {
    id: string;
    x: number;
    y: number;
    text: string;
}

type GameState = "setup" | "playing" | "gameOver" | "review";

export default function AsteroidsPage() {
    const [gameState, setGameState] = useState<GameState>("setup");
    const [asteroids, setAsteroids] = useState<FallingAsteroid[]>([]);
    const [explosions, setExplosions] = useState<ActiveExplosion[]>([]);
    const [floatingTexts, setFloatingTexts] = useState<FloatingItem[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [settings, setSettings] = useState({
        showKanji: true,
        showKana: true,
        difficulty: 'medium' as 'easy' | 'medium' | 'hard'
    });

    const { processInput, resetRomaji } = useRomajiInput();

    const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
    const spawnTimerRef = useRef<NodeJS.Timeout | null>(null);
    const nextAsteroidIdRef = useRef(0);
    const nextExplosionIdRef = useRef(0);
    const nextFloatingTextIdRef = useRef(0);

    // Load top score
    useEffect(() => {
        const saved = localStorage.getItem('asteroids-top-score');
        if (saved) setTopScore(parseInt(saved));
    }, []);

    const SPAWN_INTERVAL = GAME_SETTINGS[settings.difficulty].spawnInterval;
    const GAME_HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 800;

    const spawnAsteroid = useCallback(() => {
        const newAsteroid = generateAsteroid({
            difficulty: settings.difficulty,
            showKanji: settings.showKanji,
            showKana: settings.showKana,
            nextId: nextAsteroidIdRef.current++
        });

        if (newAsteroid) {
            setAsteroids(prev => [...prev, newAsteroid]);
        }
    }, [settings]);

    const checkInput = useCallback(() => {
        if (!inputValue.trim()) return;

        // Check if input matches any asteroid's KANA (only alive ones)
        // Find best match (lowest Y / closest to bottom)? Or just first match.
        // Usually best to check alive asteroids only.
        const matchedIndex = asteroids.findIndex(asteroid =>
            !asteroid.isDying && asteroid.vocab.kana === inputValue
        );

        if (matchedIndex !== -1) {
            const asteroid = asteroids[matchedIndex];

            // Trigger explosion effect visual only (optional, keep it for flair)
            const explosion: ActiveExplosion = {
                id: `explosion-${nextExplosionIdRef.current++}`,
                x: asteroid.x,
                y: asteroid.y
            };
            setExplosions(prev => [...prev, explosion]);

            // DO NOT immediately remove. Mark as dying.
            setAsteroids(prev => prev.map((a, i) => {
                if (i === matchedIndex) {
                    return { ...a, isDying: true, opacity: 1 };
                }
                return a;
            }));

            // Floating text (meanings) is now handled by the dying asteroid itself, 
            // so we don't need to add a FloatingText item unless for score +1 popup? 
            // User request: "the asteroid should translate to english".
            // Implementation: The asteroid component changes text.
            // So we remove the old FloatingText logic for definition.

            // setFloatingTexts(prev => [...prev, floatingText]); // Removed

            setScore(prev => prev + 1);
            setInputValue(""); // Clear input on match
            resetRomaji();
        } else {
            // Clear input on incorrect submission to force retry
            setInputValue("");
            resetRomaji();
        }
    }, [inputValue, asteroids, resetRomaji]);

    const handleInput = (newKana: string) => {
        setInputValue(newKana);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        processInput(e, inputValue, handleInput);
    };

    // Check input on enter
    useEnterSubmit(checkInput);

    // Game loop - move asteroids & handle dying fadeout
    useEffect(() => {
        if (gameState !== "playing") return;

        gameLoopRef.current = setInterval(() => {
            setAsteroids(prev => {
                // Return a new array with updates
                // 1. Move alive asteroids
                // 2. Fade dying asteroids
                // 3. Remove dead dying asteroids

                const updated = prev.map(asteroid => {
                    if (asteroid.isDying) {
                        // Fade out over ~1.5s (approx 90 frames at 60fps, 16ms/frame)
                        // 1.0 / 90 ~= 0.011
                        const newOpacity = (asteroid.opacity ?? 1) - 0.011;
                        return {
                            ...asteroid,
                            opacity: newOpacity,
                            // Optionally make it float up slightly or stay still?
                            // User requested "not slide up", so we keep y constant or very slow drift?
                            // Let's keep y constant.
                            y: asteroid.y
                        };
                    } else {
                        // Move normal asteroid
                        return {
                            ...asteroid,
                            y: asteroid.y + asteroid.speed
                        };
                    }
                }).filter(a => {
                    // Remove if fully transparent (died)
                    if (a.isDying && (a.opacity ?? 0) <= 0) return false;
                    return true;
                });

                // Check for game over (alive asteroid reached bottom)
                // Ignore dying asteroids for game over
                const hasReachedBottom = updated.some(a => !a.isDying && a.y >= GAME_HEIGHT - 100);
                if (hasReachedBottom) {
                    setGameState("gameOver");
                }

                return updated;
            });
        }, 16); // ~60fps

        return () => {
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        };
    }, [gameState, GAME_HEIGHT]);

    // Check for high score on game over
    useEffect(() => {
        if (gameState === "gameOver") {
            if (score > topScore) {
                setTopScore(score);
                localStorage.setItem('asteroids-top-score', score.toString());
            }
        }
    }, [gameState, score, topScore]);

    // Spawn asteroids
    useEffect(() => {
        if (gameState !== "playing") return;

        spawnTimerRef.current = setInterval(spawnAsteroid, GAME_SETTINGS[settings.difficulty].spawnInterval);

        return () => {
            if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
        };
    }, [gameState, spawnAsteroid, settings.difficulty]);

    const toggleSetting = (key: 'showKanji' | 'showKana') => {
        setSettings(prev => {
            const newSettings = { ...prev, [key]: !prev[key] };
            // Ensure at least one is selected
            if (!newSettings.showKanji && !newSettings.showKana) {
                return prev;
            }
            return newSettings;
        });
    };

    const startGame = () => {
        setAsteroids([]);
        setExplosions([]);
        setFloatingTexts([]);
        setScore(0);
        setInputValue("");
        nextAsteroidIdRef.current = 0;
        setGameState("playing");
    };

    const setDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
        setSettings(prev => ({ ...prev, difficulty }));
    };

    const removeExplosion = (id: string) => {
        setExplosions(prev => prev.filter(e => e.id !== id));
    };

    const removeFloatingText = (id: string) => {
        setFloatingTexts(prev => prev.filter(t => t.id !== id));
    };

    const [showReview, setShowReview] = useState(false);
    const router = useRouter();

    const handleBackToPractice = () => {
        router.push('/practice');
    };

    const handleSeeAnswers = () => {
        setGameState("review");
    };

    // ... (existing code)

    return (
        <div className="fixed inset-0 z-[100] w-full bg-background text-foreground overflow-hidden font-sans">
            {/* Space Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0B1120] to-black z-0" />
            <div className="absolute inset-0 z-0 opacity-40">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            width: Math.random() * 2 + 1 + 'px',
                            height: Math.random() * 2 + 1 + 'px',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            opacity: Math.random()
                        }}
                    />
                ))}
            </div>

            {/* Main game container with max width */}
            <div className="relative max-w-7xl mx-auto h-full z-10">
                {/* Header - only show when playing */}
                {gameState === "playing" && (
                    <div className="relative z-10 flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <BackButton onClick={handleBackToPractice} />
                            <h1 className="text-3xl font-serif font-bold tracking-wide text-white">Asteroids</h1>
                            <div className="flex gap-3">
                                <div className="px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border">
                                    <span className="text-lg font-bold">Score: {score}</span>
                                </div>
                                <div className="px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full border border-secondary/20">
                                    <span className="text-lg font-bold text-secondary">Top Score: {topScore}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Game area */}
                <div className="relative" style={{ height: `${GAME_HEIGHT}px` }}>
                    <AnimatePresence>
                        {asteroids.map(asteroid => (
                            <Asteroid
                                key={asteroid.id}
                                id={asteroid.id}
                                vocab={asteroid.vocab}
                                x={asteroid.x}
                                y={asteroid.y}
                                showKanji={settings.showKanji && !!asteroid.vocab.kanji}
                            />
                        ))}
                    </AnimatePresence>

                    {/* Explosions */}
                    {explosions.map(explosion => (
                        <Explosion
                            key={explosion.id}
                            x={explosion.x}
                            y={explosion.y}
                            onComplete={() => removeExplosion(explosion.id)}
                        />
                    ))}

                    {/* Floating Texts (Meanings) */}
                    {floatingTexts.map(item => (
                        <FloatingText
                            key={item.id}
                            x={item.x}
                            y={item.y}
                            text={item.text}
                            onComplete={() => removeFloatingText(item.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Input area */}
            {gameState === "playing" && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-md px-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type Romaji..."
                        autoFocus
                        className="w-full px-6 py-4 bg-card/90 backdrop-blur-md text-card-foreground text-xl font-medium rounded-full border-2 border-border shadow-lg outline-none focus:border-primary transition-colors placeholder:text-muted-foreground text-center"
                    />
                    <p className="text-center text-xs text-muted-foreground mt-2">
                        Type the reading & Press Enter
                    </p>
                </div>
            )}

            {/* Game Over screen */}
            <AnimatePresence>
                {gameState === "gameOver" && (
                    <GameOverScreen
                        score={score}
                        topScore={topScore}
                        onPlayAgain={() => setGameState("setup")}
                        onSeeAnswers={handleSeeAnswers}
                    />
                )}
            </AnimatePresence>

            {/* Review Screen (Simple Modal) */}
            <AnimatePresence>
                {gameState === "review" && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-card text-card-foreground rounded-xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl border border-border">
                            <div className="p-6 border-b border-border flex justify-between items-center">
                                <h3 className="text-2xl font-serif font-bold">Vocabulary Review</h3>
                                <button onClick={() => setGameState("setup")} className="p-2 hover:bg-muted rounded-full">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                                <p className="text-muted-foreground mb-4">Words that were on screen:</p>
                                <div className="grid gap-3">
                                    {asteroids.map((a) => (
                                        <div key={a.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                                            <div>
                                                <p className="text-2xl font-serif font-bold text-primary mb-1">{a.vocab.kanji || a.vocab.kana}</p>
                                                <p className="text-sm text-muted-foreground">{a.vocab.romaji}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">{a.vocab.meaning}</p>
                                                {a.vocab.kanji && <p className="text-xs text-muted-foreground">{a.vocab.kana}</p>}
                                            </div>
                                        </div>
                                    ))}
                                    {asteroids.length === 0 && (
                                        <p className="text-center text-muted-foreground py-8">No active asteroids captured.</p>
                                    )}
                                </div>
                            </div>
                            <div className="p-6 border-t border-border flex gap-4">
                                <button
                                    onClick={() => setGameState("setup")}
                                    className="flex-1 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Play Again
                                </button>
                                <button
                                    onClick={handleBackToPractice}
                                    className="flex-1 bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:bg-secondary/90 transition-colors"
                                >
                                    Return to Practice
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* Settings Modal */}
            <GameSettingsModal
                isOpen={gameState === "setup"}
                settings={settings}
                onToggle={toggleSetting}
                onSetDifficulty={setDifficulty}
                onStart={startGame}
                showBackButton={true}
            />
        </div>
    );
}
