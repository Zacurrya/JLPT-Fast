import { motion } from "framer-motion";

interface QuizResultsScreenProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

export default function QuizResultsScreen({
    score,
    totalQuestions,
    onRestart
}: QuizResultsScreenProps) {
    const passingPercentage = (80 / 180) * 100; // ~44.4%
    const userPercentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    const isPassed = userPercentage >= passingPercentage;

    return (
        <motion.div
            key="finished"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full text-center"
        >
            <div className="bg-white rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
                <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm ${isPassed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                        }`}
                >
                    {isPassed ? "🎉" : "💪"}
                </div>

                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                    {isPassed ? "Congratulations!" : "Keep Practicing!"}
                </h2>
                <p className="text-gray-500 mb-8">
                    You scored <span className="text-gray-900 font-bold">{score}</span> out of {totalQuestions}
                </p>

                <div className="w-full bg-gray-100 h-3 rounded-full mb-6 overflow-hidden relative">
                    <div
                        className="absolute top-0 bottom-0 left-[44.4%] w-0.5 bg-gray-400 z-10"
                        title="Passing Mark"
                    />
                    <div
                        className={`h-full rounded-full ${isPassed ? "bg-green-500" : "bg-red-500"}`}
                        style={{ width: `${userPercentage}%` }}
                    />
                </div>
                <p className="text-xs text-gray-400 mb-8 uppercase tracking-widest">
                    Passing Score: 44%
                </p>

                <button
                    onClick={onRestart}
                    className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all hover:-translate-y-0.5"
                >
                    Back to Start
                </button>
            </div>
        </motion.div>
    );
}
