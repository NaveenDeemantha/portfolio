import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export const HeroSection = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state explicitly
            gsap.set('.bento-item', {
                opacity: 0,
                y: 50
            });

            // Animate in with a slight delay to ensure DOM is ready
            gsap.to('.bento-item', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.1,
                clearProps: 'all', // Clear inline styles after animation
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 min-h-screen content-center max-w-7xl mx-auto">

            {/* 1. Main Profile Card (Large) */}
            <div className="bento-item md:col-span-2 md:row-span-2 bento-card p-8 flex flex-col justify-between group">
                <div>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 mb-6 overflow-hidden">
                        {/* Placeholder for avatar */}
                        <img src="https://avatars.githubusercontent.com/u/117744019?v=4" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Naveen Deemantha
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Full-Stack Developer Intern and Software Engineering undergraduate, passionate about building user-focused web and mobile applications.
                    </p>
                </div>
                <div className="mt-8 flex gap-4">
                    <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
                        Contact Me
                    </a>
                    <a href="#projects" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors">
                        View Work
                    </a>
                </div>
            </div>

            {/* 2. Map / Location Card (Small) */}
            <div className="bento-item md:col-span-1 md:row-span-1 bento-card p-6 flex flex-col justify-between bg-zinc-900 text-white">
                <div className="flex justify-between items-start">
                    <span className="text-zinc-400 font-medium">Location</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Colombo, Sri Lanka</h3>
                    <p className="text-zinc-400 text-sm">Remote available</p>
                </div>
            </div>

            {/* 3. Socials Card (Small) */}
            <div className="bento-item md:col-span-1 md:row-span-1 bento-card p-6 flex flex-col justify-center gap-4">
                <div className="flex gap-2">
                    <a href="https://github.com/NaveenDeemantha" target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full hover:scale-110 transition-transform" aria-label="GitHub"><Github className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/in/naveen-deemantha00" target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full hover:scale-110 transition-transform" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Follow my journey</p>
            </div>

            {/* 4. Education (Wide) */}
            <div className="bento-item md:col-span-2 md:row-span-1 bento-card p-6 flex flex-col justify-center overflow-hidden group">
                <h3 className="bento-title">Education</h3>
                <div className="mt-2">
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold text-foreground">BSc in Software Engineering</h4>
                        <p className="text-sm text-muted-foreground">University of Bedfordshire</p>
                        <p className="text-xs text-muted-foreground">Expected Graduation: 2026</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-foreground">Relevant Coursework</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering'].map((course) => (
                                <span key={course} className="px-3 py-1 bg-secondary rounded-md text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-default">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 4.5. CV/Resume Card (Medium) */}
            <div className="bento-item md:col-span-2 md:row-span-1 bento-card p-6 flex flex-col justify-between group hover:border-primary transition-colors">
                <div>
                    <h3 className="bento-title mb-4">Resume / CV</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        View my complete professional experience, skills, and education.
                    </p>
                </div>
                <div className="flex gap-3">
                    <a
                        href="/Resume- Naveen.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View CV
                    </a>
                    <a
                        href="/Resume- Naveen.pdf"
                        download="Naveen_Deemantha_Resume.pdf"
                        className="flex-1 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                    </a>
                </div>
            </div>

            {/* 4.6. Tech Stack Card (Medium) */}
            <div className="bento-item md:col-span-2 md:row-span-1 bento-card p-6 flex flex-col justify-between group overflow-hidden">
                <div>
                    <h3 className="bento-title mb-4">Tech Stack</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        Technologies and frameworks I work with
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        'JavaScript',
                        'TypeScript',
                        'Python',
                        'React',
                        'Node.js',
                        'Java',
                        'MongoDB',
                        'SQL',
                        'Git',
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* 5. Contact CTA (Wide) */}
            <a href="#contact" className="bento-item md:col-span-4 bento-card p-8 bg-primary text-primary-foreground flex items-center justify-between group cursor-pointer hover:opacity-95 transition-opacity">
                <div>
                    <h2 className="text-3xl font-bold">Let's work together</h2>
                    <p className="text-primary-foreground/80 mt-1">Have a project in mind?</p>
                </div>
                <Mail className="w-12 h-12 group-hover:rotate-12 transition-transform" />
            </a>

        </div>
    );
};