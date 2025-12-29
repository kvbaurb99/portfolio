"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { locales, localeFlags, type Locale } from "@/i18n/config";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageSwitch() {
  const currentLocale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // Set cookie and reload
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`; // 1 year
    setIsOpen(false);
    window.location.reload();
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full glass text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe size={16} className="text-[var(--accent-primary)]" />
        <span>{localeFlags[currentLocale]}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-36 rounded-xl glass border border-[var(--border)] overflow-hidden z-50"
            >
              {locales.map((locale) => (
                <motion.button
                  key={locale}
                  onClick={() => switchLocale(locale)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    currentLocale === locale
                      ? "bg-[var(--accent-subtle)] text-[var(--accent-primary)]"
                      : "text-[var(--foreground-muted)] hover:bg-[var(--background-tertiary)] hover:text-[var(--foreground)]"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-lg">{localeFlags[locale]}</span>
                  <span>{locale === "pl" ? "Polski" : "English"}</span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
