"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-28">
      {/* background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* center glow */}
      <div className="bg-primary/10 absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="border-primary/20 text-primary mb-8 inline-flex rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-xl">
            CONTACT
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl leading-none font-semibold tracking-tight md:text-8xl">
            Let&apos;s discuss
            <br />
            <span className="text-primary">your project</span>
          </h1>

          <p className="text-muted mx-auto mt-10 max-w-3xl text-lg leading-9 md:text-xl">
            Whether you&apos;re planning a new platform, improving an existing system, or exploring
            automation opportunities, we&apos;re here to help evaluate the next step clearly and
            practically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
