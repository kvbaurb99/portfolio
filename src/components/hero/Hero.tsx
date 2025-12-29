"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Layers,
  Zap,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:urbanskisoftware@gmail.com", label: "Email" },
];

const techItems = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background - static, no animation */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--accent-secondary)]/10" />

      {/* Static gradient orbs - CSS only, no JS animation */}
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[var(--accent-secondary)] rounded-full opacity-15"
        style={{
          filter: "blur(100px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-[var(--accent-primary)] rounded-full opacity-10"
        style={{
          filter: "blur(80px)",
          transform: "translateZ(0)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Left Column - Text Content (3/5 width) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-[var(--foreground-muted)]">
                {t("available")}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-[var(--foreground)]">
                  {t("greeting")}
                </span>
                <br />
                <span className="text-gradient">{t("name")}</span>
              </h1>
            </motion.div>

            {/* Role & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6"
            >
              <p className="text-xl sm:text-2xl text-[var(--accent-tertiary)] font-semibold mb-4">
                {t("role")}
              </p>
              <p className="text-lg text-[var(--foreground-muted)] max-w-xl leading-relaxed">
                {t("description")}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-10 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
              >
                {t("cta_projects")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold hover:border-[var(--accent-primary)] hover:text-[var(--accent-tertiary)] transition-all"
              >
                {t("cta_contact")}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-[var(--foreground-subtle)]">
                {t("find_me")}
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[var(--accent-subtle)] transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-[var(--foreground-muted)] group-hover:text-[var(--accent-primary)] transition-colors"
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Elements (2/5 width) - Simplified */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central glowing orb - CSS animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient opacity-80 animate-pulse" />
                <div
                  className="absolute w-48 h-48 rounded-full border border-[var(--accent-primary)]/30"
                  style={{ animation: "spin 30s linear infinite" }}
                />
                <div
                  className="absolute w-64 h-64 rounded-full border border-[var(--accent-tertiary)]/20"
                  style={{ animation: "spin 25s linear infinite reverse" }}
                />
              </div>

              {/* Tech cards - static positions, CSS hover */}
              {techItems.map((tech, index) => {
                const positions = [
                  { top: "5%", left: "10%" },
                  { top: "10%", right: "5%" },
                  { bottom: "15%", left: "5%" },
                  { bottom: "5%", right: "10%" },
                ];
                const pos = positions[index];

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute px-4 py-2 rounded-xl glass font-medium text-sm hover:scale-105 transition-transform"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      right: pos.right,
                      bottom: pos.bottom,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span style={{ color: tech.color }}>{tech.name}</span>
                  </motion.div>
                );
              })}

              {/* Floating icons with bounce animations */}
              <motion.div
                className="absolute top-1/4 left-1/4 p-3 rounded-xl glass"
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code2 className="w-6 h-6 text-[var(--accent-primary)]" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 right-1/4 p-3 rounded-xl glass"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <Layers className="w-6 h-6 text-[var(--accent-tertiary)]" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 left-1/3 p-3 rounded-xl glass"
                animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
              >
                <Zap className="w-6 h-6 text-amber-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 right-1/3 p-3 rounded-xl glass"
                animate={{ y: [0, 8, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
              >
                <Sparkles className="w-6 h-6 text-pink-400" />
              </motion.div>

              {/* Decorative SVG - static, no animation */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 400 400"
              >
                <path
                  d="M 200 50 Q 350 200 200 350"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M 50 200 Q 200 50 350 200"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="var(--accent-primary)" />
                    <stop offset="100%" stopColor="var(--accent-tertiary)" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="var(--accent-tertiary)" />
                    <stop offset="100%" stopColor="var(--accent-primary)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - CSS animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block opacity-60">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--foreground-subtle)] flex justify-center pt-2 animate-bounce">
          <div className="w-1 h-2 rounded-full bg-[var(--accent-primary)]" />
        </div>
      </div>
    </section>
  );
}
