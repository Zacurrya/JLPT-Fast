import { motion } from "framer-motion";
import { toRomaji } from "wanakana";
import { Question } from "../contexts/types";

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
                <div className="mt-1 flex gap-1 items-end flex-wrap">
                    <div className="flex gap-1 flex-wrap justify-center">
                        {(() => {
                            const text = displayAnswer;
                            const chunks = [];
                            let i = 0;

                            while (i < text.length) {
                                const char = text[i];
                                const next = text[i + 1];
                                const isSmall = next && /^[ぁぃぅぇぉゃゅょゎァィゥェォャュョヮ]/.test(next);
                                const part = isSmall ? char + next : char;
                                let romaji = toRomaji(part);

                                if (part === 'っ' || part === 'ッ') {
                                    const r = toRomaji(text.slice(i));
                                    romaji = r[0] || '';
                                }

                                chunks.push({ kana: part, romaji });
                                i += isSmall ? 2 : 1;
                            }

                            return chunks.map((chunk, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <span className="text-[10px] text-red-600/70 font-mono leading-none mb-1">
                                        {chunk.romaji}
                                    </span>
                                    <span className="text-2xl font-bold text-red-900 leading-none">
                                        {chunk.kana}
                                    </span>
                                </div>
                            ));
                        })()}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
