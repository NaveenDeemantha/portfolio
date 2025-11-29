import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'MERN ThinkBoard',
        description: 'A full-stack notes application built with the MERN stack (MongoDB, Express, React, Node.js), MERN ThinkBoard delivers secure user authentication with JWT/bcrypt, a clean RESTful API, responsive React UI and built-in rate limiting and middleware protections.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://github.com/NaveenDeemantha/mern-thinkboard',
        github: 'https://github.com/NaveenDeemantha/mern-thinkboard',
    },
    {
        title: 'E-Commerce Laravel Vue',
        description: 'A full-stack e-commerce app built with Laravel and Vue.js, this project features user authentication, product listings, cart & order management, and a modern responsive UI.',
        tags: ['Vue.js', 'Laravel', 'PHP'],
        link: 'https://github.com/NaveenDeemantha/eCom-Laravel-vue',
        github: 'https://github.com/NaveenDeemantha/eCom-Laravel-vue',
    },
    {
        title: 'Banana Game',
        description: 'Banana Game is a fun Vue.js and PHP web game using the Banana API to generate math challenges. Players solve problems quickly to collect bananas across three difficulty levels.',
        tags: ['Vue.js', 'PHP'],
        link: 'https://github.com/NaveenDeemantha/banana_game',
        github: 'https://github.com/NaveenDeemantha/banana_game',
    },
];

export const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            cardsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                    invalidateOnRefresh: true,
                },
            }
        );
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
            <div className="container px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bento-card p-6 group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    <a href={project.github} className="hover:text-primary transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.link} className="hover:text-primary transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
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