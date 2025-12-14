export interface Flashcard {
    id: string;
    front: {
        text: string;
        subtext?: string;
    };
    back: {
        text: string;
        subtext?: string;
        example?: string;
    };
}

export interface Deck {
    id: string;
    title: string;
    description: string;
    color: string;
    icon?: string; // Icon name if we want
    cards: Flashcard[];
}

export const FLASHCARD_DECKS: Deck[] = [
    {
        id: "n5",
        title: "JLPT N5 Core",
        description: "Top 100 most common words for the N5 exam.",
        color: "bg-blue-100 text-blue-700 border-blue-200",
        cards: [
            {
                id: "n5_1",
                front: { text: "日", subtext: "ひ / にち" },
                back: { text: "Day / Sun", example: "Mata ashita (See you tomorrow)" }
            },
            {
                id: "n5_2",
                front: { text: "人", subtext: "ひと" },
                back: { text: "Person", example: "Ano hito wa dare desu ka?" }
            },
            {
                id: "n5_3",
                front: { text: "私", subtext: "わたし" },
                back: { text: "I / Me", example: "Watashi wa gakusei desu." }
            }
        ]
    },
    {
        id: "food",
        title: "Japanese Food",
        description: "Essential vocabulary for dining out and cooking.",
        color: "bg-orange-100 text-orange-700 border-orange-200",
        cards: [
            {
                id: "f1",
                front: { text: "寿司", subtext: "すし" },
                back: { text: "Sushi", subtext: "Vinegared rice with seafood" }
            },
            {
                id: "f2",
                front: { text: "ラーメン", subtext: "Raamen" },
                back: { text: "Ramen", subtext: "Noodle soup dish" }
            },
            {
                id: "f3",
                front: { text: "天ぷら", subtext: "てんぷら" },
                back: { text: "Tempura", subtext: "Deep-fried seafood/vegetables" }
            },
            {
                id: "f4",
                front: { text: "お茶", subtext: "おちゃ" },
                back: { text: "Tea", subtext: "Green tea" }
            }
        ]
    },
    {
        id: "restaurant",
        title: "Restaurant",
        description: "Ordering, paying, and restaurant etiquette.",
        color: "bg-red-100 text-red-700 border-red-200",
        cards: [
            {
                id: "r1",
                front: { text: "いらっしゃいませ", subtext: "Irasshaimase" },
                back: { text: "Welcome", subtext: "Greeting by staff" }
            },
            {
                id: "r2",
                front: { text: "これをお願いします", subtext: "Kore o onegaishimasu" },
                back: { text: "I'll have this please" }
            },
            {
                id: "r3",
                front: { text: "お会計", subtext: "Okaikei" },
                back: { text: "Check / Bill" }
            }
        ]
    },
    {
        id: "konbini",
        title: "Konbini",
        description: "Survival phrases for convenience stores.",
        color: "bg-green-100 text-green-700 border-green-200",
        cards: [
            {
                id: "k1",
                front: { text: "温めますか？", subtext: "Atatamemasu ka?" },
                back: { text: "Would you like this warmed up?", subtext: "Often asked for bento" }
            },
            {
                id: "k2",
                front: { text: "袋にお入れしますか？", subtext: "Fukuro ni oire shimasu ka?" },
                back: { text: "Do you need a bag?" }
            },
            {
                id: "k3",
                front: { text: "ポイントカードはお持ちですか？", subtext: "Pointo kaado wa omochi desu ka?" },
                back: { text: "Do you have a point card?" }
            }
        ]
    }
];
