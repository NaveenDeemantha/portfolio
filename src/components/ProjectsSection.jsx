import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart, checkout, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#',
        github: '#',
    },
    {
        title: 'Task Management App',
        description: 'Collaborative task manager with real-time updates and team features.',
        tags: ['Vue.js', 'Firebase', 'Tailwind'],
        link: '#',
        github: '#',
    },
    {
        title: 'Portfolio v1',
        description: 'My previous portfolio site showcasing my early work and growth.',
        tags: ['HTML', 'SCSS', 'JavaScript'],
        link: '#',
        github: '#',
    },
];

export const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
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