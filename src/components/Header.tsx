"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  // Determine if the current page starts with a dark hero section
  const hasDarkHero = pathname === "/";
  const [isDarkText, setIsDarkText] = useState(!hasDarkHero);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    if (hasDarkHero) {
      setIsDarkText(latest > 100);
    }
  });

  // Re-evaluate dark text when route changes
  useEffect(() => {
    const isDark = pathname === "/";
    setIsDarkText(!isDark || window.scrollY > 100);
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Resort", href: "/resort" },
    { name: "Destination", href: "/destination" },
    { name: "Vision", href: "/vision" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          isScrolled ? "bg-warm-ivory/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex flex-col group">
            <span 
              className={`font-serif text-xl tracking-wider transition-colors duration-300 ${
                isDarkText || isScrolled || isMobileMenuOpen ? "text-midnight" : "text-white"
              }`}
            >
              PRAVAT
            </span>
            <span 
              className={`text-[9px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                isDarkText || isScrolled || isMobileMenuOpen ? "text-muted-gold" : "text-white/70"
              }`}
            >
              Hospitality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium relative group transition-colors duration-300 ${
                  isDarkText || isScrolled ? "text-midnight" : "text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isDarkText || isScrolled ? "bg-muted-gold" : "bg-white"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-midnight w-6 h-6" />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${isDarkText || isScrolled ? "text-midnight" : "text-white"}`} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-warm-ivory z-40 flex flex-col justify-center px-8"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? "0%" : "-100%" 
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <nav className="flex flex-col gap-8 mt-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <Link 
                href={link.href}
                className="font-serif text-4xl text-deep-ocean-navy block hover:text-muted-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
