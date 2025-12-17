"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { KanjiChar } from './KanjiChar';
import { useEnterSubmit } from '../../../../hooks/useEnterSubmit';

interface KanjiLearnCardProps {
    kanji: string;
    meaning: string;
    onyomi?: string[];
    kunyomi?: string[];
    romaji?: string;
    mnemonic?: string;
    onNext: () => void;
    currentIndex?: number;
    total?: number;
}

export default function KanjiLearnCard({
    kanji,
    meaning,
    onyomi,
    kunyomi,
    romaji,
    mnemonic,
    onNext,
    currentIndex,
    total
}: KanjiLearnCardProps) {

    useEnterSubmit(onNext);

    const progress = currentIndex !== undefined && total !== undefined ? ((currentIndex) / total) * 100 : 0;

    return (
        <div className="max-w-2xl mx-auto w-full flex flex-col min-h-[60vh]">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div className="mb-4">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">New Kanji</span>
                    </div>

                    <div className="mb-8 flex justify-center">
                        <KanjiChar
                            kanji={kanji}
                            furigana={romaji || ''}
                            showFurigana={!!romaji}
                            size="2xl"
                            kanjiClassName="text-8xl"
                            furiganaClassName="text-xl font-bold text-primary mb-2"
                        />
                    </div>

                    <h2 className="text-3xl font-bold mb-6 capitalize">{meaning}</h2>

                    <div className="grid grid-cols-2 gap-4 text-left bg-muted/30 p-4 rounded-xl mb-6">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-muted-foreground uppercase">Onyomi</span>
                            {onyomi && onyomi.length > 0 ? (
                                <div className="font-japanese text-lg">{onyomi.join('、')}</div>
                            ) : (
                                <div className="text-muted-foreground italic text-sm">None</div>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-muted-foreground uppercase">Kunyomi</span>
                            {kunyomi && kunyomi.length > 0 ? (
                                <div className="font-japanese text-lg">{kunyomi.join('、')}</div>
                            ) : (
                                <div className="text-muted-foreground italic text-sm">None</div>
                            )}
                        </div>
                    </div>

                    {mnemonic && (
                        <div className="text-sm text-muted-foreground bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <strong>Hint:</strong> {mnemonic}
                        </div>
                    )}

                </motion.div>

                <button
                    onClick={onNext}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center group"
                >
                    Got it!
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-6 text-sm text-muted-foreground">
                    Press <span className="font-bold border border-border px-2 py-1 rounded bg-muted/50">Enter</span> to continue
                </div>
            </div>
        </div>
    );
}
