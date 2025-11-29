import { ArrowUpRight, Github, Linkedin, Mail, ShoppingBag, CheckSquare } from 'lucide-react';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export const HeroSection = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.bento-item', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                invalidateOnRefresh: true,
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

            {/* 4. Experience / Tech Stack (Wide) */}
            <div className="bento-item md:col-span-2 md:row-span-1 bento-card p-6 flex flex-col justify-center overflow-hidden group">
                <h3 className="bento-title">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {['React', 'Vue.js', 'Laravel', 'Node.js', 'MongoDB', 'Tailwind', 'GSAP'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-secondary rounded-md text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* 5. Project 1 (Square) */}
            <div className="bento-item md:col-span-1 md:row-span-2 bento-card p-0 group cursor-pointer flex flex-col">
                <div className="h-1/2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
                    <ShoppingBag className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 h-1/2 flex flex-col justify-between bg-card/50">
                    <div>
                        <h3 className="font-bold text-lg mb-1 text-foreground">E-Commerce</h3>
                        <p className="text-sm text-muted-foreground">Modern shopping experience with Stripe integration.</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* 6. Project 2 (Square) */}
            <div className="bento-item md:col-span-1 md:row-span-2 bento-card p-0 group cursor-pointer flex flex-col">
                <div className="h-1/2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
                    <CheckSquare className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 h-1/2 flex flex-col justify-between bg-card/50">
                    <div>
                        <h3 className="font-bold text-lg mb-1 text-foreground">Task Master</h3>
                        <p className="text-sm text-muted-foreground">Collaborative productivity dashboard.</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* 7. Contact CTA (Wide) */}
            <a href="#contact" className="bento-item md:col-span-2 md:row-span-1 bento-card p-8 bg-primary text-primary-foreground flex items-center justify-between group cursor-pointer hover:opacity-95 transition-opacity">
                <div>
                    <h2 className="text-3xl font-bold">Let's work together</h2>
                    <p className="text-primary-foreground/80 mt-1">Have a project in mind?</p>
                </div>
                <Mail className="w-12 h-12 group-hover:rotate-12 transition-transform" />
            </a>

        </div>
    );
};