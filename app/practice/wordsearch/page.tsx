"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Trophy, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { BackButton } from "../asteroids/components/BackButton";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

import * as wanakana from 'wanakana';
import { n5Kanji } from "@data/kanji";

// Define vocab set
const N5_VOCAB = [
    { kana: "ねこ", en: "Cat" },
    { kana: "いぬ", en: "Dog" },
    { kana: "やま", en: "Mountain" },
    { kana: "かわ", en: "River" },
    { kana: "ひと", en: "Person" },
    { kana: "みず", en: "Water" },
    { kana: "たべる", en: "Eat" },
    { kana: "のむ", en: "Drink" },
    { kana: "あお", en: "Blue" },
    { kana: "あか", en: "Red" },
    { kana: "しろ", en: "White" },
    { kana: "くろ", en: "Black" },
    { kana: "みみ", en: "Ear" },
    { kana: "め", en: "Eye" },
    { kana: "て", en: "Hand" },
    { kana: "あし", en: "Foot/Leg" },
];

// Extract words from Kanji data to expand the list
const KANJI_VOCAB = n5Kanji.flatMap(k => k.examples.map(e => ({
    kana: e.reading,
    en: e.meaning
})));

const ALL_VOCAB = [...N5_VOCAB, ...KANJI_VOCAB];

const GRID_SIZE = 10;
const KANA_CHARS = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

interface Cell {
    row: number;
    col: number;
    value: string;
    selected: boolean;
    found: boolean;
}

interface Word {
    kana: string;
    en: string;
    romaji: string;
    found: boolean;
    start?: { r: number, c: number };
    end?: { r: number, c: number };
}

export default function WordSearchPage() {
    const router = useRouter();
    const { width, height } = useWindowSize();
    const [grid, setGrid] = useState<Cell[][]>([]);
    const [words, setWords] = useState<Word[]>([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectionStart, setSelectionStart] = useState<{ r: number, c: number } | null>(null);
    const [currentSelection, setCurrentSelection] = useState<{ r: number, c: number }[]>([]);
    const [gameWon, setGameWon] = useState(false);

    // Initialize Game
    useEffect(() => {
        startNewGame();
    }, []);
    
    const startNewGame = () => {
        setGameWon(false);
        const { newGrid, placedWords } = generateGrid(8); // Place 8 random words
        setGrid(newGrid);
        setWords(placedWords);
        setCurrentSelection([]);
        setSelectionStart(null);
    };

    const generateGrid = (wordCount: number) => {
        // Init empty grid
        let newGrid: Cell[][] = Array(GRID_SIZE).fill(null).map((_, r) =>
            Array(GRID_SIZE).fill(null).map((_, c) => ({
                row: r,
                col: c,
                value: "",
                selected: false,
                found: false
            }))
        );

        // Pick random words
        const shuffled = [...ALL_VOCAB].sort(() => 0.5 - Math.random());
        // Deduplicate by kana to avoid confusion
        const uniqueWords = shuffled.filter((v, i, a) => a.findIndex(t => t.kana === v.kana) === i);

        const selectedWords: Word[] = uniqueWords.slice(0, wordCount).map(w => ({
            ...w,
            romaji: wanakana.toRomaji(w.kana),
            found: false
        }));

        const placedWords: Word[] = [];

        // Place words
        for (const word of selectedWords) {
            let placed = false;
            let attempts = 0;
            while (!placed && attempts < 100) {
                const nav = Math.random() > 0.5 ? "H" : "V"; // Horizontal or Vertical
                const r = Math.floor(Math.random() * GRID_SIZE);
                const c = Math.floor(Math.random() * GRID_SIZE);

                if (canPlace(newGrid, word.kana, r, c, nav)) {
                    placeWord(newGrid, word.kana, r, c, nav);
                    // Store coordinates for validation later if needed, 
                    // though we validate by checking selected cells against word letters
                    placedWords.push(word);
                    placed = true;
                }
                attempts++;
            }
        }

        // Fill remaining
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (newGrid[r][c].value === "") {
                    newGrid[r][c].value = KANA_CHARS[Math.floor(Math.random() * KANA_CHARS.length)];
                }
            }
        }

        return { newGrid, placedWords: placedWords };
    };

    const canPlace = (grid: Cell[][], word: string, r: number, c: number, direction: string) => {
        if (direction === "H") {
            if (c + word.length > GRID_SIZE) return false;
            for (let i = 0; i < word.length; i++) {
                if (grid[r][c + i].value !== "" && grid[r][c + i].value !== word[i]) return false;
            }
        } else {
            if (r + word.length > GRID_SIZE) return false;
            for (let i = 0; i < word.length; i++) {
                if (grid[r + i][c].value !== "" && grid[r + i][c].value !== word[i]) return false;
            }
        }
        return true;
    };

    const placeWord = (grid: Cell[][], word: string, r: number, c: number, direction: string) => {
        for (let i = 0; i < word.length; i++) {
            if (direction === "H") {
                grid[r][c + i].value = word[i];
            } else {
                grid[r + i][c].value = word[i];
            }
        }
    };

    // Selection Logic
    const handleMouseDown = (r: number, c: number) => {
        if (gameWon) return;
        setIsSelecting(true);
        setSelectionStart({ r, c });
        setCurrentSelection([{ r, c }]);
    };

    const handleMouseEnter = (r: number, c: number) => {
        if (!isSelecting || !selectionStart || gameWon) return;

        // Calculate line between start and current
        const start = selectionStart;
        const end = { r, c };

        const newSelection: { r: number, c: number }[] = [];

        // Determine direction
        const dr = end.r - start.r;
        const dc = end.c - start.c;

        // Only allow straight lines (horizontal, vertical, diagonal)
        if (dr === 0) { // Horizontal
            const minC = Math.min(start.c, end.c);
            const maxC = Math.max(start.c, end.c);
            for (let i = minC; i <= maxC; i++) newSelection.push({ r: start.r, c: i });
        } else if (dc === 0) { // Vertical
            const minR = Math.min(start.r, end.r);
            const maxR = Math.max(start.r, end.r);
            for (let i = minR; i <= maxR; i++) newSelection.push({ r: i, c: start.c });
        } else if (Math.abs(dr) === Math.abs(dc)) { // Diagonal
            const stepR = dr > 0 ? 1 : -1;
            const stepC = dc > 0 ? 1 : -1;
            let currR = start.r;
            let currC = start.c;
            for (let i = 0; i <= Math.abs(dr); i++) {
                newSelection.push({ r: currR, c: currC });
                currR += stepR;
                currC += stepC;
            }
        } else {
            // Not a valid line, maybe just select just the end point to show invalid?
            // Or keep previous valid selection? Let's just track current point but invalid
            return;
        }

        setCurrentSelection(newSelection);
    };

    const handleMouseUp = () => {
        if (!isSelecting || gameWon) return;
        setIsSelecting(false);
        checkSelection();
        setCurrentSelection([]);
        setSelectionStart(null);
    };

    const checkSelection = () => {
        // Construct string from selection
        const selectedString = currentSelection.map(pos => grid[pos.r][pos.c].value).join("");
        const reverseString = selectedString.split("").reverse().join("");

        const foundWordIndex = words.findIndex(w => !w.found && (w.kana === selectedString || w.kana === reverseString));

        if (foundWordIndex !== -1) {
            // Mark word as found
            const newWords = [...words];
            newWords[foundWordIndex].found = true;
            setWords(newWords);

            // Mark cells as found
            const newGrid = [...grid];
            currentSelection.forEach(pos => {
                newGrid[pos.r][pos.c].found = true;
            });
            setGrid(newGrid);

            // Check win condition
            if (newWords.every(w => w.found)) {
                setGameWon(true);
            }
        }
    };

    // Helper to check if a cell is currently selected for highlighting
    const isCellSelected = (r: number, c: number) => {
        return currentSelection.some(pos => pos.r === r && pos.c === c);
    };

    // Render the selection bar
    const renderSelectionBar = () => {
        if (!isSelecting || !selectionStart || currentSelection.length < 2) return null;

        const start = currentSelection[0];
        const end = currentSelection[currentSelection.length - 1];

        const isHorizontal = start.r === end.r;
        const isVertical = start.c === end.c;
        const isDiagonal = Math.abs(start.r - end.r) === Math.abs(start.c - end.c);

        if (!isHorizontal && !isVertical && !isDiagonal) return null;

        return (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ opacity: 0.6 }}>
                <line
                    x1={`${(start.c * 10) + 5}%`}
                    y1={`${(start.r * 10) + 5}%`}
                    x2={`${(end.c * 10) + 5}%`}
                    y2={`${(end.r * 10) + 5}%`}
                    stroke="#d97706"
                    strokeWidth="4%"
                    strokeLinecap="round"
                />
            </svg>
        );
    };

    return (
        <div className="min-h-screen bg-[#f4e4bc] text-gray-900 pt-20 pb-12 select-none font-serif"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}
            onMouseUp={handleMouseUp}
        >
            {gameWon && (
                <Confetti
                    width={width}
                    height={height}
                    recycle={false}
                    numberOfPieces={500}
                    colors={['#d97706', '#b45309', '#78350f', '#fffbeb']}
                />
            )}

            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <BackButton onClick={() => router.push('/practice')} />
                        <h1 className="text-4xl font-black tracking-tighter text-[#4a3b2a] flex items-center gap-3">
                            <span className="text-xl bg-[#4a3b2a] text-[#f4e4bc] px-2 py-1 rounded">かな</span>
                            WORDSEARCH
                        </h1>
                    </div>
                    <button
                        onClick={startNewGame}
                        className="px-6 py-2 bg-[#4a3b2a] text-[#f4e4bc] border-2 border-[#4a3b2a] rounded shadow-[4px_4px_0px_0px_rgba(74,59,42,0.3)] hover:translate-y-1 hover:shadow-none transition-all font-bold flex items-center gap-2"
                    >
                        <RefreshCw size={16} />
                        New Scroll
                    </button>
                </div>

                <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                    {/* Game Grid - Genkou Youshi Style */}
                    <div className="relative bg-[#fffbeb] p-8 rounded shadow-2xl border-4 border-[#4a3b2a] flex justify-center items-center">
                        {/* Decorative Manuscript lines */}
                        <div className="absolute top-4 bottom-4 right-4 w-px bg-[#4a3b2a] opacity-10"></div>
                        <div className="absolute top-4 bottom-4 left-4 w-px bg-[#4a3b2a] opacity-10"></div>

                        <div
                            className="relative inline-block border-2 border-[#8c7e6a] bg-white p-1"
                            onMouseLeave={handleMouseUp}
                            style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)' }}
                        >
                            {/* Overlay visual bar */}
                            {renderSelectionBar()}

                            {grid.map((row, r) => (
                                <div key={r} className="flex">
                                    {row.map((cell, c) => (
                                        <div
                                            key={`${r}-${c}`}
                                            onMouseDown={() => handleMouseDown(r, c)}
                                            onMouseEnter={() => handleMouseEnter(r, c)}
                                            className={`
                                                w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl font-serif font-bold cursor-pointer transition-all duration-150 relative border border-[#8c7e6a]/30
                                                ${cell.found
                                                    ? "text-[#d97706] bg-[#fef3c7]"
                                                    : "text-[#4a3b2a] hover:bg-[#f4e4bc]/30"
                                                }
                                            `}
                                        >
                                            {cell.value}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / Word List */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                                <Trophy className="text-yellow-500" size={20} />
                                Word List
                            </h2>
                            <p className="text-sm text-gray-500 mb-6">Find the kana for these words:</p>

                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                                {words.map((word, i) => (
                                    <div
                                        key={i}
                                        className={`
                                        p-3 rounded-xl border transition-all duration-300 flex items-center justify-between group relative
                                        ${word.found
                                                ? "bg-green-50 border-green-200 opacity-50"
                                                : "bg-gray-50 border-gray-100 hover:border-blue-200"
                                            }
                                    `}
                                    >
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                                            {word.romaji}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                                        </div>

                                        <span className={`font-medium ${word.found ? "text-green-700 line-through" : "text-gray-700"}`}>
                                            {word.en}
                                        </span>
                                        {word.found && <CheckCircle size={16} className="text-green-500" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {gameWon && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white text-center shadow-lg"
                            >
                                <h3 className="text-2xl font-bold mb-2">Excellent!</h3>
                                <p className="mb-6 opacity-90">You found all the words.</p>
                                <button
                                    onClick={startNewGame}
                                    className="w-full py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-sm"
                                >
                                    Play Again
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
