"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRomajiTranslation } from "@hooks/useRomajiTranslation";

interface LessonCardProps {
    segment: {
        heading: string;
        headingReading?: string; // Optional reading hint (romaji/kana)
        text: string;
        example?: {
            jp: string;
            kana?: string;
            romaji: string;
            en: string;
        };
    };
    currentIndex: number;
    total: number;
    onNext: () => void;
    isLast: boolean;
    structure?: string; // Optional structure prop
}

export default function LessonCard({ segment, currentIndex, total, onNext, isLast, structure }: LessonCardProps) {
    const { renderRomaji } = useRomajiTranslation();
    const progress = ((currentIndex) / total) * 100;

    // Add Enter key support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                onNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNext]);

    return (
        <div className="max-w-2xl mx-auto w-full flex flex-col min-h-[60vh]">
            {/* Card */}
            <div className="flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 bg-card border border-border rounded-2xl p-5 md:p-10 shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />

                        <h2 className="no-interact-text text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
                            {segment.headingReading ? (
                                <ruby className="ruby-text">
                                    {segment.heading}
                                    <rp>(</rp>
                                    <rt className="text-sm font-mono text-muted-foreground font-normal">{segment.headingReading}</rt>
                                    <rp>)</rp>
                                </ruby>
                            ) : (
                                segment.heading
                            )}
                        </h2>

                        {/* Split text into paragraphs and format */}
                        <div className="no-interact-text text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl space-y-4">
                            {segment.text.split('\n').map((paragraph: string, idx: number) => {
                                // Skip empty paragraphs
                                if (!paragraph.trim()) return null;

                                // Helper to parse "Japanese (Romaji)" pattern
                                const parseLine = (line: string) => {
                                    // First parse for bold tags <b>text</b>
                                    const parseBold = (text: string) => {
                                        const parts: (string | React.ReactNode)[] = [];
                                        const boldRegex = /<b>(.*?)<\/b>/g;
                                        let lastIndex = 0;
                                        let match;

                                        while ((match = boldRegex.exec(text)) !== null) {
                                            if (match.index > lastIndex) {
                                                parts.push(text.substring(lastIndex, match.index));
                                            }
                                            parts.push(<strong key={match.index} className="font-bold text-primary">{match[1]}</strong>);
                                            lastIndex = boldRegex.lastIndex;
                                        }
                                        if (lastIndex < text.length) {
                                            parts.push(text.substring(lastIndex));
                                        }
                                        return parts.length > 0 ? parts : [text];
                                    };

                                    // Matches: Non-ASCII chars (Japanese) + optional space + ( + ASCII/Macron chars (Romaji) + )
                                    const regex = /([^\x00-\x7F]+)\s*\(([a-zA-Z\s\u0100-\u017F]+)\)/g;
                                    const parts: (string | React.ReactNode)[] = [];
                                    let lastIndex = 0;
                                    let match;

                                    while ((match = regex.exec(line)) !== null) {
                                        if (match.index > lastIndex) {
                                            // Parse bold in the text between matches
                                            parts.push(...parseBold(line.substring(lastIndex, match.index)));
                                        }
                                        // Render with inline=true
                                        parts.push(renderRomaji(match[1], match[2], true));
                                        lastIndex = regex.lastIndex;
                                    }
                                    if (lastIndex < line.length) {
                                        // Parse bold in the remaining text
                                        parts.push(...parseBold(line.substring(lastIndex)));
                                    }
                                    return parts.length > 0 ? parts : parseBold(line);
                                };

                                // Check if it's a list item (starts with -, •, or *)
                                if (paragraph.trim().match(/^[-•*]\s/)) {
                                    const content = paragraph.trim().replace(/^[-•*]\s/, '');
                                    return (
                                        <div key={idx} className="flex items-start gap-2 text-center max-w-md mx-auto justify-center">
                                            <span className="text-primary mt-1">•</span>
                                            <p className="flex-1">
                                                {parseLine(content).map((part, i) => <span key={i}>{part}</span>)}
                                            </p>
                                        </div>
                                    );
                                }

                                return (
                                    <p key={idx} className="text-center max-w-2xl mx-auto">
                                        {parseLine(paragraph.trim()).map((part, i) => <span key={i}>{part}</span>)}
                                    </p>
                                );
                            })}
                        </div>

                        {segment.example && (
                            <div className="bg-muted/30 rounded-xl p-6 border border-border/50 inline-block">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Example</p>
                                <div className="space-y-4 text-center">
                                    <div className="mb-2">
                                        {renderRomaji(segment.example.jp, segment.example.romaji)}
                                    </div>
                                    <p className="text-lg font-medium text-foreground/80 italic">
                                        "{segment.example.en}"
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Structure - displayed below example if provided */}
                        {structure && (
                            <div className="mt-6 bg-gradient-to-br from-orange-50/80 to-red-50/80 dark:from-orange-900/10 dark:to-red-900/10 rounded-2xl p-6 border-2 border-orange-200/60 dark:border-orange-700/60 shadow-md inline-block">
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <p className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase tracking-widest">Grammar Structure</p>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-4 border border-orange-100 dark:border-orange-800/50">
                                    <code className="text-base text-orange-900 dark:text-orange-100 font-mono tracking-wide font-bold block text-center">
                                        {structure}
                                    </code>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex justify-center text-muted-foreground text-sm">
                    Press <span className="mx-1 font-bold border border-border px-1 rounded bg-muted/50">Enter</span> to continue
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onNext}
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center group"
                    >
                        {isLast ? "Start Quiz" : "Next"}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
