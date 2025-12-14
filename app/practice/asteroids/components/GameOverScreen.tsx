"use client";
import { motion } from "framer-motion";
import { BackButton } from "./BackButton";
import { useRouter } from "next/navigation";

interface GameOverScreenProps {
    score: number;
    topScore: number;
    onPlayAgain: () => void;
    onSeeAnswers: () => void;
}

export default function GameOverScreen({ score, topScore, onPlayAgain, onSeeAnswers }: GameOverScreenProps) {
    const router = useRouter();

    const handleBack = () => {
        router.push('/practice');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-card text-card-foreground rounded-xl p-10 max-w-md w-full text-center shadow-2xl border border-border relative"
            >
                <div className="absolute top-6 left-6">
                    <BackButton onClick={handleBack} />
                </div>

                <div className="text-6xl mb-6">💥</div>
                <h2 className="text-3xl font-serif font-bold mb-8">Game Over!</h2>

                <div className="space-y-6 mb-8">
                    <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                        <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider mb-2">Final Score</p>
                        <p className="text-6xl font-serif font-bold text-primary">{score}</p>
                    </div>

                    <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                        <p className="text-secondary font-bold text-sm flex items-center gap-2">
                            <span>🏆</span> Top Score: {Math.max(score, topScore)}
                        </p>
                    </div>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={onPlayAgain}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        Play Again
                    </button>
                    <button
                        onClick={onSeeAnswers}
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        See Answers
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
