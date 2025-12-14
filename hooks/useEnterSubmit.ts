"use client";

import { useEffect } from "react";

// Triggers onSubmit when Enter is pressed
export function useEnterSubmit(onSubmit: () => void, isEnabled: boolean = true) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter" && isEnabled) {
                e.preventDefault(); // Prevent default form submission if any
                onSubmit();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onSubmit, isEnabled]);
}
