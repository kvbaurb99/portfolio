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
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--accent-secondary)]/10" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--accent-secondary)] rounded-full blur-[180px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
                Dostępny do współpracy
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-[var(--foreground)]">Cześć, jestem</span>
                <br />
                <span className="text-gradient">Jakub Urbański</span>
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
                Front-End Developer
              </p>
              <p className="text-lg text-[var(--foreground-muted)] max-w-xl leading-relaxed">
                Specjalizuję się w{" "}
                <span className="text-[var(--accent-primary)]">React</span> i{" "}
                <span className="text-[var(--accent-primary)]">Next.js</span>.
                Tworzę nowoczesne aplikacje webowe z pasją do czystego kodu i
                doskonałego UX. Przekształcam pomysły w funkcjonalne i piękne
                produkty cyfrowe.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-10 mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Zobacz projekty
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold hover:border-[var(--accent-primary)] hover:text-[var(--accent-tertiary)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Skontaktuj się
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-[var(--foreground-subtle)]">
                Znajdź mnie:
              </span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg hover:bg-[var(--accent-subtle)] transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-[var(--foreground-muted)] group-hover:text-[var(--accent-primary)] transition-colors"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Elements (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central glowing orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient opacity-80"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute w-48 h-48 rounded-full border border-[var(--accent-primary)]/30"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute w-64 h-64 rounded-full border border-[var(--accent-tertiary)]/20"
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Floating tech cards */}
              {techItems.map((tech, index) => {
                const positions = [
                  { top: "5%", left: "10%", delay: 0 },
                  { top: "10%", right: "5%", delay: 0.5 },
                  { bottom: "15%", left: "5%", delay: 1 },
                  { bottom: "5%", right: "10%", delay: 1.5 },
                ];
                const pos = positions[index];

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute px-4 py-2 rounded-xl glass font-medium text-sm"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      right: pos.right,
                      bottom: pos.bottom,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: { delay: 0.6 + pos.delay },
                      scale: { delay: 0.6 + pos.delay },
                      y: { duration: 3, repeat: Infinity, delay: pos.delay },
                    }}
                  >
                    <span style={{ color: tech.color }}>{tech.name}</span>
                  </motion.div>
                );
              })}

              {/* Floating icons */}
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

              {/* Decorative lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                <motion.path
                  d="M 200 50 Q 350 200 200 350"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M 50 200 Q 200 50 350 200"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 1.3 }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-[var(--foreground-subtle)] flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-[var(--accent-primary)]"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
