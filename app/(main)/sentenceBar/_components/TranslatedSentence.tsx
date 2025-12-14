"use client";
import { useEffect, useState } from "react";
import { useEnglishTranslation } from "@/hooks/useEnglishTranslation";

type TranslatedSentenceProps = {
    words: string[];
};

export default function TranslatedSentence({ words }: TranslatedSentenceProps) {
    const { translation, loading, translate } = useEnglishTranslation();

    const fullSentence = words.join("");

    useEffect(() => {
        if (!fullSentence) {
            // No easy way to clear translation via hook if internal state used, 
            // but we can just ignore output or handle it. 
            // Actually, the hook is designed to expose state.
            // If we want to clear it, we might need a reset method or just accept the old one stays until update.
            // But wait, the hook exposes `translation` state. 
            // If we don't call translate, it keeps old state.
            // Let's just run translate("") or similar if supported?
            // The hook checks `if (!text) return null;`.
            // Let's modify hook or just rely on local wrapper? 
            // Actually simpler to just call translate causing update.
            return;
        }

        const timer = setTimeout(() => {
            translate(fullSentence);
        }, 800);

        return () => clearTimeout(timer);

    }, [fullSentence, translate]);

    if (words.length === 0) return null;

    return (
        <div className="w-full max-w-2xl mx-auto mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block px-10 py-5 rounded-2xl bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center">

                {/* Japanese Original */}
                <p className="font-serif text-3xl text-gray-900 tracking-wide mb-2">
                    {fullSentence}
                </p>

                {/* English Translation */}
                <div className="h-6 flex items-center justify-center">
                    {loading ? (
                        <div className="w-20 h-2 bg-gray-100 rounded-full animate-pulse"></div>
                    ) : (
                        <p className="text-sm text-muted-foreground font-sans font-medium tracking-widest uppercase animate-in fade-in duration-500">
                            {translation}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
