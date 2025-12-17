import { Chapter } from '../../data';
import { ChapterImage } from './ChapterImage';

interface ChapterHeaderProps {
    chapter: Chapter;
    chapterNumber?: number;
}

export const ChapterHeader = ({ chapter, chapterNumber }: ChapterHeaderProps) => {
    // Generate caption automatically if chapter number is provided
    const displayCaption = chapterNumber
        ? `Chapter ${chapterNumber}: ${chapter.title}`
        : chapter.title;

    return (
        <>
            {/* Chapter Image */}
            {chapter.image && (
                <ChapterImage
                    src={chapter.image}
                    alt={chapter.title}
                    caption={displayCaption}
                    description={chapter.description}
                />
            )}
        </>
    );
};
