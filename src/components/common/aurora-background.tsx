"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

/**
 * Drifting, blurred mesh-gradient blobs used behind hero / feature sections.
 * Purely decorative and pointer-safe; respects prefers-reduced-motion.
 */
export function AuroraBackground({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const float = (x: number[], y: number[], duration: number) =>
    reduceMotion
      ? {}
      : {
          animate: { x, y },
          transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        {...float([-40, 40, -40], [-20, 30, -20], 16)}
        className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#d4b06a]/20 blur-[120px] sm:h-[560px] sm:w-[560px]"
      />
      <motion.div
        {...float([30, -30, 30], [20, -20, 20], 20)}
        className="absolute top-1/4 -right-32 h-[380px] w-[380px] rounded-full bg-[#a85cff]/15 blur-[120px] sm:h-[520px] sm:w-[520px]"
      />
      <motion.div
        {...float([-20, 20, -20], [10, -30, 10], 24)}
        className="absolute -bottom-40 left-1/3 h-[360px] w-[360px] rounded-full bg-[#d4b06a]/10 blur-[120px] sm:h-[480px] sm:w-[480px]"
      />
    </div>
  );
}
