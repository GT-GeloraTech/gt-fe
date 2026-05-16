"use client";

import { motion, useInView, animate } from "framer-motion";

import { Target, Eye } from "lucide-react";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 150,
    suffix: "+",
    label: "Enterprise Clients",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#2a0d35] py-24">
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,176,106,0.08),transparent_45%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="mt-20 text-[56px] leading-none font-black tracking-[-0.04em] text-white">
              About <span className="text-[#d4b06a]">Gelora Tech</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-9 text-zinc-300">
              We are a premium technology partner delivering innovative solutions that drive digital
              transformation and business growth. Our team of expert engineers and consultants work
              with enterprises to build secure, scalable, and future-ready systems.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-[1250px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 px-6 py-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-[#d4b06a]/25 hover:shadow-[0_0_35px_rgba(212,176,106,0.08)]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute top-0 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-[44px] leading-none font-black tracking-[-0.04em] text-[#d4b06a]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h3>

                  <p className="mt-3 text-[16px] text-zinc-400">{stat.label}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="mx-auto mt-16 grid max-w-[1250px] gap-8 lg:grid-cols-2">
          {/* Mission */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group relative overflow-visible rounded-[24px]"
            >
              {/* Glow Behind Card */}
              <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-[#d4b06a]/0 opacity-0 blur-3xl transition-all duration-500 group-hover:bg-[#d4b06a]/20 group-hover:opacity-100" />

              {/* Actual Card */}
              <div className="relative z-10 rounded-[24px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-[#d4b06a]/50 group-hover:shadow-[0_0_50px_rgba(212,176,106,0.15)]">
                <div className="relative z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: 6,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="mb-8 flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-[#d4b06a] text-black"
                  >
                    <Target size={26} strokeWidth={2.2} />
                  </motion.div>

                  <h3 className="text-[25px] font-black text-white">Our Mission</h3>

                  <p className="mt-5 text-[16px] leading-8 text-zinc-300">
                    To empower businesses with cutting-edge technology solutions that drive
                    innovation, efficiency, and sustainable growth in an ever-evolving digital
                    landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group relative overflow-visible rounded-[24px]"
            >
              {/* Glow Behind Card */}
              <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-[#d4b06a]/0 opacity-0 blur-3xl transition-all duration-500 group-hover:bg-[#d4b06a]/20 group-hover:opacity-100" />

              {/* Actual Card */}
              <div className="relative z-10 rounded-[24px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-[#d4b06a]/50 group-hover:shadow-[0_0_50px_rgba(212,176,106,0.15)]">
                <div className="relative z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: -6,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="mb-8 flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-[#d4b06a] text-black"
                  >
                    <Eye size={26} strokeWidth={2.2} />
                  </motion.div>

                  <h3 className="text-[25px] font-black text-white">Our Vision</h3>

                  <p className="mt-5 text-[16px] leading-8 text-zinc-300">
                    To be the most trusted technology partner for enterprises worldwide, recognized
                    for excellence, innovation, and delivering transformative digital solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
