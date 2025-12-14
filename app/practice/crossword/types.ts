export interface CrosswordCell {
    row: number;
    col: number;
    char: string | null;
    input: string;
    clueNum?: number;
    isActive: boolean;
}

export interface CrosswordClue {
    id: number;
    direction: "across" | "down";
    row: number;
    col: number;
    text: string;
    answer: string;
}
