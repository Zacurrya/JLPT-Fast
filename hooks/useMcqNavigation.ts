"use client";

import { useEffect } from "react";

interface UseMcqNavigationProps {
    options: string[];
    selectedOption: string | null;
    onOptionSelect: (option: string) => void;
    onConfirm: () => void;
    isEnabled?: boolean;
}

export function useMcqNavigation({
    options,
    selectedOption,
    onOptionSelect,
    onConfirm,
    isEnabled = true
}: UseMcqNavigationProps) {
    useEffect(() => {
        if (!isEnabled) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            // Arrow Keys for Navigation
            if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                e.preventDefault();
                const currentIndex = selectedOption ? options.indexOf(selectedOption) : -1;
                const nextIndex = (currentIndex + 1) % options.length;
                onOptionSelect(options[nextIndex]);
            }
            else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                e.preventDefault();
                const currentIndex = selectedOption ? options.indexOf(selectedOption) : -1;
                // If nothing selected or first item, go to last
                const prevIndex = currentIndex === -1 || currentIndex === 0
                    ? options.length - 1
                    : currentIndex - 1;

                onOptionSelect(options[prevIndex]);
            }
            // Enter Key for Confirmation
            else if (e.key === "Enter") {
                e.preventDefault();
                onConfirm();
            }
            // Number keys (1-9) for quick selection
            else if (/^[1-9]$/.test(e.key)) {
                const index = parseInt(e.key) - 1;
                if (index < options.length) {
                    e.preventDefault();
                    onOptionSelect(options[index]);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [options, selectedOption, onOptionSelect, onConfirm, isEnabled]);
}
