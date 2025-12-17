"use client";

import { toRomaji } from "wanakana";

interface KanjiCharProps {
    /** The kanji character(s) to display */
    kanji: string;
    /** The furigana (kana reading) to display above. Required for kanji. */
    furigana: string;
    /** Whether to show furigana above the kanji */
    showFurigana?: boolean;
    /** Size variant */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /** Custom className for the kanji text */
    kanjiClassName?: string;
    /** Custom className for the furigana text */
    furiganaClassName?: string;
    /** Custom className for the container */
    className?: string;
}

const sizeStyles = {
    xs: { kanji: "text-sm", furigana: "text-[8px]" },
    sm: { kanji: "text-lg", furigana: "text-[9px]" },
    md: { kanji: "text-2xl", furigana: "text-[10px]" },
    lg: { kanji: "text-4xl", furigana: "text-xs" },
    xl: { kanji: "text-6xl", furigana: "text-sm" },
    "2xl": { kanji: "text-8xl", furigana: "text-base" },
};

/**
 * A kanji character with optional furigana (kana reading) displayed above it.
 * 
 * @example
 * <KanjiChar kanji="日" furigana="にち" />
 * // Displays: にち (small, above)
 * //           日  (large, below)
 */
export function KanjiChar({
    kanji,
    furigana,
    showFurigana = true,
    size = "md",
    kanjiClassName,
    furiganaClassName,
    className,
}: KanjiCharProps) {
    const sizes = sizeStyles[size];

    return (
        <span className={`inline-flex flex-col items-center leading-none ${className ?? ""}`}>
            {showFurigana && (
                <span
                    className={`font-sans text-muted-foreground/80 select-none text-center mb-0.5 ${sizes.furigana} ${furiganaClassName ?? ""}`}
                >
                    {furigana}
                </span>
            )}
            <span
                className={`font-serif font-bold text-foreground leading-none ${sizes.kanji} ${kanjiClassName ?? ""}`}
            >
                {kanji}
            </span>
        </span>
    );
}

interface KanjiWithRomajiProps {
    /** The kanji character(s) to display */
    kanji: string;
    /** The kana reading for this kanji */
    reading: string;
    /** Whether to show the reading above */
    showReading?: boolean;
    /** What to show above: 'kana' (furigana) or 'romaji' */
    readingType?: "kana" | "romaji";
    /** Size variant */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /** Custom className for the container */
    className?: string;
}

/**
 * A kanji character that can show either kana or romaji reading above it.
 * 
 * @example
 * <KanjiWithReading kanji="山" reading="やま" readingType="romaji" />
 * // Displays: yama (small, above)
 * //           山   (large, below)
 */
export function KanjiWithReading({
    kanji,
    reading,
    showReading = true,
    readingType = "kana",
    size = "md",
    className,
}: KanjiWithRomajiProps) {
    const displayReading = readingType === "romaji" ? toRomaji(reading) : reading;
    const sizes = sizeStyles[size];

    return (
        <span className={`inline-flex flex-col items-center leading-none ${className ?? ""}`}>
            {showReading && (
                <span
                    className={`${readingType === "romaji" ? "font-mono" : "font-sans"} text-muted-foreground/80 select-none text-center mb-0.5 ${sizes.furigana}`}
                >
                    {displayReading}
                </span>
            )}
            <span
                className={`font-serif font-bold text-foreground leading-none ${sizes.kanji}`}
            >
                {kanji}
            </span>
        </span>
    );
}

export default KanjiChar;
