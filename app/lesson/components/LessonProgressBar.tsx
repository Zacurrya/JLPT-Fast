"use client";

interface LessonProgressBarProps {
    current: number;
    total: number;
}

export default function LessonProgressBar({ current, total }: LessonProgressBarProps) {
    const progress = total > 0 ? ((current) / total) * 100 : 0;

    return (
        <div className="w-full pb-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                    Lesson Progress
                </span>
                <span className="text-sm font-bold text-gray-300">
                    {current + 1} / {total}
                </span>
            </div>
            <div className="h-2 bg-gray-600/50 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-[#f56565] to-[#fc8181] rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
