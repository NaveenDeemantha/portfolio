import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full py-6 px-4 border-t border-t-border flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm text-foreground/70">
            { " " }
            <p className="text-sm text-muted-foreground"> 
                &copy; {new Date().getFullYear() } Naveen Deemantha. All rights reserved.
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={25}/>
            </a>
        </footer>
    )
}