export default function ShinyText({ text, variant = "default", className = "" }: { text: string, variant?: "default" | "red", className?: string }) {
    const baseClass = variant === "red" ? "shiny-text-red" : "shiny-text";
    return (
        <span className={`${baseClass} ${className}`}>
            {text}
        </span>
    );
}

// Note: using inline tailwind classes as backup/override to globals
