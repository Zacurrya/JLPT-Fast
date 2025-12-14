import { motion } from "framer-motion";
import { VocabItem } from "../utils/vocabularyData";

interface AsteroidProps {
    id: string;
    vocab: VocabItem;
    x: number;
    y: number;
    showKanji: boolean;
    isDying?: boolean;
    opacity?: number;
}

export default function Asteroid({ vocab, x, y, showKanji, isDying, opacity = 1 }: AsteroidProps) {
    // If dying, show meaning (English). Otherwise show Japanese.
    const displayText = isDying
        ? vocab.meaning
        : (showKanji && vocab.kanji ? vocab.kanji : vocab.kana);

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y }}
            transition={{ duration: 0.016, ease: "linear" }}
            style={{ left: `${x}%`, opacity: opacity }}
            className="absolute pointer-events-none"
        >
            <div className="relative">
                {/* Asteroid glow effect from Japanese or English (dying) */}
                <div className={`absolute inset-0 blur-xl rounded-full scale-150 ${isDying ? 'bg-green-500/20' : 'bg-primary/10'}`} />

                {/* Main asteroid */}
                <div className={`relative px-6 py-3 rounded-lg shadow-md border ${isDying
                        ? 'bg-green-950/80 text-green-200 border-green-500 font-sans font-bold text-xl'
                        : 'bg-card text-card-foreground font-serif font-bold text-2xl border-border'
                    }`}>
                    {displayText}
                </div>
            </div>
        </motion.div>
    );
}
