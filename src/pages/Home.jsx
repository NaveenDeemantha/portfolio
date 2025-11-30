import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground pb-20 relative">
      <Navbar />

      <main className="pt-20 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
