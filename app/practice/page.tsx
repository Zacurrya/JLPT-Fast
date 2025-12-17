"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Rocket, BookOpen, Zap, Search, MonitorPlay, ChevronLeft, ChevronRight, Grid3X3, Languages } from "lucide-react";

interface PracticeOption {
    title: string;
    description: string;
    icon: any;
    href: string;
    color: string;
    borderColor: string;
}

const VideoSection = ({ title, options, delayOffset = 0 }: { title: string, options: PracticeOption[], delayOffset?: number }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    if (options.length === 0) return null;

    return (
        <div className="mb-16">
            <h2 className="text-2xl font-serif font-semibold tracking-wider text-foreground mb-6 flex items-center gap-2">
                {title}
                <div className="h-px bg-border flex-1 ml-4" />
            </h2>

            <div className="relative group/carousel">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-card p-3 rounded-full shadow-lg border border-border text-foreground opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-muted hover:scale-110 hidden md:block"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-card p-3 rounded-full shadow-lg border border-border text-foreground opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-muted hover:scale-110 hidden md:block"
                >
                    <ChevronRight size={24} />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 hide-scrollbar snap-x"
                >
                    {options.map((option, index) => (
                        <motion.div
                            key={option.title}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + delayOffset }}
                            className="flex-none w-[60vw] md:w-[400px] snap-center"
                        >
                            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                                <div className="aspect-video w-full bg-background relative">
                                    <iframe
                                        className="w-full h-full"
                                        src={option.href}
                                        title={option.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2 truncate">{option.title}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2">{option.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function PracticePage() {
    const studyOptions: PracticeOption[] = [
        {
            title: "N5 Quiz",
            description: "Test your JLPT N5 knowledge with vocab, grammar, and listening questions",
            icon: BookOpen,
            href: "/practice/n5-quiz",
            color: "from-blue-500 to-cyan-500",
            borderColor: "border-blue-100"
        },
        {
            title: "Flashcards",
            description: "Study Japanese vocabulary with spaced repetition flashcards",
            icon: Brain,
            href: "/practice/flashcards",
            color: "from-purple-500 to-pink-500",
            borderColor: "border-purple-100"
        },
        {
            title: "Translator",
            description: "Translate Japanese text with detailed breakdowns and grammar explanations",
            icon: Languages,
            href: "/translator",
            color: "from-indigo-500 to-violet-500",
            borderColor: "border-indigo-100"
        },
    ];

    const minigameOptions: PracticeOption[] = [
        {
            title: "Asteroids",
            description: "Blast through kana and/or kanji in this fast-paced typing minigame",
            icon: Rocket,
            href: "/practice/asteroids",
            color: "from-orange-500 to-red-500",
            borderColor: "border-orange-100"
        },
        {
            title: "Manuscript Wordsearch",
            description: "Find English meanings hidden in a grid of Kana characters and improve your kana recognition",
            icon: Search,
            href: "/practice/wordsearch",
            color: "from-amber-500 to-yellow-600",
            borderColor: "border-amber-100"
        },
        {
            title: "Kana Crossword",
            description: "Solve the puzzle to reveal the hidden Japanese words",
            icon: Grid3X3,
            href: "/practice/crossword",
            color: "from-amber-600 to-amber-800",
            borderColor: "border-amber-100"
        }
    ];

    const listeningOptions: PracticeOption[] = [
        {
            title: "JLPT N5 Listening Test",
            description: "Essential conversation practice for beginners",
            icon: MonitorPlay,
            href: "https://www.youtube.com/embed/IJEn-9nAFQE",
            color: "from-red-500 to-pink-500",
            borderColor: "border-red-100"
        },
        {
            title: "Beginner Listening Practice",
            description: "Daily life conversations and listening tests",
            icon: MonitorPlay,
            href: "https://www.youtube.com/embed/45hezvxF6Hs",
            color: "from-red-500 to-pink-500",
            borderColor: "border-red-100"
        },
        {
            title: "Daily Life Listening",
            description: "More advanced N5 listening scenarios",
            icon: MonitorPlay,
            href: "https://www.youtube.com/embed/sLSnr-7mv4A",
            color: "from-red-500 to-pink-500",
            borderColor: "border-red-100"
        }
    ];

    const lessonOptions: PracticeOption[] = [
        {
            title: "Complete N5 Grammar & Vocab",
            description: "Comprehensive N5 grammar and vocabulary overview",
            icon: MonitorPlay,
            href: "https://www.youtube.com/embed/nuI4OgsJv_Q",
            color: "from-red-500 to-pink-500",
            borderColor: "border-red-100"
        },
        {
            title: "Japanese Sentence Structure",
            description: "Understanding the SOV word order and basic particles",
            icon: MonitorPlay,
            href: "https://www.youtube.com/embed/yyEBWJMf584?start=63",
            color: "from-red-500 to-pink-500",
            borderColor: "border-red-100"
        },
        {
            title: "Desu and Masu",
            description: "Guide to Japanese politeness levels and verb endings",
            icon: MonitorPlay,
            href: "https://www.youtube.com/embed/MQD8Y_Q0nIM",
            color: "from-red-500 to-pink-500",
            borderColor: "border-red-100"
        }
    ];

    const renderSection = (title: string, options: PracticeOption[], delayOffset: number = 0) => (
        <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
                {title}
                <div className="h-px bg-border flex-1 ml-4" />
            </h2>

            {options.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {options.map((option, index) => {
                        const Icon = option.icon;
                        const isExternal = option.href.startsWith("http");
                        return (
                            <motion.div
                                key={option.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (index * 0.1) + delayOffset }}
                            >
                                <Link
                                    href={option.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                >
                                    <div className="group relative h-full bg-card rounded-3xl p-8 shadow-xl border border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                        <Icon
                                            size={120}
                                            className="absolute -right-6 -bottom-6 text-foreground opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-300 -rotate-12 pointer-events-none"
                                        />

                                        <div className="relative z-10">
                                            <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white shadow-lg`}>
                                                <Icon size={24} />
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground mb-2">
                                                {option.title}
                                            </h3>

                                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                {option.description}
                                            </p>

                                            <div className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                                                <span>{isExternal ? "Watch" : "Start"}</span>
                                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                                                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            ) : (
                <div className="bg-muted/30 rounded-2xl p-8 text-center border border-dashed border-border">
                    <MonitorPlay className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">Video lessons coming soon!</p>
                </div>
            )}
        </div>
    );



    return (
        <div className="pt-20 min-h-screen w-full bg-background text-foreground">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-serif font-semibold tracking-wider text-foreground mb-4">
                        Practice Hub
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Learning should be varied and fun. Here are methods to keep you engaged through your learning journey.
                    </p>
                </motion.div>

                {renderSection("Study Tools", studyOptions, 0)}
                {renderSection("Minigames", minigameOptions, 0.2)}
                <VideoSection title="Listening Practice" options={listeningOptions} delayOffset={0.4} />
                <VideoSection title="Lessons" options={lessonOptions} delayOffset={0.5} />
            </div>
        </div>
    );
}
