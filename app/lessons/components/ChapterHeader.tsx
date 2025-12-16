import { Chapter } from '../data';
import { ChapterImage } from './ChapterImage';

interface ChapterHeaderProps {
    chapter: Chapter;
}

export const ChapterHeader = ({ chapter }: ChapterHeaderProps) => {
    return (
        <>
            {/* Chapter Image */}
            {chapter.image && (
                <ChapterImage src={chapter.image} alt={chapter.title} />
            )}

            {/* Chapter Description Divider */}
            <div className="flex items-center gap-4 py-8 mb-4">
                <div className={`h-[2px] flex-1 rounded-full opacity-50 ${(chapter.theme?.ringColor || 'ring-gray-300').replace('ring-', 'bg-')}`}></div>
                <span className="text-sm font-bold uppercase tracking-widest px-4 text-gray-500 text-center">
                    {chapter.description}
                </span>
                <div className={`h-[2px] flex-1 rounded-full opacity-50 ${(chapter.theme?.ringColor || 'ring-gray-300').replace('ring-', 'bg-')}`}></div>
            </div>
        </>
    );
};
