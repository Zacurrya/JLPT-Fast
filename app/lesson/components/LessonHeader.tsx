"use client";

import Link from "next/link";

interface LessonHeaderProps {
    title: string;
    description?: string;
}

export default function LessonHeader({ title, description }: LessonHeaderProps) {
    return (
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border mt-16">
            <div className="container mx-auto px-4 py-2 md:px-6 md:py-3">
                <div className="flex items-center gap-4">
                    <Link
                        href="/learn"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:-translate-x-1 transition-transform"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span className="hidden sm:inline text-sm font-medium">Back to Learn</span>
                    </Link>
                    <div className="h-6 w-px bg-border" />
                    <div className="flex flex-col min-w-0">
                        <h1 className="text-lg md:text-xl font-serif font-semibold tracking-wider text-foreground truncate">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-xs md:text-sm text-muted-foreground truncate">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
