import { motion } from "framer-motion";
import { Settings } from "lucide-react";

interface QuizStartScreenProps {
    selectedCategories: {
        vocab: boolean;
        sentences: boolean;
        listening: boolean;
    };
    onOpenSettings: () => void;
    onStartQuiz: (count: number) => void;
}

export default function QuizStartScreen({
    selectedCategories,
    onOpenSettings,
    onStartQuiz
}: QuizStartScreenProps) {
    const selectedCount = Object.values(selectedCategories).filter(Boolean).length;
    const hasSelection = selectedCount > 0;

    return (
        <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md w-full text-center relative"
        >
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="mb-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider mb-4 border border-blue-100">
                        LEVEL N5
                    </span>
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                        JLPT Readiness
                    </h1>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        The JLPT N5 is the introductory level of the Japanese Language Proficiency Test.
                        It covers approximately <strong className="text-gray-800">800 vocabulary words</strong>,
                        <strong className="text-gray-800"> 100 kanji</strong>, and basic grammar patterns used in daily life.
                    </p>
                </div>

                <div className="space-y-3 mb-6">
                    <button
                        onClick={onOpenSettings}
                        className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all group border border-gray-200"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-600">
                                <Settings size={18} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-gray-900">Question Types</p>
                                <p className="text-xs text-gray-400">
                                    {selectedCount} selected
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                            EDIT
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {[10, 20].map((count) => (
                        <button
                            key={count}
                            onClick={() => onStartQuiz(count)}
                            disabled={!hasSelection}
                            className={`w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-gray-900/10 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed`}
                        >
                            Start {count}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
