import McqCard from "../../../components/ui/McqCard";
import { LessonSegment } from "../../data";

export interface QuizQuestion {
    question: string;
    correctAnswer: string;
    options: string[];
    type: "to-en" | "to-jp";
    originalSegment: LessonSegment;
}

interface QuizCardProps {
    question: QuizQuestion;
    currentIndex: number;
    total: number;
    selectedOption: string | null;
    isAnswerChecked: boolean;
    onOptionSelect: (option: string) => void;
    onCheckAnswer: () => void;
    onNext: () => void;
}

export default function QuizCard({
    question,
    currentIndex,
    total,
    selectedOption,
    isAnswerChecked,
    onOptionSelect,
    onCheckAnswer,
    onNext
}: QuizCardProps) {
    const questionContent = question?.originalSegment?.example ? (
        <div className="flex flex-col items-center">
            <p className="text-lg font-mono text-muted-foreground mb-1">
                {question.originalSegment.example.romaji}
            </p>
            <p className="text-4xl font-serif font-bold mb-6">
                {question.originalSegment.example.jp}
            </p>
            <p className="text-lg text-muted-foreground">
                What does this mean?
            </p>
        </div>
    ) : (
        question?.question
    );

    return (
        <McqCard
            question={questionContent}
            options={question?.options || []}
            correctAnswer={question?.correctAnswer}
            selectedOption={selectedOption}
            isAnswerChecked={isAnswerChecked}
            onOptionSelect={onOptionSelect}
            onCheckAnswer={onCheckAnswer}
            onNext={onNext}
            currentIndex={currentIndex}
            total={total}
            // Optional: Customize styling slightly for lessons if needed
            className="max-w-2xl mx-auto w-full"
        />
    );
}
