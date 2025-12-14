import { Question } from "../contexts/types";

export type ListeningQuestion = Question & {
    type: "LISTENING_COMPREHENSION";
    audioUrl?: string;
    transcript?: string;
};

export const listeningQuestions: ListeningQuestion[] = [
    {
        id: 201,
        question: "What is the speaker asking for?",
        audioUrl: "/audio/n5/question_201.wav",
        transcript: "すみません、これをください。(Sumimasen, kore o kudasai.)",
        options: ["Please give me this", "Please look at this", "Please buy this", "Please take this"],
        correctAnswer: "Please give me this",
        type: "LISTENING_COMPREHENSION"
    },
    {
        id: 202,
        question: "Where does the speaker want to go?",
        audioUrl: "/audio/n5/question_202.wav",
        transcript: "駅はどこですか。(Eki wa doko desu ka.)",
        options: ["To the station", "To the school", "To the bank", "To the hospital"],
        correctAnswer: "To the station",
        type: "LISTENING_COMPREHENSION"
    },
    {
        id: 203,
        question: "What time is it now?",
        audioUrl: "/audio/n5/question_203.wav",
        transcript: "今、何時ですか。(Ima, nanji desu ka.)",
        options: ["What time is it?", "What day is it?", "How much is it?", "Who is it?"],
        correctAnswer: "What time is it?",
        type: "LISTENING_COMPREHENSION"
    },
    {
        id: 204,
        question: "What does the speaker like?",
        audioUrl: "/audio/n5/question_204.wav",
        transcript: "私は猫が好きです。(Watashi wa neko ga suki desu.)",
        options: ["Cats", "Dogs", "Birds", "Fish"],
        correctAnswer: "Cats",
        type: "LISTENING_COMPREHENSION"
    },
    {
        id: 205,
        question: "How much is the item?",
        audioUrl: "/audio/n5/question_205.wav",
        transcript: "これはいくらですか。(Kore wa ikura desu ka.)",
        options: ["How much is this?", "What is this?", "Where is this?", "Who is this?"],
        correctAnswer: "How much is this?",
        type: "LISTENING_COMPREHENSION"
    }
];
