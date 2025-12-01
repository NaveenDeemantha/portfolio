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
        featured: true,
    },
    {
        title: 'E-Commerce Laravel Vue',
        description: 'A full-stack e-commerce app built with Laravel and Vue.js, this project features user authentication, product listings, cart & order management, and a modern responsive UI.',
        tags: ['Vue.js', 'Laravel', 'PHP'],
        link: 'https://github.com/NaveenDeemantha/eCom-Laravel-vue',
        github: 'https://github.com/NaveenDeemantha/eCom-Laravel-vue',
        featured: true,
    },
    {
        title: 'CRM System',
        description: 'This CRM system is a full-featured business dashboard built with Laravel 10. It supports user authentication (via Laravel Breeze), customer management, proposal & invoice generation, transaction tracking, email notifications (using Mailtrap) and payment processing through Stripe.',
        tags: ['Laravel', 'PHP', 'Blade'],
        link: 'https://github.com/NaveenDeemantha/crm_system',
        github: 'https://github.com/NaveenDeemantha/crm_system',
        featured: true,
    },
    {
        title: 'Inventory System',
        description: 'A comprehensive inventory management system built with Vue.js, featuring product tracking, stock management, and user-friendly interface for efficient inventory control.',
        tags: ['Vue.js', 'JavaScript'],
        link: 'https://github.com/NaveenDeemantha/Inventory-System',
        github: 'https://github.com/NaveenDeemantha/Inventory-System',
        featured: false,
    },
    {
        title: 'Personal Note Writer',
        description: 'A personal note-taking application built with Laravel, allowing users to create, edit, and organize their notes with a clean and intuitive interface.',
        tags: ['Laravel', 'PHP', 'Blade'],
        link: 'https://github.com/NaveenDeemantha/personal-note-writer',
        github: 'https://github.com/NaveenDeemantha/personal-note-writer',
        featured: false,
    },
    {
        title: 'Banana Game',
        description: 'Banana Game is a fun Vue.js and PHP web game using the Banana API to generate math challenges. Players solve problems quickly to collect bananas across three difficulty levels.',
        tags: ['Vue.js', 'PHP'],
        link: 'https://github.com/NaveenDeemantha/banana_game',
        github: 'https://github.com/NaveenDeemantha/banana_game',
        featured: false,
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
                    {projects.sort((a, b) => b.featured - a.featured).map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bento-card p-6 group relative"
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

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/NaveenDeemantha?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        See More Projects
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};