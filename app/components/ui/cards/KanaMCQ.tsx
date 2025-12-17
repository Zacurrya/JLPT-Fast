"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEnterSubmit } from '../../../../hooks/useEnterSubmit';
import { KanaChar } from './KanaChar';

interface KanaMCQProps {
    characters: { kana: string; romaji: string; desc?: string }[];
    currentIndex: number;
    total: number;
    onNext: () => void;
    onScoreUpdate?: (score: number, total: number) => void;
}

interface QuizItem {
    kana: string;
    romaji: string;
    options: string[];
}

export default function KanaMCQ({ characters, currentIndex, total, onNext, onScoreUpdate }: KanaMCQProps) {
    const [quizItems, setQuizItems] = useState<QuizItem[]>([]);
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Generate quiz items
        const items: QuizItem[] = characters.map(char => {
            const otherRomaji = characters
                .filter(c => c.romaji !== char.romaji)
                .map(c => c.romaji);

            const wrongOptions = otherRomaji
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);

            const options = [char.romaji, ...wrongOptions]
                .sort(() => Math.random() - 0.5);

            return {
                kana: char.kana,
                romaji: char.romaji,
                options
            };
        });

        setQuizItems(items.sort(() => Math.random() - 0.5));
    }, [characters]);

    const handleAnswer = (index: number) => {
        if (isCorrect !== null) return;

        setSelectedOption(index);
        const answer = quizItems[currentQuizIndex].options[index];
        const correct = answer === quizItems[currentQuizIndex].romaji;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuizIndex < quizItems.length - 1) {
            setCurrentQuizIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsCorrect(null);
        } else {
            // Report final score before completing
            if (onScoreUpdate) {
                onScoreUpdate(score, quizItems.length);
            }
            onNext();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isCorrect !== null) {
                if (e.key === 'Enter') {
                    handleNext();
                }
                return;
            }

            // Arrow keys to select option
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                setSelectedOption(prev => prev === null ? 0 : Math.max(0, prev - 1));
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                setSelectedOption(prev => prev === null ? 0 : Math.min(3, (prev ?? -1) + 1));
            } else if (e.key === 'Enter' && selectedOption !== null) {
                e.preventDefault();
                handleAnswer(selectedOption);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedOption, isCorrect, currentQuizIndex, quizItems.length]);

    if (quizItems.length === 0) return null;

    const currentItem = quizItems[currentQuizIndex];
    const progress = ((currentIndex) / total) * 100;

    return (
        <div className="max-w-2xl mx-auto w-full flex flex-col min-h-[60vh]">
            {/* Card */}
            <div className="flex-1 flex flex-col">
                <motion.div
                    key={currentQuizIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
                >
                    {/* Decorative background element */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />

                    {/* Quiz indicator */}
                    <div className="mb-6 flex items-center gap-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Kana Quiz</span>
                        <span className="text-xs text-muted-foreground">
                            {currentQuizIndex + 1} / {quizItems.length}
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-foreground">
                        What is the romaji for this character?
                    </h2>

                    {/* Kana Display */}
                    <div className="bg-muted/30 rounded-xl p-12 mb-8 border border-border/50 flex justify-center">
                        <KanaChar
                            kana={currentItem.kana}
                            showRomaji={false}
                            size="2xl"
                        />
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-6">
                        {currentItem.options.map((option, index) => {
                            const isSelected = selectedOption === index;
                            const isCorrectAnswer = option === currentItem.romaji;
                            const showResult = isCorrect !== null;

                            let className = 'bg-muted/30 hover:bg-muted/50 border-border';

                            if (showResult) {
                                if (isSelected && isCorrect) {
                                    className = 'bg-green-100 dark:bg-green-900/30 border-green-500';
                                } else if (isSelected && !isCorrect) {
                                    className = 'bg-red-100 dark:bg-red-900/30 border-red-500';
                                } else if (isCorrectAnswer) {
                                    className = 'bg-green-50 dark:bg-green-900/20 border-green-300';
                                }
                            } else if (isSelected) {
                                className = 'bg-primary/10 border-primary';
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    disabled={showResult}
                                    className={`
                                        ${className}
                                        border-2 p-6 rounded-xl font-bold text-2xl font-mono
                                        transition-all duration-200
                                        ${!showResult ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}
                                        relative
                                    `}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>

                    {/* Score */}
                    <div className="text-sm text-muted-foreground">
                        Score: {score} / {quizItems.length}
                    </div>
                </motion.div>

                {/* Instructions */}
                {isCorrect === null ? (
                    <div className="mt-8 flex justify-center text-muted-foreground text-sm">
                        Use <span className="mx-1 font-bold border border-border px-1 rounded bg-muted/50">Arrow Keys</span> to select,
                        <span className="mx-1 font-bold border border-border px-1 rounded bg-muted/50">Enter</span> to submit
                    </div>
                ) : (
                    <div className="mt-8 flex justify-center text-muted-foreground text-sm">
                        Press <span className="mx-1 font-bold border border-border px-1 rounded bg-muted/50">Enter</span> to continue
                    </div>
                )}

                {/* Next Button */}
                {isCorrect !== null && (
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={handleNext}
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center group"
                        >
                            {currentQuizIndex < quizItems.length - 1 ? 'Next Character' : 'Continue Lesson'}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
