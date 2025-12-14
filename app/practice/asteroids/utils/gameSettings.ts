export type Difficulty = 'easy' | 'medium' | 'hard';

export interface DifficultySetting {
    baseSpeed: number;
    spawnInterval: number;
    speedVariance: number;
}

export const GAME_SETTINGS: Record<Difficulty, DifficultySetting> = {
    easy: {
        baseSpeed: 0.2,
        spawnInterval: 3000,
        speedVariance: 0.2 // +/- 10%
    },
    medium: {
        baseSpeed: 0.4,
        spawnInterval: 2000,
        speedVariance: 0.4
    },
    hard: {
        baseSpeed: 0.7,
        spawnInterval: 1500,
        speedVariance: 0.5
    }
};
