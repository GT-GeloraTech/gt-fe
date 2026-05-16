"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="border-primary/20 bg-card text-primary mb-6 inline-flex rounded-full border px-5 py-2 text-sm">
            About Gelora Tech
          </span>

          <h1 className="mx-auto max-w-5xl text-5xl leading-tight font-bold md:text-7xl">
            Building software that businesses can actually depend on
          </h1>

          <p className="text-muted mx-auto mt-8 max-w-3xl text-lg leading-8">
            Gelora Tech develops web platforms, mobile applications, AI automation systems, and
            cloud-based solutions for companies that need technology built for long-term growth —
            not short-term demos.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="premium-shadow bg-primary rounded-xl px-8 py-4 font-medium text-black"
            >
              Talk With Us
            </Link>

            <Link href="/projects" className="glass-card rounded-xl px-8 py-4">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
