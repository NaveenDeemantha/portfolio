import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight">
                    ND<span className="text-primary">.</span>
                </a>

                <div className="flex items-center gap-4">
                    <a href="mailto:naveenpunchihewa9@gmail.com" className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="Email">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/NaveenDeemantha" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/naveen-deemantha00" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
};