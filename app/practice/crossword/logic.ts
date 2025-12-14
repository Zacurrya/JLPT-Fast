import { CrosswordCell, CrosswordClue } from "./types";

export const CANVAS_SIZE = 12;

export function generateGrid(puzzleData: CrosswordClue[]): CrosswordCell[][] {
    const newGrid: CrosswordCell[][] = Array(CANVAS_SIZE).fill(null).map((_, r) =>
        Array(CANVAS_SIZE).fill(null).map((_, c) => ({
            row: r,
            col: c,
            char: null,
            input: "",
            isActive: false
        }))
    );

    puzzleData.forEach(clue => {
        let r = clue.row; let c = clue.col;
        const chars = clue.answer.split("");

        if (!newGrid[r][c].clueNum) {
            newGrid[r][c].clueNum = clue.id;
        } else {
            newGrid[r][c].clueNum = Math.min(newGrid[r][c].clueNum!, clue.id);
        }

        chars.forEach((char: string, i: number) => {
            const currR = clue.direction === "across" ? r : r + i;
            const currC = clue.direction === "across" ? c + i : c;

            newGrid[currR][currC].char = char;
            newGrid[currR][currC].isActive = true;
        });
    });

    return newGrid;
}
