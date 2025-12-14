"use client";

import { CrosswordBox } from "./CrosswordBox";
import { CrosswordCell } from "../types";
import { CANVAS_SIZE } from "../logic";

interface CrosswordBoardProps {
    grid: CrosswordCell[][];
    selectedCell: { r: number, c: number } | null;
    isWon: boolean;
    onCellClick: (r: number, c: number) => void;
    onBoxComplete: (r: number, c: number, char: string) => void;
    onBoxBackspace: () => void;
    onKeyDown: (e: React.KeyboardEvent, r: number, c: number) => void;
}

export function CrosswordBoard({
    grid,
    selectedCell,
    isWon,
    onCellClick,
    onBoxComplete,
    onBoxBackspace,
    onKeyDown
}: CrosswordBoardProps) {
    return (
        <div className="bg-[#5c4033] p-6 rounded-lg shadow-2xl border-4 border-[#3e2723] flex justify-center overflow-auto relative select-none">
            {/* Wood Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}
            />

            {/* Inner Recess */}
            <div className="grid gap-[1px] bg-[#2d1b15] p-3 rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] relative border border-[#4a332a]"
                style={{
                    gridTemplateColumns: `repeat(${CANVAS_SIZE}, minmax(0, 1fr))`,
                    width: 'fit-content'
                }}
            >
                {grid.map((row, r) => (
                    row.map((cell, c) => (
                        <div
                            key={`${r}-${c}`}
                            className={`w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center transition-transform duration-100`}
                        >
                            <CrosswordBox
                                value={cell.input}
                                correctChar={cell.char || ""}
                                isActive={cell.isActive}
                                clueNum={cell.clueNum}
                                isSelected={selectedCell?.r === r && selectedCell?.c === c}
                                isWon={isWon}
                                onClick={() => onCellClick(r, c)}
                                onComplete={(char) => onBoxComplete(r, c, char)}
                                onBackspace={onBoxBackspace}
                                onKeyDown={(e) => onKeyDown(e, r, c)}
                            />
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
}
