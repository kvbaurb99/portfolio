"use client";

import { motion } from "framer-motion";

interface GradientBackgroundProps {
  variant?: "default" | "subtle" | "intense";
}

export default function GradientBackground({
  variant = "default",
}: GradientBackgroundProps) {
  const opacity = {
    default: 0.15,
    subtle: 0.08,
    intense: 0.25,
  }[variant];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main gradient orb */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)",
          opacity,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary gradient orb */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
          opacity: opacity * 0.8,
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Accent orb */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent-tertiary) 0%, transparent 70%)",
          opacity: opacity * 0.6,
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.02,
        }}
      />
    </div>
  );
}
