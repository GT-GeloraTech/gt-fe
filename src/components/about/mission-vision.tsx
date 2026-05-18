"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export function MissionVision() {
  const items = [
    {
      title: "Our Mission",
      description:
        "To make high-quality software engineering accessible to growing businesses without unnecessary complexity, inflated processes, or technical confusion.",
      icon: Target,
      number: "01",
    },
    {
      title: "Our Vision",
      description:
        "A future where businesses trust the technology running their operations and never feel trapped by the systems they invested in.",
      icon: Eye,
      number: "02",
    },
  ];

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="text-primary mb-4 rounded-full border border-white/10 px-4 py-2 text-sm">
            Who We Are
          </span>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Building products with purpose and long-term thinking
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group hover:border-primary/40 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1"
              >
                {/* top line */}
                <div className="bg-primary absolute top-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full" />

                <div className="mb-8 flex items-start justify-between">
                  <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10">
                    <Icon className="text-primary" size={28} />
                  </div>

                  <span className="text-5xl font-bold text-white/5 transition group-hover:text-white/10">
                    {item.number}
                  </span>
                </div>

                <h3 className="mb-4 text-3xl font-semibold">{item.title}</h3>

                <p className="text-muted leading-8">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
