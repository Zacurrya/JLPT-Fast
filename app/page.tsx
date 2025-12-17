"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Trophy, Zap, Sparkles, Target } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">The smartest way to learn Japanese</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight mb-8 leading-tight">
                            Master JLPT N5 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-400">
                                Faster Than Ever
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop struggling with boring textbooks. Experience a gamified, structured path designed specifically to get you exam-ready for the finest details of N5.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/learn"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                            >
                                Start Learning
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/practice"
                                className="w-full sm:w-auto px-8 py-4 bg-card border-2 border-border hover:border-primary/50 text-foreground rounded-full font-bold text-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                            >
                                Practice Hub
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Target}
                            title="Structured Path"
                            description="Follow a carefully curated roadmap that takes you from zero to N5 readiness step-by-step."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={Brain}
                            title="Smart SRS"
                            description="Never forget what you learn. Our spaced repetition system ensures vocabulary sticks forever."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Interactive Drills"
                            description="Dynamic exercises including typing, matching, and sentence building to reinforce learning."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={Trophy}
                            title="Gamified Progress"
                            description="Earn achievements, track streaks, and visualize your improvement as you level up."
                            delay={0.4}
                        />
                        <FeatureCard
                            icon={BookOpen}
                            title="Contextual Grammar"
                            description="Learn grammar rules naturally through realistic sentences and breakdown explanations."
                            delay={0.5}
                        />
                        <FeatureCard
                            icon={Sparkles}
                            title="Premium Design"
                            description="Study in a beautiful, distraction-free environment built for focus and engagement."
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
        >
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-serif tracking-wide">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
