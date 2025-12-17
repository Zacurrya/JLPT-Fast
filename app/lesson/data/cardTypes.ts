// Card type definitions
export type CardType =
    | 'info'           // Information card with text
    | 'kana-learn'     // Learn new kana characters
    | 'kana-mcq'       // Kana multiple choice quiz
    | 'kana-matching'  // Kana matching game
    | 'typing'         // Typing practice
    | 'mcq'            // Multiple choice quiz
    | 'sentence-builder'  // Build sentence from blocks
    | 'text-choice'    // Conversation-based multiple choice
    | 'kanji-learn'    // Learn single Kanji
    | 'complete';      // Lesson completion

// Base card interface
export interface BaseCard {
    type: CardType;
}

// Info card - displays information
export interface InfoCard extends BaseCard {
    type: 'info';
    heading: string;
    headingReading?: string; // Optional reading hint (romaji for kana, kana for kanji)
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

// Text choice card - conversation-based multiple choice
export interface TextChoiceCard extends BaseCard {
    type: 'text-choice';
    speakerName: string;
    speakerReading?: string; // Optional reading in kana
    conversation: {
        speaker: string;
        text: string;
        isUser?: boolean; // If true, this is the user's response placeholder
        hint?: string; // Optional hint/translation shown on hover
        showHintIcon?: boolean; // If true, shows an info icon for unlearned/optional phrases
    }[];
    instruction: string;
    choices: {
        text: string;
        isCorrect: boolean;
    }[];
    scorable: boolean;
}

// Kanji learning card
export interface KanjiLearnCard extends BaseCard {
    type: 'kanji-learn';
    kanji: string;
    meaning: string;
    onyomi?: string[];
    kunyomi?: string[];
    romaji?: string;
    mnemonic?: string;
}

// Union type for all cards
export type LessonCard =
    | InfoCard
    | KanaLearnCard
    | KanaMCQCard
    | KanaMatchingCard
    | TypingCard
    | MCQCard
    | SentenceBuilderCard
    | TextChoiceCard
    | KanjiLearnCard;
