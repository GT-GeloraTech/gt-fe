"use client";

import { motion } from "framer-motion";

import { fadeUp, stagger } from "@/lib/animations";

export function CareersHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
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

      {/* Ambient Gradient Orbs */}
      {/* <div className="absolute top-32 left-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" /> */}

      {/* Noise Texture */}
      {/* <div className="noise" /> */}

      {/* Grid Overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" /> */}

      {/* Main Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-5xl text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl lg:text-8xl"
        >
          Build Products.
          <br />
          <span className="text-primary">Shape the Future.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-muted mx-auto mt-8 max-w-3xl text-lg leading-8 md:text-xl"
        >
          Work alongside engineers, creators and innovators building exceptional digital experiences
          with impact.
        </motion.p>

        {/* Tags */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {["Remote Friendly", "High Ownership", "Fast Execution", "Global Team"].map((item) => (
            <div
              key={item}
              className="text-muted-foreground rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        {/* <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Link href="#job-section">
            <button className="bg-primary text-background flex h-14 min-w-[220px] items-center justify-center rounded-full px-8 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              View Open Roles
            </button>
          </Link>

          <Link href="/uploadresume">
            <button className="text-foreground flex h-14 min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <span>Share Resume</span>
              <span className="text-lg">→</span>
            </button>
          </Link>
        </motion.div> */}
      </motion.div>

      {/* Scroll Indicator */}
      {/* <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">
            <div className="mt-2 h-2 w-2 rounded-full bg-white/70" />
          </div>
        </div>
      </div> */}
    </section>
  );
}
