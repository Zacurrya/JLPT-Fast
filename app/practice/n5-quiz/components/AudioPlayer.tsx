interface AudioPlayerProps {
    audioUrl?: string;
    transcript?: string;
}

export default function AudioPlayer({ audioUrl, transcript }: AudioPlayerProps) {
    if (!audioUrl) return null;

    return (
        <>
            <div className="mb-8 w-full flex justify-center">
                <audio controls src={audioUrl} className="w-full max-w-sm" />
            </div>

            {transcript && (
                <div className="mb-8">
                    <details className="text-sm text-gray-500 cursor-pointer group">
                        <summary className="list-none flex items-center justify-center gap-2 hover:text-gray-900 transition-colors">
                            <span className="border-b border-dashed border-gray-400 group-hover:border-gray-900">
                                Show Transcript
                            </span>
                        </summary>
                        <div className="mt-4 p-4 bg-gray-50 rounded-xl font-medium text-gray-900">
                            {transcript}
                        </div>
                    </details>
                </div>
            )}
        </>
    );
}
