"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mx-auto max-w-6xl text-5xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-6xl md:text-8xl">
            Building software
            <br />
            businesses can
            <span className="text-primary"> real business needs</span>
          </h1>

          <p className="text-muted mx-auto mt-10 max-w-2xl text-lg leading-8 md:text-xl">
            From web platforms and AI automation to scalable cloud systems, Gelora Tech helps
            companies build technology designed for reliability, growth, and long-term success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
