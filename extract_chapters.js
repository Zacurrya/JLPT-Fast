
const fs = require('fs');
const content = fs.readFileSync('app/data/lessons.ts', 'utf8');
const regex = /id:\s*["']([^"']+)["'],\s*number:\s*(\d+),\s*title:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
    console.log(`${match[2]}: ${match[3]} (${match[1]})`);
}
