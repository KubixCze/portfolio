// components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="max-w-3xl text-center z-10 pt-32 pb-20">
      {/* Animovaný pozdrav */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-3"
      >
        Ahoj, já jsem
      </motion.p>

      {/* Úderné jméno a titul */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 p-4 bg-gradient-to-r from-foreground via-indigo-500 to-slate-500 bg-clip-text text-transparent"
      >
        Bc. Jakub Matějovský
      </motion.h1>

      {/* Trefný podtitul */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-muted mb-10 max-w-xl mx-auto leading-relaxed"
      >
        Full-stack vývojář zaměřený na stavbu bezpečných, skvěle
        optimalizovaných aplikací a čistou softwarovou architekturu.
      </motion.p>

      {/* Call to Action tlačítka */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#projekty"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 active:scale-95"
        >
          Prohlédnout mou práci
        </a>
        <a
          href="#kontakt"
          className="px-8 py-4 bg-card border border-card-border hover:border-indigo-500/50 font-medium rounded-xl transition-all duration-200 active:scale-95"
        >
          Kontaktuj mě
        </a>
      </motion.div>
    </div>
  );
}
