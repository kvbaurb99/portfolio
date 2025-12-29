"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Laptop } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("experience");

  const experiences = [
    {
      id: "takegroup",
      type: "work",
      skills: ["Next.js", "TypeScript", "styled-components", "Tailwind CSS", "Zustand", "REST API"],
    },
    {
      id: "freelancer",
      type: "freelance",
      skills: ["React", "Next.js", "SEO", "Core Web Vitals", "RWD"],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative elements */}
      <motion.div
        className="absolute -right-32 top-1/3 w-64 h-64 bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-10"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-[var(--accent-primary)] bg-[var(--accent-subtle)] mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("title")} <span className="text-gradient">{t("title_highlight")}</span> {t("title_end")}
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-tertiary)] to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-2 w-7 h-7 rounded-full bg-[var(--background-secondary)] border-2 border-[var(--accent-primary)] flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase
                        size={14}
                        className="text-[var(--accent-primary)]"
                      />
                    ) : (
                      <Laptop
                        size={14}
                        className="text-[var(--accent-primary)]"
                      />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="group p-6 rounded-2xl glass hover:border-[var(--accent-primary)] transition-all duration-300">
                    {/* Period badge */}
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-subtle)] text-[var(--accent-primary)] mb-4">
                      {t(`items.${exp.id}.period`)}
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                      {t(`items.${exp.id}.title`)}
                    </h3>
                    <p className="text-[var(--accent-tertiary)] font-medium mb-2">
                      {t(`items.${exp.id}.company`)}
                    </p>
                    <p className="text-sm text-[var(--foreground-subtle)] mb-4">
                      📍 {t(`items.${exp.id}.location`)}
                    </p>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      {t(`items.${exp.id}.description`)}
                    </p>

                    {/* Achievements */}
                    <ul className="mb-4 space-y-2">
                      {(t.raw(`items.${exp.id}.achievements`) as string[]).map((achievement: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]"
                        >
                          <span className="text-[var(--accent-primary)] mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--background-tertiary)] text-[var(--foreground-muted)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-2xl glass"
            >
              <h3 className="text-lg font-bold mb-6">{t("sidebar.summary")}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--foreground-muted)]">
                    {t("sidebar.experience_label")}
                  </span>
                  <span className="font-bold text-[var(--accent-primary)]">
                    3+ lat
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--foreground-muted)]">
                    {t("sidebar.projects_label")}
                  </span>
                  <span className="font-bold text-[var(--accent-primary)]">
                    5+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--foreground-muted)]">
                    {t("sidebar.technologies_label")}
                  </span>
                  <span className="font-bold text-[var(--accent-primary)]">
                    15+
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 rounded-2xl glass"
            >
              <h3 className="text-lg font-bold mb-4">{t("sidebar.specializations")}</h3>
              <div className="space-y-3">
                {[
                  "Next.js Apps (SSR/ISR)",
                  "Core Web Vitals",
                  "Technical SEO",
                  "i18n",
                  "Headless CMS",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 rounded-2xl bg-gradient text-white text-center"
            >
              <h3 className="text-lg font-bold mb-2">{t("cta.title")}</h3>
              <p className="text-sm text-white/80 mb-4">
                {t("cta.subtitle")}
              </p>
              <motion.a
                href="/cv.pdf"
                target="_blank"
                className="inline-block px-6 py-2 rounded-full bg-white text-[var(--accent-secondary)] font-medium hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("cta.button")}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
