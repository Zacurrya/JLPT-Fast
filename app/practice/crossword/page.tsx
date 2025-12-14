"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { BackButton } from "../components/BackButton";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { PUZZLES } from "./puzzleData";
import { CrosswordCell, CrosswordClue } from "./types";
import { generateGrid, CANVAS_SIZE } from "./logic";
import { CrosswordBoard } from "./components/CrosswordBoard";

export default function BambooCrosswordPage() {
    const router = useRouter();
    const { width, height } = useWindowSize();
    const [currentPuzzle, setCurrentPuzzle] = useState<CrosswordClue[]>([]);
    const [grid, setGrid] = useState<CrosswordCell[][]>([]);
    const [selectedCell, setSelectedCell] = useState<{ r: number, c: number } | null>(null);
    const [direction, setDirection] = useState<'across' | 'down'>('across');
    const [isWon, setIsWon] = useState(false);

    // Initialize Random Puzzle
    useEffect(() => {
        // Pick a random puzzle
        const randomPuzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
        setCurrentPuzzle(randomPuzzle);
        setGrid(generateGrid(randomPuzzle));
    }, []);

    // Check Win Condition
    useEffect(() => {
        if (grid.length === 0) return;

        const allCorrect = grid.every(row =>
            row.every(cell =>
                !cell.isActive || (cell.input === cell.char)
            )
        );

        if (allCorrect) {
            setIsWon(true);
        }
    }, [grid]);

    const handleCellClick = (r: number, c: number) => {
        if (grid[r][c].isActive) {
            if (selectedCell?.r === r && selectedCell?.c === c) {
                // Toggle direction if clicked again
                setDirection(prev => prev === 'across' ? 'down' : 'across');
            } else {
                setSelectedCell({ r, c });

                // Smart direction switching:
                // If this cell is the start of a word, switch to that word's direction.
                const startsAcross = currentPuzzle.some(clue => clue.row === r && clue.col === c && clue.direction === 'across');
                const startsDown = currentPuzzle.some(clue => clue.row === r && clue.col === c && clue.direction === 'down');

                if (startsAcross && !startsDown) {
                    setDirection('across');
                } else if (startsDown && !startsAcross) {
                    setDirection('down');
                }
            }
        }
    };

    const handleBoxComplete = (r: number, c: number, char: string) => {
        const newGrid = [...grid];
        newGrid[r][c].input = char;
        setGrid(newGrid);

        // Move to next cell
        if (direction === 'across') {
            // Find next cell in this row that is part of a word
            if (c + 1 < CANVAS_SIZE && grid[r][c + 1].isActive) {
                setSelectedCell({ r, c: c + 1 });
            }
        } else {
            if (r + 1 < CANVAS_SIZE && grid[r + 1][c].isActive) {
                setSelectedCell({ r: r + 1, c });
            }
        }
    };

    const handleBoxBackspace = () => {
        if (!selectedCell) return;
        const { r, c } = selectedCell;

        if (direction === 'across') {
            if (c - 1 >= 0 && grid[r][c - 1].isActive) {
                setSelectedCell({ r, c: c - 1 });
                setGrid(prev => {
                    const g = prev.map(row => [...row]);
                    g[r][c - 1].input = "";
                    return g;
                });
            }
        } else {
            if (r - 1 >= 0 && grid[r - 1][c].isActive) {
                setSelectedCell({ r: r - 1, c });
                setGrid(prev => {
                    const g = prev.map(row => [...row]);
                    g[r - 1][c].input = "";
                    return g;
                });
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, r: number, c: number) => {
        if (!selectedCell) return;

        if (e.key === 'ArrowRight') {
            if (c + 1 < CANVAS_SIZE && grid[r][c + 1].isActive) setSelectedCell({ r, c: c + 1 });
        } else if (e.key === 'ArrowLeft') {
            if (c - 1 >= 0 && grid[r][c - 1].isActive) setSelectedCell({ r, c: c - 1 });
        } else if (e.key === 'ArrowDown') {
            if (r + 1 < CANVAS_SIZE && grid[r + 1][c].isActive) setSelectedCell({ r: r + 1, c });
        } else if (e.key === 'ArrowUp') {
            if (r - 1 >= 0 && grid[r - 1][c].isActive) setSelectedCell({ r: r - 1, c });
        }
    };

    const loadNewPuzzle = () => {
        setIsWon(false);
        setSelectedCell(null);
        // Pick new random puzzle (try to avoid same as current if possible, but random is fine for now)
        const randomPuzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
        setCurrentPuzzle(randomPuzzle);
        setGrid(generateGrid(randomPuzzle));
    };

    return (
        <div className="min-h-screen bg-[#f7f5f0] text-stone-900 pt-20 pb-12 font-serif relative overflow-hidden selection:bg-amber-200">
            {/* Study Room Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper-2.png")',
                }}
            />

            {/* Decorative Room Elements */}
            <div className="absolute left-0 right-0 top-0 h-2 bg-[#3d2b1f] z-20 shadow-md"></div>
            <div className="absolute left-0 right-0 bottom-0 h-4 bg-[#3d2b1f] z-20 border-t border-[#6b4e3d]"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <BackButton onClick={() => router.push('/practice')} />
                        <h1 className="text-4xl font-black tracking-tighter text-stone-900 flex items-center gap-3">
                            <span className="text-xl bg-amber-900 text-amber-50 px-3 py-1 rounded shadow-sm border border-amber-800">字</span>
                            KANA CROSSWORD
                        </h1>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[1fr_350px] gap-8">
                    {/* Crossword Grid Component */}
                    <div className="flex justify-center items-start">
                        <CrosswordBoard
                            grid={grid}
                            selectedCell={selectedCell}
                            isWon={isWon}
                            onCellClick={handleCellClick}
                            onBoxComplete={handleBoxComplete}
                            onBoxBackspace={handleBoxBackspace}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    {/* Clues Panel */}
                    <div className="space-y-6">
                        <div className="bg-[#fffefe] p-6 rounded-xl shadow-md border-2 border-stone-200 h-full relative overflow-hidden">
                            {/* Paper Texture Overlay */}
                            <div className="absolute inset-0 opacity-50 pointer-events-none mix-blend-multiply"
                                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper-2.png")' }}
                            />

                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-stone-800 relative z-10">
                                <Info className="text-amber-700" size={20} />
                                Clues
                            </h2>

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <h3 className="font-bold text-amber-900 mb-2 border-b-2 border-amber-300 pb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                                        Across
                                    </h3>
                                    <ul className="space-y-2">
                                        {currentPuzzle.filter(c => c.direction === "across").map(clue => {
                                            const isActive = selectedCell && grid[selectedCell.r][selectedCell.c].clueNum === clue.id && direction === 'across';
                                            return (
                                                <li
                                                    key={clue.id}
                                                    className={`flex gap-2 text-sm cursor-pointer transition-all p-2 rounded-lg border-l-4 ${isActive
                                                        ? 'bg-amber-50 border-amber-600 shadow-sm'
                                                        : 'border-transparent hover:bg-stone-50 hover:border-stone-300'
                                                        }`}
                                                    onClick={() => {
                                                        setSelectedCell({ r: clue.row, c: clue.col });
                                                        setDirection('across');
                                                    }}
                                                >
                                                    <span className="font-bold text-amber-700 font-mono">{clue.id}.</span>
                                                    <span className="text-stone-700">{clue.text}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-amber-900 mb-2 border-b-2 border-amber-300 pb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                                        Down
                                    </h3>
                                    <ul className="space-y-2">
                                        {currentPuzzle.filter(c => c.direction === "down").map(clue => {
                                            const isActive = selectedCell && grid[selectedCell.r][selectedCell.c].clueNum === clue.id && direction === 'down';
                                            return (
                                                <li
                                                    key={clue.id}
                                                    className={`flex gap-2 text-sm cursor-pointer transition-all p-2 rounded-lg border-l-4 ${isActive
                                                        ? 'bg-amber-50 border-amber-600 shadow-sm'
                                                        : 'border-transparent hover:bg-stone-50 hover:border-stone-300'
                                                        }`}
                                                    onClick={() => {
                                                        setSelectedCell({ r: clue.row, c: clue.col });
                                                        setDirection('down');
                                                    }}
                                                >
                                                    <span className="font-bold text-amber-700 font-mono">{clue.id}.</span>
                                                    <span className="text-stone-700">{clue.text}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Celebration Modal */}
            {isWon && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <Confetti
                        width={width}
                        height={height}
                        recycle={false}
                        numberOfPieces={500}
                        colors={['#d97706', '#b45309', '#fcd34d', '#78350f']}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-[#fffefe] rounded-sm p-8 max-w-md w-full text-center shadow-2xl border-4 border-amber-800 relative z-10"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper-2.png")' }}
                    >
                        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-700 border-2 border-amber-200">
                            <CheckCircle size={48} />
                        </div>
                        <h2 className="text-3xl font-black text-stone-900 mb-2">Wonderful!</h2>
                        <p className="text-stone-600 mb-8 font-medium">You've mastered this puzzle.</p>

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => router.push('/practice')}
                                className="px-6 py-3 rounded bg-amber-100 text-amber-900 font-bold hover:bg-amber-200 transition-colors border-b-2 border-amber-300 active:border-b-0 active:translate-y-[2px]"
                            >
                                Practice Hub
                            </button>
                            <button
                                onClick={loadNewPuzzle}
                                className="px-6 py-3 rounded bg-amber-700 text-white font-bold hover:bg-amber-800 transition-colors flex items-center gap-2 border-b-4 border-amber-900 active:border-b-0 active:translate-y-[2px]"
                            >
                                <RefreshCw size={20} />
                                Play Again
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
