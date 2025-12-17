import { motion } from "framer-motion";
import { VocabItem } from "../utils/vocabularyData";
import { KanaChar } from "../../../components/ui/cards/KanaChar";
import { KanjiChar } from "../../../components/ui/cards/KanjiChar";

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
    const showMeaning = isDying;
    const useKanji = showKanji && vocab.kanji;

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
                    : 'bg-card text-card-foreground border-border'
                    }`}>
                    {showMeaning ? (
                        <span className="font-sans font-bold text-xl">{vocab.meaning}</span>
                    ) : useKanji ? (
                        <KanjiChar
                            kanji={vocab.kanji!}
                            furigana={vocab.kana}
                            showFurigana={true}
                            size="md"
                        />
                    ) : (
                        <KanaChar
                            kana={vocab.kana}
                            showRomaji={false}
                            size="md"
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
}
