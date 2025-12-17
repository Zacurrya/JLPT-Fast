interface ChapterNumberBadgeProps {
    number: number;
    isLeft: boolean;
    gradient?: string;
}

// Convert number to kanji
const numberToKanji = (num: number): string => {
    const kanjiNumbers: { [key: number]: string } = {
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
        10: '十'
    };
    return kanjiNumbers[num] || num.toString();
};

export function ChapterNumberBadge({ number, isLeft, gradient = "bg-gradient-to-br from-red-600 to-orange-600", className }: ChapterNumberBadgeProps & { className?: string }) {
    const kanjiNumber = numberToKanji(number);

    return (
        <div className={`
            absolute ${isLeft ? 'md:right-8 left-8' : 'md:left-8 left-8'}
            ${className || '-top-6 w-16 h-16'} 
            ${gradient}
            font-serif rounded-2xl flex flex-col items-center justify-center text-white font-black
            shadow-xl border-2 border-white transform transition-all duration-300
            group/badge cursor-default pointer-events-auto
        `}>
            {/* Number - Shows by default */}
            <span className="text-2xl group-hover/badge:opacity-0 transition-opacity duration-300">
                {number}
            </span>

            {/* Kanji - Shows on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300">
                <span className="text-2xl font-semibold font-serif">{kanjiNumber}</span>
            </div>
        </div>
    );
}
