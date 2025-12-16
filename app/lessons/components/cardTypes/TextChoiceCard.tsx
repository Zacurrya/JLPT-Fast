"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { useTypingEffect } from '../../../../hooks/useTypingEffect';
import { HintTooltip } from '../../../components/ui/HintTooltip';

interface ConversationMessage {
    speaker: string;
    text: string;
    isUser?: boolean; // If true, this is the user's response (the answer placeholder)
    hint?: string; // Optional hint/translation shown on hover
    showHintIcon?: boolean; // If true, shows an info icon for unlearned/optional phrases
}

interface TextChoiceCardProps {
    speakerName: string;
    speakerReading?: string; // Optional reading in kana
    conversation: ConversationMessage[];
    instruction: string;
    choices: {
        text: string;
        isCorrect: boolean;
    }[];
    currentIndex: number;
    total: number;
    onNext: () => void;
    onScoreUpdate?: (score: number, total: number) => void;
    scorable?: boolean;
}

// Message bubble component with typing effect
function MessageBubble({
    message,
    messageIndex,
    selectedChoiceText
}: {
    message: ConversationMessage;
    messageIndex: number;
    selectedChoiceText: string | null;
}) {
    // Determine what text to display
    const textToDisplay = message.isUser && selectedChoiceText
        ? selectedChoiceText
        : message.text;

    // Use typing effect for non-user messages on load, and user messages when choice is selected
    const shouldAnimate = !message.isUser || selectedChoiceText !== null;

    const { displayedText } = useTypingEffect({
        text: textToDisplay,
        speed: 100, // 100ms per character (slower)
        startDelay: messageIndex * 300, // Stagger messages
        enabled: shouldAnimate
    });

    return (
        <motion.div
            initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: messageIndex * 0.1 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`relative max-w-[80%] px-5 py-3 rounded-2xl ${message.isUser
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-red-500 text-white rounded-bl-md'
                    }`}
            >
                <p className="text-lg font-medium">
                    {displayedText || <span className="opacity-50">. . .</span>}
                </p>

                {/* Hint tooltip */}
                {message.hint && message.showHintIcon && (
                    <div className="absolute -right-2 -top-2">
                        <HintTooltip hint={message.hint} position="right" size="sm" />
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function TextChoiceCard({
    speakerName,
    speakerReading,
    conversation,
    instruction,
    choices,
    currentIndex,
    total,
    onNext,
    onScoreUpdate,
    scorable = false
}: TextChoiceCardProps) {
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    // Reset state when card changes
    useEffect(() => {
        setSelectedChoice(null);
        setIsAnswerChecked(false);
    }, [conversation, choices]);

    const handleChoiceSelect = (index: number) => {
        if (isAnswerChecked) return;
        setSelectedChoice(index);
    };

    const handleSubmit = () => {
        if (selectedChoice === null) return;

        if (!isAnswerChecked) {
            setIsAnswerChecked(true);

            if (scorable && onScoreUpdate) {
                const isCorrect = choices[selectedChoice].isCorrect;
                onScoreUpdate(isCorrect ? 1 : 0, 1);
            }
        } else {
            onNext();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
            } else if (!isAnswerChecked) {
                // Number keys 1-4 for quick selection
                const num = parseInt(e.key);
                if (num >= 1 && num <= choices.length) {
                    setSelectedChoice(num - 1);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedChoice, isAnswerChecked, choices.length]);

    const progress = ((currentIndex) / total) * 100;

    return (
        <div className="max-w-2xl mx-auto w-full flex flex-col min-h-[60vh]">
            {/* Progress */}
            <div className="mb-6">
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

            {/* Conversation Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Speaker Header */}
                <div className="bg-red-500 text-white px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <User className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">
                            {speakerName}
                            {speakerReading && (
                                <span className="ml-2 text-white/80 font-normal">
                                    ({speakerReading})
                                </span>
                            )}
                        </h3>
                    </div>
                </div>

                {/* Conversation Messages */}
                <div className="p-6 space-y-4 flex-1">
                    {conversation.map((message, idx) => (
                        <MessageBubble
                            key={idx}
                            message={message}
                            messageIndex={idx}
                            selectedChoiceText={selectedChoice !== null ? choices[selectedChoice].text : null}
                        />
                    ))}
                </div>

                {/* Instruction Divider */}
                <div className="px-6 py-3 border-t border-border">
                    <p className="text-center text-muted-foreground font-medium">
                        {instruction}
                    </p>
                </div>

                {/* Choice Options */}
                <div className="p-6 space-y-6">
                    {choices.map((choice, idx) => {
                        const isSelected = selectedChoice === idx;
                        const isCorrectAnswer = choice.isCorrect;

                        let className = 'border-blue-400/50 bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-100/70 dark:hover:bg-blue-900/30';

                        if (isAnswerChecked) {
                            if (isCorrectAnswer) {
                                className = 'border-green-500 bg-green-100 dark:bg-green-900/40';
                            } else if (isSelected && !isCorrectAnswer) {
                                className = 'border-red-500 bg-red-100 dark:bg-red-900/40';
                            } else {
                                className = 'border-border/50 bg-muted/30 opacity-60';
                            }
                        } else if (isSelected) {
                            className = 'border-blue-500 bg-blue-100 dark:bg-blue-900/40 ring-2 ring-blue-500/30';
                        }

                        return (
                            <motion.button
                                key={idx}
                                onClick={() => handleChoiceSelect(idx)}
                                disabled={isAnswerChecked}
                                whileHover={!isAnswerChecked ? { scale: 1.01 } : {}}
                                whileTap={!isAnswerChecked ? { scale: 0.99 } : {}}
                                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${className} ${!isAnswerChecked ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <span className="text-lg font-medium text-foreground">
                                    {choice.text}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>

            {/* Instructions / Submit Button */}
            <div className="mt-6 flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                    {!isAnswerChecked ? (
                        <>
                            Press <span className="font-bold border border-border px-1 rounded bg-muted/50">1-{choices.length}</span> to select,{' '}
                            <span className="font-bold border border-border px-1 rounded bg-muted/50">Enter</span> to submit
                        </>
                    ) : (
                        <>
                            Press <span className="font-bold border border-border px-1 rounded bg-muted/50">Enter</span> to continue
                        </>
                    )}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={selectedChoice === null}
                    className={`px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center group ${selectedChoice === null
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : isAnswerChecked
                            ? 'bg-primary text-primary-foreground hover:shadow-xl hover:-translate-y-1'
                            : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1'
                        }`}
                >
                    {isAnswerChecked ? 'Continue' : 'Check Answer'}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
