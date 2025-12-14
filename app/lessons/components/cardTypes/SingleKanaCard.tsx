"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import { useEnterSubmit } from '../../../../hooks/useEnterSubmit';

interface SingleKanaCardProps {
    kana: string;
    romaji: string;
    desc?: string;
    mode: 'learn' | 'quiz';
    onNext: () => void;
    currentIndex?: number;
    total?: number;
}

export default function SingleKanaCard({ kana, romaji, desc, mode, onNext, currentIndex, total }: SingleKanaCardProps) {
    const [inputValue, setInputValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [isError, setIsError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Reset state when kana/romaji changes (prevents auto-completion bug)
    useEffect(() => {
        setInputValue('');
        setIsCorrect(false);
        setIsError(false);
    }, [kana, romaji]);

    // Auto-focus input in quiz mode
    useEffect(() => {
        if (mode === 'quiz' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [mode, kana]); // Added kana to refocus when character changes

    const handleSubmit = () => {
        if (mode === 'learn') {
            onNext();
            return;
        }

        if (isCorrect) {
            onNext();
            return;
        }

        // Check answer (case-insensitive)
        const normalizedInput = inputValue.trim().toLowerCase();
        const normalizedRomaji = romaji.toLowerCase();

        if (normalizedInput === normalizedRomaji) {
            setIsCorrect(true);
            setIsError(false);
        } else {
            setIsError(true);
            // Auto-clear error after animation
            setTimeout(() => setIsError(false), 600);
        }
    };

    useEnterSubmit(() => {
        handleSubmit();
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsError(false);
    };

    const progress = currentIndex !== undefined && total !== undefined ? ((currentIndex) / total) * 100 : 0;

    if (mode === 'learn') {
        return (
            <div className="max-w-2xl mx-auto w-full flex flex-col min-h-[60vh]">
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

                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-card border-2 border-primary/20 p-12 rounded-2xl shadow-2xl mb-8"
                    >
                        <div className="mb-4">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">New Character</span>
                        </div>
                        <span className="text-9xl font-serif font-bold text-foreground block mb-6">
                            {kana}
                        </span>
                        <span className="text-4xl font-mono text-primary font-bold block mb-2">
                            {romaji}
                        </span>
                        {desc && (
                            <span className="text-sm text-muted-foreground block mt-4">
                                {desc}
                            </span>
                        )}
                    </motion.div>

                    <button
                        onClick={handleSubmit}
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center group"
                    >
                        Got it!
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="mt-6 text-sm text-muted-foreground">
                        Press <span className="font-bold border border-border px-2 py-1 rounded bg-muted/50">Enter</span> to continue
                    </div>
                </div>
            </div>
        );
    }

    // Quiz mode
    return (
        <div className="max-w-2xl mx-auto w-full flex flex-col min-h-[60vh]">
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

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center text-center"
            >
                <h3 className="text-xl font-medium text-muted-foreground mb-6">
                    What is the romaji for this character?
                </h3>

                {/* Kana Display */}
                <div className="bg-muted/30 rounded-xl p-12 mb-8 border border-border/50">
                    <span className="text-8xl font-serif font-bold text-foreground">
                        {kana}
                    </span>
                </div>

                {/* Input */}
                <div className="relative w-full max-w-md mb-6">
                    <motion.div
                        animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className={`w-full p-4 text-center text-2xl font-mono font-bold bg-background border-2 rounded-xl outline-none transition-all ${isCorrect
                                ? 'border-green-500 text-green-600 bg-green-50 dark:bg-green-900/20'
                                : isError
                                    ? 'border-red-500 text-red-600 bg-red-50 dark:bg-red-900/20'
                                    : 'border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10'
                                }`}
                            placeholder="Type romaji..."
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect="off"
                            readOnly={isCorrect}
                        />
                    </motion.div>

                    <AnimatePresence>
                        {isCorrect && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                            >
                                <Check size={28} strokeWidth={3} />
                            </motion.div>
                        )}
                        {isError && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
                            >
                                <X size={28} strokeWidth={3} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hint */}
                {desc && !isCorrect && (
                    <div className="text-sm text-muted-foreground mb-6">
                        Hint: {desc}
                    </div>
                )}

                {/* Action Button */}
                <div className="w-full flex justify-center">
                    {isCorrect ? (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={handleSubmit}
                            className="px-8 py-4 bg-green-500 text-white rounded-full font-bold shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
                        >
                            <Check className="w-5 h-5" />
                            Correct! Continue
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            Check Answer
                        </button>
                    )}
                </div>

                <div className="mt-6 text-sm text-muted-foreground">
                    Press <span className="font-bold border border-border px-2 py-1 rounded bg-muted/50">Enter</span> to {isCorrect ? 'continue' : 'submit'}
                </div>
            </motion.div>
        </div>
    );
}
