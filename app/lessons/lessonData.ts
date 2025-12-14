import { Chapter } from "./data";

export const n5Chapters: Chapter[] = [
    {
        id: "chapter-1-foundations",
        number: 1,
        title: "Foundations",
        description: "Begin your journey",
        theme: {
            primaryGradient: "from-[#FF5252] to-[#F44336]",
            secondaryGradient: "from-red-600 to-orange-600",
            ringColor: "ring-red-200",
            textColors: {
                title: "text-yellow-100",
                description: "text-yellow-50/90"
            }
        },
        lessons: [
            {
                id: "N5-Introduction",
                title: "Introduction",
                description: "Learn about the JLPT N5 and your first hiragana characters!",
                iconType: 'kana',
                cards: [
                    {
                        type: 'info',
                        heading: "Your Journey to JLPT N5",
                        text: "The JLPT N5 is the most recognised certification for beginner's level Japanese.\n\nIt can carry you through your 2 week trip to Japan or even be leveraged to widen your career prospects.\n\nBy the end of this course, you should have full confidence in taking the exam, and navigate through the most common scenarios in Japanese life."
                    },
                    {
                        type: 'info',
                        heading: "Welcome to Japanese!",
                        text: "Japanese uses three writing systems:\n\n• Hiragana - the standard phonetic script\n• Katakana - used for foreign loan words\n• Kanji - pictographic characters\n\nWe'll start with Hiragana, the foundation of Japanese writing. Today you'll learn your first two characters!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "こ", romaji: "ko" },
                            { kana: "ん", romaji: "n" }
                        ]
                    },
                    {
                        type: 'kana-mcq',
                        characters: [
                            { kana: "こ", romaji: "ko" },
                            { kana: "ん", romaji: "n" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "romaji-input",
                title: "Romaji & Input",
                description: "Mastering the Japanese keyboard and pronunciation guide",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "What is Romaji?",
                        text: "Romaji uses the English alphabet to represent Japanese sounds. It helps beginners read until they master Hiragana.\n\nExample:\n<b>あ</b> (Hiragana) = <b>a</b> (Romaji)"
                    },
                    {
                        type: 'info',
                        heading: "How to Type",
                        text: "Writing  is different from English.\n\nSpaces are <b>optional</b> and generally not used between words in a sentence. You can type the sounds continuously!\n\nFor example, to type <b>Ohayō Gozaimasu</b>, you can type <b>ohayougozaimasu</b> or <b>ohayou gozaimasu</b>!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "す", romaji: "su" },
                            { kana: "し", romaji: "shi" }
                        ]
                    },
                    {
                        type: 'kana-mcq',
                        characters: [
                            { kana: "す", romaji: "su" },
                            { kana: "し", romaji: "shi" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "こ", romaji: "ko" },
                            { kana: "ん", romaji: "n" },
                            { kana: "す", romaji: "su" },
                            { kana: "し", romaji: "shi" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "essential-greetings",
                title: "Essential Greetings",
                description: "Learn how to greet people at different times of the day",
                iconType: 'people',
                cards: [
                    {
                        type: 'info',
                        heading: "Common Greetings",
                        text: "Just like in English, Japanese has different greetings depending on the time of day. Let's learn the basic ones!"
                    },
                    {
                        type: 'info',
                        heading: "Good Morning",
                        text: "おはようございます (Ohayō gozaimasu) is used in the morning. It's a polite way to say good morning."
                    },
                    {
                        type: 'typing',
                        targetKana: "おはようございます",
                        meaning: "Good morning",
                        romaji: "Ohayō gozaimasu"
                    },
                    {
                        type: 'mcq',
                        question: "What does おはようございます mean?",
                        options: ["Good morning", "Hello", "Good evening", "Goodbye"],
                        correctAnswer: "Good morning",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'info',
                        heading: "Hello / Good Afternoon",
                        text: "こんにちは (Konnichiwa) is used during the daytime. This is the most common greeting in Japanese. Remember that the は here is pronounced 'wa'!"
                    },
                    {
                        type: 'typing',
                        targetKana: "こんにちは",
                        meaning: "Hello / Good afternoon",
                        romaji: "Konnichiwa"
                    },
                    {
                        type: 'mcq',
                        question: "What does こんにちは mean?",
                        options: ["Hello", "Good morning", "Good evening", "Goodbye"],
                        correctAnswer: "Hello",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            },
            {
                id: "kana-lesson-2",
                title: "New Kana: に and ち",
                description: "Learn two more characters!",
                iconType: 'kana',
                cards: [
                    {
                        type: 'info',
                        heading: "Building Your Vocabulary",
                        text: "Let's learn two more characters that will help us form words!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "に", romaji: "ni" },
                            { kana: "ち", romaji: "chi" }
                        ]
                    },
                    {
                        type: 'kana-mcq',
                        characters: [
                            { kana: "に", romaji: "ni" },
                            { kana: "ち", romaji: "chi" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "こ", romaji: "ko" },
                            { kana: "ん", romaji: "n" },
                            { kana: "に", romaji: "ni" },
                            { kana: "ち", romaji: "chi" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "ordering-food",
                title: "Introduction to Food - Listing Nouns",
                description: "Learn essential vocabulary for ordering at a restaurant",
                iconType: 'food',
                cards: [
                    {
                        type: 'info',
                        heading: "Restaurant Vocabulary",
                        text: "Let's learn three essential words for ordering food in Japan."
                    },
                    {
                        type: 'info',
                        heading: "Sushi",
                        text: "すし (Sushi) is Japan's most famous dish.",
                        example: {
                            jp: "すし",
                            romaji: "sushi",
                            en: "Sushi"
                        }
                    },
                    {
                        type: 'typing',
                        targetKana: "すし",
                        meaning: "Sushi",
                        romaji: "sushi"
                    },
                    {
                        type: 'info',
                        heading: "Green Tea",
                        text: "おちゃ (Ocha) means green tea. The 'o' is a polite prefix.",
                        example: {
                            jp: "おちゃ",
                            romaji: "ocha",
                            en: "Green Tea"
                        }
                    },
                    {
                        type: 'typing',
                        targetKana: "おちゃ",
                        meaning: "Green Tea",
                        romaji: "ocha"
                    },
                    {
                        type: 'info',
                        heading: "Water",
                        text: "みず (Mizu) means water.",
                        example: {
                            jp: "みず",
                            romaji: "mizu",
                            en: "Water"
                        }
                    },
                    {
                        type: 'typing',
                        targetKana: "みず",
                        meaning: "Water",
                        romaji: "mizu"
                    },
                    {
                        type: 'info',
                        heading: "Ordering Multiple Items",
                        text: "To list items, use the particle と (to) which means 'and'.\n\nUnlike English, it simply sits between the nouns.",
                        structure: "Noun A + と + Noun B",
                        example: {
                            jp: "すし と おちゃ",
                            romaji: "sushi to ocha",
                            en: "Sushi and green tea"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Sushi and water'?",
                        options: ["すし と みず", "すし ね みず", "すし みず", "みず と すし"],
                        correctAnswer: "すし と みず",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'typing',
                        targetKana: "すしとおちゃ",
                        meaning: "Sushi and Green Tea",
                        romaji: "sushi to ocha"
                    }
                ]
            },
            {
                id: "ordering-with-please",
                title: "Ordering Food",
                description: "Learn how to politely ask for things at a restaurant",
                iconType: 'food',
                cards: [
                    {
                        type: 'info',
                        heading: "The Magic Word",
                        text: "To ask for something in Japanese, we use ください (Kudasai), which means 'Please' or 'Please give me'."
                    },
                    {
                        type: 'typing',
                        targetKana: "ください",
                        meaning: "Please (give me)",
                        romaji: "kudasai"
                    },
                    {
                        type: 'info',
                        heading: "Placing an Order",
                        text: "To polish your order, we use the particle を (wo) to mark the item you want.",
                        structure: "Item + を + ください",
                        example: {
                            jp: "すし を ください",
                            romaji: "sushi wo kudasai",
                            en: "Sushi please"
                        }
                    },
                    {
                        type: 'info',
                        heading: "Particle 'Wo' (を)",
                        text: "Note that while this character is written as 'wo', it is usually pronounced 'o' in modern Japanese.\n\nIt marks the object of the sentence.",
                        structure: "Object + を + Verb",
                        example: {
                            jp: "みず を ください",
                            romaji: "mizu wo kudasai",
                            en: "Water please"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Water please'?",
                        options: ["みず を ください", "みず と ください", "みず は ください", "みず ください"],
                        correctAnswer: "みず を ください",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'typing',
                        targetKana: "おちゃをください",
                        meaning: "Green tea please",
                        romaji: "ocha wo kudasai"
                    },
                    {
                        type: 'typing',
                        targetKana: "すしとおちゃをください",
                        meaning: "Sushi and green tea please",
                        romaji: "sushi to ocha wo kudasai"
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-1-test",
        number: 1,
        title: "Chapter 1 Review",
        description: "Test your knowledge of Chapter 1",
        theme: {
            primaryGradient: "from-slate-700 to-slate-800",
            secondaryGradient: "from-slate-600 to-slate-700",
            ringColor: "ring-slate-400",
            textColors: {
                title: "text-slate-100",
                description: "text-slate-300"
            }
        },
        lessons: [
            {
                id: "chapter-1-review",
                title: "Chapter 1 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 1 Review",
                        text: "Let's review what you've learned about greetings and basic Hiragana."
                    },
                    {
                        type: 'mcq',
                        question: "What does こんにちは mean?",
                        options: ["Hello", "Good morning", "Good evening", "Goodbye"],
                        correctAnswer: "Hello",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'kana-mcq',
                        characters: [
                            { kana: "こ", romaji: "ko" },
                            { kana: "ん", romaji: "n" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'typing',
                        targetKana: "おはようございます",
                        meaning: "Good morning",
                        romaji: "Ohayō gozaimasu"
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-2-grammar-basics",
        number: 2,
        title: "First Steps in Grammar",
        description: "Constructing simple sentences with particles",
        theme: {
            primaryGradient: "from-blue-400 to-blue-600",
            secondaryGradient: "from-blue-600 to-cyan-600",
            ringColor: "ring-blue-200",
            textColors: {
                title: "text-blue-50",
                description: "text-blue-100/90"
            }
        },
        lessons: [
            {
                id: "particle-wa",
                title: "The Topic Particle は",
                description: "Learn the most important particle in Japanese",
                iconType: 'kana',
                cards: [
                    {
                        type: 'info',
                        heading: "The Topic Marker は",
                        text: "は (wa) marks the topic of a sentence. It tells us what we're talking about.\n\nNote: Written as 'ha' but pronounced 'wa' as a particle!",
                        structure: "Topic + は + Statement",
                        example: {
                            jp: "わたし は がくせい です",
                            romaji: "watashi wa gakusei desu",
                            en: "I am a student"
                        }
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "は", romaji: "wa", desc: "pronounced 'wa' as particle" }
                        ]
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I am a student",
                        correctSentence: ["わたし", "は", "がくせい", "です"],
                        scorable: true
                    }
                ]
            },
            {
                id: "what-is-desu?",
                title: "To be - です (Desu)",
                description: "A verb which is used to describe the state of being something.",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "What is です?",
                        text: "です (desu) is the polite form of the verb 'to be', functioning similarly to 'am', 'is', or 'are' in English. It's used to conclude polite statements, typically following a noun.\n\nStructure: [Noun] + です"
                    },
                    {
                        type: 'info',
                        heading: "Example",
                        text: "がくせいです (Gakusei desu) = I am a student."
                    },
                    {
                        type: 'mcq',
                        question: "What does 'がくせいです' mean?",
                        options: ["I am a student", "I am a teacher", "Hello", "Thank you"],
                        correctAnswer: "I am a student",
                        scorable: true
                    }
                ]
            },
            {
                id: "implicit-watashi",
                title: "Implicit Subjects",
                description: "Learn when you can drop 'I'",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Dropping the Subject",
                        text: "In Japanese, you often don't need to say わたしは (I) if it's clear from context."
                    },
                    {
                        type: 'mcq',
                        question: "When can you drop わたしは?",
                        options: ["When context is clear", "Never", "Always", " Only in writing"],
                        correctAnswer: "When context is clear",
                        scorable: true
                    }
                ]
            },
            {
                id: "particle-no",
                title: "Particle の (no) - Possessive",
                description: "Learn to show possession",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Possessive の",
                        text: "の (no) connects nouns like 's' or 'of' in English.",
                        structure: "Owner + の + Item",
                        example: {
                            jp: "わたし の ほん",
                            romaji: "watashi no hon",
                            en: "My book"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "My book",
                        correctSentence: ["わたし", "の", "ほん"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-2-test",
        number: 2,
        title: "Chapter 2 Review",
        description: "Test your knowledge of Chapter 2",
        theme: {
            primaryGradient: "from-slate-700 to-slate-800",
            secondaryGradient: "from-slate-600 to-slate-700",
            ringColor: "ring-slate-400",
            textColors: {
                title: "text-slate-100",
                description: "text-slate-300"
            }
        },
        lessons: [
            {
                id: "chapter-2-review",
                title: "Chapter 2 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 2 Review",
                        text: "Time to test your grammar skills! Particles and sentence structure."
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I am a student",
                        correctSentence: ["わたし", "は", "がくせい", "です"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "Which particle marks the topic?",
                        options: ["は (wa)", "を (wo)", "の (no)", "が (ga)"],
                        correctAnswer: "は (wa)",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "My book",
                        correctSentence: ["わたし", "の", "ほん"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-3-numbers-kanji",
        number: 3,
        title: "Numbers & Basic Kanji",
        description: "Counting and reading your first Kanji characters",
        theme: {
            primaryGradient: "from-emerald-400 to-emerald-600",
            secondaryGradient: "from-emerald-600 to-teal-600",
            ringColor: "ring-emerald-200",
            textColors: {
                title: "text-emerald-50",
                description: "text-emerald-100/90"
            }
        },
        lessons: [
            {
                id: "numbers-1-10",
                title: "Numbers 1-10",
                description: "Learn to count from 1 to 10",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Japanese Numbers",
                        text: "Let's learn numbers 1-10! They are essential for daily life."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "い", romaji: "i" },
                            { kana: "ち", romaji: "chi" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "1 to 5",
                        text: "一 (ichi) = 1\n二 (ni) = 2\n三 (san) = 3\n四 (yon) = 4\n五 (go) = 5"
                    },
                    {
                        type: 'mcq',
                        question: "What is '3' in Japanese?",
                        options: ["san", "ni", "yon", "go"],
                        correctAnswer: "san",
                        scorable: true
                    }
                ]
            },
            {
                id: "kanji-basics-1",
                title: "First Kanji: 一, 二, 三",
                description: "Read and write the numbers 1, 2, and 3",
                iconType: 'kanji',
                cards: [
                    {
                        type: 'info',
                        heading: "Introduction to Kanji",
                        text: "Kanji are characters borrowed from Chinese. Each character has a meaning.\nUse your imagination to remember them!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "一", romaji: "ichi", desc: "One (One line)" },
                            { kana: "二", romaji: "ni", desc: "Two (Two lines)" },
                            { kana: "三", romaji: "san", desc: "Three (Three lines)" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "Which Kanji means 'Two'?",
                        options: ["二", "一", "三", "川"],
                        correctAnswer: "二",
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "一", romaji: "One" },
                            { kana: "二", romaji: "Two" },
                            { kana: "三", romaji: "Three" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "time-expressions",
                title: "Time & Counters",
                description: "Asking 'what time is it?'",
                iconType: 'time',
                cards: [
                    {
                        type: 'info',
                        heading: "Counting Time",
                        text: "To say o'clock, add じ (ji) after the number.\n\n1:00 = いちじ (ichiji)\n2:00 = にじ (niji)"
                    },
                    {
                        type: 'mcq',
                        question: "How do you say '3 o'clock'?",
                        options: ["さんじ", "さん", "さんねん", "さんご"],
                        correctAnswer: "さんじ",
                        scorable: true
                    },
                    {
                        type: 'typing',
                        targetKana: "にじ",
                        meaning: "2 o'clock",
                        romaji: "niji"
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-3-test",
        number: 3,
        title: "Chapter 3 Review",
        description: "Test your knowledge of Chapter 3",
        theme: {
            primaryGradient: "from-slate-700 to-slate-800",
            secondaryGradient: "from-slate-600 to-slate-700",
            ringColor: "ring-slate-400",
            textColors: {
                title: "text-slate-100",
                description: "text-slate-300"
            }
        },
        lessons: [
            {
                id: "chapter-3-review",
                title: "Chapter 3 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 3 Review",
                        text: "Numbers, time, and your first Kanji."
                    },
                    {
                        type: 'mcq',
                        question: "Which of these means '1'?",
                        options: ["一", "二", "三"],
                        correctAnswer: "一",
                        scorable: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-4-directions",
        number: 4,
        title: "Directions & Locations",
        description: "Navigating your way around",
        theme: {
            primaryGradient: "from-violet-500 to-purple-600",
            secondaryGradient: "from-purple-600 to-indigo-600",
            ringColor: "ring-purple-200",
            textColors: {
                title: "text-purple-50",
                description: "text-purple-100/90"
            }
        },
        lessons: [
            {
                id: "positions-basics",
                title: "Positions: Up, Down, Left, Right",
                description: "Learn relative positions",
                iconType: 'location',
                cards: [
                    {
                        type: 'info',
                        heading: "Relative Positions",
                        text: "In Japanese, positions like 'above' or 'right' are nouns. We use them with particles to describe where things are."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "うえ", romaji: "ue", desc: "Above / On top" },
                            { kana: "した", romaji: "shita", desc: "Below / Under" },
                            { kana: "みぎ", romaji: "migi", desc: "Right" },
                            { kana: "ひだり", romaji: "hidari", desc: "Left" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "Describing Location",
                        text: "To say 'On the table', we say 'Table's above'.\n\nStructure: [Reference] の [Position]",
                        example: {
                            jp: "テーブル の うえ",
                            romaji: "teeburu no ue",
                            en: "On (top of) the table"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Under the chair'?",
                        options: ["いす の した", "いす の うえ", "いす の みぎ", "した の いす"],
                        correctAnswer: "いす の した",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "うえ", romaji: "Above" },
                            { kana: "した", romaji: "Below" },
                            { kana: "みぎ", romaji: "Right" },
                            { kana: "ひだり", romaji: "Left" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "cardinal-directions",
                title: "Cardinal Directions",
                description: "North, South, East, and West",
                iconType: 'location',
                cards: [
                    {
                        type: 'info',
                        heading: "The Compass",
                        text: "Let's learn the four cardinal directions."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "きた", romaji: "kita", desc: "North" },
                            { kana: "みなみ", romaji: "minami", desc: "South" },
                            { kana: "ひがし", romaji: "higashi", desc: "East" },
                            { kana: "にし", romaji: "nishi", desc: "West" }
                        ]
                    },
                    {
                        // Using Kanji for visualisation
                        type: 'kana-learn',
                        characters: [
                            { kana: "北", romaji: "kita", desc: "North" },
                            { kana: "南", romaji: "minami", desc: "South" },
                            { kana: "東", romaji: "higashi", desc: "East" },
                            { kana: "西", romaji: "nishi", desc: "West" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "北", romaji: "North" },
                            { kana: "南", romaji: "South" },
                            { kana: "東", romaji: "East" },
                            { kana: "西", romaji: "West" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "asking-directions",
                title: "Asking for Directions",
                description: "Where is the station?",
                iconType: 'question',
                cards: [
                    {
                        type: 'info',
                        heading: "Where is it?",
                        text: "To ask where something is, use <b>どこ</b> (doko).\n\nStructure: [Place] wa doko desu ka?",
                        example: {
                            jp: "トイレ は どこ ですか",
                            romaji: "toire wa doko desu ka",
                            en: "Where is the toilet?"
                        }
                    },
                    {
                        type: 'typing',
                        targetKana: "トイレはどこですか",
                        meaning: "Where is the toilet?",
                        romaji: "toire wa doko desu ka"
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Where is the station?' (Station = Eki)",
                        options: ["えき は どこ ですか", "えき は なに ですか", "えき は だれ ですか", "えき ですか"],
                        correctAnswer: "えき は どこ ですか",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-5-city-life",
        number: 5,
        title: "City Life",
        description: "Trains and Convenience Stores",
        theme: {
            primaryGradient: "from-orange-400 to-amber-500",
            secondaryGradient: "from-orange-600 to-red-600",
            ringColor: "ring-orange-200",
            textColors: {
                title: "text-orange-50",
                description: "text-orange-100/90"
            }
        },
        lessons: [
            {
                id: "train-station",
                title: "At the Station",
                description: "Trains, tickets, and travel",
                iconType: 'travel',
                cards: [
                    {
                        type: 'info',
                        heading: "Train Vocabulary",
                        text: "Trains are the main way to get around in Japan. Let's learn some essential words."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "でんしゃ", romaji: "densha", desc: "Train" },
                            { kana: "えき", romaji: "eki", desc: "Station" },
                            { kana: "きっぷ", romaji: "kippu", desc: "Ticket" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "Subway vs Train",
                        text: "Subways (underground) are called <b>ちかてつ</b> (chikatetsu). Surface trains are <b>でんしゃ</b> (densha)."
                    },
                    {
                        type: 'mcq',
                        question: "What is 'Station' in Japanese?",
                        options: ["えき", "きっぷ", "でんしゃ", "ちかてつ"],
                        correctAnswer: "えき",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "でんしゃ", romaji: "Train" },
                            { kana: "えき", romaji: "Station" },
                            { kana: "きっぷ", romaji: "Ticket" },
                            { kana: "ちかてつ", romaji: "Subway" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "konbini-vocab",
                title: "Convenience Store",
                description: "The lifeblood of modern Japan",
                iconType: 'shopping',
                cards: [
                    {
                        type: 'info',
                        heading: "The Konbini",
                        text: "Japanese convenience stores (Konbini) have everything! Food, drinks, ATMs, and more."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "コンビニ", romaji: "konbini", desc: "Convenience Store" },
                            { kana: "おべんとう", romaji: "obentou", desc: "Boxed Lunch" },
                            { kana: "おにぎり", romaji: "onigiri", desc: "Rice Ball" },
                            { kana: "のみもの", romaji: "nomimono", desc: "Drinks" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "Ordering Hot Food",
                        text: "Hot food at the counter is very popular. You can point and say <b>これ を ください</b> (This please)."
                    },
                    {
                        type: 'typing',
                        targetKana: "これ",
                        meaning: "This",
                        romaji: "kore"
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Rice Ball'?",
                        options: ["おにぎり", "おべんとう", "コンビニ", "のみもの"],
                        correctAnswer: "おにぎり",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            }
        ]
    }
];

export const n5Lessons = n5Chapters.flatMap(chapter => chapter.lessons);
