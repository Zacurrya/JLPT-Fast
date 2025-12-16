// Re-export all card types from cardTypes.ts
export {
    type CardType,
    type BaseCard,
    type InfoCard,
    type KanaLearnCard,
    type KanaMCQCard,
    type KanaMatchingCard,
    type TypingCard,
    type MCQCard,
    type SentenceBuilderCard,
    type TextChoiceCard,
    type LessonCard,
} from './cardTypes';

import { LessonCard } from './cardTypes';

// Lesson interface
export interface Lesson {
    id: string;
    title: string;
    description: string;
    cards: LessonCard[];
    isQuiz?: boolean; // Mark as end-of-topic quiz
    videoUrl?: string;
    iconType?: 'food' | 'people' | 'question' | 'kana' | 'book' | 'kanji' | 'time' | 'trophy' | 'location' | 'travel' | 'shopping'; // Optional icon override
}

// Chapter interface
export interface Chapter {
    id: string;
    number: number;
    title: string;
    description: string;
    image?: string;
    lessons: Lesson[];
    theme: {
        primaryGradient: string;
        secondaryGradient: string; // For the badge or darker elements
        ringColor: string;
        textColors: {
            title: string;
            description: string;
        }
    };
}
