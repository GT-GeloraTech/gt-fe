"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** delay in seconds */
  delay?: number;
  direction?: Direction;
  /** travel distance in px */
  distance?: number;
}

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, ...offset(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.3 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
