import { useState, useCallback } from 'react';

interface UseEnglishTranslationResult {
    translation: string | null;
    loading: boolean;
    error: string | null;
    translate: (text: string) => Promise<string | null>;
}

export function useEnglishTranslation(): UseEnglishTranslationResult {
    const [translation, setTranslation] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const translate = useCallback(async (text: string) => {
        if (!text) return null;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/translate?text=${encodeURIComponent(text)}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to translate');
            }

            setTranslation(data.translation);
            return data.translation;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            console.error('Translation error:', err);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    return { translation, loading, error, translate };
}
