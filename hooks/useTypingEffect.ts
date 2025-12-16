import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
    text: string;
    speed?: number; // milliseconds per character
    startDelay?: number; // delay before starting to type
    enabled?: boolean; // whether to enable the effect
}

export function useTypingEffect({
    text,
    speed = 50,
    startDelay = 0,
    enabled = true
}: UseTypingEffectOptions) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!enabled) {
            setDisplayedText(text);
            setIsComplete(true);
            return;
        }

        setDisplayedText("");
        setIsTyping(false);
        setIsComplete(false);

        const startTimeout = setTimeout(() => {
            setIsTyping(true);
            let currentIndex = 0;

            const typingInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.substring(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    setIsTyping(false);
                    setIsComplete(true);
                    clearInterval(typingInterval);
                }
            }, speed);

            return () => clearInterval(typingInterval);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [text, speed, startDelay, enabled]);

    return { displayedText, isTyping, isComplete };
}
