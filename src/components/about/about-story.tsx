"use client";

import { motion } from "framer-motion";

const story = [
  {
    id: "01",
    title: "Software looked impressive",
    text: "Software looked impressive in presentations, but often failed where it mattered most.",
  },
  {
    id: "02",
    title: "Growth revealed problems",
    text: "Businesses invested in products that appeared polished during demos yet became difficult to maintain, expensive to scale, and unreliable as usage increased.",
  },
  {
    id: "03",
    title: "The same pattern repeated",
    text: "Projects were abandoned after launch. Small updates became costly. Teams were left dependent on systems creating more friction than value.",
  },
  {
    id: "04",
    title: "We saw the real issue",
    text: "Companies were rebuilding software they had already paid for because the original foundation had never been designed properly.",
  },
];

export function AboutStory() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="relative mx-auto max-w-7xl">
        {/* hero */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mb-32 text-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-primary mb-6 text-sm font-medium tracking-[0.3em] uppercase"
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
                scale: 0.95,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-5xl leading-[0.92] font-semibold tracking-[-0.06em] md:text-8xl"
          >
            Built from a<span className="text-primary block">simple observation</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            className="text-muted mx-auto mt-8 max-w-2xl text-lg leading-8"
          >
            Great software should continue creating value — not become something businesses
            eventually replace.
          </motion.p>
        </motion.div>

        {/* story rows */}
        <div className="space-y-28">
          {story.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: i % 2 ? 100 : -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "spring",
                duration: 1,
                bounce: 0.2,
              }}
              viewport={{ once: true }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* giant background number */}
              <div className="hidden lg:block">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 0.06,
                  }}
                  className="text-[180px] leading-none font-bold tracking-[-0.1em]"
                >
                  {item.id}
                </motion.div>
              </div>

              {/* content card */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-10"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                />

                <div className="relative z-10">
                  <span className="text-primary text-sm tracking-[0.25em]">{item.id}</span>

                  <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">{item.title}</h3>

                  <p className="text-muted mt-6 text-lg leading-9">{item.text}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ending */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="border-primary/20 bg-primary/5 relative mt-32 overflow-hidden rounded-[50px] border p-14 md:p-16"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="border-primary/20 absolute -top-20 -right-20 h-72 w-72 rounded-full border"
          />

          <h3 className="text-center text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            So we decided to build differently.
          </h3>

          <p className="text-muted mx-auto mt-8 max-w-3xl text-center text-lg leading-9">
            Gelora Tech focuses on creating scalable, maintainable systems built for long-term
            growth — software businesses can continue relying on rather than replacing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
