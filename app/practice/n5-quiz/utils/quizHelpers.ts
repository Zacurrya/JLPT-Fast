import { Question } from "../contexts/types";

export const getQuestionInstruction = (question: Question): string => {
    switch (question.type) {
        case "KANA_TO_KANJI_INPUT":
            return "Type the reading (Kana)";
        case "KANA_TO_KANJI_CHOICE":
            return "Select the correct Kanji";
        case "TRANSLATION_CHOICE":
            return "Select the correct meaning";
        case "TRANSLATION_INPUT":
            return "Type the Japanese translation";
        case "LISTENING_COMPREHENSION":
            return "Listen to the audio and answer";
    }
};

export const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const isInputQuestion = (question: Question): boolean => {
    return question.type === "KANA_TO_KANJI_INPUT" || question.type === "TRANSLATION_INPUT";
};
