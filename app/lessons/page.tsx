"use client";
import { n5Chapters } from './lessonData';
import { Star, Trophy, Utensils, Users, HelpCircle, Languages, BookOpen, ScrollText, Clock, GraduationCap, MapPin, Train, Store } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DynamicHeader from './components/DynamicHeader';

export default function LessonsPage() {

    // Helper to get icon based on type
    const getLessonIcon = (type: string | undefined, isQuiz: boolean) => {
        if (isQuiz) return <Trophy className="w-10 h-10" fill="currentColor" />;

        switch (type) {
            case 'food':
                return <Utensils className="w-9 h-9" />;
            case 'people':
                return <Users className="w-9 h-9" />;
            case 'question':
                return <HelpCircle className="w-9 h-9" />;
            case 'kana':
                return <Languages className="w-9 h-9" />;
            case 'book':
                return <BookOpen className="w-9 h-9" />;
            case 'kanji':
                return <ScrollText className="w-9 h-9" />;
            case 'time':
                return <Clock className="w-9 h-9" />;
            case 'trophy':
                return <GraduationCap className="w-12 h-12" strokeWidth={2} />;
            case 'location':
                return <MapPin className="w-9 h-9" />;
            case 'travel':
                return <Train className="w-9 h-9" />;
            case 'shopping':
                return <Store className="w-9 h-9" />;
            default:
                return <Star className="w-10 h-10" fill="currentColor" strokeWidth={2.5} />;
        }
    };

    return (
        <>
            <div className="min-h-screen bg-[#FFFBF0] pt-24 pb-24 relative">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden"
                    style={{
                        backgroundImage: 'radial-gradient(#E5E7EB 1.5px, transparent 1.5px)',
                        backgroundSize: '32px 32px'
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Dynamic Sticky Header - In document flow, becomes sticky when scrolled */}
                    <DynamicHeader />

                    {/* Learning Path */}
                    <div className="max-w-xl mx-auto relative pb-32 pt-12">

                        {n5Chapters.map((chapter, chapterIndex) => {
                            const isFinalExam = chapter.id.includes('final-exam');

                            return (
                                <div key={chapter.id} id={chapter.id} data-chapter-id={chapter.id} className="relative mb-24">

                                    {/* Chapter Description Divider - Hidden for Test Chapters */
                                        !chapter.id.endsWith('-test') && (
                                            <div className="flex items-center gap-4 py-8 mb-4">
                                                <div className={`h-[2px] flex-1 rounded-full opacity-50 ${(chapter.theme?.ringColor || 'ring-gray-300').replace('ring-', 'bg-')}`}></div>
                                                <span className="text-sm font-bold uppercase tracking-widest px-4 text-gray-500 text-center">
                                                    {chapter.description}
                                                </span>
                                                <div className={`h-[2px] flex-1 rounded-full opacity-50 ${(chapter.theme?.ringColor || 'ring-gray-300').replace('ring-', 'bg-')}`}></div>
                                            </div>
                                        )}

                                    {/* Final Exam - Horizontal Layout */}
                                    {isFinalExam ? (
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
                                                                        {getLessonIcon(lesson.iconType, !!isQuiz)}
                                                                    </div>

                                                                    {/* Gloss Shine */}
                                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/25 rounded-full blur-[1px]" />
                                                                </div>
                                                            </Link>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ) : (
                                        /* Normal Vertical Layout */
                                        <div className="relative flex flex-col items-center">
                                            {/* Vertical Connecting Line */}
                                            <div className={`absolute top-4 bottom-12 left-1/2 w-3 ${(chapter.theme?.ringColor || 'ring-red-200').replace('ring-', 'bg-')} -translate-x-1/2 rounded-full`} />

                                            {chapter.lessons.map((lesson, lessonIndex) => {
                                                const isQuiz = lesson.isQuiz;

                                                return (
                                                    <div key={lesson.id} className="relative z-10 mb-12 last:mb-0">
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
                                                                        {getLessonIcon(lesson.iconType, !!isQuiz)}
                                                                    </div>

                                                                    {/* Gloss Shine */}
                                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/25 rounded-full blur-[1px]" />
                                                                </div>
                                                            </Link>
                                                        </motion.div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Completion */}

                    </div>
                </div>
            </div>
        </>
    );
}
