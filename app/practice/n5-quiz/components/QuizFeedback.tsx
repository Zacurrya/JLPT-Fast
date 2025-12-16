import { motion } from "framer-motion";
import { Question } from "../contexts/types";
import { KanaText } from "../../../components/ui/KanaChar";

interface QuizFeedbackProps {
    feedback: "correct" | "incorrect";
    correctAnswer: Question["correctAnswer"];
}

export default function QuizFeedback({ feedback, correctAnswer }: QuizFeedbackProps) {
    const displayAnswer = Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl border text-left ${feedback === "correct"
                ? "bg-green-50 border-green-100 text-green-800"
                : "bg-red-50 border-red-100 text-red-800"
                }`}
        >
            {feedback === "correct" && (
                <p className="font-bold mb-2 uppercase tracking-wide text-xs opacity-80">
                    Correct!
                </p>
            )}
            {feedback === "incorrect" && (
                <div className="mt-1 flex gap-1 items-end flex-wrap justify-center">
                    <KanaText
                        text={displayAnswer}
                        showRomaji={true}
                        size="md"
                        gap="normal"
                        charClassName="[&>span:first-child]:text-red-600/70 [&>span:last-child]:text-red-900"
                    />
                </div>
            )}
        </motion.div>
    );
}
