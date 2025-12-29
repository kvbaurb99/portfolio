"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("about");

  const qualities = [
    {
      icon: Code2,
      title: t("qualities.clean_code.title"),
      description: t("qualities.clean_code.description"),
    },
    {
      icon: Palette,
      title: t("qualities.design_thinking.title"),
      description: t("qualities.design_thinking.description"),
    },
    {
      icon: Rocket,
      title: t("qualities.performance.title"),
      description: t("qualities.performance.description"),
    },
    {
      icon: Users,
      title: t("qualities.collaboration.title"),
      description: t("qualities.collaboration.description"),
    },
  ];

  const stats = [
    { value: "3+", label: t("stats.experience") },
    { value: "5+", label: t("stats.projects") },
    { value: "Miliony", label: t("stats.views") },
    { value: "100%", label: t("stats.commitment") },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-dark)]" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "var(--gradient-radial)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
            {t("title")} <span className="text-gradient">{t("title_highlight")}</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[var(--accent-primary)] rounded-2xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--accent-subtle)] rounded-2xl"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-secondary)] via-[var(--accent-primary)] to-[var(--accent-tertiary)] opacity-20" />
                
                {/* Code snippet decoration */}
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-full p-6 font-mono text-sm">
                    <div className="text-[var(--foreground-subtle)] mb-2">{"// About me"}</div>
                    <div className="text-[var(--foreground-muted)]">
                      <span className="text-[var(--accent-tertiary)]">const</span>{" "}
                      <span className="text-[var(--accent-primary)]">developer</span> = {"{"}
                    </div>
                    <div className="pl-4 text-[var(--foreground-muted)]">
                      <span className="text-[var(--accent-tertiary)]">name</span>:{" "}
                      <span className="text-green-400">&quot;Jakub Urbański&quot;</span>,
                    </div>
                    <div className="pl-4 text-[var(--foreground-muted)]">
                      <span className="text-[var(--accent-tertiary)]">role</span>:{" "}
                      <span className="text-green-400">&quot;Front-End Dev&quot;</span>,
                    </div>
                    <div className="pl-4 text-[var(--foreground-muted)]">
                      <span className="text-[var(--accent-tertiary)]">main_tech</span>:{" "}
                      <span className="text-green-400">&quot;React & Next.js&quot;</span>,
                    </div>
                    <div className="pl-4 text-[var(--foreground-muted)]">
                      <span className="text-[var(--accent-tertiary)]">building_with</span>: [
                    </div>
                    <div className="pl-8 text-green-400">
                      &quot;Clean Code&quot;,
                    </div>
                    <div className="pl-8 text-green-400">
                      &quot;Great UX&quot;,
                    </div>
                    <div className="pl-8 text-green-400">
                      &quot;Performance&quot;
                    </div>
                    <div className="pl-4 text-[var(--foreground-muted)]">]</div>
                    <div className="text-[var(--foreground-muted)]">{"}"}</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -right-6 top-1/4 px-4 py-2 glass rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-[var(--accent-primary)]">
                  React Expert
                </span>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/4 px-4 py-2 glass rounded-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm font-medium text-[var(--accent-tertiary)]">
                  Next.js Pro
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {t("heading")} <span className="text-gradient">{t("heading_highlight")}</span> {t("heading_end")}
            </h3>
            <div className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>

            {/* CTA */}
            <motion.a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-[var(--accent-primary)] rounded-full text-[var(--accent-primary)] font-medium hover:bg-[var(--accent-subtle)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("download_cv")}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Qualities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:bg-[var(--accent-subtle)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center mb-4 group-hover:bg-gradient transition-all duration-300">
                <quality.icon className="w-6 h-6 text-[var(--accent-primary)] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{quality.title}</h4>
              <p className="text-sm text-[var(--foreground-muted)]">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl glass"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 1 + index * 0.1,
                }}
                className="text-4xl md:text-5xl font-bold text-gradient mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-[var(--foreground-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
