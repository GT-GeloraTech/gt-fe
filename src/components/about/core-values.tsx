"use client";

import { values } from "./data";
import { motion } from "framer-motion";

export function CoreValues() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-primary mb-4 inline-flex rounded-full border border-white/10 px-5 py-2 text-sm">
            Our Principles
          </span>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Core Values That Shape
            <span className="text-primary"> Everything We Build</span>
          </h2>

          <p className="text-muted mx-auto mt-5 max-w-2xl">
            Every product decision, interaction, and experience is driven by values that keep us
            focused on quality and impact.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group hover:border-primary/30 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white/[0.05]"
              >
                {/* big number */}
                <span className="group-hover:text-primary/10 absolute top-6 right-6 text-6xl font-bold text-white/[0.03] transition">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="bg-primary/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>

                  <p className="text-muted leading-relaxed">{item.text}</p>
                </div>

                <div className="bg-primary absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
