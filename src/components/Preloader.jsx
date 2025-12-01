import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const barRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Increment by 1 every 30ms -> ~3000ms total
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const tl = gsap.timeline();
            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: 'power4.inOut',
                onComplete: onComplete,
            });
        }
    }, [progress, onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white"
        >
            <div className="w-64 mb-4">
                <div className="flex justify-between text-xs font-mono mb-2 text-gray-400">
                    <span>SYSTEM_BOOT</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>
                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-100 ease-out"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
            </div>
            <h1 ref={textRef} className="text-4xl font-bold tracking-tighter animate-pulse">
                ND<span className="text-primary">.</span>
            </h1>
        </div>
    );
};
