"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { process } from "@/constants/careers";
import { SectionHeading } from "./section-heading";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export function HiringProcess() {
  return (
    <section className="relative overflow-hidden px-6 py-35">
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeading
            badge="HOW IT WORKS"
            title="Our Hiring Process"
            description="Transparent, practical, and built to identify exceptional talent."
          />
        </motion.div>

        {/* Steps */}
        <div className="mt-28 space-y-32">
          {process.map((item, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.div
                key={i}
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <motion.div variants={reverse ? slideRight : slideLeft}>
                  <div className="mb-8 flex items-center gap-5">
                    <span className="text-primary text-[68px] leading-none font-light tracking-tight">
                      {item.number}
                    </span>

                    <span className="glass-card text-primary rounded-full px-5 py-2 text-sm font-medium">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-foreground max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                    {item.title}
                  </h3>

                  <p className="text-muted mt-6 max-w-2xl text-lg leading-9">{item.desc}</p>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={reverse ? slideLeft : slideRight}
                  whileHover={{ y: -6, transition: { duration: 0.4, ease } }}
                  className="group relative"
                >
                  <div className="border-primary/20 absolute inset-0 rounded-[34px] border" />

                  <div className="glass-card premium-shadow overflow-hidden rounded-[34px]">
                    <div className="relative h-[420px] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
