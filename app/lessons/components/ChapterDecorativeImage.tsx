interface ChapterDecorativeImageProps {
    chapterId: string;
    isLeft: boolean;
}

const chapterEmojis: Record<string, string> = {
    'chapter-1-foundations': '👋',      // Greetings
    'chapter-2-particles': '🔗',       // Particles connect words
    'chapter-3-structure': '🧱',       // Building blocks/structure
    'chapter-4-verbs': '⚡',           // Action/verbs
    'chapter-5-adjectives': '✨',      // Describing/adjectives
    'chapter-6-numbers-time': '⏰',    // Time
    'chapter-7-existence': '📍',       // Location/existence
    'chapter-8-questions': '🤔',       // Questions/thinking
    'chapter-9-advanced': '🎓',        // Graduation/advanced
};

export function ChapterDecorativeImage({ chapterId, isLeft }: ChapterDecorativeImageProps) {
    const emoji = chapterEmojis[chapterId];

    if (!emoji) return null;

    return (
        <div className={`
            hidden md:block absolute top-1/2 -translate-y-1/2 z-0
            ${isLeft ? 'left-8' : 'right-8'}
            opacity-40 hover:opacity-70 transition-all duration-300 hover:scale-110
        `}>
            <div className="relative w-40 h-40 flex items-center justify-center animate-float">
                <span className="text-[10rem] drop-shadow-2xl filter">
                    {emoji}
                </span>
            </div>
        </div>
    );
}
