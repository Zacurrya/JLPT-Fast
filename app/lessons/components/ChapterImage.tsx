
import React from 'react';
import { motion } from 'framer-motion';

interface ChapterImageProps {
    src: string;
    alt: string;
}

export const ChapterImage = ({ src, alt }: ChapterImageProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 mx-auto max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 relative group"
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-48 object-cover"
            />
        </motion.div>
    );
};
