"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:urbanskisoftware@gmail.com", label: "Email" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const navigationLinks = [
    { label: tNav("home"), href: "#hero" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("skills"), href: "#skills" },
    { label: tNav("projects"), href: "#projects" },
    { label: tNav("experience"), href: "#experience" },
    { label: tNav("contact"), href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-bold">
                <span className="text-gradient">JU</span>
                <span className="text-[var(--foreground-muted)]">.</span>
              </span>
            </motion.a>
            <p className="text-[var(--foreground-muted)] mb-6 max-w-xs">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass hover:bg-[var(--accent-subtle)] transition-colors group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">{t("navigation")}</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[var(--foreground-muted)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">{t("contact")}</h3>
            <ul className="space-y-2 text-[var(--foreground-muted)]">
              <li>urbanskisoftware@gmail.com</li>
              <li>+48 793 582 082</li>
              <li>Bielsko-Biała, Polska</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--foreground-muted)] flex items-center gap-1">
            © {currentYear} Jakub Urbański
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--foreground-muted)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            {t("back_to_top")}
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
