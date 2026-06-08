// components/Navbar.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevence hydration mismatch erroru
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-card-border/40 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#"
          className="font-mono font-bold text-lg tracking-wider text-indigo-500"
        >
          JM<span className="text-foreground">.dev</span>
        </a>

        <div className="flex items-center gap-8">
          {/* Kruhové mikro-animované tlačítko */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center cursor-pointer hover:border-indigo-500/50 shadow-sm relative overflow-hidden transition-colors duration-300 group"
            aria-label="Přepnout motiv"
          >
            {/* Efekt záření při hoveru na tlačítko */}
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <motion.div
              key={theme}
              initial={{ y: 20, opacity: 0, rotate: 40 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -40 }}
              transition={{ duration: 0.3 }}
              className="text-indigo-500 dark:text-amber-400"
            >
              {theme === "dark" ? (
                // IKONA SLUNCE (pro dark mode, aby přepnul na light)
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.071 0 5 5 0 01-7.071 0z"
                  />
                </svg>
              ) : (
                // IKONA MĚSÍCE (pro light mode, aby přepnul na dark)
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
