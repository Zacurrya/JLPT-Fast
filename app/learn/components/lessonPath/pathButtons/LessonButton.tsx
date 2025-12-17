import Link from 'next/link';
import { useLessonIcon } from '../../../hooks/useLessonIcon';

interface LessonButtonProps {
    lesson: {
        id: string;
        title: string;
        iconType?: string;
        isQuiz?: boolean;
    };
    className?: string;
    style?: React.CSSProperties;
}

export const LessonButton = ({ lesson, className = '', style }: LessonButtonProps) => {
    const icon = useLessonIcon(lesson.iconType, !!lesson.isQuiz);

    return (
        <Link href={`/lesson/${lesson.id}`} className={`group relative block ${className}`} style={style}>
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap z-20 pointer-events-none">
                <span className="text-sm font-serif font-bold text-gray-800">{lesson.title}</span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-100"></div>
            </div>

            {/* Node Circle */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-[0_8px_0_0_rgba(0,0,0,0.15)] transition-all active:translate-y-[4px] active:shadow-[0_4px_0_0_rgba(0,0,0,0.15)] group-hover:-translate-y-1 relative bg-gradient-to-b from-[#FF5252] to-[#F44336] ring-4 ring-red-200">
                <div className="text-white drop-shadow-md relative z-10">
                    {icon}
                </div>
            </div>
        </Link>
    );
};
