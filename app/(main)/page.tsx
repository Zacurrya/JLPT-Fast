"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Zap, Sparkles, ArrowRight, Trophy, Brain, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-black mb-6 text-gray-900 leading-tight">
              JLPT Fast
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
              Learn Japanese the <span className="text-blue-600 font-bold">fun</span> way
            </p>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Interactive lessons, gamified practice, and contextual translation.
              Everything you need to ace the JLPT N5.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/lessons"
                className="group px-10 py-5 bg-gray-900 text-white text-xl font-bold rounded-full hover:bg-black transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 shadow-xl"
              >
                Start Learning
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/practice"
                className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-200 text-xl font-bold rounded-full hover:bg-gray-50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Practice Hub
              </Link>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {/* Lessons Card */}
            <div className="group relative h-full bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-blue-100 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <BookOpen
                size={120}
                className="absolute -right-6 -bottom-6 text-gray-900 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-300 -rotate-12 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Structured Lessons</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Learn hiragana, particles, grammar, and vocabulary through interactive card-based lessons.
                </p>
                <Link href="/lessons" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Lessons <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Practice Card */}
            <div className="group relative h-full bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-purple-100 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <Zap
                size={120}
                className="absolute -right-6 -bottom-6 text-gray-900 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-300 -rotate-12 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Gamified Practice</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Asteroids, crosswords, flashcards, and quizzes make learning addictive and fun.
                </p>
                <Link href="/practice" className="text-purple-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Practicing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Translator Card */}
            <div className="group relative h-full bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-indigo-100 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <Sparkles
                size={120}
                className="absolute -right-6 -bottom-6 text-gray-900 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-300 -rotate-12 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Translator</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Contextual translation that understands particles and sentence nuance.
                </p>
                <Link href="/translator" className="text-indigo-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Try Translator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white rounded-3xl p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 mb-20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">16+</div>
                <div className="text-gray-600 font-medium">Interactive Lessons</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">5</div>
                <div className="text-gray-600 font-medium">Practice Games</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">N5</div>
                <div className="text-gray-600 font-medium">JLPT Focused</div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">
              Ready to start your journey?
            </h2>
            <Link
              href="/lessons"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gray-900 text-white text-2xl font-bold rounded-full hover:bg-black transition-all hover:shadow-2xl hover:-translate-y-2 shadow-xl group"
            >
              <Trophy className="w-8 h-8" />
              Begin Learning
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Subtle Background Gradient */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/80 to-purple-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
