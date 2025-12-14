import { CrosswordClue } from "./types";

export const PUZZLES: CrosswordClue[][] = [
    // Puzzle 1: School & Life
    [
        { id: 1, direction: "down", row: 2, col: 6, text: "A person who learns at an educational institution", answer: "がくせい" }, // GAKUSEI (student)
        { id: 2, direction: "across", row: 4, col: 4, text: "An educator who instructs and guides learners", answer: "せんせい" }, // SENSEI (teacher)
        { id: 3, direction: "down", row: 4, col: 4, text: "The planet Earth and all its inhabitants", answer: "せかい" }, // SEKAI (world)
        { id: 4, direction: "across", row: 5, col: 3, text: "A sea creature with ten tentacles", answer: "いか" }, // IKA (squid)
        { id: 5, direction: "down", row: 5, col: 3, text: "A building where people live", answer: "いえ" }, // IE (house)
        { id: 6, direction: "across", row: 6, col: 3, text: "A flat fish with a stinging tail", answer: "えい" }, // EI (ray)
        { id: 7, direction: "across", row: 5, col: 6, text: "The first counting number", answer: "いち" }, // ICHI (one)
        { id: 8, direction: "down", row: 4, col: 7, text: "A small red fruit with seeds on the outside", answer: "いちご" }, // ICHIGO (strawberry)
    ],
    // Puzzle 2: Colors & Nature
    [
        { id: 1, direction: "across", row: 2, col: 4, text: "A plant's colorful bloom", answer: "はな" }, // HANA (flower)
        { id: 2, direction: "down", row: 2, col: 5, text: "The interior or middle part", answer: "なか" }, // NAKA (inside)
        { id: 3, direction: "across", row: 3, col: 4, text: "The color of blood or roses", answer: "あか" }, // AKA (red)
        { id: 4, direction: "down", row: 3, col: 4, text: "The color of the sky or ocean", answer: "あお" }, // AO (blue)
        { id: 5, direction: "across", row: 4, col: 3, text: "The front part of your head", answer: "かお" }, // KAO (face)
    ],
    // Puzzle 3: Animals & Numbers
    [
        { id: 1, direction: "across", row: 3, col: 3, text: "A furry pet that says 'meow'", answer: "ねこ" }, // NEKO (cat)
        { id: 2, direction: "down", row: 3, col: 4, text: "The organ that pumps blood, or one's feelings", answer: "こころ" }, // KOKORO (heart/mind)
        { id: 3, direction: "across", row: 5, col: 4, text: "The number after five", answer: "ろく" }, // ROKU (six)
        { id: 4, direction: "down", row: 5, col: 5, text: "The darkest color, opposite of white", answer: "くろ" }, // KURO (black)
        { id: 5, direction: "across", row: 6, col: 4, text: "The color of snow or clouds", answer: "しろ" }, // SHIRO (white)
    ]
];
