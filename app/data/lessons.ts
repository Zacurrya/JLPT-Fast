import { Chapter } from "./data";

export const n5Chapters: Chapter[] = [
    {
        id: "chapter-1-foundations",
        number: 1,
        title: "Foundations",
        description: "Begin your journey",
        image: "/chapter-images/chapter-1.png",
        theme: {
            primaryGradient: "from-[#bc2823] to-[#8B1E1A]",
            secondaryGradient: "from-[#d6403b] to-[#bc2823]",
            ringColor: "ring-red-200",
            textColors: {
                title: "text-red-50",
                description: "text-red-100/90"
            }
        },
        lessons: [
            {
                id: "N5-Introduction",
                title: "Introduction",
                description: "Learn about the JLPT N5 and your first hiragana characters!",
                videoUrl: "https://www.youtube.com/watch?v=47xmiuDBEG8",
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
                            { kana: "こ", romaji: "ko" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
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
                        text: "Romaji uses the English alphabet to represent Japanese sounds. It helps beginners read until they master Hiragana.",
                        example: {
                            jp: "あ",
                            romaji: "a",
                            en: "Hiragana 'a'"
                        }
                    },
                    {
                        type: 'info',
                        heading: "How to Type",
                        text: "Writing  is different from English.\n\nSpaces are <b>optional</b> and generally not used between words in a sentence. You can type the sounds continuously!\n\nFor example, to type <b>Ohayō Gozaimasu</b>, you can type <b>ohayougozaimasu</b> or <b>ohayou gozaimasu</b>!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "す", romaji: "su" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
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
                    },
                    {
                        type: 'text-choice',
                        speakerName: "田中さん",
                        speakerReading: "たなかさん",
                        conversation: [
                            { speaker: "田中さん", text: "おはようございます！", hint: "Ohayou gozaimasu - Good morning!" },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "How would you respond to this?",
                        choices: [
                            { text: "おはようございます!", isCorrect: true },
                            { text: "こんばんは!", isCorrect: false },
                            { text: "ありがとう!", isCorrect: false }
                        ],
                        scorable: true
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
                            { kana: "に", romaji: "ni" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
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
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "店員", text: "いらっしゃいませ！", hint: "Irasshaimase - Welcome!", showHintIcon: true },
                            { speaker: "店員", text: "ご注文は？", hint: "Go-chuumon wa? - Your order?", showHintIcon: true },
                            { speaker: "You", text: "?", isUser: true }
                        ],
                        instruction: "Select the most appropriate response",
                        choices: [
                            { text: "すしをください", isCorrect: true },
                            { text: "こんにちは", isCorrect: false },
                            { text: "ありがとう", isCorrect: false }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Sushi please",
                        correctSentence: ["すし", "を", "ください"],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Sushi and water please",
                        correctSentence: ["すし", "と", "みず", "を", "ください"],
                        scorable: true
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
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Sushi please",
                        correctSentence: ["すし", "を", "ください"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'and' when listing items?",
                        options: ["と", "は", "を", "の"],
                        correctAnswer: "と",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Green tea and sushi",
                        correctSentence: ["おちゃ", "と", "すし"],
                        scorable: true
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
        image: "/chapter-images/chapter-2.png",
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
                        heading: "Using です",
                        text: "Here is an example of how to use です:",
                        example: {
                            jp: "がくせい です",
                            romaji: "gakusei desu",
                            en: "I am a student"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "What does 'がくせいです' mean?",
                        options: ["I am a student", "I am a teacher", "Hello", "Thank you"],
                        correctAnswer: "I am a student",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "佐藤さん",
                        speakerReading: "さとうさん",
                        conversation: [
                            { speaker: "佐藤さん", text: "はじめまして！", hint: "Nice to meet you!", showHintIcon: true },
                            { speaker: "佐藤さん", text: "わたしは佐藤です。", hint: "I am Sato." },
                            { speaker: "佐藤さん", text: "おしごとは？", hint: "What's your job?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "How would you say 'I am a student'?",
                        choices: [
                            { text: "がくせいです", isCorrect: true },
                            { text: "せんせいです", isCorrect: false },
                            { text: "さとうです", isCorrect: false }
                        ],
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
                    },
                    {
                        type: 'mcq',
                        question: "What does です mean?",
                        options: ["am/is/are (polite)", "and", "have", "want"],
                        correctAnswer: "am/is/are (polite)",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I am Japanese",
                        correctSentence: ["わたし", "は", "にほんじん", "です"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "When can you drop わたしは?",
                        options: ["When context is clear", "Never", "Always", "Only in writing"],
                        correctAnswer: "When context is clear",
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER: FAMILY & PEOPLE
    // ========================================
    {
        id: "chapter-family",
        number: 3,
        title: "Family & People",
        description: "Describing your family and relationships",
        image: "/chapter-images/chapter-3.png",
        theme: {
            primaryGradient: "from-rose-400 to-pink-500",
            secondaryGradient: "from-rose-600 to-pink-600",
            ringColor: "ring-rose-200",
            textColors: {
                title: "text-rose-50",
                description: "text-rose-100/90"
            }
        },
        lessons: [
            {
                id: "family-basics",
                title: "Family Members",
                description: "Learn words for family members",
                iconType: 'people',
                cards: [
                    {
                        type: 'info',
                        heading: "Family in Japanese",
                        text: "Japanese has two sets of family terms:\n\n• Humble terms (for your own family)\n• Honorific terms (for someone else's family)"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "かぞく", romaji: "kazoku", desc: "Family" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おとうさん", romaji: "otousan", desc: "Father (polite)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ちち", romaji: "chichi", desc: "Father (humble)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おかあさん", romaji: "okaasan", desc: "Mother (polite)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "はは", romaji: "haha", desc: "Mother (humble)" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "おとうさん", romaji: "Father" },
                            { kana: "おかあさん", romaji: "Mother" },
                            { kana: "ちち", romaji: "My father" },
                            { kana: "はは", romaji: "My mother" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "When talking about your own father, you use:",
                        options: ["ちち", "おとうさん", "パパ", "ちちおや"],
                        correctAnswer: "ちち",
                        scorable: true
                    }
                ]
            },
            {
                id: "siblings",
                title: "Siblings",
                description: "Brothers and sisters",
                iconType: 'people',
                cards: [
                    {
                        type: 'info',
                        heading: "Siblings",
                        text: "In Japanese, older and younger siblings have different words."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おにいさん", romaji: "oniisan", desc: "Older brother (polite)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "あに", romaji: "ani", desc: "Older brother (humble)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おねえさん", romaji: "oneesan", desc: "Older sister (polite)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "あね", romaji: "ane", desc: "Older sister (humble)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おとうと", romaji: "otouto", desc: "Younger brother" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "いもうと", romaji: "imouto", desc: "Younger sister" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "あに", romaji: "My older brother" },
                            { kana: "あね", romaji: "My older sister" },
                            { kana: "おとうと", romaji: "Younger brother" },
                            { kana: "いもうと", romaji: "Younger sister" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "describing-family",
                title: "Describing Family",
                description: "Talk about your family",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Describing Family Members",
                        text: "Use the patterns you've learned to describe your family members.",
                        structure: "[Family member] は [description] です",
                        example: {
                            jp: "ちち は せんせい です",
                            romaji: "chichi wa sensei desu",
                            en: "My father is a teacher"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "My mother is a teacher",
                        correctSentence: ["はは", "は", "せんせい", "です"],
                        scorable: true
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "がくせい", romaji: "gakusei", desc: "Student" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "いしゃ", romaji: "isha", desc: "Doctor" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "かいしゃいん", romaji: "kaishain", desc: "Company employee" }
                        ]
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "My older brother is a student",
                        correctSentence: ["あに", "は", "がくせい", "です"],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "おかあさんのしごとはなんですか？", hint: "What is your mother's job?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Your mother is a doctor. How do you answer?",
                        choices: [
                            { text: "ははは いしゃ です", isCorrect: true },
                            { text: "おかあさんは いしゃ です", isCorrect: false },
                            { text: "ママは いしゃ です", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "family-age",
                title: "Age & Family Size",
                description: "How old and how many",
                iconType: 'people',
                cards: [
                    {
                        type: 'info',
                        heading: "Asking Age",
                        text: "To ask 'How old?', use なんさい (nan sai).\n\nThe counter さい is for age.",
                        structure: "[Person] は なんさい ですか",
                        example: {
                            jp: "おとうとは なんさい ですか",
                            romaji: "otouto wa nan sai desu ka",
                            en: "How old is your younger brother?"
                        }
                    },
                    {
                        type: 'info',
                        heading: "Saying Age",
                        text: "To say age, use the number + さい.\n\n10 years old = じゅっさい\n20 years old = はたち (special!)",
                        example: {
                            jp: "わたし は にじゅうさい です",
                            romaji: "watashi wa nijuu sai desu",
                            en: "I am 20 years old"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I am 18 years old",
                        correctSentence: ["わたし", "は", "じゅうはっさい", "です"],
                        scorable: true
                    },
                    {
                        type: 'info',
                        heading: "How Many People?",
                        text: "To count people in a family, use にん.\n\n1 person = ひとり (special)\n2 people = ふたり (special)\n3 people = さんにん",
                        example: {
                            jp: "かぞくは よにん です",
                            romaji: "kazoku wa yo nin desu",
                            en: "There are 4 people in my family"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say '3 people'?",
                        options: ["さんにん", "さんひと", "みっつ", "さんさい"],
                        correctAnswer: "さんにん",
                        scorable: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-family-test",
        number: 3,
        title: "Family Review",
        description: "Test your family vocabulary",
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
                id: "family-review",
                title: "Family Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Family Review",
                        text: "Let's review family vocabulary and describing family members."
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "ちち", romaji: "My father" },
                            { kana: "はは", romaji: "My mother" },
                            { kana: "あに", romaji: "My older brother" },
                            { kana: "あね", romaji: "My older sister" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "Which is used when talking about someone else's mother?",
                        options: ["おかあさん", "はは", "ママ", "かあさん"],
                        correctAnswer: "おかあさん",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "My father is a doctor",
                        correctSentence: ["ちち", "は", "いしゃ", "です"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "おとうと", romaji: "Younger brother" },
                            { kana: "いもうと", romaji: "Younger sister" },
                            { kana: "がくせい", romaji: "Student" },
                            { kana: "いしゃ", romaji: "Doctor" }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-3-numbers-kanji",
        number: 4,
        title: "Numbers & Basic Kanji",
        description: "Counting and reading your first Kanji characters",
        image: "/chapter-images/chapter-4.png",

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
                            { kana: "い", romaji: "i" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
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
                    },
                    {
                        type: 'info',
                        heading: "6 to 10",
                        text: "六 (roku) = 6\n七 (nana/shichi) = 7\n八 (hachi) = 8\n九 (kyuu) = 9\n十 (juu) = 10"
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "六", romaji: "6" },
                            { kana: "七", romaji: "7" },
                            { kana: "八", romaji: "8" },
                            { kana: "九", romaji: "9" },
                            { kana: "十", romaji: "10" }
                        ],
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
                        type: 'kanji-learn',
                        kanji: "一",
                        meaning: "One",
                        onyomi: ["いち", "いつ"],
                        kunyomi: ["ひと"],
                        romaji: "ichi",
                        mnemonic: "One horizontal line."
                    },
                    {
                        type: 'kanji-learn',
                        kanji: "二",
                        meaning: "Two",
                        onyomi: ["に"],
                        kunyomi: ["ふた"],
                        romaji: "ni",
                        mnemonic: "Two horizontal lines."
                    },
                    {
                        type: 'kanji-learn',
                        kanji: "三",
                        meaning: "Three",
                        onyomi: ["さん"],
                        kunyomi: ["み"],
                        romaji: "san",
                        mnemonic: "Three horizontal lines."
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
                id: "numbers-11-100",
                title: "Numbers 11-100",
                description: "Counting higher!",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Numbers 11-19",
                        text: "It's easy! Just say '10' plus the number.\n\n11 = 10 + 1 → 十一 (juu-ichi)\n12 = 10 + 2 → 十二 (juu-ni)\n15 = 10 + 5 → 十五 (juu-go)",
                        structure: "10 (juu) + Number"
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 12?",
                        options: ["juu-ni", "ni-juu", "juu-ichi", "ichi-juu"],
                        correctAnswer: "juu-ni",
                        scorable: true
                    },
                    {
                        type: 'info',
                        heading: "Numbers 20-99",
                        text: "For 20, 30, etc., say the number then '10'.\n\n20 = 2 × 10 → 二十 (ni-juu)\n30 = 3 × 10 → 三十 (san-juu)\n\n25 = 20 + 5 → 二十 (ni-juu) 五 (go)",
                        structure: "Number + 10 (juu) + [Number]"
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "42",
                        correctSentence: ["よん", "じゅう", "に"],
                        scorable: true
                    }
                ]
            },
            {
                id: "numbers-big",
                title: "Big Numbers",
                description: "Hundreds, Thousands, Myriads",
                iconType: 'trophy',
                cards: [
                    {
                        type: 'info',
                        heading: "Hundreds (Hyaku)",
                        text: "100 is Hyaku (ひゃく).\n\n200 = Ni-hyaku\n300 = San-byaku (Special!)\n600 = Roppyaku (Special!)\n800 = Happyaku (Special!)",
                        structure: "Number + Hyaku"
                    },
                    {
                        type: 'info',
                        heading: "Thousands (Sen)",
                        text: "1,000 is Sen (せん).\n\n2000 = Ni-sen\n3000 = San-zen (Special!)\n8000 = Hassen (Special!)",
                        structure: "Number + Sen"
                    },
                    {
                        type: 'info',
                        heading: "Ten Thousands (Man)",
                        text: "Japanese counts in blocks of 10,000, not 1,000!\n\n10,000 is Man (まん). \n\nSo 20,000 is 'Ni-man' (2 ten-thousands).",
                        structure: "Number + Man"
                    },
                    {
                        type: 'mcq',
                        question: "What is 10,000?",
                        options: ["ichiman", "juusen", "hyakuju", "issen"],
                        correctAnswer: "ichiman",
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
                        text: "To say o'clock, add じ (ji) after the number.\n\n1:00 = いちじ (ichiji)\n2:00 = にじ (niji)",
                        structure: "Number + じ (ji)",
                        example: {
                            jp: "さん じ",
                            romaji: "san ji",
                            en: "3 o'clock"
                        }
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
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "一", romaji: "One" },
                            { kana: "二", romaji: "Two" },
                            { kana: "三", romaji: "Three" },
                            { kana: "四", romaji: "Four" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "25 (twenty-five)",
                        correctSentence: ["に", "じゅう", "ご"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say '3 o'clock'?",
                        options: ["さんじ", "さん", "さんねん", "さんご"],
                        correctAnswer: "さんじ",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "What time is it?",
                        correctSentence: ["なんじ", "ですか"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-4-directions",
        number: 5,
        title: "Directions & Locations",
        description: "Navigating your way around",
        image: "/chapter-images/chapter-5.png",
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
                id: "positions-up-down",
                title: "Up & Down",
                description: "Learn 'Above' and 'Below'",
                iconType: 'location',
                cards: [
                    {
                        type: 'info',
                        heading: "Positions",
                        text: "In Japanese, words like 'Up' and 'Down' are nouns. We connect them with other words using the particle の (no)."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "うえ", romaji: "ue", desc: "Above / Up" }
                        ]
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Above",
                        correctSentence: ["うえ"],
                        scorable: true
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "した", romaji: "shita", desc: "Below / Down" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "What is 'Below' in Japanese?",
                        options: ["した", "うえ", "なか", "そと"],
                        correctAnswer: "した",
                        scorable: true
                    },
                    {
                        type: 'info',
                        heading: "Using Positions",
                        text: "To say 'On the table', we literally say 'Table's Above'.\n\nTable = テーブル (Teeburu).",
                        structure: "[Object] の [Position]"
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "On the table",
                        correctSentence: ["テーブル", "の", "うえ"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Under the table'?",
                        options: ["テーブル の した", "テーブル の うえ", "した の テーブル"],
                        correctAnswer: "テーブル の した",
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "うえ", romaji: "Above" },
                            { kana: "した", romaji: "Below" },
                            { kana: "テーブル", romaji: "Table" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "positions-left-right",
                title: "Left, Right & Places",
                description: "Learn 'Left', 'Right' and common places",
                iconType: 'location',
                cards: [
                    {
                        type: 'info',
                        heading: "Left & Right",
                        text: "Now let's learn Left and Right, along with some places to practice."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "みぎ", romaji: "migi", desc: "Right" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "えき", romaji: "eki", desc: "Station" }
                        ]
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "The station is on the right",
                        correctSentence: ["えき", "は", "みぎ", "です"],
                        scorable: true
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ひだり", romaji: "hidari", desc: "Left" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "こうえん", romaji: "kouen", desc: "Park" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "Where is the park?",
                        options: ["こうえん は ひだり です", "こうえん は みぎ です"],
                        correctAnswer: "こうえん は ひだり です",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "The park is on the left",
                        correctSentence: ["こうえん", "は", "ひだり", "です"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "みぎ", romaji: "Right" },
                            { kana: "ひだり", romaji: "Left" },
                            { kana: "えき", romaji: "Station" },
                            { kana: "こうえん", romaji: "Park" }
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
                            { kana: "きた", romaji: "kita", desc: "North" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "みなみ", romaji: "minami", desc: "South" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ひがし", romaji: "higashi", desc: "East" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "にし", romaji: "nishi", desc: "West" }
                        ]
                    },
                    {
                        // Using Kanji for visualisation
                        type: 'kana-learn',
                        characters: [
                            { kana: "北", romaji: "kita", desc: "North" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "南", romaji: "minami", desc: "South" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "東", romaji: "higashi", desc: "East" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
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
        id: "chapter-4-test",
        number: 4,
        title: "Chapter 4 Review",
        description: "Test your knowledge of Chapter 4",
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
                id: "chapter-4-review",
                title: "Chapter 4 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 4 Review",
                        text: "Let's review directions, positions, and asking for locations."
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
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'On the table'?",
                        options: ["テーブル の うえ", "テーブル の した", "うえ の テーブル", "テーブル うえ"],
                        correctAnswer: "テーブル の うえ",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Where is the station?",
                        correctSentence: ["えき", "は", "どこ", "ですか"],
                        scorable: true
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
                    },
                    {
                        type: 'mcq',
                        question: "How do you ask 'Where is it?'",
                        options: ["どこ ですか", "なに ですか", "だれ ですか", "いつ ですか"],
                        correctAnswer: "どこ ですか",
                        scorable: true
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
                            { kana: "でんしゃ", romaji: "densha", desc: "Train" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "えき", romaji: "eki", desc: "Station" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
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
                    },
                    {
                        type: 'text-choice',
                        speakerName: "駅員",
                        speakerReading: "えきいん",
                        conversation: [
                            { speaker: "You", text: "すみません", hint: "Excuse me" },
                            { speaker: "駅員", text: "はい？", hint: "Yes?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You want to buy a ticket to Tokyo. What do you say?",
                        choices: [
                            { text: "とうきょうまでのきっぷをください", isCorrect: true },
                            { text: "とうきょうがすきです", isCorrect: false },
                            { text: "でんしゃはどこですか", isCorrect: false }
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
                            { kana: "コンビニ", romaji: "konbini", desc: "Convenience Store" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おべんとう", romaji: "obentou", desc: "Boxed Lunch" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おにぎり", romaji: "onigiri", desc: "Rice Ball" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
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
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "店員", text: "いらっしゃいませ", hint: "Welcome!", showHintIcon: true },
                            { speaker: "You", text: "おにぎりをください", hint: "Rice ball please", showHintIcon: true },
                            { speaker: "店員", text: "はい！ふくろはいりますか？", hint: "Yes! Do you need a bag?", showHintIcon: true },
                            { speaker: "You", text: "?", isUser: true }
                        ],
                        instruction: "The cashier is asking if you need a bag. How do you politely decline?",
                        choices: [
                            { text: "いいえ、けっこうです", isCorrect: true },
                            { text: "はい、ください", isCorrect: false },
                            { text: "ありがとう", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER: RESTAURANT ORDERING
    // ========================================
    {
        id: "chapter-restaurant",
        number: 6,
        title: "Restaurant Ordering",
        description: "Ordering at a Japanese restaurant",
        theme: {
            primaryGradient: "from-red-400 to-rose-500",
            secondaryGradient: "from-red-600 to-rose-600",
            ringColor: "ring-red-200",
            textColors: {
                title: "text-red-50",
                description: "text-red-100/90"
            }
        },
        lessons: [
            {
                id: "restaurant-vocab",
                title: "Restaurant Vocabulary",
                description: "Essential restaurant words",
                iconType: 'food',
                cards: [
                    {
                        type: 'info',
                        heading: "At a Restaurant",
                        text: "Let's learn essential vocabulary for eating at Japanese restaurants!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "レストラン", romaji: "resutoran", desc: "Restaurant" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "メニュー", romaji: "menyuu", desc: "Menu" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ちゅうもん", romaji: "chuumon", desc: "Order" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おかんじょう", romaji: "okanjou", desc: "Bill / Check" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "てんいん", romaji: "ten'in", desc: "Staff / Server" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "メニュー", romaji: "Menu" },
                            { kana: "ちゅうもん", romaji: "Order" },
                            { kana: "おかんじょう", romaji: "Bill" },
                            { kana: "てんいん", romaji: "Server" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "ordering-phrases",
                title: "Ordering Phrases",
                description: "How to order food",
                iconType: 'food',
                cards: [
                    {
                        type: 'info',
                        heading: "Calling the Server",
                        text: "To get a server's attention, say すみません (sumimasen - excuse me).",
                        example: {
                            jp: "すみません！",
                            romaji: "sumimasen!",
                            en: "Excuse me!"
                        }
                    },
                    {
                        type: 'info',
                        heading: "Asking for the Menu",
                        text: "To ask for the menu, use:",
                        structure: "メニュー を ください",
                        example: {
                            jp: "メニュー を ください",
                            romaji: "menyuu wo kudasai",
                            en: "Menu, please"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Menu, please",
                        correctSentence: ["メニュー", "を", "ください"],
                        scorable: true
                    },
                    {
                        type: 'info',
                        heading: "Ordering Food",
                        text: "Point to an item and say これ を ください, or say the item name.",
                        structure: "[Item] を ください",
                        example: {
                            jp: "ラーメン を ください",
                            romaji: "raamen wo kudasai",
                            en: "Ramen, please"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Ramen, please",
                        correctSentence: ["ラーメン", "を", "ください"],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "店員", text: "いらっしゃいませ！", hint: "Welcome!", showHintIcon: true },
                            { speaker: "店員", text: "ごちゅうもんは？", hint: "Your order?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You want tempura. What do you say?",
                        choices: [
                            { text: "てんぷらをください", isCorrect: true },
                            { text: "てんぷらがすきです", isCorrect: false },
                            { text: "てんぷらはおいしい", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "food-drinks-vocab",
                title: "Food & Drinks",
                description: "Common menu items",
                iconType: 'food',
                cards: [
                    {
                        type: 'info',
                        heading: "Popular Dishes",
                        text: "Let's learn some common Japanese dishes!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ラーメン", romaji: "raamen", desc: "Ramen" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "うどん", romaji: "udon", desc: "Udon noodles" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "てんぷら", romaji: "tenpura", desc: "Tempura" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "やきとり", romaji: "yakitori", desc: "Grilled chicken skewers" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "さしみ", romaji: "sashimi", desc: "Raw fish" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ビール", romaji: "biiru", desc: "Beer" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おさけ", romaji: "osake", desc: "Sake / Alcohol" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "ラーメン", romaji: "Ramen" },
                            { kana: "うどん", romaji: "Udon" },
                            { kana: "てんぷら", romaji: "Tempura" },
                            { kana: "ビール", romaji: "Beer" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "paying-bill",
                title: "Paying the Bill",
                description: "How to pay at a restaurant",
                iconType: 'shopping',
                cards: [
                    {
                        type: 'info',
                        heading: "Asking for the Bill",
                        text: "To ask for the check, say:\n\nおかんじょう を おねがいします\n\nOr simply: おかんじょう おねがいします",
                        example: {
                            jp: "おかんじょう を おねがいします",
                            romaji: "okanjou wo onegaishimasu",
                            en: "Bill, please"
                        }
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おねがいします", romaji: "onegaishimasu", desc: "Please (polite)" }
                        ]
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Bill, please",
                        correctSentence: ["おかんじょう", "を", "おねがいします"],
                        scorable: true
                    },
                    {
                        type: 'info',
                        heading: "Saying Thank You",
                        text: "After eating, it's polite to say:\n\nごちそうさまでした\n\nThis means 'Thank you for the meal'.",
                        example: {
                            jp: "ごちそうさまでした",
                            romaji: "gochisousama deshita",
                            en: "Thank you for the meal"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "You", text: "すみません、おかんじょうをおねがいします", hint: "Excuse me, bill please" },
                            { speaker: "店員", text: "はい、2000えんになります", hint: "Yes, that will be 2000 yen", showHintIcon: true },
                            { speaker: "You", text: "(pays)", isUser: false },
                            { speaker: "店員", text: "ありがとうございます！", hint: "Thank you!", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You've finished eating. What do you say when leaving?",
                        choices: [
                            { text: "ごちそうさまでした", isCorrect: true },
                            { text: "いただきます", isCorrect: false },
                            { text: "おかんじょうをください", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    {
        id: "chapter-restaurant-test",
        number: 6,
        title: "Restaurant Review",
        description: "Test your restaurant ordering skills",
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
                id: "restaurant-review",
                title: "Restaurant Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Restaurant Review",
                        text: "Let's review ordering at a restaurant!"
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "メニュー", romaji: "Menu" },
                            { kana: "ちゅうもん", romaji: "Order" },
                            { kana: "おかんじょう", romaji: "Bill" },
                            { kana: "てんいん", romaji: "Server" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Ramen, please",
                        correctSentence: ["ラーメン", "を", "ください"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "What do you say after finishing a meal?",
                        options: ["ごちそうさまでした", "いただきます", "おねがいします", "すみません"],
                        correctAnswer: "ごちそうさまでした",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Bill, please",
                        correctSentence: ["おかんじょう", "を", "おねがいします"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "ラーメン", romaji: "Ramen" },
                            { kana: "うどん", romaji: "Udon" },
                            { kana: "てんぷら", romaji: "Tempura" },
                            { kana: "さしみ", romaji: "Sashimi" }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 7: SHOPPING & MONEY
    // ========================================
    {
        id: "chapter-6-shopping",
        number: 7,
        title: "Shopping & Money",
        description: "Transactions and prices",
        theme: {
            primaryGradient: "from-yellow-400 to-amber-500",
            secondaryGradient: "from-yellow-600 to-orange-600",
            ringColor: "ring-yellow-200",
            textColors: {
                title: "text-yellow-50",
                description: "text-yellow-100/90"
            }
        },
        lessons: [
            {
                id: "money-basics",
                title: "Money & Prices",
                description: "Learn about Japanese currency",
                iconType: 'shopping',
                cards: [
                    {
                        type: 'info',
                        heading: "Japanese Yen",
                        text: "The Japanese currency is the Yen (円). Unlike dollars, there are no decimals - prices are whole numbers."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "円", romaji: "en", desc: "Yen (currency)" },
                            { kana: "いくら", romaji: "ikura", desc: "How much?" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "Asking Prices",
                        text: "To ask 'How much is this?', use the question word <b>いくら</b>.",
                        structure: "これ は いくら ですか",
                        example: {
                            jp: "これ は いくら ですか",
                            romaji: "kore wa ikura desu ka",
                            en: "How much is this?"
                        }
                    },
                    {
                        type: 'typing',
                        targetKana: "いくら",
                        meaning: "How much?",
                        romaji: "ikura"
                    },
                    {
                        type: 'mcq',
                        question: "How do you ask 'How much is this?'",
                        options: ["これ は いくら ですか", "これ は なん ですか", "これ は どこ ですか", "これ を ください"],
                        correctAnswer: "これ は いくら ですか",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            },
            {
                id: "counter-basics",
                title: "Counting Things",
                description: "Japanese counter words",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Counter Words",
                        text: "Japanese uses different counters for different types of objects. The general counter <b>つ</b> works for most things."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ひとつ", romaji: "hitotsu", desc: "One (thing)" },
                            { kana: "ふたつ", romaji: "futatsu", desc: "Two (things)" },
                            { kana: "みっつ", romaji: "mittsu", desc: "Three (things)" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'two things'?",
                        options: ["ふたつ", "ひとつ", "みっつ", "に"],
                        correctAnswer: "ふたつ",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 5 TEST
    // ========================================
    {
        id: "chapter-5-test",
        number: 5,
        title: "Chapter 5 Review",
        description: "Test your knowledge of Chapter 5",
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
                id: "chapter-5-review",
                title: "Chapter 5 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 5 Review",
                        text: "Let's review city life vocabulary - trains, stations, and convenience stores."
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
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "A ticket to Tokyo, please",
                        correctSentence: ["とうきょう", "まで", "の", "きっぷ", "を", "ください"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "What is 'Rice ball' in Japanese?",
                        options: ["おにぎり", "おべんとう", "コンビニ", "のみもの"],
                        correctAnswer: "おにぎり",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "This, please",
                        correctSentence: ["これ", "を", "ください"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 6 TEST
    // ========================================
    {
        id: "chapter-6-test",
        number: 6,
        title: "Chapter 6 Review",
        description: "Test your knowledge of Chapter 6",
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
                id: "chapter-6-review",
                title: "Chapter 6 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 6 Review",
                        text: "Let's review shopping, money, and counting things."
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "How much is this?",
                        correctSentence: ["これ", "は", "いくら", "ですか"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "ひとつ", romaji: "One (thing)" },
                            { kana: "ふたつ", romaji: "Two (things)" },
                            { kana: "みっつ", romaji: "Three (things)" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "What does いくら mean?",
                        options: ["How much?", "Where?", "What?", "When?"],
                        correctAnswer: "How much?",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Two of these, please",
                        correctSentence: ["これ", "を", "ふたつ", "ください"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 7: ADJECTIVES
    // ========================================
    {
        id: "chapter-7-adjectives",
        number: 7,
        title: "Adjectives & Descriptions",
        description: "Describing things around you",
        theme: {
            primaryGradient: "from-pink-400 to-rose-500",
            secondaryGradient: "from-pink-600 to-red-600",
            ringColor: "ring-pink-200",
            textColors: {
                title: "text-pink-50",
                description: "text-pink-100/90"
            }
        },
        lessons: [
            {
                id: "i-adjectives",
                title: "い-Adjectives",
                description: "Adjectives ending in い",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "い-Adjectives",
                        text: "Japanese adjectives ending in <b>い</b> can directly modify nouns or end sentences."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おおきい", romaji: "ookii", desc: "Big" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ちいさい", romaji: "chiisai", desc: "Small" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "たかい", romaji: "takai", desc: "Expensive / Tall" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "やすい", romaji: "yasui", desc: "Cheap" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "Using い-Adjectives",
                        text: "Place the adjective directly before the noun.",
                        structure: "Adjective + Noun",
                        example: {
                            jp: "おおきい いえ",
                            romaji: "ookii ie",
                            en: "A big house"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'small cat'?",
                        options: ["ちいさい ねこ", "ねこ ちいさい", "ちいさ ねこ", "ねこ の ちいさい"],
                        correctAnswer: "ちいさい ねこ",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "店員", text: "いらっしゃいませ！", hint: "Welcome!", showHintIcon: true },
                            { speaker: "店員", text: "このシャツはいかがですか？", hint: "How about this shirt?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "The shirt is too expensive. How would you respond?",
                        choices: [
                            { text: "ちょっとたかいです...", isCorrect: true },
                            { text: "おおきいです", isCorrect: false },
                            { text: "やすいです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "na-adjectives",
                title: "な-Adjectives",
                description: "Adjectives requiring な",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "な-Adjectives",
                        text: "Some adjectives need <b>な</b> when modifying nouns. They don't end in い (usually)."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "きれい", romaji: "kirei", desc: "Beautiful / Clean" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "しずか", romaji: "shizuka", desc: "Quiet" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "げんき", romaji: "genki", desc: "Healthy / Energetic" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "すき", romaji: "suki", desc: "Like" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "Using な-Adjectives",
                        text: "Add <b>な</b> between the adjective and noun.",
                        structure: "な-Adjective + な + Noun",
                        example: {
                            jp: "しずか な へや",
                            romaji: "shizuka na heya",
                            en: "A quiet room"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'a beautiful flower'?",
                        options: ["きれい な はな", "きれい はな", "はな きれい", "きれいい はな"],
                        correctAnswer: "きれい な はな",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            },
            {
                id: "colors",
                title: "Colors",
                description: "Basic color vocabulary",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Colors in Japanese",
                        text: "Colors can be い-adjectives or nouns. Let's learn the basics!"
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "あか", romaji: "aka", desc: "Red" },
                            { kana: "あお", romaji: "ao", desc: "Blue" },
                            { kana: "しろ", romaji: "shiro", desc: "White" },
                            { kana: "くろ", romaji: "kuro", desc: "Black" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "あか", romaji: "Red" },
                            { kana: "あお", romaji: "Blue" },
                            { kana: "しろ", romaji: "White" },
                            { kana: "くろ", romaji: "Black" }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 7 TEST
    // ========================================
    {
        id: "chapter-7-test",
        number: 7,
        title: "Chapter 7 Review",
        description: "Test your knowledge of Chapter 7",
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
                id: "chapter-7-review",
                title: "Chapter 7 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 7 Review",
                        text: "Let's review い-adjectives, な-adjectives, and colors."
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "おおきい", romaji: "Big" },
                            { kana: "ちいさい", romaji: "Small" },
                            { kana: "たかい", romaji: "Expensive" },
                            { kana: "やすい", romaji: "Cheap" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "A big house",
                        correctSentence: ["おおきい", "いえ"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'a quiet room'?",
                        options: ["しずか な へや", "しずかい へや", "へや しずか", "しずか へや"],
                        correctAnswer: "しずか な へや",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "A beautiful flower",
                        correctSentence: ["きれい", "な", "はな"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "あか", romaji: "Red" },
                            { kana: "あお", romaji: "Blue" },
                            { kana: "しろ", romaji: "White" },
                            { kana: "くろ", romaji: "Black" }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 8: VERBS BASICS
    // ========================================
    {
        id: "chapter-8-verbs",
        number: 8,
        title: "Verbs & Actions",
        description: "Doing things in Japanese",
        theme: {
            primaryGradient: "from-cyan-400 to-teal-500",
            secondaryGradient: "from-cyan-600 to-teal-600",
            ringColor: "ring-cyan-200",
            textColors: {
                title: "text-cyan-50",
                description: "text-cyan-100/90"
            }
        },
        lessons: [
            {
                id: "masu-form",
                title: "Polite Verbs (ます)",
                description: "The polite verb form",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "ます Form",
                        text: "The <b>ます</b> form is the polite way to use verbs. It's what you'll use in most situations."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "たべます", romaji: "tabemasu", desc: "Eat (polite)" },
                            { kana: "のみます", romaji: "nomimasu", desc: "Drink (polite)" },
                            { kana: "いきます", romaji: "ikimasu", desc: "Go (polite)" },
                            { kana: "きます", romaji: "kimasu", desc: "Come (polite)" }
                        ]
                    },
                    {
                        type: 'info',
                        heading: "Negative Form",
                        text: "To make a verb negative, change <b>ます</b> to <b>ません</b>.",
                        structure: "Verb stem + ません",
                        example: {
                            jp: "たべません",
                            romaji: "tabemasen",
                            en: "Don't eat / Won't eat"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'I drink'?",
                        options: ["のみます", "たべます", "いきます", "きます"],
                        correctAnswer: "のみます",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            },
            {
                id: "common-verbs",
                title: "Essential Verbs",
                description: "Verbs you'll use every day",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Daily Action Verbs",
                        text: "These verbs cover most daily activities."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "みます", romaji: "mimasu", desc: "See / Watch" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ききます", romaji: "kikimasu", desc: "Listen / Hear" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "よみます", romaji: "yomimasu", desc: "Read" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "かきます", romaji: "kakimasu", desc: "Write" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "みます", romaji: "See" },
                            { kana: "ききます", romaji: "Listen" },
                            { kana: "よみます", romaji: "Read" },
                            { kana: "かきます", romaji: "Write" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I read a book",
                        correctSentence: ["ほん", "を", "よみます"],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "しゅうまつ、なにをしますか？", hint: "What will you do on the weekend?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You plan to watch a movie. What would you say?",
                        choices: [
                            { text: "えいがをみます", isCorrect: true },
                            { text: "ほんをよみます", isCorrect: false },
                            { text: "おんがくをききます", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "iru-aru",
                title: "Existence: いる & ある",
                description: "Saying things exist",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "いる vs ある",
                        text: "Japanese has two verbs for 'to exist':\n\n• <b>いる</b> (imasu) - for living things (people, animals)\n• <b>ある</b> (arimasu) - for non-living things"
                    },
                    {
                        type: 'info',
                        heading: "Using いる",
                        text: "Use for people and animals.",
                        structure: "[Living thing] が います",
                        example: {
                            jp: "ねこ が います",
                            romaji: "neko ga imasu",
                            en: "There is a cat"
                        }
                    },
                    {
                        type: 'info',
                        heading: "Using ある",
                        text: "Use for objects and non-living things.",
                        structure: "[Thing] が あります",
                        example: {
                            jp: "ほん が あります",
                            romaji: "hon ga arimasu",
                            en: "There is a book"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "Which verb for 'There is a dog'?",
                        options: ["います", "あります", "です", "ます"],
                        correctAnswer: "います",
                        scorable: true
                    }
                ]
            },
            {
                id: "wants-tai",
                title: "Expressing Wants (~たい)",
                description: "Say what you want to do",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "The たい Form",
                        text: "To express 'want to do', change the verb's ます to たい.\n\nたべます → たべたい (want to eat)\nのみます → のみたい (want to drink)",
                        structure: "Verb stem + たい",
                        example: {
                            jp: "すし を たべたい",
                            romaji: "sushi wo tabetai",
                            en: "I want to eat sushi"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'I want to drink'?",
                        options: ["のみたい", "のみます", "のんで", "のみたいです"],
                        correctAnswer: "のみたい",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I want to eat sushi",
                        correctSentence: ["すし", "を", "たべたい"],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "おなかがすいた！", hint: "I'm hungry!", showHintIcon: true },
                            { speaker: "ともだち", text: "なにがたべたい？", hint: "What do you want to eat?" },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You want to eat ramen. How do you respond?",
                        choices: [
                            { text: "ラーメンがたべたい", isCorrect: true },
                            { text: "ラーメンをたべます", isCorrect: false },
                            { text: "ラーメンがすきです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "likes-suki",
                title: "Likes & Dislikes (すき)",
                description: "Express preferences",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "すき (Suki) - Like",
                        text: "すき is a na-adjective meaning 'like'. It uses the particle が.",
                        structure: "[Thing] が すき です",
                        example: {
                            jp: "にほんご が すき です",
                            romaji: "nihongo ga suki desu",
                            en: "I like Japanese"
                        }
                    },
                    {
                        type: 'info',
                        heading: "きらい (Kirai) - Dislike",
                        text: "きらい means 'dislike'. Same structure as すき.",
                        structure: "[Thing] が きらい です",
                        example: {
                            jp: "なっとう が きらい です",
                            romaji: "nattou ga kirai desu",
                            en: "I dislike natto"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "Which particle goes with すき?",
                        options: ["が", "を", "は", "に"],
                        correctAnswer: "が",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "せんせい",
                        speakerReading: "せんせい",
                        conversation: [
                            { speaker: "せんせい", text: "にほんのりょうりはどうですか？", hint: "How is Japanese food?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You love Japanese food. What do you say?",
                        choices: [
                            { text: "だいすきです！", isCorrect: true },
                            { text: "きらいです", isCorrect: false },
                            { text: "たべたいです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 8 TEST
    // ========================================
    {
        id: "chapter-8-test",
        number: 8,
        title: "Chapter 8 Review",
        description: "Test your knowledge of Chapter 8",
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
                id: "chapter-8-review",
                title: "Chapter 8 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 8 Review",
                        text: "Let's review verbs, ます form, existence, wants, and likes."
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "たべます", romaji: "Eat" },
                            { kana: "のみます", romaji: "Drink" },
                            { kana: "いきます", romaji: "Go" },
                            { kana: "きます", romaji: "Come" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I read a book",
                        correctSentence: ["ほん", "を", "よみます"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'There is a cat' uses which verb?",
                        options: ["います", "あります", "です", "ます"],
                        correctAnswer: "います",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I want to eat sushi",
                        correctSentence: ["すし", "を", "たべたい"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "Which particle goes with すき?",
                        options: ["が", "を", "は", "に"],
                        correctAnswer: "が",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I like music",
                        correctSentence: ["おんがく", "が", "すき", "です"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 9: TIME & DATES
    // ========================================
    {
        id: "chapter-9-time",
        number: 9,
        title: "Time & Schedules",
        description: "Talking about when things happen",
        theme: {
            primaryGradient: "from-indigo-400 to-violet-500",
            secondaryGradient: "from-indigo-600 to-purple-600",
            ringColor: "ring-indigo-200",
            textColors: {
                title: "text-indigo-50",
                description: "text-indigo-100/90"
            }
        },
        lessons: [
            {
                id: "days-of-week",
                title: "Days of the Week",
                description: "Monday through Sunday",
                iconType: 'time',
                cards: [
                    {
                        type: 'info',
                        heading: "Days of the Week",
                        text: "Each day is named after an element or celestial body."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "にちようび", romaji: "nichiyoubi", desc: "Sunday" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "げつようび", romaji: "getsuyoubi", desc: "Monday" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "かようび", romaji: "kayoubi", desc: "Tuesday" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "すいようび", romaji: "suiyoubi", desc: "Wednesday" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "もくようび", romaji: "mokuyoubi", desc: "Thursday" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "きんようび", romaji: "kinyoubi", desc: "Friday" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "どようび", romaji: "doyoubi", desc: "Saturday" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "What is 'Friday' in Japanese?",
                        options: ["きんようび", "げつようび", "どようび", "にちようび"],
                        correctAnswer: "きんようび",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "どようびひまですか？", hint: "Are you free on Saturday?", showHintIcon: true },
                            { speaker: "You", text: "はい、ひまです", hint: "Yes, I'm free" },
                            { speaker: "ともだち", text: "えいがをみましょう！", hint: "Let's watch a movie!", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Your friend wants to watch a movie. How do you agree?",
                        choices: [
                            { text: "いいですね！", isCorrect: true },
                            { text: "いいえ", isCorrect: false },
                            { text: "どようびです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "time-expressions",
                title: "Time of Day",
                description: "Morning, afternoon, evening",
                iconType: 'time',
                cards: [
                    {
                        type: 'info',
                        heading: "Parts of the Day",
                        text: "Learn to talk about different times of day."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "あさ", romaji: "asa", desc: "Morning" },
                            { kana: "ひる", romaji: "hiru", desc: "Noon / Daytime" },
                            { kana: "よる", romaji: "yoru", desc: "Night" },
                            { kana: "ばん", romaji: "ban", desc: "Evening" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "あさ", romaji: "Morning" },
                            { kana: "ひる", romaji: "Noon" },
                            { kana: "よる", romaji: "Night" },
                            { kana: "ばん", romaji: "Evening" }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 9 TEST
    // ========================================
    {
        id: "chapter-9-test",
        number: 9,
        title: "Chapter 9 Review",
        description: "Test your knowledge of Chapter 9",
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
                id: "chapter-9-review",
                title: "Chapter 9 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 9 Review",
                        text: "Let's review days of the week and time expressions."
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "げつようび", romaji: "Monday" },
                            { kana: "かようび", romaji: "Tuesday" },
                            { kana: "すいようび", romaji: "Wednesday" },
                            { kana: "きんようび", romaji: "Friday" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "What is 'Friday' in Japanese?",
                        options: ["きんようび", "げつようび", "どようび", "にちようび"],
                        correctAnswer: "きんようび",
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "あさ", romaji: "Morning" },
                            { kana: "ひる", romaji: "Noon" },
                            { kana: "よる", romaji: "Night" },
                            { kana: "ばん", romaji: "Evening" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Are you free on Saturday?",
                        correctSentence: ["どようび", "ひま", "ですか"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 10: CONNECTING IDEAS
    // ========================================
    {
        id: "chapter-10-connections",
        number: 10,
        title: "Connecting Ideas",
        description: "Making complex sentences",
        theme: {
            primaryGradient: "from-lime-400 to-green-500",
            secondaryGradient: "from-lime-600 to-green-600",
            ringColor: "ring-lime-200",
            textColors: {
                title: "text-lime-50",
                description: "text-lime-100/90"
            }
        },
        lessons: [
            {
                id: "kara-node",
                title: "Because: から & ので",
                description: "Giving reasons",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Giving Reasons",
                        text: "<b>から</b> (kara) means 'because'. Place it after the reason.",
                        structure: "Reason + から + Result",
                        example: {
                            jp: "あつい から まど を あけます",
                            romaji: "atsui kara mado wo akemasu",
                            en: "Because it's hot, I open the window"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "What does 'から' mean?",
                        options: ["Because", "But", "And", "Or"],
                        correctAnswer: "Because",
                        scorable: true
                    }
                ]
            },
            {
                id: "ga-kedo",
                title: "But: が & けど",
                description: "Expressing contrast",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Expressing Contrast",
                        text: "<b>が</b> and <b>けど</b> both mean 'but'. けど is more casual.",
                        structure: "Statement 1 + が/けど + Statement 2",
                        example: {
                            jp: "たかい ですが おいしい です",
                            romaji: "takai desu ga oishii desu",
                            en: "It's expensive but delicious"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'but' in Japanese?",
                        options: ["が / けど", "から", "と", "も"],
                        correctAnswer: "が / けど",
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 10 TEST
    // ========================================
    {
        id: "chapter-10-test",
        number: 10,
        title: "Chapter 10 Review",
        description: "Test your knowledge of Chapter 10",
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
                id: "chapter-10-review",
                title: "Chapter 10 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 10 Review",
                        text: "Let's review connecting sentences with から, けど, と, and や."
                    },
                    {
                        type: 'mcq',
                        question: "What does 'から' mean?",
                        options: ["Because", "But", "And", "Or"],
                        correctAnswer: "Because",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'Expensive but delicious' uses which connector?",
                        options: ["けど", "と", "や", "から"],
                        correctAnswer: "けど",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Apples and oranges (complete list)",
                        correctSentence: ["りんご", "と", "みかん"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'Apples, oranges, etc.' (incomplete list) uses?",
                        options: ["や", "と", "も", "の"],
                        correctAnswer: "や",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Because it's hot",
                        correctSentence: ["あつい", "から"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 11: DESIRES & SUGGESTIONS
    // ========================================
    {
        id: "chapter-11-desires",
        number: 11,
        title: "Wants & Suggestions",
        description: "Expressing desires and making suggestions",
        theme: {
            primaryGradient: "from-fuchsia-400 to-pink-500",
            secondaryGradient: "from-fuchsia-600 to-pink-600",
            ringColor: "ring-fuchsia-200",
            textColors: {
                title: "text-fuchsia-50",
                description: "text-fuchsia-100/90"
            }
        },
        lessons: [
            {
                id: "tai-form",
                title: "Want to: たい",
                description: "Expressing what you want to do",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Wanting to Do",
                        text: "To say 'I want to [verb]', add <b>たい</b> to the verb stem.",
                        structure: "Verb stem + たい",
                        example: {
                            jp: "たべたい",
                            romaji: "tabetai",
                            en: "I want to eat"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'I want to go'?",
                        options: ["いきたい", "いきます", "いって", "いく"],
                        correctAnswer: "いきたい",
                        scorable: true,
                        showRomaji: true
                    },
                    {
                        type: 'typing',
                        targetKana: "たべたい",
                        meaning: "I want to eat",
                        romaji: "tabetai"
                    }
                ]
            },
            {
                id: "hoshii",
                title: "Want: ほしい",
                description: "Wanting things",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Wanting Things",
                        text: "Use <b>ほしい</b> (hoshii) when you want a thing (noun).",
                        structure: "[Thing] が ほしい",
                        example: {
                            jp: "みず が ほしい",
                            romaji: "mizu ga hoshii",
                            en: "I want water"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'I want coffee'?",
                        options: ["コーヒー が ほしい", "コーヒー を ほしい", "コーヒー は ほしい", "ほしい コーヒー"],
                        correctAnswer: "コーヒー が ほしい",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            },
            {
                id: "mashou",
                title: "Let's: ましょう",
                description: "Making suggestions",
                iconType: 'people',
                cards: [
                    {
                        type: 'info',
                        heading: "Let's...",
                        text: "To suggest doing something together, change <b>ます</b> to <b>ましょう</b>.",
                        structure: "Verb stem + ましょう",
                        example: {
                            jp: "たべましょう",
                            romaji: "tabemashou",
                            en: "Let's eat"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Let's go'?",
                        options: ["いきましょう", "いきたい", "いきます", "いって"],
                        correctAnswer: "いきましょう",
                        scorable: true,
                        showRomaji: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 11 TEST
    // ========================================
    {
        id: "chapter-11-test",
        number: 11,
        title: "Chapter 11 Review",
        description: "Test your knowledge of Chapter 11",
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
                id: "chapter-11-review",
                title: "Chapter 11 Exam",
                description: "Final assessment for this chapter",
                iconType: "question",
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Chapter 11 Review",
                        text: "Let's review wants, desires, and suggestions."
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'I want to go'?",
                        options: ["いきたい", "いきます", "いって", "いく"],
                        correctAnswer: "いきたい",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I want water",
                        correctSentence: ["みず", "が", "ほしい"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Let's eat'?",
                        options: ["たべましょう", "たべたい", "たべます", "たべて"],
                        correctAnswer: "たべましょう",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Let's go together",
                        correctSentence: ["いっしょに", "いきましょう"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'I want coffee' uses which particle?",
                        options: ["が", "を", "は", "に"],
                        correctAnswer: "が",
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // CHAPTER 12: REVIEW
    // ========================================
    {
        id: "chapter-12-review",
        number: 12,
        title: "Comprehensive Review",
        description: "Putting it all together",
        theme: {
            primaryGradient: "from-slate-500 to-gray-600",
            secondaryGradient: "from-slate-600 to-gray-700",
            ringColor: "ring-slate-300",
            textColors: {
                title: "text-slate-100",
                description: "text-slate-200/90"
            }
        },
        lessons: [
            {
                id: "particle-review",
                title: "Particle Review",
                description: "All essential particles",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Particle Summary",
                        text: "Let's review all the particles we've learned:\n\n• は (wa) - Topic marker\n• が (ga) - Subject marker\n• を (wo) - Object marker\n• に (ni) - Time/Location\n• で (de) - Location of action\n• の (no) - Possessive\n• と (to) - And/With\n• も (mo) - Also"
                    },
                    {
                        type: 'mcq',
                        question: "Which particle marks the object of a sentence?",
                        options: ["を", "は", "が", "に"],
                        correctAnswer: "を",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I eat sushi at (the) restaurant",
                        correctSentence: ["レストラン", "で", "すし", "を", "たべます"],
                        scorable: true
                    }
                ]
            },
            {
                id: "grammar-review",
                title: "Grammar Review",
                description: "Key grammar patterns",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Key Patterns",
                        text: "Essential grammar patterns for N5:\n\n• Noun + です (am/is/are)\n• Verb + ます/ません (polite form)\n• Adjective + noun (modification)\n• Verb + たい (want to)\n• から/ので (because)"
                    },
                    {
                        type: 'mcq',
                        question: "How do you make a verb negative polite?",
                        options: ["ません", "ないです", "たくない", "じゃない"],
                        correctAnswer: "ません",
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // MODULE 1: THE FOUNDATION (Identity & Particles)
    // ========================================
    {
        id: "module-1-foundation",
        number: 13,
        title: "Identity & Particles",
        description: "Learn to say 'A is B' and ask questions",
        image: "/chapter-images/chapter-13.png",
        theme: {
            primaryGradient: "from-emerald-400 to-teal-500",
            secondaryGradient: "from-emerald-600 to-teal-600",
            ringColor: "ring-emerald-200",
            textColors: {
                title: "text-emerald-50",
                description: "text-emerald-100/90"
            }
        },
        lessons: [
            {
                id: "desu-da",
                title: "To Be: です & だ",
                description: "The copula - saying 'A is B'",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "です",
                        headingReading: "desu",
                        text: "です is used to link two things together, like '=' in math.\n\nIt's the polite form for 'to be', used in most situations.",
                        structure: "A + は + B + です",
                        example: {
                            jp: "これ は ほん です",
                            romaji: "kore wa hon desu",
                            en: "This is a book"
                        }
                    },
                    {
                        type: 'info',
                        heading: "だ",
                        headingReading: "da",
                        text: "だ is the casual form of です. Used with friends and family.\n\nNote: Don't use だ with い-adjectives!",
                        example: {
                            jp: "これ は ほん だ",
                            romaji: "kore wa hon da",
                            en: "This is a book (casual)"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "Which is more polite?",
                        options: ["です", "だ", "Both are equal", "Neither"],
                        correctAnswer: "です",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "先生",
                        speakerReading: "せんせい",
                        conversation: [
                            { speaker: "先生", text: "おなまえは？", hint: "What's your name?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Introduce yourself politely. Your name is Tanaka.",
                        choices: [
                            { text: "たなかです", isCorrect: true },
                            { text: "たなかだ", isCorrect: false },
                            { text: "たなか", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "janai-negative",
                title: "Negative: じゃない",
                description: "Saying 'is not'",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "じゃない - Negative Form",
                        text: "To say 'is not', replace です with じゃないです (polite) or じゃない (casual).\n\nFormal: ではありません",
                        structure: "A + は + B + じゃないです",
                        example: {
                            jp: "これ は ねこ じゃないです",
                            romaji: "kore wa neko janai desu",
                            en: "This is not a cat"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "What is the negative of 'がくせいです'?",
                        options: ["がくせいじゃないです", "がくせいません", "がくせいない", "がくせいだ"],
                        correctAnswer: "がくせいじゃないです",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "This is not a book",
                        correctSentence: ["これ", "は", "ほん", "じゃないです"],
                        scorable: true
                    }
                ]
            },
            {
                id: "particle-wa-ga",
                title: "は vs が - Topic & Subject",
                description: "The most important particles",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "は",
                        headingReading: "wa",
                        text: "は marks what you're talking ABOUT. It sets the scene.\n\nThink of it as 'As for [X]...'",
                        structure: "Topic + は + Statement",
                        example: {
                            jp: "わたし は にほんじん です",
                            romaji: "watashi wa nihonjin desu",
                            en: "As for me, I am Japanese"
                        }
                    },
                    {
                        type: 'info',
                        heading: "が",
                        headingReading: "ga",
                        text: "が marks the grammatical subject. It emphasizes WHO or WHAT does something.\n\nUsed for new information or emphasis.",
                        structure: "Thing + が + Action/Description",
                        example: {
                            jp: "だれ が きましたか",
                            romaji: "dare ga kimashita ka",
                            en: "Who came?"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'I like sushi' uses which particle with すき?",
                        options: ["が", "は", "を", "に"],
                        correctAnswer: "が",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "なに が すきですか？", hint: "What do you like?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You like ramen. Which particle do you use?",
                        choices: [
                            { text: "ラーメン が すきです", isCorrect: true },
                            { text: "ラーメン を すきです", isCorrect: false },
                            { text: "ラーメン は すきです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "particle-no",
                title: "の - Possession",
                description: "Saying 'my', 'your', 'of'",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "の",
                        headingReading: "no",
                        text: "の connects nouns to show possession or relation.\n\nThink of it like 's or 'of' in English.",
                        structure: "Owner + の + Thing",
                        example: {
                            jp: "わたし の ほん",
                            romaji: "watashi no hon",
                            en: "My book"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "My friend",
                        correctSentence: ["わたし", "の", "ともだち"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Japan's food'?",
                        options: ["にほん の りょうり", "にほん は りょうり", "にほん が りょうり", "にほん を りょうり"],
                        correctAnswer: "にほん の りょうり",
                        scorable: true
                    }
                ]
            },
            {
                id: "particle-ka",
                title: "か - Questions",
                description: "Asking yes/no questions",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "か",
                        headingReading: "ka",
                        text: "Add か to the end of a sentence to make it a question.\n\nNo need to change word order like in English!",
                        structure: "Statement + か",
                        example: {
                            jp: "これ は ほん ですか",
                            romaji: "kore wa hon desu ka",
                            en: "Is this a book?"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Are you a student?",
                        correctSentence: ["がくせい", "です", "か"],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "You", text: "すみません", hint: "Excuse me" },
                            { speaker: "店員", text: "はい？", hint: "Yes?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Ask if they have coffee.",
                        choices: [
                            { text: "コーヒー は ありますか", isCorrect: true },
                            { text: "コーヒー は あります", isCorrect: false },
                            { text: "コーヒー です", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "particle-mo",
                title: "も - Also/Too",
                description: "Adding to a list or agreeing",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "も",
                        headingReading: "mo",
                        text: "も replaces は or が to mean 'also' or 'too'.\n\nIt shows similarity or addition.",
                        example: {
                            jp: "わたし も がくせい です",
                            romaji: "watashi mo gakusei desu",
                            en: "I am also a student"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "わたしはがくせいです", hint: "I am a student" },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You are also a student. How do you respond?",
                        choices: [
                            { text: "わたし も がくせいです", isCorrect: true },
                            { text: "わたし は がくせいです", isCorrect: false },
                            { text: "わたし が がくせいです", isCorrect: false }
                        ],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "も replaces which particles?",
                        options: ["は and が", "を and に", "で and へ", "の and と"],
                        correctAnswer: "は and が",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I am also a student",
                        correctSentence: ["わたし", "も", "がくせい", "です"],
                        scorable: true
                    }
                ]
            },
            {
                id: "essential-nouns",
                title: "Essential Nouns",
                description: "People, things, and animals",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Basic Nouns",
                        text: "Let's learn some essential nouns you'll use daily in Japanese."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ひと", romaji: "hito", desc: "Person" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "くるま", romaji: "kuruma", desc: "Car" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "いぬ", romaji: "inu", desc: "Dog" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ねこ", romaji: "neko", desc: "Cat" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "でんわ", romaji: "denwa", desc: "Phone" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "かばん", romaji: "kaban", desc: "Bag" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "What is 'Dog' in Japanese?",
                        options: ["いぬ", "ねこ", "ひと", "くるま"],
                        correctAnswer: "いぬ",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "This is a cat",
                        correctSentence: ["これ", "は", "ねこ", "です"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "ひと", romaji: "Person" },
                            { kana: "くるま", romaji: "Car" },
                            { kana: "いぬ", romaji: "Dog" },
                            { kana: "ねこ", romaji: "Cat" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "people-vocab",
                title: "People & Family",
                description: "Family members and relationships",
                iconType: 'people',
                cards: [
                    {
                        type: 'info',
                        heading: "Family Terms",
                        text: "Japanese has humble terms (for your family) and honorific terms (for others' families)."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おとうさん", romaji: "otousan", desc: "Father (honorific)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おかあさん", romaji: "okaasan", desc: "Mother (honorific)" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おにいさん", romaji: "oniisan", desc: "Older Brother" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おねえさん", romaji: "oneesan", desc: "Older Sister" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "せんせい", romaji: "sensei", desc: "Teacher" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ともだち", romaji: "tomodachi", desc: "Friend" }
                        ]
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "おとうさん", romaji: "Father" },
                            { kana: "おかあさん", romaji: "Mother" },
                            { kana: "せんせい", romaji: "Teacher" },
                            { kana: "ともだち", romaji: "Friend" }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // MODULE 2: DESCRIBING THINGS (Adjectives & Existence)
    // ========================================
    {
        id: "module-2-describing",
        number: 14,
        title: "Describing Things",
        description: "Adjectives and existence",
        image: "/chapter-images/chapter-14.png",
        theme: {
            primaryGradient: "from-violet-400 to-purple-500",
            secondaryGradient: "from-violet-600 to-purple-600",
            ringColor: "ring-violet-200",
            textColors: {
                title: "text-violet-50",
                description: "text-violet-100/90"
            }
        },
        lessons: [
            {
                id: "aru-iru",
                title: "Existence: ある & いる",
                description: "Saying 'there is/are'",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "ある (Aru) - For Things",
                        text: "ある is used for non-living things.\n\nPolite form: あります",
                        structure: "[Thing] が あります",
                        example: {
                            jp: "つくえ の うえ に ほん が あります",
                            romaji: "tsukue no ue ni hon ga arimasu",
                            en: "There is a book on the desk"
                        }
                    },
                    {
                        type: 'info',
                        heading: "いる (Iru) - For Living Things",
                        text: "いる is used for people and animals.\n\nPolite form: います",
                        structure: "[Living thing] が います",
                        example: {
                            jp: "へや に ねこ が います",
                            romaji: "heya ni neko ga imasu",
                            en: "There is a cat in the room"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'There is a tree' uses which verb?",
                        options: ["あります", "います", "です", "ます"],
                        correctAnswer: "あります",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "ペットがいますか？", hint: "Do you have a pet?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You have a dog. How do you respond?",
                        choices: [
                            { text: "はい、いぬがいます", isCorrect: true },
                            { text: "はい、いぬがあります", isCorrect: false },
                            { text: "はい、いぬです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "totemo-sugiru",
                title: "Degree: とても & すぎる",
                description: "Very and too much",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "とても (Totemo) - Very",
                        text: "とても intensifies adjectives and verbs.\n\nPlace it before the word you want to emphasize.",
                        example: {
                            jp: "この りょうり は とても おいしい です",
                            romaji: "kono ryouri wa totemo oishii desu",
                            en: "This food is very delicious"
                        }
                    },
                    {
                        type: 'info',
                        heading: "すぎる (Sugiru) - Too Much",
                        text: "Attach すぎる to adjective/verb stems to mean 'too much'.\n\nい-adj: Remove い, add すぎる\nな-adj: Add すぎる directly",
                        example: {
                            jp: "たかすぎる",
                            romaji: "takasugiru",
                            en: "Too expensive"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'too big'?",
                        options: ["おおきすぎる", "おおきいすぎる", "とてもおおきい", "おおきすぎ"],
                        correctAnswer: "おおきすぎる",
                        scorable: true
                    }
                ]
            },
            {
                id: "suki-kirai",
                title: "Preferences: すき & きらい",
                description: "Expressing likes and dislikes",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "すき - Like",
                        text: "すき is a な-adjective meaning 'like'.\n\nUse が with the thing you like.",
                        structure: "[Thing] が すき です",
                        example: {
                            jp: "おんがく が すき です",
                            romaji: "ongaku ga suki desu",
                            en: "I like music"
                        }
                    },
                    {
                        type: 'info',
                        heading: "だいすき & きらい",
                        text: "だいすき = love (something)\nきらい = dislike\nだいきらい = hate",
                        example: {
                            jp: "にほんご が だいすき です",
                            romaji: "nihongo ga daisuki desu",
                            en: "I love Japanese"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "せんせい",
                        speakerReading: "せんせい",
                        conversation: [
                            { speaker: "せんせい", text: "どんな おんがく が すきですか？", hint: "What kind of music do you like?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You love J-pop. How do you respond?",
                        choices: [
                            { text: "Jポップ が だいすきです", isCorrect: true },
                            { text: "Jポップ を すきです", isCorrect: false },
                            { text: "Jポップ は すきです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "tai-hoshii",
                title: "Wants: たい & ほしい",
                description: "Expressing desires",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "たい - Want to Do",
                        text: "Attach たい to verb stems to express 'want to do'.\n\nたべます → たべたい (want to eat)",
                        structure: "Verb stem + たい",
                        example: {
                            jp: "にほん に いきたい です",
                            romaji: "nihon ni ikitai desu",
                            en: "I want to go to Japan"
                        }
                    },
                    {
                        type: 'info',
                        heading: "ほしい - Want (Thing)",
                        text: "ほしい is an い-adjective meaning 'want (a thing)'.\n\nUse が with the thing you want.",
                        structure: "[Thing] が ほしい です",
                        example: {
                            jp: "あたらしい くるま が ほしい です",
                            romaji: "atarashii kuruma ga hoshii desu",
                            en: "I want a new car"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'I want to eat' uses which form?",
                        options: ["たべたい", "たべほしい", "たべる ほしい", "たべます たい"],
                        correctAnswer: "たべたい",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "たんじょうび に なにがほしい？", hint: "What do you want for your birthday?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You want a new phone.",
                        choices: [
                            { text: "あたらしい スマホがほしい", isCorrect: true },
                            { text: "あたらしい スマホをたべたい", isCorrect: false },
                            { text: "あたらしい スマホがすき", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "food-drinks",
                title: "Food & Drinks",
                description: "Common food vocabulary",
                iconType: 'shopping',
                cards: [
                    {
                        type: 'info',
                        heading: "Food & Drinks",
                        text: "Essential vocabulary for restaurants and daily life."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "みず", romaji: "mizu", desc: "Water" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ごはん", romaji: "gohan", desc: "Rice / Meal" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "パン", romaji: "pan", desc: "Bread" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "にく", romaji: "niku", desc: "Meat" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "さかな", romaji: "sakana", desc: "Fish" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "やさい", romaji: "yasai", desc: "Vegetables" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "くだもの", romaji: "kudamono", desc: "Fruit" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "What is 'Water'?",
                        options: ["みず", "ごはん", "にく", "さかな"],
                        correctAnswer: "みず",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "This is meat",
                        correctSentence: ["これ", "は", "にく", "です"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "みず", romaji: "Water" },
                            { kana: "ごはん", romaji: "Rice" },
                            { kana: "にく", romaji: "Meat" },
                            { kana: "さかな", romaji: "Fish" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "店員", text: "おのみものは？", hint: "Would you like a drink?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Order water.",
                        choices: [
                            { text: "みずをください", isCorrect: true },
                            { text: "みずがすきです", isCorrect: false },
                            { text: "みずです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // MODULE 3: BASIC ACTIONS & MOVEMENT
    // ========================================
    {
        id: "module-3-actions",
        number: 15,
        title: "Actions & Movement",
        description: "Go places and do things",
        theme: {
            primaryGradient: "from-amber-400 to-orange-500",
            secondaryGradient: "from-amber-600 to-orange-600",
            ringColor: "ring-amber-200",
            textColors: {
                title: "text-amber-50",
                description: "text-amber-100/90"
            }
        },
        lessons: [
            {
                id: "particle-wo",
                title: "を - Object Marker",
                description: "Marking what you act upon",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "を (O/Wo) - Object Marker",
                        text: "を marks the direct object - the thing receiving the action.\n\nPronounced 'o' but written را.",
                        structure: "Object + を + Verb",
                        example: {
                            jp: "ほん を よみます",
                            romaji: "hon wo yomimasu",
                            en: "I read a book"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I eat sushi",
                        correctSentence: ["すし", "を", "たべます"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "Which particle marks what you eat?",
                        options: ["を", "が", "は", "に"],
                        correctAnswer: "を",
                        scorable: true
                    }
                ]
            },
            {
                id: "particle-ni-e",
                title: "に & へ - Destinations",
                description: "Where you're going",
                iconType: 'location',
                cards: [
                    {
                        type: 'info',
                        heading: "に (Ni) - To/At",
                        text: "に marks destinations, times, and locations.\n\nUsed with movement verbs like いく, くる.",
                        structure: "Place/Time + に + Verb",
                        example: {
                            jp: "がっこう に いきます",
                            romaji: "gakkou ni ikimasu",
                            en: "I go to school"
                        }
                    },
                    {
                        type: 'info',
                        heading: "へ (E) - Toward",
                        text: "へ marks direction/toward.\n\nSimilar to に but emphasizes direction, not arrival.",
                        structure: "Direction + へ + Verb",
                        example: {
                            jp: "にほん へ いきます",
                            romaji: "nihon e ikimasu",
                            en: "I go toward Japan"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I go to the station",
                        correctSentence: ["えき", "に", "いきます"],
                        scorable: true
                    }
                ]
            },
            {
                id: "particle-de",
                title: "で - By Means Of",
                description: "How and where you do things",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "で - Method/Location of Action",
                        text: "で has two main uses:\n\n1. Means/method: by bus, by hand\n2. Location of action: at school, in the park",
                        structure: "Method/Place + で + Verb",
                        example: {
                            jp: "でんしゃ で いきます",
                            romaji: "densha de ikimasu",
                            en: "I go by train"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'I study at the library' - which particle for 'at'?",
                        options: ["で", "に", "を", "へ"],
                        correctAnswer: "で",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "えきまでどうやっていきますか？", hint: "How do you get to the station?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You go by bus.",
                        choices: [
                            { text: "バスでいきます", isCorrect: true },
                            { text: "バスにいきます", isCorrect: false },
                            { text: "バスをいきます", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "kara-made",
                title: "から & まで - From & Until",
                description: "Time and place ranges",
                iconType: 'time',
                cards: [
                    {
                        type: 'info',
                        heading: "から (Kara) - From",
                        text: "から marks starting points in time or place.",
                        structure: "Start + から",
                        example: {
                            jp: "くじ から はたらきます",
                            romaji: "kuji kara hatarakimasu",
                            en: "I work from 9 o'clock"
                        }
                    },
                    {
                        type: 'info',
                        heading: "まで (Made) - Until",
                        text: "まで marks ending points in time or place.",
                        structure: "End + まで",
                        example: {
                            jp: "ごじ まで はたらきます",
                            romaji: "goji made hatarakimasu",
                            en: "I work until 5 o'clock"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "From 9 to 5",
                        correctSentence: ["くじ", "から", "ごじ", "まで"],
                        scorable: true
                    }
                ]
            },
            {
                id: "mashou-masenka",
                title: "ましょう & ませんか",
                description: "Let's do / Won't you",
                iconType: 'people',
                cards: [
                    {
                        type: 'info',
                        heading: "ましょう - Let's",
                        text: "Replace ます with ましょう to suggest doing something together.",
                        structure: "Verb stem + ましょう",
                        example: {
                            jp: "いっしょに たべましょう",
                            romaji: "issho ni tabemashou",
                            en: "Let's eat together"
                        }
                    },
                    {
                        type: 'info',
                        heading: "ませんか - Won't You",
                        text: "Replace ます with ませんか for a polite invitation.",
                        example: {
                            jp: "えいが を みませんか",
                            romaji: "eiga wo mimasen ka",
                            en: "Won't you watch a movie (with me)?"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "おなかがすいた...", hint: "I'm hungry...", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Suggest eating together.",
                        choices: [
                            { text: "いっしょに たべましょう！", isCorrect: true },
                            { text: "たべます", isCorrect: false },
                            { text: "たべたい", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "kudasai",
                title: "ください - Please Give",
                description: "Ordering and requesting",
                iconType: 'shopping',
                cards: [
                    {
                        type: 'info',
                        heading: "を ください - Please Give Me",
                        text: "Use [thing] を ください to order or request items.",
                        structure: "[Thing] を ください",
                        example: {
                            jp: "みず を ください",
                            romaji: "mizu wo kudasai",
                            en: "Water, please"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "店員", text: "いらっしゃいませ！ごちゅうもんは？", hint: "Welcome! Your order?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Order coffee.",
                        choices: [
                            { text: "コーヒーをください", isCorrect: true },
                            { text: "コーヒーがすきです", isCorrect: false },
                            { text: "コーヒーをたべます", isCorrect: false }
                        ],
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Two beers, please",
                        correctSentence: ["ビール", "を", "にはい", "ください"],
                        scorable: true
                    }
                ]
            },
            {
                id: "more-verbs",
                title: "More Essential Verbs",
                description: "Daily action verbs",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "More Verbs",
                        text: "Expand your vocabulary with these common action verbs."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "きます", romaji: "kimasu", desc: "Come" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "かいます", romaji: "kaimasu", desc: "Buy" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "うります", romaji: "urimasu", desc: "Sell" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ならいます", romaji: "naraimasu", desc: "Learn" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "おしえます", romaji: "oshiemasu", desc: "Teach" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "はたらきます", romaji: "hatarakimasu", desc: "Work" }
                        ]
                    },
                    {
                        type: 'mcq',
                        question: "What is 'to Buy'?",
                        options: ["かいます", "きます", "うります", "はたらきます"],
                        correctAnswer: "かいます",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I buy water",
                        correctSentence: ["みず", "を", "かいます"],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "きます", romaji: "Come" },
                            { kana: "かいます", romaji: "Buy" },
                            { kana: "ならいます", romaji: "Learn" },
                            { kana: "はたらきます", romaji: "Work" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "weather-vocab",
                title: "Weather & Nature",
                description: "Describing weather",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "Weather",
                        text: "Essential vocabulary for talking about weather in Japanese."
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "てんき", romaji: "tenki", desc: "Weather" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "あめ", romaji: "ame", desc: "Rain" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "ゆき", romaji: "yuki", desc: "Snow" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "くもり", romaji: "kumori", desc: "Cloudy" }
                        ]
                    },
                    {
                        type: 'kana-learn',
                        characters: [
                            { kana: "はれ", romaji: "hare", desc: "Sunny/Clear" }
                        ]
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "The weather is sunny",
                        correctSentence: ["てんき", "は", "はれ", "です"],
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'Rain'?",
                        options: ["あめ", "ゆき", "くもり", "はれ"],
                        correctAnswer: "あめ",
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "あめ", romaji: "Rain" },
                            { kana: "ゆき", romaji: "Snow" },
                            { kana: "くもり", romaji: "Cloudy" },
                            { kana: "はれ", romaji: "Sunny" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "きょうのてんきはどうですか？", hint: "How's the weather today?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "It's raining.",
                        choices: [
                            { text: "あめです", isCorrect: true },
                            { text: "あめがすきです", isCorrect: false },
                            { text: "あめをください", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // MODULE 4: CONNECTING SENTENCES
    // ========================================
    {
        id: "module-4-conjunctions",
        number: 16,
        title: "Connecting Sentences",
        description: "Create complex sentences",
        theme: {
            primaryGradient: "from-cyan-400 to-blue-500",
            secondaryGradient: "from-cyan-600 to-blue-600",
            ringColor: "ring-cyan-200",
            textColors: {
                title: "text-cyan-50",
                description: "text-cyan-100/90"
            }
        },
        lessons: [
            {
                id: "to-ya",
                title: "と & や - And/With",
                description: "Listing things",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "と (To) - Complete List",
                        text: "と connects nouns like 'and'. It implies a complete list.",
                        structure: "A と B",
                        example: {
                            jp: "りんご と みかん",
                            romaji: "ringo to mikan",
                            en: "Apples and oranges"
                        }
                    },
                    {
                        type: 'info',
                        heading: "や (Ya) - Partial List",
                        text: "や connects nouns like 'and'. It implies there are more items not listed.",
                        structure: "A や B",
                        example: {
                            jp: "りんご や みかん",
                            romaji: "ringo ya mikan",
                            en: "Apples, oranges, etc."
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'I like sushi, ramen, and more' uses which particle?",
                        options: ["や", "と", "も", "の"],
                        correctAnswer: "や",
                        scorable: true
                    }
                ]
            },
            {
                id: "demo-kedo",
                title: "でも & けど - But",
                description: "Expressing contrast",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "でも (Demo) - But (Beginning)",
                        text: "でも starts a new contrasting sentence. Like 'However' or 'But'.",
                        example: {
                            jp: "たかい です。でも、おいしいです",
                            romaji: "takai desu. demo, oishii desu",
                            en: "It's expensive. But, it's delicious"
                        }
                    },
                    {
                        type: 'info',
                        heading: "けど (Kedo) - But (Connecting)",
                        text: "けど connects two clauses within one sentence.",
                        example: {
                            jp: "たかい けど、おいしいです",
                            romaji: "takai kedo, oishii desu",
                            en: "It's expensive, but delicious"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "このレストランはどうですか？", hint: "How is this restaurant?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "It's expensive but delicious.",
                        choices: [
                            { text: "たかいけど、おいしいです", isCorrect: true },
                            { text: "たかいとおいしいです", isCorrect: false },
                            { text: "たかいやおいしいです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "kara-node",
                title: "から & ので - Because",
                description: "Giving reasons",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "から (Kara) - Because (Direct)",
                        text: "から gives a reason. It's direct and straightforward.",
                        structure: "[Reason] から [Result]",
                        example: {
                            jp: "あつい から、まど を あけます",
                            romaji: "atsui kara, mado wo akemasu",
                            en: "Because it's hot, I'll open the window"
                        }
                    },
                    {
                        type: 'info',
                        heading: "ので (Node) - Because (Softer)",
                        text: "ので is a softer, more polite way to give reasons.",
                        example: {
                            jp: "あつい ので、まど を あけます",
                            romaji: "atsui node, mado wo akemasu",
                            en: "Since it's hot, I'll open the window"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "Which is softer/more polite?",
                        options: ["ので", "から", "Both equal", "Neither"],
                        correctAnswer: "ので",
                        scorable: true
                    }
                ]
            },
            {
                id: "mae-kara",
                title: "前に & てから - Before/After",
                description: "Sequence of actions",
                iconType: 'time',
                cards: [
                    {
                        type: 'info',
                        heading: "前に (Mae ni) - Before",
                        text: "前に means 'before doing'. Use with verb dictionary form.",
                        structure: "Verb (dict) + 前に",
                        example: {
                            jp: "ねる 前に、は を みがきます",
                            romaji: "neru mae ni, ha wo migakimasu",
                            en: "Before sleeping, I brush my teeth"
                        }
                    },
                    {
                        type: 'info',
                        heading: "てから (Te kara) - After Doing",
                        text: "てから means 'after doing'. Use with te-form.",
                        structure: "Verb (て) + から",
                        example: {
                            jp: "たべてから、さんぽします",
                            romaji: "tabete kara, sanpo shimasu",
                            en: "After eating, I take a walk"
                        }
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Before eating",
                        correctSentence: ["たべる", "まえに"],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // MODULE 5: THE TE-FORM UTILITY BELT
    // ========================================
    {
        id: "module-5-teform",
        number: 17,
        title: "The Te-Form",
        description: "The most versatile verb form",
        theme: {
            primaryGradient: "from-rose-400 to-pink-500",
            secondaryGradient: "from-rose-600 to-pink-600",
            ringColor: "ring-rose-200",
            textColors: {
                title: "text-rose-50",
                description: "text-rose-100/90"
            }
        },
        lessons: [
            {
                id: "te-iru",
                title: "ている - Ongoing Actions",
                description: "I am doing...",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "ている",
                        headingReading: "te iru",
                        text: "Add ている to the te-form to express ongoing actions.\n\nたべて + いる = たべている (eating)",
                        structure: "Verb (て) + いる/います",
                        example: {
                            jp: "ほん を よんでいます",
                            romaji: "hon wo yondeimasu",
                            en: "I am reading a book"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'I am watching TV' is?",
                        options: ["テレビをみています", "テレビをみます", "テレビをみたい", "テレビをみた"],
                        correctAnswer: "テレビをみています",
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "おかあさん",
                        speakerReading: "おかあさん",
                        conversation: [
                            { speaker: "おかあさん", text: "いま なにをしていますか？", hint: "What are you doing now?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You are studying.",
                        choices: [
                            { text: "べんきょうしています", isCorrect: true },
                            { text: "べんきょうします", isCorrect: false },
                            { text: "べんきょうしたい", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "te-kudasai",
                title: "てください - Requests",
                description: "Please do...",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "てください",
                        headingReading: "te kudasai",
                        text: "Add ください to the te-form for polite requests.",
                        structure: "Verb (て) + ください",
                        example: {
                            jp: "まって ください",
                            romaji: "matte kudasai",
                            en: "Please wait"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "先生",
                        speakerReading: "せんせい",
                        conversation: [
                            { speaker: "先生", text: "しつもん が ありますか？", hint: "Do you have any questions?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Ask the teacher to repeat.",
                        choices: [
                            { text: "もういちど いってください", isCorrect: true },
                            { text: "もういちど いいます", isCorrect: false },
                            { text: "もういちど いきたい", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "temo-ii",
                title: "てもいい - Permissions",
                description: "May I...? / It's okay to...",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "てもいい - It's Okay To",
                        text: "Add てもいい to ask or give permission.",
                        structure: "Verb (て) + もいいです",
                        example: {
                            jp: "ここに すわってもいいですか",
                            romaji: "koko ni suwatte mo ii desu ka",
                            en: "May I sit here?"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Ask if you may take a photo.",
                        choices: [
                            { text: "しゃしんをとってもいいですか", isCorrect: true },
                            { text: "しゃしんをとりますか", isCorrect: false },
                            { text: "しゃしんをとってください", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "tewa-ikenai",
                title: "てはいけない - Prohibitions",
                description: "Must not...",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "てはいけない - Must Not",
                        text: "てはいけない expresses prohibition - something you must not do.",
                        structure: "Verb (て) + はいけない",
                        example: {
                            jp: "ここで たばこを すってはいけません",
                            romaji: "koko de tabako wo sutte wa ikemasen",
                            en: "You must not smoke here"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'You must not run' is?",
                        options: ["はしってはいけません", "はしってください", "はしりたい", "はしります"],
                        correctAnswer: "はしってはいけません",
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // MODULE 6: ADVICE & COMPARISON
    // ========================================
    {
        id: "module-6-advice",
        number: 18,
        title: "Advice & Comparison",
        description: "Must do, should do, comparing",
        theme: {
            primaryGradient: "from-lime-400 to-green-500",
            secondaryGradient: "from-lime-600 to-green-600",
            ringColor: "ring-lime-200",
            textColors: {
                title: "text-lime-50",
                description: "text-lime-100/90"
            }
        },
        lessons: [
            {
                id: "must-do",
                title: "なければならない - Must Do",
                description: "Expressing obligations",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "なければならない - Must",
                        text: "Express obligation with this pattern.\n\nCasual: なきゃ / なくちゃ",
                        structure: "Verb (ない form - い) + なければならない",
                        example: {
                            jp: "しゅくだい を しなければなりません",
                            romaji: "shukudai wo shinakereba narimasen",
                            en: "I must do homework"
                        }
                    },
                    {
                        type: 'info',
                        heading: "Casual Shorthand",
                        text: "In casual speech, なきゃ or なくちゃ are common.\n\nしなきゃ = gotta do, must do",
                        example: {
                            jp: "もう いかなきゃ",
                            romaji: "mou ikanakya",
                            en: "I gotta go now"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "Casual way to say 'I must go'?",
                        options: ["いかなきゃ", "いってはいけない", "いきたい", "いきます"],
                        correctAnswer: "いかなきゃ",
                        scorable: true
                    }
                ]
            },
            {
                id: "nakutemo-ii",
                title: "なくてもいい - Don't Have To",
                description: "No obligation",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "なくてもいい - Don't Have To",
                        text: "Express that something is unnecessary.\n\n'It's okay even if you don't...'",
                        structure: "Verb (ない form - い) + なくてもいい",
                        example: {
                            jp: "きょう は こなくてもいいです",
                            romaji: "kyou wa konakutemo ii desu",
                            en: "You don't have to come today"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'You don't have to eat' is?",
                        options: ["たべなくてもいい", "たべてはいけない", "たべなければならない", "たべたくない"],
                        correctAnswer: "たべなくてもいい",
                        scorable: true
                    }
                ]
            },
            {
                id: "hou-ga-ii",
                title: "ほうがいい - Advice",
                description: "You should/had better",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "ほうがいい - Had Better",
                        text: "Give advice with this pattern.\n\nPositive: た form + ほうがいい\nNegative: ない form + ほうがいい",
                        example: {
                            jp: "やすんだ ほうがいいですよ",
                            romaji: "yasunda hou ga ii desu yo",
                            en: "You should rest"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "かぜをひいちゃった...", hint: "I caught a cold...", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Advise them to rest.",
                        choices: [
                            { text: "やすんだほうがいいよ", isCorrect: true },
                            { text: "やすみたい", isCorrect: false },
                            { text: "やすみます", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "comparison",
                title: "より & 一番 - Comparison",
                description: "More than / The most",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "より (Yori) - More Than",
                        text: "Compare two things. A is [adj] than B.",
                        structure: "B より A のほうが [adj]",
                        example: {
                            jp: "ねこ より いぬ のほうが すきです",
                            romaji: "neko yori inu no hou ga suki desu",
                            en: "I like dogs more than cats"
                        }
                    },
                    {
                        type: 'info',
                        heading: "一番 (Ichiban) - The Most",
                        text: "一番 means 'number one' or 'the most'.",
                        example: {
                            jp: "にほんご が いちばん すきです",
                            romaji: "nihongo ga ichiban suki desu",
                            en: "I like Japanese the most"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'Summer is hotter than winter' uses?",
                        options: ["より", "一番", "ほうがいい", "も"],
                        correctAnswer: "より",
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // MODULE 7: NUANCE & CASUAL SPEECH
    // ========================================
    {
        id: "module-7-nuance",
        number: 19,
        title: "Nuance & Natural Speech",
        description: "Sound more natural",
        theme: {
            primaryGradient: "from-fuchsia-400 to-purple-500",
            secondaryGradient: "from-fuchsia-600 to-purple-600",
            ringColor: "ring-fuchsia-200",
            textColors: {
                title: "text-fuchsia-50",
                description: "text-fuchsia-100/90"
            }
        },
        lessons: [
            {
                id: "darou-deshou",
                title: "だろう & でしょう - Probably",
                description: "Expressing probability",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "でしょう - Probably (Polite)",
                        text: "でしょう adds uncertainty or seeks confirmation.\n\n'Probably' or 'Right?'",
                        example: {
                            jp: "あした は あめ でしょう",
                            romaji: "ashita wa ame deshou",
                            en: "It will probably rain tomorrow"
                        }
                    },
                    {
                        type: 'info',
                        heading: "だろう - Probably (Casual)",
                        text: "だろう is the casual form of でしょう.",
                        example: {
                            jp: "たぶん だいじょうぶ だろう",
                            romaji: "tabun daijoubu darou",
                            en: "It's probably okay"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "Which is more casual?",
                        options: ["だろう", "でしょう", "Both equal", "Neither"],
                        correctAnswer: "だろう",
                        scorable: true
                    }
                ]
            },
            {
                id: "ndesu",
                title: "んです - Explanation",
                description: "Giving reasons/explanations",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "んです / のです - Explanation",
                        text: "んです adds emotional emphasis or explains a situation.\n\nOften used when giving reasons or seeking them.",
                        example: {
                            jp: "ちょっと いそがしいんです",
                            romaji: "chotto isogashii n desu",
                            en: "I'm a bit busy (you see)"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "どうしたの？かおが あかいよ", hint: "What's wrong? Your face is red", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Explain that you're hot.",
                        choices: [
                            { text: "あついんです", isCorrect: true },
                            { text: "あついです", isCorrect: false },
                            { text: "あつかった", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "ta-koto-ga-aru",
                title: "たことがある - Experience",
                description: "Have you ever...?",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "たことがある - Experience",
                        text: "Express past experience: 'I have done X before'.",
                        structure: "Verb (た) + ことがある",
                        example: {
                            jp: "にほん に いったことがあります",
                            romaji: "nihon ni itta koto ga arimasu",
                            en: "I have been to Japan"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "すしをたべたことがある？", hint: "Have you ever eaten sushi?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You have eaten sushi before.",
                        choices: [
                            { text: "うん、たべたことがあるよ", isCorrect: true },
                            { text: "うん、たべます", isCorrect: false },
                            { text: "うん、たべたい", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "naru",
                title: "なる - To Become",
                description: "Expressing change",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "なる - To Become",
                        text: "なる expresses change or becoming.\n\nい-adj: Remove い, add くなる\nな-adj/noun: Add になる",
                        example: {
                            jp: "さむく なりました",
                            romaji: "samuku narimashita",
                            en: "It became cold"
                        }
                    },
                    {
                        type: 'mcq',
                        question: "'To become big' is?",
                        options: ["おおきくなる", "おおきいなる", "おおきになる", "おおきになります"],
                        correctAnswer: "おおきくなる",
                        scorable: true
                    }
                ]
            },
            {
                id: "sentence-enders",
                title: "ね & よ - Sentence Enders",
                description: "Adding nuance",
                iconType: 'book',
                cards: [
                    {
                        type: 'info',
                        heading: "ね - Seeking Agreement",
                        text: "ね seeks confirmation or agreement.\n\nLike 'right?' or 'isn't it?'",
                        example: {
                            jp: "きょう は あつい ですね",
                            romaji: "kyou wa atsui desu ne",
                            en: "It's hot today, isn't it?"
                        }
                    },
                    {
                        type: 'info',
                        heading: "よ - Emphasis",
                        text: "よ adds emphasis or asserts information.\n\nLike 'you know!' or 'I tell you!'",
                        example: {
                            jp: "これ は おいしい ですよ",
                            romaji: "kore wa oishii desu yo",
                            en: "This is delicious, you know!"
                        }
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "この えいが、みた？", hint: "Have you seen this movie?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You've seen it and it's really good. Emphasize that.",
                        choices: [
                            { text: "うん！すごくおもしろかったよ！", isCorrect: true },
                            { text: "うん、みました", isCorrect: false },
                            { text: "うん、みたね", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    },
    // ========================================
    // FINAL COMPREHENSIVE EXAM
    // ========================================
    {
        id: "final-exam",
        number: 20,
        title: "JLPT N5 Final Exam",
        description: "Test your complete knowledge",
        image: "/chapter-images/final-exam.png",
        theme: {
            primaryGradient: "from-red-600 to-orange-600",
            secondaryGradient: "from-red-700 to-orange-700",
            ringColor: "ring-red-300",
            textColors: {
                title: "text-red-100",
                description: "text-red-200/90"
            }
        },
        lessons: [
            {
                id: "final-exam-vocab",
                title: "Final Exam - Vocabulary",
                description: "Test your vocabulary knowledge",
                iconType: 'trophy',
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Final Exam: Vocabulary",
                        text: "Welcome to the N5 Final Exam! Part 1 tests your vocabulary knowledge."
                    },
                    {
                        type: 'mcq',
                        question: "What does 'おはようございます' mean?",
                        options: ["Good morning", "Good evening", "Goodbye", "Thank you"],
                        correctAnswer: "Good morning",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "What does 'えき' mean?",
                        options: ["Station", "Train", "Ticket", "Bus"],
                        correctAnswer: "Station",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "What does 'たかい' mean?",
                        options: ["Expensive/Tall", "Cheap", "Big", "Small"],
                        correctAnswer: "Expensive/Tall",
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "みぎ", romaji: "Right" },
                            { kana: "ひだり", romaji: "Left" },
                            { kana: "うえ", romaji: "Above" },
                            { kana: "した", romaji: "Below" }
                        ],
                        scorable: true
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "すき", romaji: "Like" },
                            { kana: "きらい", romaji: "Dislike" },
                            { kana: "ほしい", romaji: "Want (thing)" },
                            { kana: "たべたい", romaji: "Want to eat" }
                        ],
                        scorable: true
                    }
                ]
            },
            {
                id: "final-exam-particles",
                title: "Final Exam - Particles",
                description: "Test your particle knowledge",
                iconType: 'trophy',
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Final Exam: Particles",
                        text: "Part 2 tests your understanding of Japanese particles."
                    },
                    {
                        type: 'mcq',
                        question: "わたし_がくせいです (I am a student)",
                        options: ["は", "を", "に", "で"],
                        correctAnswer: "は",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "すし_たべます (I eat sushi)",
                        options: ["を", "は", "の", "に"],
                        correctAnswer: "を",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "えき_いきます (I go to the station)",
                        options: ["に", "を", "は", "で"],
                        correctAnswer: "に",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "わたし_ほん (my book)",
                        options: ["の", "は", "が", "を"],
                        correctAnswer: "の",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "おんがく_すきです (I like music)",
                        options: ["が", "を", "は", "で"],
                        correctAnswer: "が",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "でんしゃ_いきます (I go by train)",
                        options: ["で", "に", "を", "は"],
                        correctAnswer: "で",
                        scorable: true
                    }
                ]
            },
            {
                id: "final-exam-grammar",
                title: "Final Exam - Grammar",
                description: "Test your grammar mastery",
                iconType: 'trophy',
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Final Exam: Grammar",
                        text: "Part 3 tests your understanding of Japanese grammar patterns."
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'I am reading a book'?",
                        options: ["ほんをよんでいます", "ほんをよみます", "ほんをよみたい", "ほんをよんだ"],
                        correctAnswer: "ほんをよんでいます",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'Please wait' in Japanese is?",
                        options: ["まってください", "まちます", "まちたい", "まちましょう"],
                        correctAnswer: "まってください",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "How do you say 'too expensive'?",
                        options: ["たかすぎる", "たかいすぎる", "とてもたかい", "たかくない"],
                        correctAnswer: "たかすぎる",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'I have been to Japan' uses which pattern?",
                        options: ["いったことがある", "いきたい", "いっています", "いきました"],
                        correctAnswer: "いったことがある",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "Casual way to say 'I must go'?",
                        options: ["いかなきゃ", "いかない", "いきます", "いきたい"],
                        correctAnswer: "いかなきゃ",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "I want to go to Japan",
                        correctSentence: ["にほん", "に", "いきたい"],
                        scorable: true
                    }
                ]
            },
            {
                id: "final-exam-conjunctions",
                title: "Final Exam - Connecting",
                description: "Test sentence connections",
                iconType: 'trophy',
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Final Exam: Connections",
                        text: "Part 4 tests your ability to connect sentences and ideas."
                    },
                    {
                        type: 'mcq',
                        question: "'Expensive but delicious' uses?",
                        options: ["けど", "と", "や", "も"],
                        correctAnswer: "けど",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'Because it's hot, I'll open the window' - which 'because'?",
                        options: ["から/ので", "けど", "と", "でも"],
                        correctAnswer: "から/ので",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "'Apples, oranges, etc.' (incomplete list) uses?",
                        options: ["や", "と", "も", "の"],
                        correctAnswer: "や",
                        scorable: true
                    },
                    {
                        type: 'mcq',
                        question: "Which compares two things?",
                        options: ["より", "一番", "とても", "すぎる"],
                        correctAnswer: "より",
                        scorable: true
                    },
                    {
                        type: 'sentence-builder',
                        englishPrompt: "Let's eat together",
                        correctSentence: ["いっしょに", "たべましょう"],
                        scorable: true
                    }
                ]
            },
            {
                id: "final-exam-kanji",
                title: "Final Exam - Kanji",
                description: "Test your kanji knowledge",
                iconType: 'trophy',
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Final Exam: Kanji",
                        text: "Part 5 tests your kanji recognition and reading."
                    },
                    {
                        type: 'kana-matching',
                        characters: [
                            { kana: "一", romaji: "One" },
                            { kana: "二", romaji: "Two" },
                            { kana: "三", romaji: "Three" },
                            { kana: "四", romaji: "Four" }
                        ],
                        scorable: true
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
                    },
                    {
                        type: 'mcq',
                        question: "How do you read '日'?",
                        options: ["ひ / にち", "つき", "とし", "じ"],
                        correctAnswer: "ひ / にち",
                        scorable: true
                    }
                ]
            },
            {
                id: "final-exam-conversation",
                title: "Final Exam - Conversation",
                description: "Test real-world conversations",
                iconType: 'trophy',
                isQuiz: true,
                cards: [
                    {
                        type: 'info',
                        heading: "Final Exam: Conversation",
                        text: "Part 6 tests your ability to respond in real conversations."
                    },
                    {
                        type: 'text-choice',
                        speakerName: "店員",
                        speakerReading: "てんいん",
                        conversation: [
                            { speaker: "店員", text: "いらっしゃいませ！ごちゅうもんは？", hint: "Welcome! Your order?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Order two coffees.",
                        choices: [
                            { text: "コーヒーをふたつください", isCorrect: true },
                            { text: "コーヒーがすきです", isCorrect: false },
                            { text: "コーヒーをたべます", isCorrect: false }
                        ],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "ともだち",
                        speakerReading: "ともだち",
                        conversation: [
                            { speaker: "ともだち", text: "かぜをひいちゃった...", hint: "I caught a cold...", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "Advise them to rest.",
                        choices: [
                            { text: "やすんだほうがいいよ", isCorrect: true },
                            { text: "やすみたい", isCorrect: false },
                            { text: "やすみます", isCorrect: false }
                        ],
                        scorable: true
                    },
                    {
                        type: 'text-choice',
                        speakerName: "せんせい",
                        speakerReading: "せんせい",
                        conversation: [
                            { speaker: "せんせい", text: "しゅくだいをしましたか？", hint: "Did you do homework?", showHintIcon: true },
                            { speaker: "You", text: ". . .", isUser: true }
                        ],
                        instruction: "You didn't do it because you were busy. Explain.",
                        choices: [
                            { text: "すみません、いそがしかったんです", isCorrect: true },
                            { text: "はい、しました", isCorrect: false },
                            { text: "しゅくだいがすきです", isCorrect: false }
                        ],
                        scorable: true
                    }
                ]
            }
        ]
    }
];

export const n5Lessons = n5Chapters.flatMap(chapter => chapter.lessons);
