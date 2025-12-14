"use client";

import { useEffect, useState } from 'react';
import { n5Chapters } from '../lessonData';
import { ChapterNumberBadge } from './ChapterNumberBadge';

const DynamicHeader = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const ids = n5Chapters.map(c => c.id);
        const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = ids.indexOf(entry.target.id);
                        if (idx !== -1) setActiveIndex(idx);
                    }
                });
            },
            { root: null, rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const currentChapter = n5Chapters[activeIndex] ?? n5Chapters[0];
    // If it's a test chapter, show the header for the previous chapter (the one being tested)
    const displayChapter = currentChapter.id.endsWith('-test')
        ? (n5Chapters[activeIndex - 1] ?? currentChapter)
        : currentChapter;

    // Fallback theme in case it's missing
    const theme = displayChapter.theme || {
        primaryGradient: 'from-[#FF5252] to-[#F44336]',
        secondaryGradient: 'bg-gradient-to-br from-red-600 to-orange-600',
        ringColor: 'ring-red-200',
        textColors: {
            title: 'text-yellow-100',
            description: 'text-yellow-50/90'
        }
    };

    return (
        <div className="sticky top-20 flex justify-center z-20 pointer-events-none">
            <div className={`relative group px-6 py-4 rounded-2xl shadow-sm w-full max-w-sm mx-4 text-center z-10 border border-white/25
                bg-gradient-to-b ${theme.primaryGradient} ring-4 ${theme.ringColor} transform transition-all duration-300`}>

                <ChapterNumberBadge
                    number={displayChapter.number}
                    isLeft={true}
                    className="top-1/2 -translate-y-1/2 left-4 w-12 h-12 text-lg"
                    gradient={`bg-gradient-to-br ${theme.secondaryGradient}`}
                />

                <div className="flex items-center justify-center gap-4 pointer-events-auto pl-10">
                    <div className="text-center">
                        <h2 className={`text-xl font-bold ${theme.textColors.title}`}>{displayChapter.title}</h2>
                    </div>
                </div>

                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3 bg-white/20 rounded-full blur-sm" />
            </div>
        </div>
    );
};

export default DynamicHeader;