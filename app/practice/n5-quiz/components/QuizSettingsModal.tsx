import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Mic, Type } from "lucide-react";

interface QuizSettingsModalProps {
    isOpen: boolean;
    selectedCategories: {
        vocab: boolean;
        sentences: boolean;
        listening: boolean;
    };
    questionCounts: {
        vocab: number;
        sentences: number;
        listening: number;
    };
    onToggleCategory: (category: 'vocab' | 'sentences' | 'listening') => void;
    onClose: () => void;
}

export default function QuizSettingsModal({
    isOpen,
    selectedCategories,
    questionCounts,
    onToggleCategory,
    onClose
}: QuizSettingsModalProps) {
    const categories = [
        { id: 'vocab' as const, label: 'Vocabulary & Kanji', count: questionCounts.vocab, icon: BookOpen },
        { id: 'sentences' as const, label: 'Grammar & Sentences', count: questionCounts.sentences, icon: Type },
        { id: 'listening' as const, label: 'Listening Comprehension', count: questionCounts.listening, icon: Mic }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl pointer-events-auto border border-gray-100 m-4">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-xl text-gray-900">Quiz Settings</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-3">
                                {categories.map((cat) => {
                                    const Icon = cat.icon;
                                    const isSelected = selectedCategories[cat.id];
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => onToggleCategory(cat.id)}
                                            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${isSelected
                                                    ? "bg-gray-900 border-gray-900 text-white shadow-md"
                                                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                                                }`}
                                        >
                                            <Icon size={20} className={isSelected ? "text-white" : "text-gray-400"} />
                                            <div className="flex-1 text-left">
                                                <p className="font-bold text-sm">{cat.label}</p>
                                                <p className={`text-xs ${isSelected ? "text-gray-300" : "text-gray-400"}`}>
                                                    {cat.count} Questions
                                                </p>
                                            </div>
                                            <div
                                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "bg-white border-white" : "border-gray-300"
                                                    }`}
                                            >
                                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-gray-900" />}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 rounded-xl transition-colors"
                            >
                                Done
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
