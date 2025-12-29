"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("projects");

  const projects = [
    {
      id: "vod",
      tags: [
        "Next.js",
        "TypeScript",
        "styled-components",
        "SSR",
        "i18n",
        "REST API",
      ],
      liveUrl: null,
      isCommercial: true,
      featured: true,
      color: "#a855f7",
      icon: "🎬",
    },
    {
      id: "blog",
      tags: [
        "Next.js",
        "TypeScript",
        "styled-components",
        "Headless CMS",
        "i18n",
        "SEO",
      ],
      liveUrl: null,
      isCommercial: true,
      featured: true,
      color: "#ec4899",
      icon: "📝",
    },
    {
      id: "takelink",
      tags: ["Next.js", "TypeScript", "Radix UI", "Zustand", "NextAuth.js"],
      liveUrl: "https://takelink.pl",
      isCommercial: true,
      featured: false,
      color: "#3b82f6",
      icon: "🔗",
    },
    {
      id: "casino",
      tags: [
        "Next.js",
        "TypeScript",
        "styled-components",
        "Tailwind CSS",
        "i18n",
      ],
      liveUrl: null,
      isCommercial: true,
      featured: false,
      color: "#22c55e",
      icon: "🎰",
    },
    {
      id: "podology",
      tags: ["Next.js", "Tailwind CSS", "SEO", "RWD"],
      liveUrl: null,
      isCommercial: true,
      featured: false,
      color: "#06b6d4",
      icon: "🏥",
    },
    {
      id: "trainers",
      tags: ["React", "Next.js", "Tailwind CSS", "SEO"],
      liveUrl: null,
      isCommercial: true,
      featured: false,
      color: "#f59e0b",
      icon: "💪",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background - static */}
      <div className="absolute inset-0 bg-[var(--background)]" />
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-[var(--accent-secondary)] rounded-full opacity-10"
        style={{ filter: "blur(80px)", transform: "translateZ(0)" }}
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
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("title")}{" "}
            <span className="text-gradient">{t("title_highlight")}</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${project.color}40 0%, transparent 50%)`,
                }}
              />

              <div className="relative p-8 glass h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.isCommercial && (
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-subtle)] text-[var(--accent-primary)]">
                        <Lock size={12} />
                        {t("commercial")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {t(`items.${project.id}.title`)}
                </h3>
                <p className="text-[var(--foreground-muted)] mb-4 flex-grow">
                  {t(`items.${project.id}.description`)}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(t.raw(`items.${project.id}.highlights`) as string[]).map(
                    (highlight: string) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 rounded-md text-xs font-medium border border-[var(--accent-primary)]/30 text-[var(--accent-tertiary)]"
                      >
                        {highlight}
                      </span>
                    )
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--background-tertiary)] text-[var(--foreground-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-tertiary)] transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {t("view_project")}
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="group p-6 rounded-xl glass hover:border-[var(--accent-primary)] transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl"
                style={{ backgroundColor: `${project.color}20` }}
              >
                {project.icon}
              </div>

              <h4 className="font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                {t(`items.${project.id}.title`)}
              </h4>
              <p className="text-sm text-[var(--foreground-muted)] mb-4 line-clamp-3">
                {t(`items.${project.id}.description`)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--background-tertiary)] text-[var(--foreground-subtle)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link or commercial badge */}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[var(--accent-primary)] hover:text-[var(--accent-tertiary)] transition-colors"
                >
                  <ExternalLink size={14} />
                  {t("view_project")}
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs text-[var(--foreground-subtle)]">
                  <Lock size={12} />
                  {t("commercial_project")}
                </span>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-6 rounded-2xl glass text-center"
        >
          <p className="text-[var(--foreground-muted)]">
            <Lock className="inline w-4 h-4 mr-2 text-[var(--accent-primary)]" />
            {t("nda_info")}
            <br />
            <span className="text-[var(--foreground-subtle)]">
              {t("nda_subinfo")}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
