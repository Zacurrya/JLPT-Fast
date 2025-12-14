// Vocabulary data for Asteroids game
export interface VocabItem {
    id: number;
    kanji?: string;
    kana: string;
    meaning: string;
    romaji?: string;
}

export const vocabularyData: VocabItem[] = [
    // Basic nouns
    { id: 1, kanji: "学生", kana: "がくせい", meaning: "student", romaji: "gakusei" },
    { id: 2, kanji: "学校", kana: "がっこう", meaning: "school", romaji: "gakkou" },
    { id: 3, kanji: "先生", kana: "せんせい", meaning: "teacher", romaji: "sensei" },
    { id: 4, kanji: "人", kana: "ひと", meaning: "person", romaji: "hito" },
    { id: 5, kanji: "猫", kana: "ねこ", meaning: "cat", romaji: "neko" },
    { id: 6, kanji: "犬", kana: "いぬ", meaning: "dog", romaji: "inu" },
    { id: 7, kanji: "山", kana: "やま", meaning: "mountain", romaji: "yama" },
    { id: 8, kanji: "本", kana: "ほん", meaning: "book", romaji: "hon" },
    { id: 9, kanji: "水", kana: "みず", meaning: "water", romaji: "mizu" },
    { id: 10, kanji: "日本", kana: "にほん", meaning: "japan", romaji: "nihon" },

    // Verbs
    { id: 11, kanji: "食べる", kana: "たべる", meaning: "eat", romaji: "taberu" },
    { id: 12, kanji: "飲む", kana: "のむ", meaning: "drink", romaji: "nomu" },
    { id: 13, kanji: "行く", kana: "いく", meaning: "go", romaji: "iku" },
    { id: 14, kanji: "来る", kana: "くる", meaning: "come", romaji: "kuru" },
    { id: 15, kanji: "見る", kana: "みる", meaning: "see", romaji: "miru" },
    { id: 16, kanji: "聞く", kana: "きく", meaning: "listen", romaji: "kiku" },
    { id: 17, kanji: "話す", kana: "はなす", meaning: "speak", romaji: "hanasu" },
    { id: 18, kanji: "読む", kana: "よむ", meaning: "read", romaji: "yomu" },
    { id: 19, kanji: "書く", kana: "かく", meaning: "write", romaji: "kaku" },
    { id: 20, kanji: "買う", kana: "かう", meaning: "buy", romaji: "kau" },

    // Adjectives
    { id: 21, kanji: "大きい", kana: "おおきい", meaning: "big", romaji: "ookii" },
    { id: 22, kanji: "小さい", kana: "ちいさい", meaning: "small", romaji: "chiisai" },
    { id: 23, kanji: "新しい", kana: "あたらしい", meaning: "new", romaji: "atarashii" },
    { id: 24, kanji: "古い", kana: "ふるい", meaning: "old", romaji: "furui" },
    { id: 25, kanji: "高い", kana: "たかい", meaning: "expensive", romaji: "takai" },
    { id: 26, kanji: "安い", kana: "やすい", meaning: "cheap", romaji: "yasui" },

    // Greetings
    { id: 27, kana: "おはよう", meaning: "good morning", romaji: "ohayou" },
    { id: 28, kana: "ありがとう", meaning: "thank you", romaji: "arigatou" },
    { id: 29, kana: "すみません", meaning: "excuse me", romaji: "sumimasen" },
    { id: 30, kana: "こんにちは", meaning: "hello", romaji: "konnichiwa" },

    // Time/Days
    { id: 31, kanji: "今日", kana: "きょう", meaning: "today", romaji: "kyou" },
    { id: 32, kanji: "昨日", kana: "きのう", meaning: "yesterday", romaji: "kinou" },
    { id: 33, kanji: "明日", kana: "あした", meaning: "tomorrow", romaji: "ashita" },
    { id: 34, kanji: "今", kana: "いま", meaning: "now", romaji: "ima" },

    // Colors
    { id: 35, kanji: "赤", kana: "あか", meaning: "red", romaji: "aka" },
    { id: 36, kanji: "青", kana: "あお", meaning: "blue", romaji: "ao" },
    { id: 37, kanji: "白", kana: "しろ", meaning: "white", romaji: "shiro" },
    { id: 38, kanji: "黒", kana: "くろ", meaning: "black", romaji: "kuro" },

    // Directions
    { id: 39, kanji: "上", kana: "うえ", meaning: "up", romaji: "ue" },
    { id: 40, kanji: "下", kana: "した", meaning: "down", romaji: "shita" },
    { id: 41, kanji: "右", kana: "みぎ", meaning: "right", romaji: "migi" },
    { id: 42, kanji: "左", kana: "ひだり", meaning: "left", romaji: "hidari" },
    { id: 43, kanji: "中", kana: "なか", meaning: "middle", romaji: "naka" },
    { id: 44, kanji: "外", kana: "そと", meaning: "outside", romaji: "soto" },

    // Family
    { id: 45, kanji: "父", kana: "ちち", meaning: "father", romaji: "chichi" },
    { id: 46, kanji: "母", kana: "はは", meaning: "mother", romaji: "haha" },

    // Common objects
    { id: 47, kanji: "車", kana: "くるま", meaning: "car", romaji: "kuruma" },
    { id: 48, kanji: "電車", kana: "でんしゃ", meaning: "train", romaji: "densha" },
    { id: 49, kanji: "駅", kana: "えき", meaning: "station", romaji: "eki" },
    { id: 50, kanji: "手", kana: "て", meaning: "hand", romaji: "te" },
];
