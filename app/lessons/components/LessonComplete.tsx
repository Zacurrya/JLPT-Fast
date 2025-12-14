"use client";

import { CheckCircle, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";
import { n5Lessons } from "../lessonData";
import Confetti from 'react-confetti';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface LessonCompleteProps {
    score: number;
    total: number;
    currentLessonId: string;
}

export default function LessonComplete({ score, total, currentLessonId }: LessonCompleteProps) {
    const router = useRouter();
    const currentIndex = n5Lessons.findIndex(l => l.id === currentLessonId);
    const nextLesson = currentIndex !== -1 && currentIndex < n5Lessons.length - 1
        ? n5Lessons[currentIndex + 1]
        : null;

    const percentage = (score / total) * 100;
    const isSuccess = percentage >= 50;

    // Window size for confetti
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        // Initial set
        updateSize();

        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);



    const handleNext = () => {
        if (nextLesson && isSuccess) {
            router.push(`/lessons/${nextLesson.id}`);
        } else {
            router.push('/lessons');
        }
    };

    const handleBack = () => {
        router.push('/lessons');
    };

    const handleRetry = () => {
        window.location.reload();
    };

    useKeyboardNavigation({
        onNext: isSuccess ? handleNext : undefined,
        onBack: handleBack,
        onRetry: handleRetry,
        onEnter: handleNext
    });


    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 relative">
            {isSuccess && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    <Confetti
                        width={windowSize.width}
                        height={windowSize.height}
                        recycle={false}
                        numberOfPieces={500}
                        gravity={0.15}
                    />
                </div>
            )}

            <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`w-32 h-32 rounded-full flex items-center justify-center mb-4 shadow-2xl ${isSuccess ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-500"
                    }`}
            >
                {isSuccess ? <CheckCircle size={64} strokeWidth={3} /> : <RotateCcw size={56} strokeWidth={3} />}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
            >
                <h2 className="text-5xl font-serif font-bold tracking-tight">
                    {isSuccess ? "Lesson Complete!" : "Keep Practicing!"}
                </h2>
                <p className="text-2xl text-muted-foreground font-medium">
                    You scored <span className={isSuccess ? "text-primary font-bold" : "text-orange-500 font-bold"}>{score}</span> out of {total}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 pt-8"
            >
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                    <RotateCcw size={20} />
                    Retry
                </button>

                {nextLesson && isSuccess ? (
                    <Link
                        href={`/lessons/${nextLesson.id}`}
                        className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform active:scale-95 flex items-center gap-2"
                    >
                        Next: {nextLesson.title}
                        <ArrowRight size={20} />
                    </Link>
                ) : (
                    <Link
                        href="/lessons"
                        className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform active:scale-95"
                    >
                        Back to Lessons
                    </Link>
                )}
            </motion.div>

            {/* Enter key hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-muted-foreground"
            >
                Press <span className="mx-1 font-bold border border-border px-2 py-1 rounded bg-muted/50">Enter</span> to {nextLesson && isSuccess ? 'continue to next lesson' : 'return to lessons'}
            </motion.div>
        </div>
    );
}
