"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, SkipForward, Check } from "lucide-react";
import { useRomajiInput } from "../../../../hooks/useRomajiInput";
import { useEnterSubmit } from "../../../../hooks/useEnterSubmit";

interface TypingCardProps {
    targetKana: string;
    meaning: string;
    onComplete: () => void;
    onSkip: () => void;
}

export default function TypingCard({ targetKana, meaning, onComplete, onSkip }: TypingCardProps) {
    const { romaji, resetRomaji, processInput } = useRomajiInput();
    const [inputValue, setInputValue] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [isError, setIsError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus input
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);







    useEnterSubmit(() => {
        if (isCorrect) {
            onComplete();
            return;
        }

        // Validate
        if (checkLenient(inputValue, targetKana)) {
            setIsCorrect(true);
            setIsError(false);
        } else {
            setIsError(true);
        }
    });

    const checkLenient = (input: string, target: string) => {
        // Normalize both strings: remove spaces
        const normInput = input.replace(/\s+/g, '');
        const normTarget = target.replace(/\s+/g, '');

        if (normInput === normTarget) return true;

        // Check if length is same
        if (normInput.length !== normTarget.length) return false;

        // Character by character check allowing 'わ' for 'は'
        for (let i = 0; i < normInput.length; i++) {
            const inChar = normInput[i];
            const tarChar = normTarget[i];

            if (inChar !== tarChar) {
                // Allow 'わ' input for 'は' target
                if (!(tarChar === 'は' && inChar === 'わ')) {
                    return false;
                }
            }
        }
        return true;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const kana = processInput(e, inputValue, (val) => {
            // Optional callback
        });
        setInputValue(kana);
        setIsError(false); // Reset error on type
    };

    return (
        <div className="max-w-xl mx-auto w-full flex flex-col items-center justify-center min-h-[50vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center text-center relative"
            >
                <h3 className="text-xl font-medium text-muted-foreground mb-4">
                    Type the Japanese reading for:
                </h3>
                <p className="text-3xl md:text-4xl font-serif font-bold mb-8 text-foreground">
                    "{meaning}"
                </p>

                <div className="relative w-full max-w-md">
                    <motion.div
                        animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            className={`w-full p-4 text-center text-2xl font-bold bg-background border-2 rounded-xl outline-none transition-all ${isCorrect
                                ? "border-green-500 text-green-600 bg-green-50"
                                : isError
                                    ? "border-red-500 text-red-600 bg-red-50"
                                    : "border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10"
                                }`}
                            placeholder="Type in Romaji..."
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
                    </AnimatePresence>
                </div>

                <div className="h-12 mt-2">
                    {isError ? (
                        <div className="text-red-500 font-bold animate-in fade-in slide-in-from-top-1">
                            Correct Answer: <span className="text-xl">{targetKana}</span>
                        </div>
                    ) : (
                        inputValue && !isCorrect && (
                            <div className="text-sm text-muted-foreground font-mono">
                                {romaji}
                            </div>
                        )
                    )}
                </div>

                <div className="w-full mt-8 flex justify-end">
                    {isCorrect ? (
                        <button
                            onClick={onComplete}
                            className="px-8 py-3 bg-green-500 text-white rounded-full font-bold shadow-lg hover:bg-green-600 transition-all flex items-center animate-bounce"
                        >
                            Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    ) : (
                        <button
                            onClick={onSkip}
                            className="px-6 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors flex items-center gap-1 absolute bottom-6 right-6"
                        >
                            Skip <SkipForward size={14} />
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
