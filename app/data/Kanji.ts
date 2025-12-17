export interface kanji {
    character: string;
    onyomi: string[];
    kunyomi: string[];
    meaning: string[];
    examples: {
        word: string;
        reading: string;
        meaning: string;
    }[];
}

export const n5Kanji: kanji[] = [
    {
        character: "日",
        onyomi: ["ニチ", "ジツ"],
        kunyomi: ["ひ", "-び", "-か"],
        meaning: ["Day", "Sun", "Japan"],
        examples: [
            { word: "日", reading: "ひ", meaning: "Sun/Day" },
            { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
            { word: "日本", reading: "にほん", meaning: "Japan" }
        ]
    },
    {
        character: "一",
        onyomi: ["イチ", "イツ"],
        kunyomi: ["ひと-", "ひと.つ"],
        meaning: ["One"],
        examples: [
            { word: "一", reading: "いち", meaning: "One" },
            { word: "一つ", reading: "ひとつ", meaning: "One thing" }
        ]
    },
    {
        character: "国",
        onyomi: ["コク"],
        kunyomi: ["くに"],
        meaning: ["Country"],
        examples: [
            { word: "国", reading: "くに", meaning: "Country" },
            { word: "外国", reading: "がいこく", meaning: "Foreign country" }
        ]
    },
    {
        character: "人",
        onyomi: ["ジン", "ニン"],
        kunyomi: ["ひと"],
        meaning: ["Person"],
        examples: [
            { word: "人", reading: "ひと", meaning: "Person" },
            { word: "日本人", reading: "にほんじん", meaning: "Japanese person" }
        ]
    },
    {
        character: "年",
        onyomi: ["ネン"],
        kunyomi: ["とし"],
        meaning: ["Year"],
        examples: [
            { word: "年", reading: "とし", meaning: "Year" },
            { word: "今年", reading: "ことし", meaning: "This year" }
        ]
    },
    {
        character: "大",
        onyomi: ["ダイ", "タイ"],
        kunyomi: ["おお-", "おお.きい"],
        meaning: ["Large", "Big"],
        examples: [
            { word: "大きい", reading: "おおきい", meaning: "Big" },
            { word: "大学", reading: "だいがく", meaning: "University" }
        ]
    },
    {
        character: "十",
        onyomi: ["ジュウ", "ジッ", "ジュッ"],
        kunyomi: ["とお"],
        meaning: ["Ten"],
        examples: [
            { word: "十", reading: "じゅう", meaning: "Ten" },
            { word: "十分", reading: "じゅうぶん", meaning: "Enough" }
        ]
    },
    {
        character: "二",
        onyomi: ["ニ", "ジ"],
        kunyomi: ["ふた", "ふた.つ"],
        meaning: ["Two"],
        examples: [
            { word: "二", reading: "に", meaning: "Two" },
            { word: "二つ", reading: "ふたつ", meaning: "Two things" }
        ]
    },
    {
        character: "本",
        onyomi: ["ホン"],
        kunyomi: ["もと"],
        meaning: ["Book", "Present", "Main", "Origin"],
        examples: [
            { word: "本", reading: "ほん", meaning: "Book" },
            { word: "日本", reading: "にほん", meaning: "Japan" }
        ]
    },
    {
        character: "中",
        onyomi: ["チュウ"],
        kunyomi: ["なか", "うち", "あた.る"],
        meaning: ["In", "Inside", "Middle", "Mean", "Center"],
        examples: [
            { word: "中", reading: "なか", meaning: "Inside" },
            { word: "中学校", reading: "ちゅうがっこう", meaning: "Middle School" }
        ]
    },
    {
        character: "長",
        onyomi: ["チョウ"],
        kunyomi: ["なが.い", "おさ"],
        meaning: ["Long", "Leader"],
        examples: [
            { word: "長い", reading: "ながい", meaning: "Long" },
            { word: "校長", reading: "こうちょう", meaning: "Principal" }
        ]
    },
    {
        character: "出",
        onyomi: ["シュツ", "スイ"],
        kunyomi: ["で.る", "-で", "だ.す", "-だ.す"],
        meaning: ["Exit", "Leave"],
        examples: [
            { word: "出る", reading: "でる", meaning: "To exit/leave" },
            { word: "出口", reading: "でぐち", meaning: "Exit" }
        ]
    },
    {
        character: "三",
        onyomi: ["サン"],
        kunyomi: ["み", "み.つ", "みっ.つ"],
        meaning: ["Three"],
        examples: [
            { word: "三", reading: "さん", meaning: "Three" },
            { word: "三つ", reading: "みっつ", meaning: "Three things" }
        ]
    },
    {
        character: "時",
        onyomi: ["ジ"],
        kunyomi: ["とき", "-どき"],
        meaning: ["Time", "Hour"],
        examples: [
            { word: "時", reading: "とき", meaning: "Time/When" },
            { word: "一時", reading: "いちじ", meaning: "One o'clock" }
        ]
    },
    {
        character: "行",
        onyomi: ["コウ", "ギョウ", "アン"],
        kunyomi: ["い.く", "ゆ.く", "-ゆ.き", "-ゆき", "-い.き", "-いき", "おこな.う"],
        meaning: ["Going", "Journey"],
        examples: [
            { word: "行く", reading: "いく", meaning: "To go" },
            { word: "旅行", reading: "りょこう", meaning: "Travel" }
        ]
    },
    {
        character: "見",
        onyomi: ["ケン"],
        kunyomi: ["み.る", "み.える", "み.せる"],
        meaning: ["See", "Hopes", "Chances", "Idea", "Opinion", "Look at", "Visible"],
        examples: [
            { word: "見る", reading: "みる", meaning: "To see" },
            { word: "意見", reading: "いけん", meaning: "Opinion" }
        ]
    },
    {
        character: "月",
        onyomi: ["ゲツ", "ガツ"],
        kunyomi: ["つき"],
        meaning: ["Month", "Moon"],
        examples: [
            { word: "月", reading: "つき", meaning: "Moon" },
            { word: "一月", reading: "いちがつ", meaning: "January" }
        ]
    },
    {
        character: "分",
        onyomi: ["ブン", "フン", "ブ"],
        kunyomi: ["わ.ける", "わ.け", "わ.かれる", "わ.かる", "わ.かつ"],
        meaning: ["Part", "Minute of time", "Segment", "Share", "Degree", "One's lot", "Duty", "Understand", "Know", "Rate", "1%", "Chances", "Shaku/100"],
        examples: [
            { word: "分", reading: "ふん", meaning: "Minute" },
            { word: "分かる", reading: "わかる", meaning: "To understand" },
            { word: "半分", reading: "はんぶん", meaning: "Half" }
        ]
    },
    {
        character: "後",
        onyomi: ["ゴ", "コウ"],
        kunyomi: ["のち", "うし.ろ", "うしろ", "あと", "おく.れる"],
        meaning: ["Behind", "Back", "Later"],
        examples: [
            { word: "後ろ", reading: "うしろ", meaning: "Behind" },
            { word: "午後", reading: "ごご", meaning: "Afternoon" }
        ]
    },
    {
        character: "前",
        onyomi: ["ゼン"],
        kunyomi: ["まえ", "-まえ"],
        meaning: ["In front", "Before"],
        examples: [
            { word: "前", reading: "まえ", meaning: "Before/Front" },
            { word: "名前", reading: "なまえ", meaning: "Name" }
        ]
    }
];
