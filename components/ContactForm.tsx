// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Něco se nepovedlo.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Chyba sítě.");
      setStatus("error");
    }
  };

  return (
    <section
      id="kontakt"
      className="w-full max-w-xl mx-auto py-20 px-4 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Kontaktní formulář
        </h2>
        <p className="text-muted">Máš zájem o spolupráci? Dej mi vědět.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="space-y-6 bg-card border border-card-border p-8 rounded-2xl backdrop-blur-md transition-colors duration-300"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-muted mb-2 font-mono"
          >
            01. Jméno / Firma
          </label>
          <input
            type="text"
            id="name"
            required
            disabled={status === "submitting"}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-background/50 border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted mb-2 font-mono"
          >
            02. E-mailová adresa
          </label>
          <input
            type="email"
            id="email"
            required
            disabled={status === "submitting"}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-background/50 border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-muted mb-2 font-mono"
          >
            03. Tvoje zpráva
          </label>
          <textarea
            id="message"
            required
            rows={5}
            disabled={status === "submitting"}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-background/50 border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 resize-none disabled:opacity-50"
            placeholder="Ahoj Jakube..."
          />
        </div>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-emerald-500 dark:text-emerald-400 text-sm font-medium text-center"
            >
              Zpráva byla úspěšně odeslána!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-rose-500 dark:text-rose-400 text-sm font-medium text-center"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: status === "submitting" ? 1 : 1.01 }}
          whileTap={{ scale: status === "submitting" ? 1 : 0.99 }}
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 rounded-xl transition-colors duration-200 shadow-md shadow-indigo-600/10 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Odesílám..." : "Odeslat zprávu"}
        </motion.button>
      </motion.form>
    </section>
  );
}
