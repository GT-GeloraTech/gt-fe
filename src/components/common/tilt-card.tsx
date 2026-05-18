"use client";

import { useRef } from "react";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/cn";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** max rotation in degrees */
  intensity?: number;
}

/**
 * Pointer-reactive 3D tilt. Falls back to a simple lift on touch devices
 * and when the user prefers reduced motion.
 */
export function TiltCard({ children, className, intensity = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200,
    damping: 18,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn("will-change-transform [transform-style:preserve-3d]", className)}
    >
      {children}
    </motion.div>
  );
}
