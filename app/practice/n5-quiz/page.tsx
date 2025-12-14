"use client";

import { useState, useEffect } from "react";
import { n5Questions } from "./contexts/questions";
import { sentenceQuestions } from "./contexts/sentence_questions";
import { listeningQuestions } from "./contexts/listening_questions";
import { Question } from "./contexts/types";
import { motion, AnimatePresence } from "framer-motion";
import QuizInput from "./components/QuizInput";
import NextButton from "./components/NextButton";
import ChoiceList from "./components/ChoiceList";
import QuizHistoryBar from "./components/QuizHistoryBar";
import QuizStartScreen from "./components/QuizStartScreen";
import QuizResultsScreen from "./components/QuizResultsScreen";
import QuizSettingsModal from "./components/QuizSettingsModal";
import QuizFeedback from "./components/QuizFeedback";
import AudioPlayer from "./components/AudioPlayer";
import { getQuestionInstruction, shuffleArray, isInputQuestion } from "./utils/quizHelpers";
import { useEnterSubmit } from "../../../hooks/useEnterSubmit";

export default function N5QuizPage() {
    // Game State
    const [quizState, setQuizState] = useState<"start" | "playing" | "finished">("start");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState<(boolean | null)[]>([]);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(-1);

    // Input State
    const [inputValue, setInputValue] = useState("");
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

    // UI State
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    // Quiz Settings State
    const [selectedCategories, setSelectedCategories] = useState({
        vocab: true,
        sentences: true,
        listening: true
    });

    const resetTurn = () => {
        setSelectedOption(null);
        setInputValue("");
        setIsAnswered(false);
        setFeedback(null);
        setFocusedOptionIndex(-1);
    };

    const startQuiz = (count: number) => {
        let pool: Question[] = [];
        if (selectedCategories.vocab) pool = [...pool, ...n5Questions];
        if (selectedCategories.sentences) pool = [...pool, ...sentenceQuestions];
        if (selectedCategories.listening) pool = [...pool, ...listeningQuestions];

        if (pool.length === 0) {
            setIsSettingsOpen(true);
            return;
        }

        const shuffled = shuffleArray(pool);
        setQuestions(shuffled.slice(0, count));
        setHistory(new Array(count).fill(null));
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizState("playing");
        resetTurn();
    };

    const currentQ = questions[currentQuestionIndex];
    const isInputType = currentQ ? isInputQuestion(currentQ) : false;

    const submitAnswer = (answer: string) => {
        setIsAnswered(true);
        const correct = currentQ.correctAnswer;

        // Normalize function to handle particle は (wa/ha)
        const normalize = (str: string): string => {
            // Replace standalone particle "wa" with "は"
            // This allows users to type "wa" for the particle は
            return str.replace(/^wa$/i, 'は')
                .replace(/\swa\s/gi, ' は ')
                .replace(/\swa$/gi, ' は')
                .replace(/^wa\s/gi, 'は ');
        };

        const normalizedAnswer = normalize(answer);
        let isCorrect = false;

        if (Array.isArray(correct)) {
            // Normalize each correct answer and check
            isCorrect = correct.some(c => normalize(c) === normalizedAnswer || c === normalizedAnswer);
        } else {
            isCorrect = normalize(correct) === normalizedAnswer || correct === normalizedAnswer;
        }

        if (isCorrect) {
            setScore(prev => prev + 1);
            setFeedback("correct");
        } else {
            setFeedback("incorrect");
        }

        setHistory(prev => {
            const newHistory = [...prev];
            newHistory[currentQuestionIndex] = isCorrect;
            return newHistory;
        });
    };

    const handleOptionSelect = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        submitAnswer(option);
    };

    const handleInputSubmit = () => {
        if (isAnswered || !inputValue.trim()) return;
        submitAnswer(inputValue.trim());
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            resetTurn();
        } else {
            setQuizState("finished");
        }
    };

    const toggleCategory = (category: 'vocab' | 'sentences' | 'listening') => {
        setSelectedCategories(prev => ({ ...prev, [category]: !prev[category] }));
    };

    // Global Enter key listener for Next Question
    useEnterSubmit(nextQuestion, isAnswered);

    // Arrow Key Navigation for Choice Questions
    useEffect(() => {
        if (!currentQ || isInputType || isAnswered) return;

        const handleArrowKey = (e: KeyboardEvent) => {
            if (!currentQ.options) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setFocusedOptionIndex(prev => Math.min(prev + 1, currentQ.options!.length - 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setFocusedOptionIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === "Enter" && focusedOptionIndex >= 0) {
                e.preventDefault();
                e.stopPropagation();
                handleOptionSelect(currentQ.options![focusedOptionIndex]);
            }
        };

        window.addEventListener("keydown", handleArrowKey);
        return () => window.removeEventListener("keydown", handleArrowKey);
    }, [currentQ, isInputType, isAnswered, focusedOptionIndex]);

    return (
        <div className="min-h-screen w-full bg-[#FAFAFA] text-gray-900 flex flex-col items-center justify-center p-4">
            <AnimatePresence mode="wait">
                {quizState === "start" && (
                    <QuizStartScreen
                        selectedCategories={selectedCategories}
                        onOpenSettings={() => setIsSettingsOpen(true)}
                        onStartQuiz={startQuiz}
                    />
                )}

                {quizState === "playing" && currentQ && (
                    <motion.div
                        key="playing"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-lg w-full"
                    >
                        <QuizHistoryBar history={history} currentQuestionIndex={currentQuestionIndex} />

                        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 mb-6 text-center">
                            <h2 className="no-interact-text text-3xl font-serif font-bold text-gray-900 mb-2">
                                {currentQ.question}
                            </h2>
                            <p className="no-interact-text text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
                                {getQuestionInstruction(currentQ)}
                            </p>

                            {currentQ.type === "LISTENING_COMPREHENSION" && (
                                <AudioPlayer
                                    audioUrl={(currentQ as any).audioUrl}
                                    transcript={(currentQ as any).transcript}
                                />
                            )}

                            {isInputType && (
                                <div className="space-y-6" key={currentQ.id}>
                                    <QuizInput
                                        value={inputValue}
                                        onChange={setInputValue}
                                        onSubmit={handleInputSubmit}
                                        disabled={isAnswered}
                                        autoFocus
                                    />
                                    {isAnswered && feedback && (
                                        <QuizFeedback feedback={feedback} correctAnswer={currentQ.correctAnswer} />
                                    )}
                                </div>
                            )}

                            {!isInputType && currentQ.options && (
                                <ChoiceList
                                    options={currentQ.options}
                                    correctAnswer={currentQ.correctAnswer}
                                    selectedOption={selectedOption}
                                    isAnswered={isAnswered}
                                    focusedOptionIndex={focusedOptionIndex}
                                    onOptionSelect={handleOptionSelect}
                                    onOptionFocus={setFocusedOptionIndex}
                                />
                            )}
                        </div>

                        <div className="flex justify-end h-14">
                            {isAnswered && (
                                <NextButton
                                    isLastQuestion={currentQuestionIndex >= questions.length - 1}
                                    onClick={nextQuestion}
                                />
                            )}
                        </div>
                    </motion.div>
                )}

                {quizState === "finished" && (
                    <QuizResultsScreen
                        score={score}
                        totalQuestions={questions.length}
                        onRestart={() => setQuizState("start")}
                    />
                )}
            </AnimatePresence>

            <QuizSettingsModal
                isOpen={isSettingsOpen}
                selectedCategories={selectedCategories}
                questionCounts={{
                    vocab: n5Questions.length,
                    sentences: sentenceQuestions.length,
                    listening: listeningQuestions.length
                }}
                onToggleCategory={toggleCategory}
                onClose={() => setIsSettingsOpen(false)}
            />
        </div>
    );
}
