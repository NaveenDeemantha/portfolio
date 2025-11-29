import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { category: 'Frontend', items: ['React', 'Vue', 'Next.js', 'Tailwind CSS', 'GSAP', 'Three.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'AWS', 'Vercel'] },
];

export const SkillsSection = () => {
    const sectionRef = useRef(null);
    const categoriesRef = useRef([]);

    useEffect(() => {
        const el = sectionRef.current;

        categoriesRef.current.forEach((cat, index) => {
            gsap.fromTo(
                cat,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 75%',
                    },
                }
            );
        });
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-20 md:py-32">
            <div className="container px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    Technical Arsenal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            ref={(el) => (categoriesRef.current[index] = el)}
                            className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 rounded-lg bg-background/50 border border-white/5 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};