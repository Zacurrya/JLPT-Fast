"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Chapter } from '../../data';
import { LessonButton } from './pathButtons/LessonButton';
import { Crown } from 'lucide-react';

interface ChapterPathProps {
    chapter: Chapter;
}

export const ChapterPath = ({ chapter }: ChapterPathProps) => {
    const isFinalExam = chapter.id.includes('final-exam');
    const isChapterTest = chapter.id.includes('-test');

    if (isFinalExam) {
        return (
            <div className="relative">
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    {chapter.lessons.map((lesson, lessonIndex) => {
                        const isQuiz = lesson.isQuiz;
                        return (
                            <LessonButton key={lesson.id} lesson={lesson} />
                        );
                    })}
                </div>
            </div>
        );
    }

    // Chapter Test/Review - Single gold exam button without titles
    if (isChapterTest) {
        const lesson = chapter.lessons[0];
        if (!lesson) return null;

        return (
            <div className="relative flex flex-col items-center py-8">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    <Link href={`/lessons/${lesson.id}`} className="group relative block">
                        {/* Tooltip */}
                        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap z-20 pointer-events-none">
                            <span className="text-sm font-bold text-gray-800">{lesson.title}</span>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-100"></div>
                        </div>

                        {/* Gold Exam Node */}
                        <div className="exam-node w-20 h-20 rounded-full flex items-center justify-center relative ring-4 ring-amber-200">
                            <div className="text-white drop-shadow-md relative z-10">
                                <Crown className="w-10 h-10" fill="currentColor" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        );
    }

    // Vertical Layout with Curved Path
    const ITEM_HEIGHT = 80;
    const SPACING = 60;
    const STEP_Y = ITEM_HEIGHT + SPACING;
    const AMPLITUDE = 60;

    return (
        <div className="relative flex flex-col items-center">

            {/* Videos */}
            {chapter.lessons.map((lesson, i) => {
                if (!lesson.videoUrl || i === chapter.lessons.length - 1) return null;
                const videoId = lesson.videoUrl.split('v=')[1]?.split('&')[0];
                if (!videoId) return null;

                // Position logic - Align with the "second lesson" of the curve (i+1)
                const nextY = ((i + 1) * STEP_Y) + (ITEM_HEIGHT / 2);

                // Bend direction logic
                // Check position of the target node (i+1)
                const x1 = Math.sin((i + 1) * 1.5) * AMPLITUDE;

                // If target node is on Right (+x), put video on Left (-x)
                const isRight = x1 > 0;
                const xOffset = isRight ? -240 : 240;

                return (
                    <div
                        key={`video-${i}`}
                        className="absolute z-20 w-80 h-44 rounded-xl shadow-2xl overflow-hidden pointer-events-auto"
                        style={{
                            top: nextY - 88, // Centered vertically on nextY (h/2 = 88)
                            left: `calc(50% + ${xOffset}px)`,
                            transform: 'translateX(-50%)'
                        }}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
                            title="Lesson Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                )
            })}

            {chapter.lessons.map((lesson, lessonIndex) => {
                const isQuiz = lesson.isQuiz;
                // Calculate transform based on same logic
                const xOffset = Math.sin(lessonIndex * 1.5) * AMPLITUDE;

                return (
                    <div key={lesson.id} className="relative z-10 mb-8 last:mb-0" style={{ transform: `translateX(${xOffset}px)` }}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <LessonButton lesson={lesson} />
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};
