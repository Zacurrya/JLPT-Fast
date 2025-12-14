import { CheckCircle2 } from 'lucide-react';
import { n5Chapters } from '../lessonData';
const UnitCompletionBadge = () => {
    return (
        <div className="flex flex-col items-center mt-12 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <p className="mt-6 text-xl font-bold text-gray-800 text-center">
                Complete all chapters to master N5!
            </p>
            <p className="text-gray-600 text-center mt-2">
                {n5Chapters.reduce((acc, ch) => acc + ch.lessons.length, 0)} total lessons across {n5Chapters.length} chapters
            </p>
        </div>
    )
}

export default UnitCompletionBadge