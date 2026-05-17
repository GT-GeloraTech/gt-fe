"use client";

import { motion } from "framer-motion";

export function ProjectsHero() {
  return (
    <section className="px-6 pt-40 pb-32">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2">
            <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
              Projects
            </span>
          </div> */}

          <h1 className="mx-auto max-w-5xl text-5xl leading-[1] font-semibold tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Projects built around
            <br />
            <span className="text-primary">real operational problems</span>
          </h1>

          <p className="text-muted mx-auto mt-10 max-w-2xl text-lg leading-8 md:text-xl">
            Every project begins with a business challenge. Our role is to transform complexity into
            software that improves workflows, simplifies operations, and supports long-term growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
