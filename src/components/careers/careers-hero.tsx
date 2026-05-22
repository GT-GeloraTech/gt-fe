"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { fadeUp, stagger } from "@/lib/animations";

export function CareersHero() {
  return (
    <section className="relative px-6 pt-32 pb-32">
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="hero-glow"
      />

      <div className="noise" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <motion.div
          variants={fadeUp}
          className="glass-card border-primary/20 text-primary mb-8 inline-flex rounded-full border px-5 py-2 text-sm"
        >
          Join Our Team
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-5xl text-5xl leading-tight font-semibold md:text-7xl"
        >
          Build Products.
          <br />
          Shape the Future.
        </motion.h1>

        <motion.p variants={fadeUp} className="text-muted mx-auto mt-8 max-w-3xl text-lg leading-8">
          Work alongside engineers, creators and innovators building exceptional digital experiences
          with impact.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-5">
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="#job-section">
              <button className="bg-primary text-background flex h-16 min-w-[260px] items-center justify-center rounded-full px-10 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                View Open Roles
              </button>
            </Link>

            <Link href="/uploadresume">
              <button className="border-primary/30 text-foreground hover:bg-primary/10 flex h-16 min-w-[260px] items-center justify-center gap-3 rounded-full border bg-white/5 px-10 text-lg font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <span>Share Resume</span>
                <span className="text-xl">→</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
