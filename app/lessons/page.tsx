"use client";
import React, { useState, useEffect } from 'react';
import { n5Chapters } from './lessonData';
import DynamicHeader from './components/DynamicHeader';
import { ChapterHeader } from './components/ChapterHeader';
import { ChapterPath } from './components/ChapterPath';

export default function LessonsPage() {
    const [activeChapterId, setActiveChapterId] = useState<string>(n5Chapters[0].id);

    // Intersection Observer to update active chapter for background changes
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        n5Chapters.forEach((chapter) => {
            const element = document.getElementById(chapter.id);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveChapterId(chapter.id);
                            }
                        });
                    },
                    { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    // Find the current active theme
    const activeChapter = n5Chapters.find(c => c.id === activeChapterId) || n5Chapters[0];
    // We use a lighter opacity version of the gradients for the page background
    const bgGradient = activeChapter.theme.primaryGradient;

    return (
        <>
            <div className="min-h-screen relative pt-24 pb-24 transition-colors duration-700 ease-in-out">
                {/* Dynamic Background */}
                <div className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out">
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${bgGradient} transition-all duration-1000`} />
                    <div className="absolute inset-0 bg-[#FFFBF0] opacity-90 mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Dynamic Sticky Header */}
                    <DynamicHeader />

                    {/* Learning Path */}
                    <div className="max-w-xl mx-auto relative pb-32 pt-12">
                        {n5Chapters.map((chapter) => (
                            <div key={chapter.id} id={chapter.id} data-chapter-id={chapter.id} className="relative mb-24 transition-opacity duration-500">
                                <ChapterHeader chapter={chapter} />
                                <ChapterPath chapter={chapter} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
