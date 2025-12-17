import { Star, Trophy, Utensils, Users, HelpCircle, Languages, BookOpen, ScrollText, Clock, GraduationCap, MapPin, Train, Store } from 'lucide-react';

interface LessonIconProps {
    type?: string;
    isQuiz?: boolean;
    className?: string; // Allow passing extra classes if needed, though mostly size is fixed
}

export const LessonIcon = ({ type, isQuiz }: LessonIconProps) => {
    if (isQuiz) return <Trophy className="w-10 h-10" fill="currentColor" />;

    switch (type) {
        case 'food':
            return <Utensils className="w-9 h-9" />;
        case 'people':
            return <Users className="w-9 h-9" />;
        case 'question':
            return <HelpCircle className="w-9 h-9" />;
        case 'kana':
            return <Languages className="w-9 h-9" />;
        case 'book':
            return <BookOpen className="w-9 h-9" />;
        case 'kanji':
            return <ScrollText className="w-9 h-9" />;
        case 'time':
            return <Clock className="w-9 h-9" />;
        case 'trophy':
            return <GraduationCap className="w-12 h-12" strokeWidth={2} />;
        case 'location':
            return <MapPin className="w-9 h-9" />;
        case 'travel':
            return <Train className="w-9 h-9" />;
        case 'shopping':
            return <Store className="w-9 h-9" />;
        default:
            return <Star className="w-10 h-10" fill="currentColor" strokeWidth={2.5} />;
    }
};
