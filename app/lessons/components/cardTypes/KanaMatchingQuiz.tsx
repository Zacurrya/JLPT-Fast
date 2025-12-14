"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';

interface KanaMatchingQuizProps {
    characters: { kana: string; romaji: string; desc?: string }[];
    onComplete: () => void;
    onScoreUpdate?: (score: number, total: number) => void;
}

interface Connection {
    kana: string;
    romaji: string;
}

interface DragState {
    isDragging: boolean;
    startKana: string | null;
    currentX: number;
    currentY: number;
}

export default function KanaMatchingQuiz({ characters, onComplete, onScoreUpdate }: KanaMatchingQuizProps) {
    const [connections, setConnections] = useState<Connection[]>([]);
    const [isComplete, setIsComplete] = useState(false);
    const [dragState, setDragState] = useState<DragState>({
        isDragging: false,
        startKana: null,
        currentX: 0,
        currentY: 0
    });
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Shuffle romaji options
    const [shuffledRomaji] = useState(() =>
        [...characters].sort(() => Math.random() - 0.5)
    );

    // Draw lines between matched pairs and active drag line
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw existing connections
        connections.forEach(({ kana, romaji }) => {
            const kanaEl = document.querySelector(`[data-kana="${kana}"]`);
            const romajiEl = document.querySelector(`[data-romaji="${romaji}"]`);

            if (kanaEl && romajiEl) {
                const kanaRect = kanaEl.getBoundingClientRect();
                const romajiRect = romajiEl.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                const startX = kanaRect.right - containerRect.left;
                const startY = kanaRect.top + kanaRect.height / 2 - containerRect.top;
                const endX = romajiRect.left - containerRect.left;
                const endY = romajiRect.top + romajiRect.height / 2 - containerRect.top;

                // Check if this connection is correct
                const isCorrect = characters.some(
                    char => char.kana === kana && char.romaji === romaji
                );

                ctx.strokeStyle = isCorrect ? '#22c55e' : '#ef4444';
                ctx.lineWidth = 4;
                ctx.lineCap = 'round';

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Draw dots at endpoints
                ctx.fillStyle = isCorrect ? '#22c55e' : '#ef4444';
                ctx.beginPath();
                ctx.arc(startX, startY, 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(endX, endY, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Draw active drag line
        if (dragState.isDragging && dragState.startKana) {
            const kanaEl = document.querySelector(`[data-kana="${dragState.startKana}"]`);
            if (kanaEl) {
                const kanaRect = kanaEl.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                const startX = kanaRect.right - containerRect.left;
                const startY = kanaRect.top + kanaRect.height / 2 - containerRect.top;

                ctx.strokeStyle = '#3b82f6';
                ctx.lineWidth = 3;
                ctx.lineCap = 'round';
                ctx.setLineDash([5, 5]);

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(dragState.currentX, dragState.currentY);
                ctx.stroke();

                ctx.setLineDash([]);

                // Draw starting dot
                ctx.fillStyle = '#3b82f6';
                ctx.beginPath();
                ctx.arc(startX, startY, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }, [connections, characters, dragState]);

    // Enter key support - trigger continue when complete
    useEffect(() => {
        if (!isComplete) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                onComplete();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isComplete, onComplete]);

    const handleMouseDown = (e: React.MouseEvent, kana: string) => {
        // If already connected, remove the connection to start over
        if (isKanaConnected(kana)) {
            const newConnections = connections.filter(c => c.kana !== kana);
            setConnections(newConnections);
            // Don't return, allow dragging to start immediately for correction
        }

        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setDragState({
            isDragging: true,
            startKana: kana,
            currentX: e.clientX - rect.left,
            currentY: e.clientY - rect.top
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragState.isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setDragState(prev => ({
            ...prev,
            currentX: e.clientX - rect.left,
            currentY: e.clientY - rect.top
        }));
    };

    const handleMouseUp = (romaji?: string) => {
        if (dragState.isDragging && dragState.startKana && romaji) {
            // Remove any existing connection for this romaji if we're overwriting it
            const existingKanaForRomaji = connections.find(c => c.romaji === romaji)?.kana;
            let currentConnections = connections;

            if (existingKanaForRomaji) {
                currentConnections = connections.filter(c => c.romaji !== romaji);
            }

            if (!isRomajiConnected(romaji) || existingKanaForRomaji) {
                createConnection(dragState.startKana, romaji, currentConnections);
            }
        }
        setDragState({
            isDragging: false,
            startKana: null,
            currentX: 0,
            currentY: 0
        });
    };

    const createConnection = (kana: string, romaji: string, currentConnections: Connection[] = connections) => {
        const newConnection = { kana, romaji };
        const newConnections = [...currentConnections, newConnection];
        setConnections(newConnections);

        // Check if all are connected
        if (newConnections.length === characters.length) {
            checkCompletion(newConnections);
        }
    };

    const checkCompletion = (conns: Connection[]) => {
        const allCorrect = conns.every(({ kana, romaji }) =>
            characters.some(char => char.kana === kana && char.romaji === romaji)
        );

        if (allCorrect) {
            setIsComplete(true);
            // Report perfect score
            if (onScoreUpdate) {
                onScoreUpdate(characters.length, characters.length);
            }
        }
    };

    const isKanaConnected = (kana: string) => connections.some(c => c.kana === kana);
    const isRomajiConnected = (romaji: string) => connections.some(c => c.romaji === romaji);

    return (
        <div className="max-w-5xl mx-auto w-full flex flex-col min-h-[60vh]">
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">Match the Kana!</h2>
                <p className="text-muted-foreground">
                    Drag from a kana character to its romaji to connect them. Click a connected kana to reset it.
                </p>
            </div>

            {/* Matching Area */}
            <div
                ref={containerRef}
                className="relative flex-1 flex items-center justify-between mb-8 px-36"
                onMouseMove={handleMouseMove}
                onMouseUp={() => handleMouseUp()}
                onMouseLeave={() => handleMouseUp()}
            >
                {/* Canvas for drawing lines */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-none"
                    style={{ zIndex: 1 }}
                />

                {/* Kana Column */}
                <div className="flex flex-col gap-3 z-10">
                    {characters.map((char, index) => {
                        const isConnected = isKanaConnected(char.kana);
                        const isDraggingThis = dragState.isDragging && dragState.startKana === char.kana;
                        const connection = connections.find(c => c.kana === char.kana);
                        const isCorrect = connection && characters.some(
                            c => c.kana === char.kana && c.romaji === connection.romaji
                        );

                        return (
                            <motion.button
                                key={index}
                                data-kana={char.kana}
                                onMouseDown={(e) => handleMouseDown(e, char.kana)}
                                className={`
                                    w-20 h-20 rounded-xl border-2 text-3xl font-serif font-bold
                                    transition-all duration-200 select-none relative z-20
                                    ${isConnected
                                        ? isCorrect
                                            ? 'bg-green-100 dark:bg-green-900/30 border-green-500 hover:scale-105'
                                            : 'bg-red-100 dark:bg-red-900/30 border-red-500 hover:scale-105'
                                        : isDraggingThis
                                            ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 scale-105'
                                            : 'bg-card border-border hover:border-primary hover:scale-105 cursor-grab active:cursor-grabbing'
                                    }
                                `}
                                whileHover={{ scale: 1.05 }}
                            >
                                {char.kana}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Romaji Column */}
                <div className="flex flex-col gap-3 z-10">
                    {shuffledRomaji.map((char, index) => {
                        const isConnected = isRomajiConnected(char.romaji);
                        const connection = connections.find(c => c.romaji === char.romaji);
                        const isCorrect = connection && characters.some(
                            c => c.kana === connection.kana && c.romaji === char.romaji
                        );

                        return (
                            <motion.button
                                key={index}
                                data-romaji={char.romaji}
                                onMouseUp={() => handleMouseUp(char.romaji)}
                                className={`
                                    w-24 h-20 rounded-xl border-2 text-xl font-mono font-bold
                                    transition-all duration-200 select-none
                                    ${isConnected
                                        ? isCorrect
                                            ? 'bg-green-100 dark:bg-green-900/30 border-green-500'
                                            : 'bg-red-100 dark:bg-red-900/30 border-red-500'
                                        : dragState.isDragging
                                            ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-300 hover:border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/20'
                                            : 'bg-card border-border hover:border-primary hover:scale-105'
                                    }
                                `}
                                whileHover={!isConnected && dragState.isDragging ? { scale: 1.1 } : {}}
                            >
                                {char.romaji}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center h-16">

                <AnimatePresence>
                    {isComplete && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={onComplete}
                            className="px-8 py-4 bg-green-500 text-white rounded-full font-bold shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
                        >
                            <Check className="w-5 h-5" />
                            Perfect! Continue
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {!isComplete && connections.length === characters.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-red-500 font-medium"
                    >
                        <X className="w-5 h-5" />
                        Some matches are incorrect. Try again!
                    </motion.div>
                )}
            </div>

            {/* Progress Indicator */}
            <div className="mt-4 text-center text-sm text-muted-foreground">
                {connections.length} / {characters.length} matched
            </div>

            {/* Enter key hint */}
            {isComplete && (
                <div className="mt-2 text-center text-sm text-muted-foreground">
                    Press <span className="mx-1 font-bold border border-border px-1 rounded bg-muted/50">Enter</span> to continue
                </div>
            )}
        </div>
    );
}
