import Link from 'next/link';
import { BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface LessonButtonProps {
    lessonId: string;
    title: string;
    description: string;
    index: number;
}

export function LessonButton({ lessonId, title, description, index }: LessonButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <Link
                href={`/lessons/${lessonId}`}
                className="group block bg-card border-2 border-border hover:border-primary rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1"
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {description}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
