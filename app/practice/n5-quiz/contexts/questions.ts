import { Question } from "./types";

export const n5Questions: Question[] = [
    // --- KANA_TO_KANJI_INPUT (Reading) ---
    {
        id: 1,
        question: "学生",
        correctAnswer: ["がくせい"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 2,
        question: "学校",
        correctAnswer: ["がっこう"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 3,
        question: "先生",
        correctAnswer: ["せんせい"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 4,
        question: "人",
        correctAnswer: ["ひと"],
        type: "KANA_TO_KANJI_INPUT"
    },

    // --- KANA_TO_KANJI_CHOICE (Kanji Selection) ---
    {
        id: 5,
        question: "ねこ",
        options: ["猫", "犬", "鳥", "馬"],
        correctAnswer: "猫",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 6,
        question: "やま",
        options: ["川", "山", "田", "日"],
        correctAnswer: "山",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 7,
        question: "たべる",
        options: ["飲む", "食べる", "見る", "聞く"],
        correctAnswer: "食べる",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 8,
        question: "ほん",
        options: ["木", "本", "休", "体"],
        correctAnswer: "本",
        type: "KANA_TO_KANJI_CHOICE"
    },

    // --- TRANSLATION_CHOICE ---
    {
        id: 9,
        question: "Good Morning",
        options: ["おはよう", "こんにちは", "こんばんは", "さようなら"],
        correctAnswer: "おはよう",
        type: "TRANSLATION_CHOICE"
    },
    {
        id: 10,
        question: "Thank you",
        options: ["すみません", "ありがとう", "ごめんなさい", "はい"],
        correctAnswer: "ありがとう",
        type: "TRANSLATION_CHOICE"
    },
    {
        id: 11,
        question: "I understand",
        options: ["わかります", "しりません", "ちがいます", "そうです"],
        correctAnswer: "わかります",
        type: "TRANSLATION_CHOICE"
    },
    {
        id: 12,
        question: "Delicious",
        options: ["まずい", "おいしい", "たかい", "やすい"],
        correctAnswer: "おいしい",
        type: "TRANSLATION_CHOICE"
    },

    // --- TRANSLATION_INPUT (Sentence/Word) ---
    {
        id: 13,
        question: "Dog",
        correctAnswer: ["いぬ", "犬"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 14,
        question: "To drink",
        correctAnswer: ["のみます", "のむ", "飲む"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 15,
        question: "Book",
        correctAnswer: ["ほん", "本"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 16,
        question: "Japan",
        correctAnswer: ["にほん", "にっぽん", "日本"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 17,
        question: "Water",
        correctAnswer: ["みず", "水"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 18,
        question: "Friday",
        correctAnswer: ["きんようび", "金曜日"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 19,
        question: "Red",
        correctAnswer: ["あか", "赤"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 20,
        question: "Name",
        correctAnswer: ["なまえ", "名前"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 21,
        question: "To go (Dictionary form)",
        correctAnswer: ["いく", "行く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 22,
        question: "To go (Polite form)",
        correctAnswer: ["いきます", "行きます"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 23,
        question: "To come (Dictionary form)",
        correctAnswer: ["くる", "来る"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 24,
        question: "To return (home)",
        correctAnswer: ["かえる", "帰る"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 25,
        question: "To see / To watch",
        correctAnswer: ["みる", "見る"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 26,
        question: "To listen / To ask",
        correctAnswer: ["きく", "聞く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 27,
        question: "To speak",
        correctAnswer: ["はなす", "話す"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 28,
        question: "To read",
        correctAnswer: ["よむ", "読む"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 29,
        question: "To write",
        correctAnswer: ["かく", "書く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 30,
        question: "To buy",
        correctAnswer: ["かう", "買う"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // I-ADJECTIVES (Describing Properties)
    // ---------------------------------------------------------
    {
        id: 31,
        question: "Big",
        options: ["大きい", "小さい", "新しい", "古い"],
        correctAnswer: "大きい",
        type: "TRANSLATION_CHOICE"
    },
    {
        id: 32,
        question: "Small",
        correctAnswer: ["ちいさい", "小さい"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 33,
        question: "New",
        correctAnswer: ["あたらしい", "新しい"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 34,
        question: "Old (objects)",
        correctAnswer: ["ふるい", "古い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 35,
        question: "Hot (weather)",
        correctAnswer: ["あつい", "暑い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 36,
        question: "Cold (weather)",
        correctAnswer: ["さむい", "寒い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 37,
        question: "Expensive / High",
        correctAnswer: ["たかい", "高い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 38,
        question: "Cheap",
        correctAnswer: ["やすい", "安い"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // NA-ADJECTIVES (State of being)
    // ---------------------------------------------------------
    {
        id: 39,
        question: "Quiet",
        correctAnswer: ["しずか", "静か"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 40,
        question: "Lively / Bustling",
        correctAnswer: ["にぎやか", "賑やか"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 41,
        question: "Famous",
        correctAnswer: ["ゆうめい", "有名"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 42,
        question: "Kind / Helpful",
        correctAnswer: ["しんせつ", "親切"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 43,
        question: "Healthy / Energetic",
        correctAnswer: ["げんき", "元気"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 44,
        question: "To like",
        correctAnswer: ["すき", "好き"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // KANJI READINGS (Time & Calendar)
    // ---------------------------------------------------------
    {
        id: 45,
        question: "今日",
        options: ["きょう", "きのう", "あした", "いま"],
        correctAnswer: "きょう",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 46,
        question: "昨日",
        correctAnswer: ["きのう"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 47,
        question: "明日",
        correctAnswer: ["あした", "あす"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 48,
        question: "今",
        correctAnswer: ["いま"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 49,
        question: "毎日",
        correctAnswer: ["まいにち"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 50,
        question: "来年",
        correctAnswer: ["らいねん"],
        type: "KANA_TO_KANJI_INPUT"
    },

    // ---------------------------------------------------------
    // KANJI READINGS (Positions & Directions)
    // ---------------------------------------------------------
    {
        id: 51,
        question: "上",
        options: ["うえ", "した", "なか", "そと"],
        correctAnswer: "うえ",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 52,
        question: "下",
        options: ["うえ", "した", "なか", "そと"],
        correctAnswer: "した",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 53,
        question: "中",
        options: ["うえ", "した", "なか", "そと"],
        correctAnswer: "なか",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 54,
        question: "外",
        options: ["うえ", "した", "なか", "そと"],
        correctAnswer: "そと",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 55,
        question: "右",
        correctAnswer: ["みぎ"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 56,
        question: "左",
        correctAnswer: ["ひだり"],
        type: "KANA_TO_KANJI_INPUT"
    },

    // ---------------------------------------------------------
    // INTERROGATIVES (Questions Words)
    // ---------------------------------------------------------
    {
        id: 57,
        question: "What",
        correctAnswer: ["なに", "なん", "何"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 58,
        question: "Who",
        correctAnswer: ["だれ", "誰"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 59,
        question: "Where",
        correctAnswer: ["どこ"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 60,
        question: "When",
        correctAnswer: ["いつ"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 61,
        question: "Why",
        correctAnswer: ["なぜ", "どうして"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // FAMILY (Humble vs Polite)
    // ---------------------------------------------------------
    {
        id: 62,
        question: "Father (My father)",
        correctAnswer: ["ちち", "父"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 63,
        question: "Father (Someone else's)",
        correctAnswer: ["おとうさん", "お父さん"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 64,
        question: "Mother (My mother)",
        correctAnswer: ["はは", "母"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 65,
        question: "Mother (Someone else's)",
        correctAnswer: ["おかあさん", "お母さん"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // COMMON OBJECTS & NOUNS (Kanji Selection)
    // ---------------------------------------------------------
    {
        id: 66,
        question: "くるま",
        options: ["車", "電", "駅", "道"],
        correctAnswer: "車",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 67,
        question: "でんしゃ",
        options: ["車", "電車", "自転車", "電話"],
        correctAnswer: "電車",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 68,
        question: "えき",
        options: ["駅", "店", "家", "国"],
        correctAnswer: "駅",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 69,
        question: "おかね",
        options: ["お金", "金", "土", "男"],
        correctAnswer: "お金",
        type: "KANA_TO_KANJI_CHOICE"
    },
    {
        id: 70,
        question: "て",
        options: ["手", "目", "耳", "足"],
        correctAnswer: "手",
        type: "KANA_TO_KANJI_CHOICE"
    },

    // ---------------------------------------------------------
    // GRAMMAR PARTICLES / CONNECTORS (Translation)
    // ---------------------------------------------------------
    {
        id: 71,
        question: "But (Conjunction)",
        correctAnswer: ["でも"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 72,
        question: "And (Connecting nouns)",
        correctAnswer: ["と"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // COUNTERS (Special Readings)
    // ---------------------------------------------------------
    {
        id: 73,
        question: "One thing (General counter)",
        correctAnswer: ["ひとつ", "一つ"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 74,
        question: "Two things (General counter)",
        correctAnswer: ["ふたつ", "二つ"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 75,
        question: "Three things (General counter)",
        correctAnswer: ["みっつ", "三つ"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 76,
        question: "One person",
        correctAnswer: ["ひとり", "一人"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 77,
        question: "Two people",
        correctAnswer: ["ふたり", "二人"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // COLORS (Nouns/Adjectives)
    // ---------------------------------------------------------
    {
        id: 78,
        question: "White",
        correctAnswer: ["しろ", "白い", "白"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 79,
        question: "Black",
        correctAnswer: ["くろ", "黒い", "黒"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 80,
        question: "Blue",
        correctAnswer: ["あお", "青い", "青"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 81,
        question: "Apartment",
        correctAnswer: ["アパート"],
        type: "KANA_TO_KANJI_INPUT" // Using this type for Katakana output
    },
    {
        id: 82,
        question: "Bus",
        correctAnswer: ["バス"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 83,
        question: "Bed",
        correctAnswer: ["ベッド"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 84,
        question: "Department Store",
        correctAnswer: ["デパート"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 85,
        question: "Door (Western style)",
        correctAnswer: ["ドア"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 86,
        question: "Elevator",
        correctAnswer: ["エレベータ", "エレベーター"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 87,
        question: "Fork",
        correctAnswer: ["フォーク"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 88,
        question: "Guitar",
        correctAnswer: ["ギター"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 89,
        question: "Hotel",
        correctAnswer: ["ホテル"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 90,
        question: "Camera",
        correctAnswer: ["カメラ"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 91,
        question: "Coffee",
        correctAnswer: ["コーヒー"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 92,
        question: "Cup / Glass",
        correctAnswer: ["コップ"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 93,
        question: "Class",
        correctAnswer: ["クラス"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 94,
        question: "Party",
        correctAnswer: ["パーティー"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 95,
        question: "Pen",
        correctAnswer: ["ペン"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 96,
        question: "Pet",
        correctAnswer: ["ペット"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 97,
        question: "Pocket",
        correctAnswer: ["ポケット"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 98,
        question: "Swimming Pool",
        correctAnswer: ["プール"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 99,
        question: "Shower",
        correctAnswer: ["シャワー"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 100,
        question: "Shirt",
        correctAnswer: ["シャツ"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 101,
        question: "Skirt",
        correctAnswer: ["スカート"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 102,
        question: "Sport",
        correctAnswer: ["スポーツ"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 103,
        question: "Spoon",
        correctAnswer: ["スプーン"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 104,
        question: "Taxi",
        correctAnswer: ["タクシー"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 105,
        question: "Table",
        correctAnswer: ["テーブル"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 106,
        question: "Television / TV",
        correctAnswer: ["テレビ"],
        type: "KANA_TO_KANJI_INPUT"
    },
    {
        id: 107,
        question: "Toilet / Restroom",
        correctAnswer: ["トイレ"],
        type: "KANA_TO_KANJI_INPUT"
    },

    // ---------------------------------------------------------
    // GENERAL VOCABULARY (A-Series)
    // ---------------------------------------------------------
    {
        id: 108,
        question: "To take a shower",
        correctAnswer: ["あびる", "浴びる"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 109,
        question: "Dangerous / Risky",
        correctAnswer: ["あぶない", "危ない"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 110,
        question: "To give",
        correctAnswer: ["あげる"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 111,
        question: "Bright / Colorful",
        correctAnswer: ["あかるい", "明るい"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 112,
        question: "To open (transitive)",
        correctAnswer: ["あける", "開ける"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 113,
        question: "To open (intransitive)",
        correctAnswer: ["あく", "開く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 114,
        question: "Autumn",
        correctAnswer: ["あき", "秋"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 115,
        question: "Sweet",
        correctAnswer: ["あまい", "甘い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 116,
        question: "Rain",
        correctAnswer: ["あめ", "雨"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 117,
        question: "Older brother (My brother)",
        correctAnswer: ["あに", "兄"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 118,
        question: "Older sister (My sister)",
        correctAnswer: ["あね", "姉"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 119,
        question: "To wash",
        correctAnswer: ["あらう", "洗う"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 120,
        question: "To exist (inanimate objects)",
        correctAnswer: ["ある", "有る"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 121,
        question: "To walk",
        correctAnswer: ["あるく", "歩く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 122,
        question: "Morning",
        correctAnswer: ["あさ", "朝"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 123,
        question: "Breakfast",
        correctAnswer: ["あさごはん", "朝ご飯"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 124,
        question: "Day after tomorrow",
        correctAnswer: ["あさって", "明後日"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 125,
        question: "Foot / Leg",
        correctAnswer: ["あし", "足"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 126,
        question: "To play",
        correctAnswer: ["あそぶ", "遊ぶ"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 127,
        question: "Over there",
        correctAnswer: ["あそこ"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 128,
        question: "Head",
        correctAnswer: ["あたま", "頭"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 129,
        question: "Warm / Mild",
        correctAnswer: ["あたたかい", "暖かい"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 130,
        question: "To meet",
        correctAnswer: ["あう", "会う"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // GENERAL VOCABULARY (B, C, D Series)
    // ---------------------------------------------------------
    {
        id: 131,
        question: "Dinner",
        correctAnswer: ["ばんごはん", "晩ご飯"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 132,
        question: "Study",
        correctAnswer: ["べんきょう", "勉強"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 133,
        question: "Convenient",
        correctAnswer: ["べんり", "便利"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 134,
        question: "Hat / Cap",
        correctAnswer: ["ぼうし", "帽子"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 135,
        question: "Sick / Illness",
        correctAnswer: ["びょうき", "病気"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 136,
        question: "Hospital",
        correctAnswer: ["びょういん", "病院"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 137,
        question: "Small / Little",
        correctAnswer: ["ちいさい", "小さい"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 138,
        question: "Near / Close",
        correctAnswer: ["ちかい", "近い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 139,
        question: "Subway / Metro",
        correctAnswer: ["ちかてつ", "地下鉄"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 140,
        question: "Map",
        correctAnswer: ["ちず", "地図"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 141,
        question: "Kitchen",
        correctAnswer: ["だいどころ", "台所"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 142,
        question: "University",
        correctAnswer: ["だいがく", "大学"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 143,
        question: "To take out / To hand in",
        correctAnswer: ["だす", "出す"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 144,
        question: "To go out",
        correctAnswer: ["でかける", "出かける"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 145,
        question: "Electricity / Lights",
        correctAnswer: ["でんき", "電気"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 146,
        question: "Phone / Telephone",
        correctAnswer: ["でんわ", "電話"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 147,
        question: "Which one (of two)",
        correctAnswer: ["どちら"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 148,
        question: "Animal",
        correctAnswer: ["どうぶつ", "動物"],
        type: "TRANSLATION_INPUT"
    },

    // ---------------------------------------------------------
    // GENERAL VOCABULARY (H Series - High Frequency)
    // ---------------------------------------------------------
    {
        id: 149,
        question: "To enter",
        correctAnswer: ["はいる", "入る"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 150,
        question: "To begin (intransitive)",
        correctAnswer: ["はじまる", "始まる"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 151,
        question: "Flower",
        correctAnswer: ["はな", "花"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 152,
        question: "Nose",
        correctAnswer: ["はな", "鼻"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 153,
        question: "To run",
        correctAnswer: ["はしる", "走る"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 154,
        question: "To work",
        correctAnswer: ["はたらく", "働く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 155,
        question: "Fast / Quick",
        correctAnswer: ["はやい", "速い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 156,
        question: "Early",
        correctAnswer: ["はやい", "早い"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 157,
        question: "Room",
        correctAnswer: ["へや", "部屋"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 158,
        question: "To pull",
        correctAnswer: ["ひく", "引く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 159,
        question: "To play (instrument)",
        correctAnswer: ["ひく", "弾く"],
        type: "TRANSLATION_INPUT"
    },
    {
        id: 160,
        question: "Wide / Spacious",
        correctAnswer: ["ひろい", "広い"],
        type: "TRANSLATION_INPUT"
    }
];
