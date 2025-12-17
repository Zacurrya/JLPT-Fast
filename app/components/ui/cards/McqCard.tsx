"use client";

import { motion } from "framer-motion";
import { toRomaji } from "wanakana";
// Hooks live at project root /hooks; use relative path since @hooks alias targets app/hooks
import { useRomajiTranslation } from "@hooks/useRomajiTranslation";
import { useMcqNavigation } from "../../../../hooks/useMcqNavigation";

export interface McqOption {
    id: string;
    text: string;
}

export interface McqCardProps {
    question: React.ReactNode;
    options: string[]; // Keeping as string[] for simplicity based on existing data
    correctAnswer: string;
    selectedOption: string | null;
    isAnswerChecked: boolean;
    onOptionSelect: (option: string) => void;
    onCheckAnswer: () => void;
    onNext: () => void;

    // Styling Props
    className?: string;
    cardClassName?: string;
    questionClassName?: string;
    optionClassName?: string;
    buttonClassName?: string;

    // Labels
    checkButtonLabel?: string;
    nextButtonLabel?: string;

    // Layout
    currentIndex?: number;
    total?: number;

    // Config
    showRomaji?: boolean;
}

export default function McqCard({
    question,
    options,
    correctAnswer,
    selectedOption,
    isAnswerChecked,
    onOptionSelect,
    onCheckAnswer,
    onNext,
    className = "max-w-2xl mx-auto w-full",
    cardClassName = "bg-card border border-border rounded-2xl p-5 md:p-12 shadow-xl",
    questionClassName = "text-2xl md:text-3xl font-serif font-bold mb-8 text-center",
    optionClassName = "w-full p-4 rounded-xl border-2 text-left font-medium transition-all duration-200",
    buttonClassName = "px-6 py-3 md:px-8 bg-primary text-primary-foreground rounded-full font-bold shadow-lg transition-all",
    checkButtonLabel = "Check Answer",
    nextButtonLabel = "Next",
    currentIndex,
    total,
    showRomaji = false
}: McqCardProps) {
    const { renderRomaji } = useRomajiTranslation();

    // Helper to render text with consistent Romaji styling
    const renderWithRomaji = (text: React.ReactNode) => {
        if (!showRomaji || typeof text !== 'string') return text;

        const romaji = toRomaji(text);
        if (romaji === text) return text; // No change (already english/romaji)

        // Use the hook to render separated/segmented view
        return renderRomaji(text, romaji, true);
        // Using inline=true for options/titles so they align nicely inside buttons/headers
        // Actually, for Headers centered is better? If I use inline=true it uses inline-flex.
        // Let's use simple inline=true, it renders spans.
    };
    // Enable keyboard navigation
    useMcqNavigation({
        options,
        selectedOption,
        onOptionSelect: (opt) => !isAnswerChecked && onOptionSelect(opt),
        onConfirm: () => {
            if (isAnswerChecked) {
                onNext();
            } else if (selectedOption) {
                onCheckAnswer();
            }
        },
        isEnabled: !!question
    });

    if (!question) {
        return (
            <div className="text-center">
                <p className="text-xl mb-4">No question available.</p>
                <button onClick={onNext} className="px-6 py-2 bg-primary text-white rounded">
                    Skip
                </button>
            </div>
        );
    }

    return (
        <div className={className}>
            {currentIndex !== undefined && total !== undefined && (
                <div className="mb-8 flex justify-between items-center text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    <span>Quiz</span>
                    <span>{currentIndex + 1} / {total}</span>
                </div>
            )}

            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={cardClassName}
            >
                <h3 className={questionClassName}>
                    {question}
                </h3>

                <div className="grid gap-3">
                    {options.map((opt, idx) => {
                        let stateStyle = "border-border hover:border-primary/50 hover:bg-muted/30";

                        // Default base style
                        if (isAnswerChecked) {
                            if (opt === correctAnswer) {
                                stateStyle = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-300";
                            } else if (opt === selectedOption) {
                                stateStyle = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-300";
                            } else {
                                stateStyle = "border-border opacity-50";
                            }
                        } else if (opt === selectedOption) {
                            stateStyle = "border-primary bg-primary/5 text-primary";
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => onOptionSelect(opt)}
                                disabled={isAnswerChecked}
                                className={`${optionClassName} ${stateStyle}`}
                            >
                                {renderWithRomaji(opt)}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-8 flex justify-end">
                    {!isAnswerChecked ? (
                        <button
                            onClick={onCheckAnswer}
                            disabled={!selectedOption}
                            className={`${buttonClassName} disabled:opacity-50 disabled:shadow-none`}
                        >
                            {checkButtonLabel}
                        </button>
                    ) : (
                        <button
                            onClick={onNext}
                            className={`${buttonClassName} animate-pulse`}
                        >
                            {nextButtonLabel}
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
