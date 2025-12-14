"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { BackButton } from "./BackButton";

interface GameSettingsModalProps {
    isOpen: boolean;
    settings: {
        showKanji: boolean;
        showKana: boolean;
        difficulty: 'easy' | 'medium' | 'hard';
    };
    onToggle: (key: 'showKanji' | 'showKana') => void;
    onSetDifficulty: (difficulty: 'easy' | 'medium' | 'hard') => void;
    onStart: () => void;
    onClose?: () => void;
    showBackButton?: boolean;
}

export default function GameSettingsModal({
    isOpen,
    settings,
    onToggle,
    onSetDifficulty,
    onStart,
    onClose,
    showBackButton = false
}: GameSettingsModalProps) {
    const router = useRouter();

    const handleBack = () => {
        router.push('/practice');
    };

    const difficulties = [
        { id: 'easy' as const, label: 'Easy', description: 'Slow asteroids' },
        { id: 'medium' as const, label: 'Medium', description: 'Normal speed' },
        { id: 'hard' as const, label: 'Hard', description: 'Fast asteroids' }
    ];

    const characterTypes = [
        { id: 'showKanji' as const, label: 'Kanji', description: 'Kanji characters' },
        { id: 'showKana' as const, label: 'Kana', description: 'Hiragana readings' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={showBackButton ? undefined : onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                    >
                        <div className="bg-card text-card-foreground rounded-xl p-8 w-full max-w-md shadow-2xl pointer-events-auto border border-border m-4">
                            <div className="flex items-center justify-between mb-6">
                                {showBackButton ? (
                                    <BackButton onClick={handleBack} />
                                ) : (
                                    <div className="w-9" />
                                )}

                                <h3 className="font-serif font-bold text-2xl">Game Settings</h3>

                                {!showBackButton && onClose ? (
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
                                    >
                                        <X size={20} />
                                    </button>
                                ) : (
                                    <div className="w-9" />
                                )}
                            </div>

                            {/* Difficulty Selection */}
                            <div className="mb-6">
                                <p className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wide">
                                    Difficulty
                                </p>
                                <div className="grid grid-cols-3 gap-2">
                                    {difficulties.map((diff) => {
                                        const isSelected = settings.difficulty === diff.id;

                                        let bgClass = "bg-card border-border text-muted-foreground hover:border-primary/50";
                                        if (isSelected) {
                                            if (diff.id === 'easy') bgClass = "bg-emerald-600 border-emerald-600 text-white shadow-sm";
                                            else if (diff.id === 'medium') bgClass = "bg-amber-500 border-amber-500 text-black shadow-sm";
                                            else if (diff.id === 'hard') bgClass = "bg-red-600 border-red-600 text-white shadow-sm";
                                        }

                                        return (
                                            <button
                                                key={diff.id}
                                                onClick={() => onSetDifficulty(diff.id)}
                                                className={`p-3 rounded-lg border-2 transition-all text-center ${bgClass}`}
                                            >
                                                <p className="font-bold text-sm">{diff.label}</p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Character Types */}
                            <div className="mb-8">
                                <p className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wide">
                                    Character Types
                                </p>
                                <div className="space-y-2">
                                    {characterTypes.map((option) => {
                                        const isSelected = settings[option.id];
                                        return (
                                            <button
                                                key={option.id}
                                                onClick={() => onToggle(option.id)}
                                                className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all group ${isSelected
                                                    ? "bg-secondary/10 border-secondary text-secondary"
                                                    : "bg-card border-border text-muted-foreground hover:border-secondary/50"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${isSelected ? "bg-secondary border-secondary" : "border-muted-foreground/30"
                                                            }`}
                                                    >
                                                        {isSelected && (
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="font-bold text-sm">{option.label}</p>
                                                        <p className={`text-xs ${isSelected ? "text-secondary/80" : "text-muted-foreground"}`}>
                                                            {option.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Visual Example */}
                                                <div className={`px-3 py-1 rounded text-lg font-serif font-bold ${isSelected ? 'bg-secondary/20 text-secondary' : 'bg-muted text-muted-foreground group-hover:text-foreground'}`}>
                                                    {option.id === 'showKanji' ? '猫' : 'ねこ'}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <button
                                onClick={onStart}
                                disabled={!settings.showKanji && !settings.showKana}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg shadow-md transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                Start
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
