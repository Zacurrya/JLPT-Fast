// Card type definitions
export type CardType =
    | 'info'           // Information card with text
    | 'kana-learn'     // Learn new kana characters
    | 'kana-mcq'       // Kana multiple choice quiz
    | 'kana-matching'  // Kana matching game
    | 'typing'         // Typing practice
    | 'mcq'            // Multiple choice quiz
    | 'sentence-builder'  // Build sentence from blocks
    | 'complete';      // Lesson completion

// Base card interface
export interface BaseCard {
    type: CardType;
}

// Info card - displays information
export interface InfoCard extends BaseCard {
    type: 'info';
    heading: string;
    text: string;
    structure?: string; // Optional grammar structure
    example?: {
        jp: string;
        romaji: string;
        en: string;
    };
}

// Kana learning card
export interface KanaLearnCard extends BaseCard {
    type: 'kana-learn';
    characters: {
        kana: string;
        romaji: string;
        desc?: string;
    }[];
}

// Kana MCQ card
export interface KanaMCQCard extends BaseCard {
    type: 'kana-mcq';
    characters: {
        kana: string;
        romaji: string;
        desc?: string;
    }[];
    scorable: boolean; // Whether this contributes to final score
}

// Kana matching card
export interface KanaMatchingCard extends BaseCard {
    type: 'kana-matching';
    characters: {
        kana: string;
        romaji: string;
        desc?: string;
    }[];
    scorable: boolean; // Whether this contributes to final score
}

// Typing practice card
export interface TypingCard extends BaseCard {
    type: 'typing';
    targetKana: string;
    meaning: string;
    romaji?: string;
}

// MCQ card
export interface MCQCard extends BaseCard {
    type: 'mcq';
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string;
    scorable: boolean; // Whether this contributes to final score
    showRomaji?: boolean; // Enable automatic Romaji translation
}

// Sentence builder card
export interface SentenceBuilderCard extends BaseCard {
    type: 'sentence-builder';
    englishPrompt: string;
    correctSentence: string[]; // Array of words/particles in correct order
    scorable: boolean;
}

// Union type for all cards
export type LessonCard =
    | InfoCard
    | KanaLearnCard
    | KanaMCQCard
    | KanaMatchingCard
    | TypingCard
    | MCQCard
    | SentenceBuilderCard;

// Lesson interface
export interface Lesson {
    id: string;
    title: string;
    description: string;
    cards: LessonCard[];
    isQuiz?: boolean; // Mark as end-of-topic quiz
    iconType?: 'food' | 'people' | 'question' | 'kana' | 'book' | 'kanji' | 'time' | 'trophy' | 'location' | 'travel' | 'shopping'; // Optional icon override
}

// Chapter interface
export interface Chapter {
    id: string;
    number: number;
    title: string;
    description: string;
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
