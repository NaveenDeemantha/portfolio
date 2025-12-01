import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            contentRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    invalidateOnRefresh: false,
                },
            }
        );
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
            <div className="container px-4">
                <div ref={contentRef} className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
                        About Me
                    </h2>

                    <div className="bento-card p-8 md:p-12 text-lg md:text-xl text-muted-foreground leading-relaxed">
                        <p className="mb-6">
                            I am a passionate developer with a keen eye for design. I believe that the best applications are those that not only function perfectly but also delight the user with their aesthetics and interactivity.
                        </p>
                        <p>
                            With a background in both engineering and design, I bridge the gap between technical complexity and visual elegance. I'm constantly exploring new technologies and pushing the boundaries of what's possible on the web.
                        </p>
                        <p className="mt-6">
                            Currently working as a Full-Stack Developer Intern at Weblook International, and pursuing my Software Engineering degree.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};