import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state when scrolled past a certain threshold (e.g., 50px)
      const isScrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call once on mount to set initial state
    handleScroll();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]); // Re-run if scrolled state changes

  return (
    <nav
      className={`py-4 fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/10" : ""
      }`}
    >
      <div
        className={`transition-all duration-300 max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between mx-auto ${
          scrolled ? "" : "py-10 lg:pr-14"
        }`}
      >
        <img
          src={logo}
          alt="SecondSay Logo"
          className="h-5 md:h-6 object-contain"
        />
        <Button disabled className="bg-gray-950 text-sm md:text-base">
          App coming soon...
        </Button>
      </div>
    </nav>
  );
}
