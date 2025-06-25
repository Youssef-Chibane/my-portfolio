"use client";

import type React from "react";

import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-4xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Youssef Chibane</h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="transition-colors hover:text-foreground/80"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className="transition-colors hover:text-foreground/80"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="transition-colors hover:text-foreground/80"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="transition-colors hover:text-foreground/80"
            >
              Contact
            </a>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
