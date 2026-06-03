"use client";

import { motion } from "framer-motion";
import { process } from "./data";

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:75px_75px]" />

        <div className="bg-primary/10 absolute top-20 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="border-primary/20 bg-primary/10 text-primary inline-flex rounded-full border px-5 py-2 text-sm font-medium">
            Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Small steps.
            <span className="text-primary"> Big outcomes.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-white/55">
            A lean and transparent process focused on speed, precision, and long-term scalability.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group hover:border-primary/20 relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-2xl transition-all duration-500"
            >
              {/* glow */}
              <div className="from-primary/10 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* top */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="border-primary/20 bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-semibold">
                  0{i + 1}
                </div>

                <span className="text-primary/10 text-6xl font-bold">0{i + 1}</span>
              </div>

              {/* content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/55">{step.text}</p>
              </div>

              {/* bottom line */}
              <div className="bg-primary absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
