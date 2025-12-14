"use client";

import { useEffect, useRef, useState } from "react";
import * as wanakana from 'wanakana';

interface CrosswordBoxProps {
    value: string;
    correctChar: string;
    isActive: boolean;
    clueNum?: number;
    isSelected: boolean;
    isWon: boolean;
    onClick: () => void;
    onComplete: (char: string) => void;
    onBackspace: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function CrosswordBox({ value, correctChar, isActive, clueNum, isSelected, isWon, onClick, onComplete, onBackspace, onKeyDown }: CrosswordBoxProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [localValue, setLocalValue] = useState(value);

    // Auto-focus when selected
    useEffect(() => {
        if (isSelected && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isSelected]);

    // Handle external value updates (e.g. initial load or reset)
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Propagate to parent first or after?
        // Parent handles Arrow keys.
        if (onKeyDown) onKeyDown(e);

        if (e.key === 'Backspace') {
            if (localValue === "") {
                e.preventDefault(); // Prevent browser back
                onBackspace();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // We handle conversion manually to avoid conflicts between React controlled state and wanakana.bind
        const raw = e.target.value;
        let converted = wanakana.toKana(raw, { IMEMode: true });

        // Special case: 'n' -> 'ん' if that is the correct answer
        if (raw === 'n' && correctChar === 'ん') {
            converted = 'ん';
        }

        setLocalValue(converted);

        // Check correctness
        // We match strict kana.
        // Also handle if user inputs directly (e.g. copy paste or mobile keyboard), raw might be kana.
        // We want immediate check after state update logic (though local var is used).

        // Immediate check if raw value matches (rare for Japanese but possible)
        if (converted === correctChar) {
            onComplete(converted);
        } else if (raw === correctChar) {
            onComplete(raw); // just in case
        }
    };

    if (!isActive) {
        return <div className="w-full h-full bg-transparent" />;
    }

    return (
        <div
            className={`w-full h-full relative flex items-center justify-center bg-[#fffbf5] cursor-text transition-all duration-150 rounded-sm
                ${isSelected
                    ? 'ring-2 ring-amber-600 shadow-lg scale-105 z-20 bg-amber-50'
                    : 'shadow-md hover:shadow-lg'
                }
            `}
            onClick={onClick}
            style={{
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper-2.png")',
                backgroundBlendMode: 'multiply'
            }}
        >
            {clueNum && (
                <span className="absolute top-0 left-0 w-4 h-4 flex items-center justify-center text-[9px] font-black text-white bg-amber-700 rounded-tl-xs rounded-bl-none rounded-br-lg leading-none pointer-events-none border border-amber-800">
                    {clueNum}
                </span>
            )}
            <input
                ref={inputRef}
                type="text"
                value={localValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`
                    w-full h-full text-center text-2xl font-black bg-transparent outline-none relative z-10
                    ${value === correctChar && isWon
                        ? 'text-amber-700'
                        : 'text-stone-900'
                    }
                `}
                maxLength={3}
                autoComplete="off"
                spellCheck={false}
            />
        </div>
    );
}
