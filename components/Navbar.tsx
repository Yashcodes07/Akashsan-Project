"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-obsidian-950/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          aria-label="PureEstate Cleaning Home"
        >
          <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-obsidian-950" />
          </div>
          <span className="font-display text-xl font-semibold tracking-wide">
            <span className="text-gold">Akash</span>
            <span className="text-obsidian-50">San</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="font-body text-sm font-medium text-obsidian-100/70 hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gold-gradient text-obsidian-950 hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-gold/20"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-obsidian-50 hover:text-gold transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col items-start gap-1 px-6 py-4 bg-obsidian-800/95 backdrop-blur-md border-t border-gold/10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left py-2.5 font-body text-sm text-obsidian-100/80 hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 w-full py-2.5 text-sm font-semibold rounded-full bg-gold-gradient text-obsidian-950 hover:opacity-90 transition-all"
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
}