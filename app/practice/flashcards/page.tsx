"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeckSelector from "./components/DeckSelector";
import FlashcardStack from "./components/FlashcardStack";
import { Deck } from "./data/decks";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FlashcardsPage() {
    const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    {selectedDeck ? (
                        <button
                            onClick={() => setSelectedDeck(null)}
                            className="p-2 bg-white hover:bg-gray-100 rounded-full text-gray-500 transition-colors shadow-sm border border-gray-100"
                        >
                            <ArrowLeft size={20} />
                        </button>
                    ) : (
                        <Link href="/practice">
                            <div className="p-2 bg-white hover:bg-gray-100 rounded-full text-gray-500 transition-colors shadow-sm border border-gray-100 cursor-pointer inline-flex items-center justify-center">
                                <ArrowLeft size={20} />
                            </div>
                        </Link>
                    )}

                    <div>
                        <h1 className="text-3xl font-serif font-bold text-gray-900">
                            {selectedDeck ? selectedDeck.title : "Flashcards"}
                        </h1>
                        <p className="text-gray-500 text-sm">
                            {selectedDeck ? "Swipe right to learn, left to skip" : "Select a topic to start practicing"}
                        </p>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {selectedDeck ? (
                        <motion.div
                            key="stack"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <FlashcardStack
                                cards={selectedDeck.cards}
                                onRestart={() => {
                                    // Force re-render of stack to reset
                                    const deck = selectedDeck;
                                    setSelectedDeck(null);
                                    setTimeout(() => setSelectedDeck(deck), 50);
                                }}
                                onBack={() => setSelectedDeck(null)}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="selector"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            <DeckSelector onSelect={setSelectedDeck} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
