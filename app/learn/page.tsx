"use client";
import { useState, useEffect } from 'react';
import { n5Chapters } from '@data/lessons';
import DynamicHeader from './components/lessonPath/DynamicHeader';
import { ChapterHeader } from './components/lessonPath/ChapterHeader';
import { ChapterPath } from './components/lessonPath/ChapterPath';

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

    return (
        <div className="container mx-auto px-6 relative z-10 min-h-screen pt-24 pb-24 transition-colors duration-700 ease-in-out">
            {/* Dynamic Sticky Header */}
            <DynamicHeader />

            {/* Learning Path */}
            <div className="max-w-xl mx-auto relative pb-32 pt-12">
                {n5Chapters.map((chapter) => {
                    const isChapterTest = chapter.id.includes('-test');
                    return (
                        <div key={chapter.id} id={chapter.id} data-chapter-id={chapter.id} className={`relative transition-opacity duration-500 ${isChapterTest ? 'mb-8' : 'mb-24'}`}>
                            {!isChapterTest && <ChapterHeader chapter={chapter} />}
                            <ChapterPath chapter={chapter} />
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
