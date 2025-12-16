
const fs = require('fs');
const content = fs.readFileSync('app/lessons/lessonData.ts', 'utf8');
const lines = content.split('\n');
lines.forEach((line, index) => {
    if (line.includes('id: "chapter-2-hiragana-1"')) {
        console.log(`Chapter 2 found at line ${index + 1}`);
    }
    if (line.includes('id: "chapter-3-numbers-kanji"')) {
        console.log(`Chapter 3 found at line ${index + 1}`);
    }
});
