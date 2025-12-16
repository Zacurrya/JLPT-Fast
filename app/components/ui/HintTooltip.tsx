"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface HintTooltipProps {
    hint: string;
    /** Position of the tooltip relative to the trigger */
    position?: 'right' | 'left' | 'top' | 'bottom';
    /** Size of the trigger button */
    size?: 'sm' | 'md' | 'lg';
    /** Custom className for the trigger button */
    className?: string;
}

/**
 * A reusable info icon with tooltip that appears to the side.
 * 
 * @example
 * <HintTooltip hint="This is a translation" position="right" />
 */
export function HintTooltip({
    hint,
    position = 'right',
    size = 'md',
    className = ''
}: HintTooltipProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);

    const sizeClasses = {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    };

    const iconSizes = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    };

    useEffect(() => {
        if (isHovered && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            const padding = 8;

            let x = 0;
            let y = 0;

            switch (position) {
                case 'right':
                    x = rect.right + padding;
                    y = rect.top + rect.height / 2;
                    break;
                case 'left':
                    x = rect.left - padding;
                    y = rect.top + rect.height / 2;
                    break;
                case 'top':
                    x = rect.left + rect.width / 2;
                    y = rect.top - padding;
                    break;
                case 'bottom':
                    x = rect.left + rect.width / 2;
                    y = rect.bottom + padding;
                    break;
            }

            setTooltipPosition({ x, y });
        }
    }, [isHovered, position]);

    const getTooltipTransform = () => {
        switch (position) {
            case 'right':
                return 'translateY(-50%)';
            case 'left':
                return 'translate(-100%, -50%)';
            case 'top':
                return 'translate(-50%, -100%)';
            case 'bottom':
                return 'translate(-50%, 0)';
        }
    };

    return (
        <>
            <button
                ref={triggerRef}
                className={`${sizeClasses[size]} rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors ${className}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={(e) => e.preventDefault()}
                type="button"
            >
                <Info className={iconSizes[size]} />
            </button>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="fixed z-[100] px-3 py-2 bg-foreground text-background text-sm rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
                        style={{
                            left: tooltipPosition.x,
                            top: tooltipPosition.y,
                            transform: getTooltipTransform()
                        }}
                    >
                        {hint}
                        {/* Arrow indicator */}
                        <div
                            className={`absolute w-2 h-2 bg-foreground rotate-45 ${position === 'right' ? '-left-1 top-1/2 -translate-y-1/2' :
                                    position === 'left' ? '-right-1 top-1/2 -translate-y-1/2' :
                                        position === 'top' ? 'left-1/2 -bottom-1 -translate-x-1/2' :
                                            'left-1/2 -top-1 -translate-x-1/2'
                                }`}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default HintTooltip;
