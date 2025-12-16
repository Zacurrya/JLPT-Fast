"use client";

import { useState, useCallback } from "react";
import { Lesson, LessonCard } from "../data";
import InfoCard from "./cardTypes/LessonCard";
import LessonComplete from "./LessonComplete";
import TypingCard from "./cardTypes/TypingCard";
import SingleKanaCard from "./cardTypes/SingleKanaCard";
import KanaMCQ from "./cardTypes/KanaMCQ";
import KanaMatchingQuiz from "./cardTypes/KanaMatchingQuiz";
import McqCard from "../../components/ui/McqCard";
import SentenceBuilder from "./cardTypes/SentenceBuilder";
import TextChoiceCard from "./cardTypes/TextChoiceCard";

interface LessonViewProps {
    lesson: Lesson;
}

type KanaLearningStep = "learn" | "quiz";

export default function LessonView({ lesson }: LessonViewProps) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [kanaLearningStep, setKanaLearningStep] = useState<KanaLearningStep>("learn");
    const [currentKanaIndex, setCurrentKanaIndex] = useState(0);

    // Score tracking
    const [scores, setScores] = useState<{ [cardIndex: number]: { score: number; total: number } }>({});
    const [isComplete, setIsComplete] = useState(false);

    // MCQ state
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    const currentCard = lesson.cards[currentCardIndex];

    // Calculate total score
    const calculateFinalScore = useCallback(() => {
        let totalScore = 0;
        let totalPossible = 0;

        Object.values(scores).forEach(({ score, total }) => {
            totalScore += score;
            totalPossible += total;
        });

        return { score: totalScore, total: totalPossible };
    }, [scores]);

    // Handle score updates from quiz cards
    const handleScoreUpdate = useCallback((cardIndex: number, score: number, total: number) => {
        setScores(prev => ({
            ...prev,
            [cardIndex]: { score, total }
        }));
    }, []);

    // Move to next card
    const handleNext = useCallback(() => {
        if (currentCardIndex < lesson.cards.length - 1) {
            setCurrentCardIndex(prev => prev + 1);
            setKanaLearningStep("learn");
            setCurrentKanaIndex(0);
            setSelectedOption(null);
            setIsAnswerChecked(false);
        } else {
            setIsComplete(true);
        }
    }, [currentCardIndex, lesson.cards.length]);

    // Handle kana learning progression
    const handleKanaNext = useCallback(() => {
        const card = currentCard;
        if (card.type !== 'kana-learn' && card.type !== 'kana-mcq') return;

        if (card.type === 'kana-learn') {
            // For kana-learn, move through each character
            if (kanaLearningStep === "learn") {
                if (currentKanaIndex < card.characters.length - 1) {
                    setCurrentKanaIndex(prev => prev + 1);
                } else {
                    // All characters learned, move to next card
                    handleNext();
                }
            }
        } else if (card.type === 'kana-mcq') {
            // For kana-mcq, the component handles its own progression
            handleNext();
        }
    }, [currentCard, kanaLearningStep, currentKanaIndex, handleNext]);

    // Handle MCQ answer check
    const handleCheckAnswer = useCallback(() => {
        if (!selectedOption || isAnswerChecked) return;

        const card = currentCard;
        if (card.type !== 'mcq') return;

        setIsAnswerChecked(true);

        if (card.scorable) {
            const isCorrect = selectedOption === card.correctAnswer;
            handleScoreUpdate(currentCardIndex, isCorrect ? 1 : 0, 1);
        }
    }, [selectedOption, isAnswerChecked, currentCard, currentCardIndex, handleScoreUpdate]);

    // Handle MCQ next
    const handleMCQNext = useCallback(() => {
        if (isAnswerChecked) {
            handleNext();
        }
    }, [isAnswerChecked, handleNext]);

    // Render completion screen
    if (isComplete) {
        const { score, total } = calculateFinalScore();
        return <LessonComplete score={score} total={total} currentLessonId={lesson.id} />;
    }

    // Render current card based on type
    const renderCard = () => {
        const progress = ((currentCardIndex) / lesson.cards.length) * 100;

        switch (currentCard.type) {
            case 'info':
                return (
                    <InfoCard
                        segment={{
                            heading: currentCard.heading,
                            text: currentCard.text,
                            example: currentCard.example
                        }}
                        currentIndex={currentCardIndex}
                        total={lesson.cards.length}
                        onNext={handleNext}
                        isLast={currentCardIndex === lesson.cards.length - 1}
                        structure={currentCard.structure}
                    />
                );

            case 'kana-learn':
                const currentChar = currentCard.characters[currentKanaIndex];
                return (
                    <SingleKanaCard
                        kana={currentChar.kana}
                        romaji={currentChar.romaji}
                        desc={currentChar.desc}
                        mode="learn"
                        onNext={handleKanaNext}
                        currentIndex={currentCardIndex}
                        total={lesson.cards.length}
                    />
                );

            case 'kana-mcq':
                return (
                    <KanaMCQ
                        characters={currentCard.characters}
                        currentIndex={currentCardIndex}
                        total={lesson.cards.length}
                        onNext={handleNext}
                        onScoreUpdate={currentCard.scorable ? (score, total) => handleScoreUpdate(currentCardIndex, score, total) : undefined}
                    />
                );

            case 'kana-matching':
                return (
                    <KanaMatchingQuiz
                        characters={currentCard.characters}
                        onComplete={handleNext}
                        onScoreUpdate={currentCard.scorable ? (score, total) => handleScoreUpdate(currentCardIndex, score, total) : undefined}
                    />
                );

            case 'typing':
                return (
                    <TypingCard
                        targetKana={currentCard.targetKana}
                        meaning={currentCard.meaning}
                        onComplete={handleNext}
                        onSkip={handleNext}
                    />
                );

            case 'mcq':
                return (
                    <McqCard
                        question={currentCard.question}
                        options={currentCard.options}
                        correctAnswer={currentCard.correctAnswer}
                        selectedOption={selectedOption}
                        isAnswerChecked={isAnswerChecked}
                        onOptionSelect={(opt) => !isAnswerChecked && setSelectedOption(opt)}
                        onCheckAnswer={handleCheckAnswer}
                        onNext={handleMCQNext}
                        currentIndex={currentCardIndex}
                        total={lesson.cards.length}
                        className="max-w-2xl mx-auto w-full"
                        showRomaji={currentCard.showRomaji}
                    />
                );

            case 'sentence-builder':
                return (
                    <SentenceBuilder
                        englishPrompt={currentCard.englishPrompt}
                        correctSentence={currentCard.correctSentence}
                        currentIndex={currentCardIndex}
                        total={lesson.cards.length}
                        onNext={handleNext}
                        onScoreUpdate={currentCard.scorable ? (score, total) => handleScoreUpdate(currentCardIndex, score, total) : undefined}
                        scorable={currentCard.scorable}
                    />
                );

            case 'text-choice':
                return (
                    <TextChoiceCard
                        speakerName={currentCard.speakerName}
                        speakerReading={currentCard.speakerReading}
                        conversation={currentCard.conversation}
                        instruction={currentCard.instruction}
                        choices={currentCard.choices}
                        currentIndex={currentCardIndex}
                        total={lesson.cards.length}
                        onNext={handleNext}
                        onScoreUpdate={currentCard.scorable ? (score, total) => handleScoreUpdate(currentCardIndex, score, total) : undefined}
                        scorable={currentCard.scorable}
                    />
                );

            default:
                return (
                    <div className="text-center">
                        <p>Unknown card type</p>
                        <button onClick={handleNext} className="mt-4 px-6 py-2 bg-primary text-white rounded">
                            Skip
                        </button>
                    </div>
                );
        }
    };

    return renderCard();
}
