import { motion } from "framer-motion";

interface ExplosionProps {
    x: number;
    y: number;
    onComplete: () => void;
}

export default function Explosion({ x, y, onComplete }: ExplosionProps) {
    return (
        <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onAnimationComplete={onComplete}
            style={{ left: `${x}%`, top: `${y}px` }}
            className="absolute pointer-events-none z-20"
        >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
                {/* Core blast */}
                <div className="w-16 h-16 bg-yellow-200 rounded-full blur-md" />
                <div className="absolute inset-0 w-16 h-16 bg-orange-500 rounded-full blur-xl opacity-80" />

                {/* Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0, y: 0, opacity: 1 }}
                        animate={{
                            x: (Math.random() - 0.5) * 100,
                            y: (Math.random() - 0.5) * 100,
                            opacity: 0
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
                    />
                ))}
            </div>
        </motion.div>
    );
}
