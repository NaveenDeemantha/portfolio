import { ThemeToggle } from "@/components/ThemeToggle";
import { Star } from "lucide-react";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background  text-foreground overflow-x-hidden">

      <div>Hello World</div>

      {/* {Theme Toggle} */}
      <ThemeToggle />

      {/* {Background Effects} */}
      <StarBackground />

      {/* { Navbar } */}

      {/* { Main Content} */}

      {/* { Footer } */}

    </div>
  );
};
