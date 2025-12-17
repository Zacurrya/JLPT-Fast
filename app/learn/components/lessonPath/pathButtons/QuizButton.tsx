import Link from 'next/link';
import { Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuizButtonProps {
    lessonId: string;
    title: string;
    description: string;
    index: number;
}

export function QuizButton({ lessonId, title, description, index }: QuizButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative"
        >
            {/* Decorative stars */}
            <div className="absolute -top-2 -right-2 z-10">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -left-2 z-10">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <Link
                href={`/lessons/${lessonId}`}
                className="group block bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-3 border-amber-300 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-600 rounded-2xl p-6 transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/50 to-transparent dark:via-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Trophy className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-black text-lg text-amber-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-50 transition-colors">
                                {title}
                            </h3>
                            <span className="px-2 py-0.5 bg-amber-400 dark:bg-amber-600 text-amber-900 dark:text-amber-50 text-xs font-bold rounded-full">
                                QUIZ
                            </span>
                        </div>
                        <p className="text-sm text-amber-800 dark:text-amber-200 line-clamp-2">
                            {description}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
