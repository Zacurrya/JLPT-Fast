"use client";

import { useState, useCallback } from "react";
import { toKana, toRomaji } from "wanakana";

/**
 * Handles Romaji input and converts it to Kana.
 * Wanakana is used for conversion.
 */

export function useRomajiInput(initialValue: string = "") {
    const [romaji, setRomaji] = useState("");

    const processInput = useCallback((e: React.ChangeEvent<HTMLInputElement>, currentValue: string, onChange: (val: string) => void) => {
        const inputType = (e.nativeEvent as any).inputType;
        const data = (e.nativeEvent as any).data;

        let newRomaji = romaji;

        if (!e.target.value) {
            newRomaji = "";
        } else if (inputType === "insertText" && data) {
            newRomaji += data;
        } else if (inputType === "deleteContentBackward") {
            newRomaji = toRomaji(e.target.value);
        } else {
            if (e.target.value.length < currentValue.length) {
                newRomaji = toRomaji(e.target.value);
            }
        }

        setRomaji(newRomaji);
        let kana = toKana(newRomaji);

        // Normalize particle は: Convert "wa" to "は" when it appears as a standalone word
        // This handles the particle は which is romanized as "wa" but typed as は
        kana = kana.replace(/^わ$/i, 'は')           // Standalone wa
            .replace(/\sわ\s/gi, ' は ')      // Middle: space wa space
            .replace(/\sわ$/gi, ' は')        // End: space wa
            .replace(/^わ\s/gi, 'は ');       // Start: wa space

        onChange(kana);
        return kana;
    }, [romaji]);

    const resetRomaji = useCallback(() => {
        setRomaji("");
    }, []);

    return {
        romaji,
        setRomaji, // Expose if needed
        resetRomaji,
        processInput
    };
}
