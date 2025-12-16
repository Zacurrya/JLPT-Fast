"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X, RotateCcw, Eye } from 'lucide-react';

interface SentenceBuilderProps {
    englishPrompt: string;
    correctSentence: string[]; // Array of words/particles in correct order
    currentIndex?: number;
    total?: number;
    onNext: () => void;
    onScoreUpdate?: (score: number, total: number) => void;
    scorable?: boolean;
}

export default function SentenceBuilder({
    englishPrompt,
    correctSentence,
    currentIndex,
    total,
    onNext,
    onScoreUpdate,
    scorable = false
}: SentenceBuilderProps) {
    const [shuffledBlocks, setShuffledBlocks] = useState<string[]>([]);
    const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showedAnswer, setShowedAnswer] = useState(false);

    // Shuffle blocks on mount and when correctSentence changes
    useEffect(() => {
        const shuffled = [...correctSentence].sort(() => Math.random() - 0.5);
        setShuffledBlocks(shuffled);
        // Reset state when switching to a new sentence builder
        setSelectedBlocks([]);
        setIsChecked(false);
        setIsCorrect(false);
        setShowedAnswer(false);
    }, [correctSentence, englishPrompt]); // Reset when prompt changes

    // Add Enter key support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if ((isChecked && isCorrect) || showedAnswer) {
                    onNext();
                } else if (selectedBlocks.length === correctSentence.length && !isChecked) {
                    handleCheck();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isChecked, isCorrect, selectedBlocks, correctSentence.length, showedAnswer]);

    const handleBlockClick = (block: string, index: number) => {
        if (isChecked || showedAnswer) return;

        // Add to selected blocks
        setSelectedBlocks([...selectedBlocks, block]);

        // Remove from shuffled blocks
        const newShuffled = [...shuffledBlocks];
        newShuffled.splice(index, 1);
        setShuffledBlocks(newShuffled);
    };

    const handleRemoveBlock = (index: number) => {
        if (isChecked || showedAnswer) return;

        const block = selectedBlocks[index];

        // Remove from selected
        const newSelected = [...selectedBlocks];
        newSelected.splice(index, 1);
        setSelectedBlocks(newSelected);

        // Add back to shuffled
        setShuffledBlocks([...shuffledBlocks, block]);
    };

    const handleCheck = () => {
        const correct = selectedBlocks.length === correctSentence.length &&
            selectedBlocks.every((block, idx) => block === correctSentence[idx]);

        setIsCorrect(correct);
        setIsChecked(true);

        if (scorable && onScoreUpdate) {
            onScoreUpdate(correct ? 1 : 0, 1);
        }
    };

    const handleReset = () => {
        if (showedAnswer) return; // Can't reset after seeing answer
        setSelectedBlocks([]);
        setShuffledBlocks([...correctSentence].sort(() => Math.random() - 0.5));
        setIsChecked(false);
        setIsCorrect(false);
    };

    const handleSeeAnswer = () => {
        setSelectedBlocks([...correctSentence]);
        setShuffledBlocks([]);
        setShowedAnswer(true);
        setIsChecked(true);
        setIsCorrect(false); // Mark as incorrect since they didn't solve it

        // Report 0 score since they gave up
        if (scorable && onScoreUpdate) {
            onScoreUpdate(0, 1);
        }
    };

    const progress = currentIndex !== undefined && total !== undefined ? ((currentIndex) / total) * 100 : 0;

    return (
        <div className="max-w-4xl mx-auto w-full flex flex-col min-h-[60vh]">
            {/* Progress */}
            {currentIndex !== undefined && total !== undefined && (
                <div className="mb-8">
                    <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        <span>Lesson Progress</span>
                        <span>{currentIndex + 1} / {total}</span>
                    </div>
                    <div className="h-2 bg-secondary/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Card */}
            <div className="flex-1 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl flex flex-col">
                {/* Decorative top bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-50 rounded-t-2xl" />

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Sentence Builder</span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2 mb-4">
                        Build the Japanese sentence
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        "{englishPrompt}"
                    </p>
                </div>

                {/* Selected blocks area */}
                <div className="mb-8">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                        Your Answer:
                    </p>
                    <div className={`
                        min-h-24 p-4 rounded-xl border-2 transition-colors
                        ${isChecked
                            ? isCorrect
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : 'border-dashed border-border bg-muted/30'
                        }
                    `}>
                        <div className="flex flex-wrap gap-2 min-h-16 items-center justify-center">
                            {selectedBlocks.length === 0 ? (
                                <p className="text-muted-foreground text-sm">
                                    Click blocks below to build your sentence
                                </p>
                            ) : (
                                selectedBlocks.map((block, idx) => (
                                    <motion.button
                                        key={`selected-${idx}`}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        onClick={() => handleRemoveBlock(idx)}
                                        disabled={isChecked}
                                        className={`
                                            px-4 py-3 rounded-lg font-bold text-lg
                                            transition-all
                                            ${isChecked
                                                ? 'cursor-default'
                                                : 'hover:scale-105 cursor-pointer hover:shadow-md'
                                            }
                                            ${isChecked && isCorrect
                                                ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                                                : isChecked && !isCorrect
                                                    ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                                                    : 'bg-primary/10 text-primary border-2 border-primary/30'
                                            }
                                        `}
                                    >
                                        {block}
                                    </motion.button>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Available blocks */}
                <div className="mb-8">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                        Available Blocks:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {shuffledBlocks.map((block, idx) => (
                            <motion.button
                                key={`shuffled-${idx}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleBlockClick(block, idx)}
                                disabled={isChecked}
                                className={`
                                    px-6 py-4 rounded-lg font-bold text-xl
                                    bg-card border-2 border-border
                                    shadow-md transition-all
                                    ${isChecked
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:border-primary hover:shadow-lg cursor-pointer'
                                    }
                                `}
                            >
                                {block}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Feedback message */}
                <AnimatePresence>
                    {isChecked && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`text-center mb-6 flex items-center justify-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-600'
                                }`}
                        >
                            {isCorrect ? (
                                <>
                                    <Check className="w-6 h-6" />
                                    <span className="font-bold text-lg">Perfect! That's correct!</span>
                                </>
                            ) : (
                                <>
                                    <X className="w-6 h-6" />
                                    <span className="font-bold text-lg">Not quite right. Try again!</span>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex gap-4 justify-center flex-wrap">
                    {!isChecked && !showedAnswer ? (
                        <>
                            <button
                                onClick={handleCheck}
                                disabled={selectedBlocks.length !== correctSentence.length}
                                className={`
                                    px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center gap-2
                                    ${selectedBlocks.length === correctSentence.length
                                        ? 'bg-primary text-primary-foreground hover:shadow-xl hover:-translate-y-1'
                                        : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                                    }
                                `}
                            >
                                Check Answer
                            </button>
                            <button
                                onClick={handleSeeAnswer}
                                className="px-6 py-4 rounded-full border-2 border-muted-foreground/30 text-muted-foreground font-bold hover:bg-muted/50 transition-all flex items-center gap-2"
                            >
                                <Eye className="w-5 h-5" />
                                See Answer
                            </button>
                        </>
                    ) : showedAnswer ? (
                        <button
                            onClick={onNext}
                            className="px-8 py-4 rounded-full bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                        >
                            Continue
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    ) : (
                        <>
                            {!isCorrect && (
                                <>
                                    <button
                                        onClick={handleReset}
                                        className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all flex items-center gap-2"
                                    >
                                        <RotateCcw className="w-5 h-5" />
                                        Try Again
                                    </button>
                                    <button
                                        onClick={handleSeeAnswer}
                                        className="px-6 py-4 rounded-full border-2 border-muted-foreground/30 text-muted-foreground font-bold hover:bg-muted/50 transition-all flex items-center gap-2"
                                    >
                                        <Eye className="w-5 h-5" />
                                        See Answer
                                    </button>
                                </>
                            )}
                            {isCorrect && (
                                <button
                                    onClick={onNext}
                                    className="px-8 py-4 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                                >
                                    <Check className="w-5 h-5" />
                                    Continue
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            )}
                        </>
                    )}
                </div>

                {/* Keyboard hint */}
                {!isChecked && !showedAnswer && selectedBlocks.length === correctSentence.length && (
                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        Press <span className="mx-1 font-bold border border-border px-2 py-1 rounded bg-muted/50">Enter</span> to check
                    </div>
                )}
                {(isChecked && isCorrect) || showedAnswer ? (
                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        Press <span className="mx-1 font-bold border border-border px-2 py-1 rounded bg-muted/50">Enter</span> to continue
                    </div>
                ) : null}
            </div>
        </div>
    );
}
