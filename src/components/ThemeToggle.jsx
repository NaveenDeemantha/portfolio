import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";   
import { cn } from  "../lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        try {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) return storedTheme === "dark";
            // default to dark when no preference stored
            return true;
        } catch {
            return true;
        }
    });

    useEffect(() => {
        try {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme === "dark") {
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            } else if (storedTheme === "light") {
                setIsDarkMode(false);
                document.documentElement.classList.remove("dark");
            } else {
                // If no stored preference, set it to dark by default
                localStorage.setItem("theme", "dark");
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            }
        } catch {
            // ignore (e.g., during SSR)
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    return (
        <button onClick={toggleTheme} 
        className={cn(
           "p-2 rounded-full hover:bg-primary/10 transition-colors duration-300",
           "focus:outline-none"
        )}
        aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    );
};