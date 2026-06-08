// components/Footer.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto py-8 px-4 text-center text-sm text-muted bgcolor rounded-lg "
      >
        &copy; {new Date().getFullYear()} Jakub Matějovský. Všechna práva
        vyhrazena.
        <hr className="my-4 border-t border-muted w-full" />
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.youtube.com/@kubixcze2322"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100013259550808"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/kubixeu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </>
  );
}
