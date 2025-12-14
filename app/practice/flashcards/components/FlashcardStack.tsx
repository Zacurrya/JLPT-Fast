"use client";

import { useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { Flashcard } from "../data/decks";
import { RotateCcw, ArrowLeft, ArrowRight } from "lucide-react";

interface FlashcardStackProps {
    cards: Flashcard[];
    onRestart: () => void;
    onBack: () => void;
}

export default function FlashcardStack({ cards, onRestart, onBack }: FlashcardStackProps) {
    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right' | null>(null);

    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
    const backgroundColor = useTransform(
        x,
        [-150, 0, 150],
        ["#fee2e2", "#ffffff", "#dcfce7"]
    );

    const currentCard = cards[index];

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 100) {
            handleSwipe("right");
        } else if (info.offset.x < -100) {
            handleSwipe("left");
        }
    };

    const handleSwipe = (dir: 'left' | 'right') => {
        setDirection(dir);
        setTimeout(() => {
            if (index < cards.length) {
                setIndex(index + 1);
                setIsFlipped(false);
                setDirection(null);
                x.set(0);
            }
        }, 200);
    };

    if (index >= cards.length) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-xl min-h-[400px] text-center border border-gray-100"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-4xl">
                    🎉
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Deck Complete!</h2>
                <p className="text-gray-500 mb-8">You've reviewed all {cards.length} cards.</p>
                <div className="flex gap-4">
                    <button onClick={onRestart} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-bold transition-colors flex items-center gap-2">
                        <RotateCcw size={18} /> Restart
                    </button>
                    <button onClick={onBack} className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl font-bold transition-colors">
                        Choose Another Deck
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="relative w-full max-w-sm mx-auto aspect-[3/4] perspective-1000">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Background stack visuals - messy stack */}
                {index + 1 < cards.length && (
                    <div className="absolute top-0 w-full h-full bg-white rounded-3xl shadow-md border border-gray-200 z-0 scale-[0.96] rotate-[-3deg]" />
                )}
                {index + 2 < cards.length && (
                    <div className="absolute top-0 w-full h-full bg-white rounded-3xl shadow-md border border-gray-200 -z-10 scale-[0.92] rotate-[2deg]" />
                )}
            </div>

            <motion.div
                key={currentCard.id}
                style={{ x, rotate, opacity, backgroundColor }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                onClick={() => setIsFlipped(!isFlipped)}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ x: direction === 'left' ? -200 : 200, opacity: 0, transition: { duration: 0.2 } }}
                className="relative w-full h-full bg-white rounded-3xl shadow-xl border border-gray-100 cursor-grab active:cursor-grabbing"
            >
                {/* Content */}
                <div className="w-full h-full flex flex-col p-8 items-center justify-center text-center select-none backface-hidden">
                    <motion.div
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full relative"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden w-full h-full flex flex-col items-center justify-center">
                            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">Japanese</span>
                            <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">{currentCard.front.text}</h2>
                            {currentCard.front.subtext && (
                                <p className="text-2xl text-gray-500 font-medium">{currentCard.front.subtext}</p>
                            )}
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden w-full h-full flex flex-col items-center justify-center" style={{ transform: "rotateY(180deg)" }}>
                            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">English</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentCard.back.text}</h2>
                            {currentCard.back.subtext && (
                                <p className="text-lg text-gray-500 mb-6">{currentCard.back.subtext}</p>
                            )}
                            {currentCard.back.example && (
                                <div className="mt-8 p-4 bg-gray-50 rounded-xl w-full border border-gray-100">
                                    <p className="text-sm text-gray-600 italic">"{currentCard.back.example}"</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Footer Hint */}
                <div className="absolute bottom-6 left-0 w-full text-center">
                    <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Tap to flip</p>
                </div>
            </motion.div>

            {/* Hint Text Below */}
            <div className="absolute -bottom-12 w-full flex justify-between px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-2"><ArrowLeft size={16} className="text-red-400" /> Study</span>
                <span className="flex items-center gap-2">Know <ArrowRight size={16} className="text-green-500" /></span>
            </div>
        </div>
    );
}
