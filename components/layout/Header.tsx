"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 transition duration-200 hover:opacity-80">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl md:text-2xl text-primary">ExamPrepGuide</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            Home
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            About
          </Link>
          
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 bg-muted hover:bg-muted/80 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;