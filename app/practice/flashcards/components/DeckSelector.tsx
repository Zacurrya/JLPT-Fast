"use client";
import { motion } from "framer-motion";
import { Deck, FLASHCARD_DECKS } from "../data/decks";
import { ChevronRight } from "lucide-react";

interface DeckSelectorProps {
    onSelect: (deck: Deck) => void;
}

export default function DeckSelector({ onSelect }: DeckSelectorProps) {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 px-4">Choose a Deck</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 px-4">
                {FLASHCARD_DECKS.map((deck) => (
                    <motion.div
                        key={deck.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(deck)}
                        className={`p-6 rounded-3xl cursor-pointer border shadow-sm hover:shadow-md transition-all ${deck.color}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-4xl">
                                {deck.id === 'food' && '🍱'}
                                {deck.id === 'n5' && '📘'}
                                {deck.id === 'konbini' && '🏪'}
                                {deck.id === 'restaurant' && '🥢'}
                            </span>
                            <div className="p-2 bg-white/20 rounded-full">
                                <ChevronRight size={20} />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{deck.title}</h3>
                        <p className="opacity-90 text-sm leading-relaxed mb-4 min-h-[40px]">
                            {deck.description}
                        </p>

                        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                            {deck.cards.length} Cards
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
