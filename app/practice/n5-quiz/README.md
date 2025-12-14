# JLPT N5 Quiz

A comprehensive quiz application for testing JLPT N5 Japanese language proficiency.

## Features

- **Multiple Question Types**:
  - Vocabulary & Kanji recognition
  - Grammar & sentence comprehension
  - Listening comprehension (with audio)

- **Interactive UI**:
  - Ruby-style romaji hints for incorrect answers
  - Keyboard navigation support
  - Progress tracking with visual history bar
  - Pass/fail scoring based on JLPT standards (44% passing)

## Structure

```
app/n5-quiz/
├── components/          # Reusable UI components
│   ├── AudioPlayer.tsx
│   ├── ChoiceList.tsx
│   ├── NextButton.tsx
│   ├── QuizFeedback.tsx
│   ├── QuizHistoryBar.tsx
│   ├── QuizInput.tsx
│   ├── QuizResultsScreen.tsx
│   ├── QuizSettingsModal.tsx
│   └── QuizStartScreen.tsx
├── contexts/           # Question data
│   ├── listening_questions.ts
│   ├── questions.ts
│   ├── sentence_questions.ts
│   └── types.ts
├── utils/             # Helper functions
│   └── quizHelpers.ts
└── page.tsx           # Main quiz page
```

## Adding Questions

Questions are organized by type in the `contexts/` directory:
- `questions.ts` - Vocabulary and kanji questions
- `sentence_questions.ts` - Grammar and sentence questions
- `listening_questions.ts` - Listening comprehension questions

## Generating Audio

For listening questions, use the audio generation script:

```bash
python scripts/generate_audio.py
```

This uses the Kokoro TTS model to generate Japanese audio files.
