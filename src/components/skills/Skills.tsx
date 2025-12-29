"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Wrench, Layers, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Języki & Frameworki",
    icon: Code2,
    color: "var(--accent-primary)",
    description: "Główne technologie do budowy aplikacji",
    skills: ["TypeScript", "JavaScript (ES6+)", "React.js", "Next.js", "HTML5", "CSS3"],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    color: "var(--accent-tertiary)",
    description: "Tworzenie responsywnych interfejsów",
    skills: ["Tailwind CSS", "Styled Components", "Radix UI", "Material UI", "CSS Modules", "RWD"],
  },
  {
    title: "State & Data",
    icon: Layers,
    color: "#ec4899",
    description: "Zarządzanie stanem i pobieranie danych",
    skills: ["Zustand", "Redux", "React Query", "REST API", "GraphQL", "Axios"],
  },
  {
    title: "Narzędzia & DevOps",
    icon: Wrench,
    color: "#22c55e",
    description: "Narzędzia wspierające development",
    skills: ["Git", "Docker", "Figma", "NextAuth.js", "Headless CMS", "Cursor"],
  },
];

const specializations = [
  { label: "Core Web Vitals", desc: "Optymalizacja wydajności" },
  { label: "Techniczne SEO", desc: "Dane strukturalne, indeksowanie" },
  { label: "SSR / ISR", desc: "Server-side rendering" },
  { label: "i18n", desc: "Wielojęzyczność (next-intl)" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Decorative orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[var(--accent-primary)] rounded-full blur-[120px] opacity-10"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-[var(--accent-tertiary)] rounded-full blur-[120px] opacity-10"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-[var(--accent-primary)] bg-[var(--accent-subtle)] mb-4">
            Umiejętności
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mój <span className="text-gradient">tech stack</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Technologie i narzędzia, których używam do tworzenia wydajnych
            aplikacji webowych.
          </p>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-4 rounded-xl glass text-center group hover:border-[var(--accent-primary)] transition-all"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="font-semibold text-[var(--foreground)]">{spec.label}</span>
              </div>
              <span className="text-xs text-[var(--foreground-muted)]">{spec.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
              className="group p-8 rounded-2xl glass hover:border-[var(--accent-primary)] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon 
                    className="w-6 h-6 transition-colors" 
                    style={{ color: category.color }} 
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.03,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--background-tertiary)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-tertiary)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--foreground-muted)] mb-6">
            Wykorzystuję również narzędzia AI do zwiększenia produktywności:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["ChatGPT", "Claude", "Gemini", "Cursor AI"].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-dashed border-[var(--accent-primary)] text-[var(--accent-tertiary)] text-sm font-medium hover:bg-[var(--accent-subtle)] transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
