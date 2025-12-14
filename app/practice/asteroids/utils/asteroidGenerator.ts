import { VocabItem, vocabularyData } from "./vocabularyData";
import { Difficulty, GAME_SETTINGS } from "./gameSettings";

export interface FallingAsteroid {
    id: string;
    vocab: VocabItem;
    x: number;
    y: number;
    speed: number;
    isDying?: boolean; // New: destroyed but still explaining
    opacity?: number;  // New: for fading
}

interface GeneratorOptions {
    difficulty: Difficulty;
    showKanji: boolean;
    showKana: boolean;
    nextId: number;
}

export const getFilteredVocab = (showKanji: boolean, showKana: boolean): VocabItem[] => {
    if (!showKanji && !showKana) return [];
    if (showKanji && showKana) return vocabularyData;
    if (showKanji) return vocabularyData.filter(v => v.kanji);
    // showKana only - return all (filtering happens in display) or just filter if needed.
    // For now returning all as per original logic implies kana is always available.
    return vocabularyData;
};

export const generateAsteroid = (options: GeneratorOptions): FallingAsteroid | null => {
    const { difficulty, showKanji, showKana, nextId } = options;

    const filteredVocab = getFilteredVocab(showKanji, showKana);
    if (filteredVocab.length === 0) return null;

    const vocab = filteredVocab[Math.floor(Math.random() * filteredVocab.length)];
    const settings = GAME_SETTINGS[difficulty];

    // Randomize speed
    // variance logic: base + (random * variance - variance/2)
    const speed = settings.baseSpeed + (Math.random() * settings.speedVariance - (settings.speedVariance / 2));

    return {
        id: `asteroid-${nextId}`,
        vocab,
        x: Math.random() * 80 + 10, // 10-90% to avoid edges
        y: -100,
        speed: Math.max(0.1, speed) // Ensure positive speed
    };
};
