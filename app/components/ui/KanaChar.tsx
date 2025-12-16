"use client";

import { toRomaji } from "wanakana";

interface KanaCharProps {
    /** The kana character(s) to display */
    kana: string;
    /** Optional: Override the romaji displayed above. If not provided, auto-converts. */
    romaji?: string;
    /** Whether to show romaji above the kana */
    showRomaji?: boolean;
    /** Size variant */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /** Custom className for the kana text */
    kanaClassName?: string;
    /** Custom className for the romaji text */
    romajiClassName?: string;
    /** Custom className for the container */
    className?: string;
}

const sizeStyles = {
    xs: { kana: "text-sm", romaji: "text-[8px]" },
    sm: { kana: "text-lg", romaji: "text-[9px]" },
    md: { kana: "text-2xl", romaji: "text-[10px]" },
    lg: { kana: "text-4xl", romaji: "text-xs" },
    xl: { kana: "text-6xl", romaji: "text-sm" },
    "2xl": { kana: "text-8xl", romaji: "text-base" },
};

/**
 * A single kana character with optional romaji displayed above it.
 * 
 * @example
 * <KanaChar kana="あ" showRomaji />
 * // Displays: a (small, above)
 * //           あ (large, below)
 */
export function KanaChar({
    kana,
    romaji,
    showRomaji = true,
    size = "md",
    kanaClassName,
    romajiClassName,
    className,
}: KanaCharProps) {
    const displayRomaji = romaji ?? toRomaji(kana);
    const sizes = sizeStyles[size];

    return (
        <span className={`inline-flex flex-col items-center leading-none ${className ?? ""}`}>
            {showRomaji && (
                <span
                    className={`font-mono text-muted-foreground/80 select-none text-center mb-0.5 ${sizes.romaji} ${romajiClassName ?? ""}`}
                >
                    {displayRomaji}
                </span>
            )}
            <span
                className={`font-serif font-bold text-foreground leading-none ${sizes.kana} ${kanaClassName ?? ""}`}
            >
                {kana}
            </span>
        </span>
    );
}

/**
 * Segments a kana string into individual kana chunks.
 * Handles digraphs (like しゃ, ちゅ) and small kana correctly.
 */
export function segmentKana(kanaString: string): string[] {
    const segments: string[] = [];
    let i = 0;

    while (i < kanaString.length) {
        const char = kanaString[i];
        const next = kanaString[i + 1];

        // Check if next character is a small kana (digraph)
        const isSmallKana = next && /^[ぁぃぅぇぉゃゅょゎァィゥェォャュョヮ]/.test(next);

        if (isSmallKana) {
            segments.push(char + next);
            i += 2;
        } else {
            segments.push(char);
            i += 1;
        }
    }

    return segments;
}

interface KanaTextProps {
    /** The kana string to display */
    text: string;
    /** Whether to show romaji above each kana */
    showRomaji?: boolean;
    /** Size variant */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /** Gap between characters */
    gap?: "tight" | "normal" | "wide";
    /** Custom className for the container */
    className?: string;
    /** Custom className for each kana character */
    charClassName?: string;
}

const gapStyles = {
    tight: "gap-0.5",
    normal: "gap-1",
    wide: "gap-2",
};

/**
 * Renders a kana string as a series of KanaChar components.
 * Automatically segments the string and displays romaji above each segment.
 * 
 * @example
 * <KanaText text="こんにちは" showRomaji />
 * // Displays: ko n ni chi ha (small, above each)
 * //           こ ん に ち は (large, below each)
 */
export function KanaText({
    text,
    showRomaji = true,
    size = "md",
    gap = "normal",
    className,
    charClassName,
}: KanaTextProps) {
    const segments = segmentKana(text);

    return (
        <span className={`inline-flex flex-wrap items-end ${gapStyles[gap]} ${className ?? ""}`}>
            {segments.map((segment, idx) => (
                <KanaChar
                    key={idx}
                    kana={segment}
                    showRomaji={showRomaji}
                    size={size}
                    className={charClassName}
                />
            ))}
        </span>
    );
}

export default KanaChar;