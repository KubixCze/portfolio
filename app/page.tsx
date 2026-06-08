// app/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start px-6 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />

      <Navbar />
      <Hero />
      <Projects />
      <ContactForm />
    </main>
  );
}
