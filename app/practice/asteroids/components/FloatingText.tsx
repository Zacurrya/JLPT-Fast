"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface FloatingTextProps {
    x: number;
    y: number;
    text: string;
    onComplete: () => void;
}

export default function FloatingText({ x, y, text, onComplete }: FloatingTextProps) {
    useEffect(() => {
        const timer = setTimeout(onComplete, 1000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0, y: y, x: x - 50, scale: 0.5 }} // Centering approximation
            animate={{
                opacity: [0, 1, 1, 0],
                y: y - 50, // Floating up
                scale: [0.5, 1.2, 1]
            }}
            transition={{ duration: 1, times: [0, 0.2, 0.8, 1] }}
            className="absolute z-20 pointer-events-none whitespace-nowrap"
            style={{ left: 0, top: 0 }} // Positioning handled by motion.div
        >
            <div className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-3 py-1 bg-black/40 rounded-full border border-white/20 backdrop-blur-sm">
                {text}
            </div>
        </motion.div>
    );
}
