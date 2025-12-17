"use client";

import { useState, useCallback, use } from "react";
import { Lesson } from "@/app/learn/data";
import { n5Chapters } from "@/app/data/lessons";
import LessonComplete from "../LessonComplete";
import LessonProgressBar from "../components/LessonProgressBar";
import Link from "next/link";
import LessonHeader from "../components/LessonHeader";
import CardRenderer from "../components/CardRenderer";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Find a lesson by ID from all chapters
function findLessonById(id: string): Lesson | undefined {
    for (const chapter of n5Chapters) {
        const lesson = chapter.lessons.find((l: Lesson) => l.id === id);
        if (lesson) return lesson;
    }
    return undefined;
}

export default function LessonPage({ params }: PageProps) {
    const { slug } = use(params);
    const lesson = findLessonById(slug);

    if (!lesson) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-destructive">Lesson Not Found</h1>
                <p className="text-muted-foreground">Could not find a lesson with ID: <code className="bg-muted px-2 py-1 rounded">{slug}</code></p>
                <Link href="/learn" className="text-primary hover:underline">
                    ← Back to Learn
                </Link>
            </div>
        );
    }

    return <LessonView lesson={lesson} />;
}

interface LessonViewProps {
    lesson: Lesson;
}

function LessonView({ lesson }: LessonViewProps) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    // Score tracking
    const [scores, setScores] = useState<{ [cardIndex: number]: { score: number; total: number } }>({});
    const [isComplete, setIsComplete] = useState(false);

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
    const handleScoreUpdate = useCallback((score: number, total: number) => {
        setScores(prev => ({
            ...prev,
            [currentCardIndex]: { score, total }
        }));
    }, [currentCardIndex]);

    // Move to next card
    const handleNext = useCallback(() => {
        if (currentCardIndex < lesson.cards.length - 1) {
            setCurrentCardIndex(prev => prev + 1);
        } else {
            setIsComplete(true);
        }
    }, [currentCardIndex, lesson.cards.length]);

    // Render completion screen
    if (isComplete) {
        const { score, total } = calculateFinalScore();
        return (
            <>
                <LessonHeader title={lesson.title} description={lesson.description} />
                <LessonComplete score={score} total={total} currentLessonId={lesson.id} />
            </>
        );
    }

    return (
        <>
            <LessonHeader title={lesson.title} description={lesson.description} />
            <div className="container mx-auto px-4 md:px-6 pt-6 md:pt-14">
                <div className="max-w-2xl mx-auto">
                    <LessonProgressBar current={currentCardIndex} total={lesson.cards.length} />
                    <CardRenderer
                        key={currentCardIndex}
                        card={currentCard}
                        currentIndex={currentCardIndex}
                        total={lesson.cards.length}
                        onNext={handleNext}
                        onScoreUpdate={handleScoreUpdate}
                    />
                </div>
            </div>
        </>
    );
}
