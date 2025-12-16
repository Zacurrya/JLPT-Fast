"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Chapter } from '../data';
import { LessonIcon } from './LessonIcon';

interface ChapterPathProps {
    chapter: Chapter;
}

export const ChapterPath = ({ chapter }: ChapterPathProps) => {
    const isFinalExam = chapter.id.includes('final-exam');

    if (isFinalExam) {
        return (
            <div className="relative">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">{chapter.title}</h3>
                    <p className="text-gray-500">Complete in any order</p>
                </div>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    {chapter.lessons.map((lesson, lessonIndex) => {
                        const isQuiz = lesson.isQuiz;

                        return (
                            <motion.div
                                key={lesson.id}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: lessonIndex * 0.1 }}
                            >
                                <Link href={`/lessons/${lesson.id}`} className="group relative block">
                                    {/* Tooltip */}
                                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap z-20 pointer-events-none">
                                        <span className="text-sm font-bold text-gray-800">{lesson.title}</span>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-100"></div>
                                    </div>

                                    {/* Node Circle */}
                                    <div className={`
                                            w-24 h-24 rounded-full flex items-center justify-center shadow-[0_8px_0_0_rgba(0,0,0,0.15)]
                                            transition-all active:translate-y-[4px] active:shadow-[0_4px_0_0_rgba(0,0,0,0.15)] group-hover:-translate-y-1 relative
                                            bg-gradient-to-b ${chapter.theme?.primaryGradient || 'from-[#FF5252] to-[#F44336]'} ring-4 ${chapter.theme?.ringColor || 'ring-red-200'}
                                        `}>
                                        <div className="text-white drop-shadow-md relative z-10">
                                            <LessonIcon type={lesson.iconType} isQuiz={!!isQuiz} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // Vertical Layout with Curved Path
    const ITEM_HEIGHT = 96;
    const SPACING = 48;
    const STEP_Y = ITEM_HEIGHT + SPACING;
    const AMPLITUDE = 60;

    return (
        <div className="relative flex flex-col items-center">

            {/* SVG Path */}
            {chapter.lessons.length > 0 && (
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-full pointer-events-none z-0">
                    <svg className="w-full h-full overflow-visible absolute top-0 left-0">
                        <path
                            d={
                                chapter.lessons.map((_, i) => {
                                    if (i === chapter.lessons.length - 1) return '';
                                    const cx = 250; // Center offset
                                    const currentX = cx + (Math.sin(i * 1.5) * AMPLITUDE);
                                    const nextX = cx + (Math.sin((i + 1) * 1.5) * AMPLITUDE);
                                    const currentY = (i * STEP_Y) + (ITEM_HEIGHT / 2);
                                    const nextY = ((i + 1) * STEP_Y) + (ITEM_HEIGHT / 2);
                                    const cY1 = currentY + (STEP_Y / 2);
                                    const cY2 = nextY - (STEP_Y / 2);

                                    // For the first segment, include a Move command AND a line from top (0) to first node
                                    // Start point of curved path is (currentX, currentY)
                                    // We add 'M 250 0 L currentX currentY' to connect to header
                                    const startCmd = i === 0 ? `M 250 0 L ${currentX} ${currentY} M ${currentX} ${currentY}` : '';

                                    return `${startCmd} C ${currentX} ${cY1}, ${nextX} ${cY2}, ${nextX} ${nextY}`;
                                }).join(' ')
                            }
                            fill="none"
                            strokeWidth="12"
                            stroke="currentColor"
                            className={`${(chapter.theme?.ringColor || 'text-red-200').replace('ring-', 'text-')} opacity-30`}
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            )}

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
                            width="100%"
                            height="100%"
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
                    <div key={lesson.id} className="relative z-10 mb-12 last:mb-0" style={{ transform: `translateX(${xOffset}px)` }}>
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

                                {/* Node Circle */}
                                <div className={`
                                    w-24 h-24 rounded-full flex items-center justify-center shadow-[0_8px_0_0_rgba(0,0,0,0.15)]
                                    transition-all active:translate-y-[4px] active:shadow-[0_4px_0_0_rgba(0,0,0,0.15)] group-hover:-translate-y-1 relative
                                    bg-gradient-to-b ${chapter.theme?.primaryGradient || 'from-[#FF5252] to-[#F44336]'} ring-4 ${chapter.theme?.ringColor || 'ring-red-200'}
                                `}>
                                    <div className="text-white drop-shadow-md relative z-10">
                                        <LessonIcon type={lesson.iconType} isQuiz={!!isQuiz} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};
