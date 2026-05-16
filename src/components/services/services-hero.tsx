"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-32">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2">
            <span className="text-primary text-xs font-medium tracking-[0.25em] uppercase">
              Services
            </span>
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl leading-[1] font-semibold tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Technology services
            <br />
            built around <span className="text-primary">real business needs</span>
          </h1>

          <p className="text-muted mx-auto mt-10 max-w-2xl text-lg leading-8 md:text-xl">
            From custom platforms and AI automation to cloud infrastructure and long-term support,
            Gelora Tech helps businesses build software designed to scale with reliability and
            clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
