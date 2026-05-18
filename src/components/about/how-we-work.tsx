"use client";

import { motion } from "framer-motion";
import { process } from "./data";

export function HowWeWork() {
  return (
    <section className="overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <span className="border-primary/20 bg-primary/10 text-primary rounded-full border px-4 py-2 text-sm">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold sm:text-6xl">How We Work</h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Structured execution with flexibility where it matters.
          </p>
        </div>

        <div className="space-y-28">
          {process.map((step, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* giant number side */}
                <div className="relative flex items-center justify-center">
                  <span className="from-primary/30 to-secondary/20 bg-gradient-to-b bg-clip-text text-[180px] leading-none font-bold text-transparent sm:text-[240px]">
                    0{i + 1}
                  </span>

                  <div className="border-primary/10 absolute h-40 w-40 rounded-full border" />
                  <div className="border-primary/5 absolute h-60 w-60 rounded-full border" />
                </div>

                {/* content card */}
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="group hover:border-primary/30 relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 transition-all duration-500"
                >
                  {/* corner accent */}
                  <div className="from-primary/10 to-secondary/10 absolute top-0 right-0 h-32 w-32 rounded-bl-[120px] bg-gradient-to-bl transition-all duration-500 group-hover:scale-125" />

                  {/* phase label */}
                  <span className="bg-primary/10 text-primary mb-4 inline-flex rounded-full px-3 py-1 text-xs tracking-[0.2em] uppercase">
                    Phase {i + 1}
                  </span>

                  <h3 className="mb-5 text-3xl font-semibold">{step.title}</h3>

                  <p className="leading-8 text-white/60">{step.text}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
