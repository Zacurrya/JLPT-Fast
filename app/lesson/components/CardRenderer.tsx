"use client";

import { useState, useCallback } from "react";
import { LessonCard } from "@/app/lesson/data/cardTypes";
import InfoCard from "@cards/LessonCard";
import TypingCard from "@cards/TypingCard";
import SingleKanaCard from "@cards/SingleKanaCard";
import KanaMCQ from "@cards/KanaMCQ";
import KanaMatchingQuiz from "@cards/KanaMatchingQuiz";
import McqCard from "@cards/McqCard";
import KanjiLearnCard from "@cards/KanjiLearnCard";
import SentenceBuilder from "@cards/SentenceBuilder";
import TextChoiceCard from "@cards/TextChoiceCard";

interface CardRendererProps {
    card: LessonCard;
    currentIndex: number;
    total: number;
    onNext: () => void;
    onScoreUpdate: (score: number, total: number) => void;
}

export default function CardRenderer({
    card,
    currentIndex,
    total,
    onNext,
    onScoreUpdate
}: CardRendererProps) {
    // Kana learning state
    const [currentKanaIndex, setCurrentKanaIndex] = useState(0);

    // MCQ state
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    // Reset state when card changes
    const resetState = useCallback(() => {
        setCurrentKanaIndex(0);
        setSelectedOption(null);
        setIsAnswerChecked(false);
    }, []);

    // Handle kana learning progression
    const handleKanaNext = useCallback(() => {
        if (card.type === 'kana-learn') {
            if (currentKanaIndex < card.characters.length - 1) {
                setCurrentKanaIndex(prev => prev + 1);
            } else {
                resetState();
                onNext();
            }
        } else {
            resetState();
            onNext();
        }
    }, [card, currentKanaIndex, onNext, resetState]);

    // Handle MCQ answer check
    const handleCheckAnswer = useCallback(() => {
        if (!selectedOption || isAnswerChecked) return;
        if (card.type !== 'mcq') return;

        setIsAnswerChecked(true);

        if (card.scorable) {
            const isCorrect = selectedOption === card.correctAnswer;
            onScoreUpdate(isCorrect ? 1 : 0, 1);
        }
    }, [selectedOption, isAnswerChecked, card, onScoreUpdate]);

    // Handle MCQ next
    const handleMCQNext = useCallback(() => {
        if (isAnswerChecked) {
            resetState();
            onNext();
        }
    }, [isAnswerChecked, onNext, resetState]);

    // Handle generic next with reset
    const handleNextWithReset = useCallback(() => {
        resetState();
        onNext();
    }, [onNext, resetState]);

    switch (card.type) {
        case 'info':
            return (
                <InfoCard
                    segment={{
                        heading: card.heading,
                        text: card.text,
                        example: card.example
                    }}
                    currentIndex={currentIndex}
                    total={total}
                    onNext={handleNextWithReset}
                    isLast={currentIndex === total - 1}
                    structure={card.structure}
                />
            );

        case 'kana-learn':
            const currentChar = card.characters[currentKanaIndex];
            return (
                <SingleKanaCard
                    kana={currentChar.kana}
                    romaji={currentChar.romaji}
                    desc={currentChar.desc}
                    mode="learn"
                    onNext={handleKanaNext}
                    currentIndex={currentIndex}
                    total={total}
                />
            );

        case 'kana-mcq':
            return (
                <KanaMCQ
                    characters={card.characters}
                    currentIndex={currentIndex}
                    total={total}
                    onNext={handleNextWithReset}
                    onScoreUpdate={card.scorable ? onScoreUpdate : undefined}
                />
            );

        case 'kana-matching':
            return (
                <KanaMatchingQuiz
                    characters={card.characters}
                    onComplete={handleNextWithReset}
                    onScoreUpdate={card.scorable ? onScoreUpdate : undefined}
                />
            );

        case 'typing':
            return (
                <TypingCard
                    targetKana={card.targetKana}
                    meaning={card.meaning}
                    onComplete={handleNextWithReset}
                    onSkip={handleNextWithReset}
                />
            );

        case 'mcq':
            return (
                <McqCard
                    question={card.question}
                    options={card.options}
                    correctAnswer={card.correctAnswer}
                    selectedOption={selectedOption}
                    isAnswerChecked={isAnswerChecked}
                    onOptionSelect={(opt) => !isAnswerChecked && setSelectedOption(opt)}
                    onCheckAnswer={handleCheckAnswer}
                    onNext={handleMCQNext}
                    currentIndex={currentIndex}
                    total={total}
                    className="max-w-2xl mx-auto w-full"
                    showRomaji={card.showRomaji}
                />
            );

        case 'sentence-builder':
            return (
                <SentenceBuilder
                    englishPrompt={card.englishPrompt}
                    correctSentence={card.correctSentence}
                    currentIndex={currentIndex}
                    total={total}
                    onNext={handleNextWithReset}
                    onScoreUpdate={card.scorable ? onScoreUpdate : undefined}
                    scorable={card.scorable}
                />
            );

        case 'text-choice':
            return (
                <TextChoiceCard
                    speakerName={card.speakerName}
                    speakerReading={card.speakerReading}
                    conversation={card.conversation}
                    instruction={card.instruction}
                    choices={card.choices}
                    currentIndex={currentIndex}
                    total={total}
                    onNext={handleNextWithReset}
                    onScoreUpdate={card.scorable ? onScoreUpdate : undefined}
                    scorable={card.scorable}
                />
            );

        case 'kanji-learn':
            return (
                <KanjiLearnCard
                    kanji={card.kanji}
                    meaning={card.meaning}
                    onyomi={card.onyomi}
                    kunyomi={card.kunyomi}
                    romaji={card.romaji}
                    mnemonic={card.mnemonic}
                    onNext={handleNextWithReset}
                    currentIndex={currentIndex}
                    total={total}
                />
            );

        default:
            return (
                <div className="text-center">
                    <p>Unknown card type</p>
                    <button onClick={handleNextWithReset} className="mt-4 px-6 py-2 bg-primary text-white rounded">
                        Skip
                    </button>
                </div>
            );
    }
}
