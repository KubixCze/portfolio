// components/Projects.tsx
"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

const projectsData: Project[] = [
  {
    title: "Klientsko-serverová aplikace (Bakalářská práce)",
    description:
      "Robustní full-stack aplikace postavená na bezpečné architektuře, s implementovaným 2FA ověřováním a komplexním modelováním hrozeb.",
    longDescription:
      "Projekt se zaměřuje na vysoké zabezpečení datové komunikace. Součástí vývoje bylo vytvoření API katalogu, dvoufázového ověřování (2FA) a detailního threat modelu podle metodiky STRIDE v nástroji Threat Dragon. Backend bezpečně komunikuje přes ORM s relační databází.",
    tags: [
      "React",
      "Node.js",
      "Sequelize",
      "PostgreSQL",
      "2FA",
      "STRIDE Modeling",
    ],
    githubUrl: "https://github.com/yourusername/bachelor-project",
    isFeatured: true,
  },
  {
    title: "Minecraft Mod Forum",
    description:
      "První full stack webová stránka vyvíjená v týmu s dynamickým obsahem.",
    tags: ["UI/UX", "Full Stack", "MSSQL", "Node.js"],
    githubUrl: "https://github.com/yourusername/",
    isFeatured: false,
  },
  {
    title: "FedUp",
    description:
      "Návrh a implementace čistého UI/UX pro mobilní sumarizační aplikaci s důrazem na testování přístupnosti a použitelnosti.",
    tags: ["Flutter", "Dart", "UI/UX", "Usability Testing"],
    githubUrl: "https://github.com/yourusername/",
    isFeatured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projekty"
      className="w-full max-w-5xl mx-auto py-24 px-4 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Vybrané projekty
        </h2>
        <p className="text-muted">
          Ukázky mé práce, softwarové architektury a technického uvažování.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-card border border-card-border rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group ${
              project.isFeatured
                ? "md:col-span-2 border-indigo-500/20 bg-gradient-to-br from-card via-card to-indigo-500/5"
                : ""
            }`}
          >
            <div>
              {project.isFeatured && (
                <span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-3 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Hlavní projekt / Oceněná práce
                </span>
              )}

              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-muted mb-6 leading-relaxed text-sm md:text-base">
                {project.isFeatured && project.longDescription
                  ? project.longDescription
                  : project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-mono bg-background text-muted px-3 py-1 rounded-md border border-card-border transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-card-border/60">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted hover:text-foreground flex items-center gap-1.5 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    Zdrojový kód
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-400 flex items-center gap-1 transition-colors"
                  >
                    Živé demo ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
