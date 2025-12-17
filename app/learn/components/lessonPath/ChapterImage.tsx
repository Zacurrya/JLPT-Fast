import Image from 'next/image';

interface ChapterImageProps {
    src: string;
    alt: string;
    caption?: string;
    description?: string;
}

export const ChapterImage = ({ src, alt, caption, description }: ChapterImageProps) => {
    return (
        <div className="relative w-full max-w-4xl mx-auto mb-8 h-54 sm:h-68 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />

            {/* Overlay Gradient for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Description Text */}
            {description && (
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center justify-end h-full text-center">
                    <p className="text-white/95 font-serif text-xl sm:text-2xl font-bold tracking-wide drop-shadow-lg leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};
