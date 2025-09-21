import { ThemeToggle } from "@/components/ThemeToggle";
import { Star } from "lucide-react";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background  text-foreground overflow-x-hidden">

      {/* {Theme Toggle} */}
      <ThemeToggle />

      {/* {Background Effects} */}
      <StarBackground />

      {/* { Navbar } */}
      <Navbar />

      {/* { Main Content} */}
      <main>
        {/* hero */}
        <HeroSection />
        
      </main>

      {/* { Footer } */}

    </div>
  );
};
