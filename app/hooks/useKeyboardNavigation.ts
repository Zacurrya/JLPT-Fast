import { useEffect } from 'react';

type KeyAction = () => void;

interface NavigationConfig {
    onNext?: KeyAction;
    onBack?: KeyAction;
    onRetry?: KeyAction;
    onEnter?: KeyAction;
}

export function useKeyboardNavigation({ onNext, onBack, onRetry, onEnter }: NavigationConfig) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowRight':
                    if (onNext) {
                        e.preventDefault();
                        onNext();
                    }
                    break;
                case 'ArrowLeft':
                    if (onBack) {
                        e.preventDefault();
                        onBack();
                    }
                    break;
                case 'r':
                case 'R':
                    // Optional: 'R' for retry
                    if (onRetry) {
                        e.preventDefault();
                        onRetry();
                    }
                    break;
                case 'Enter':
                    if (onEnter) {
                        e.preventDefault();
                        onEnter();
                    } else if (onNext) {
                        // Default Enter to Next if no specific Enter handler
                        e.preventDefault();
                        onNext();
                    }
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNext, onBack, onRetry, onEnter]);
}
