import { notFound } from 'next/navigation';
import { n5Lessons } from '../lessonData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LessonView from '../components/LessonView';

interface LessonPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return n5Lessons.map((lesson) => ({
        slug: lesson.id,
    }));
}

export default async function LessonPage({ params }: LessonPageProps) {
    const { slug } = await params;
    const lesson = n5Lessons.find((l) => l.id === slug);

    if (!lesson) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-24 min-h-screen max-w-4xl">
            <Link href="/lessons" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Lessons
            </Link>

            <header className="mb-12 border-b border-border pb-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">{lesson.title}</h1>
                <p className="text-xl text-muted-foreground">{lesson.description}</p>
            </header>

            <LessonView lesson={lesson} />
        </div>
    );
}
