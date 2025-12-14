import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-8 mt-auto border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto flex justify-center items-center">
                <p className="font-serif text-xs text-muted-foreground/60 tracking-widest uppercase">
                    Made by <Link href="https://github.com/zacurrya" className="font-bold border-b border-muted-foreground/50 pb-0.5 hover:text-foreground transition-colors">Zacurrya</Link>
                </p>
            </div>
        </footer>
    );
}
