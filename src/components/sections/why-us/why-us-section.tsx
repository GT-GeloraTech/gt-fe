"use client";

import { motion } from "framer-motion";

import { whyUs } from "@/constants/why-us";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function WhyUsSection() {
  return (
    <section id="about" className="relative overflow-visible bg-[#35143d] py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="mx-auto mb-16 max-w-[900px] text-center">
            <h2 className="text-[56px] leading-none font-black tracking-[-0.04em] text-white">
              Why Choose <span className="text-[#d4b06a]">Gelora Tech</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-8 text-zinc-400">
              We combine technical excellence with business understanding
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="group relative overflow-visible rounded-[28px]"
              >
                {/* Glow Behind Card */}
                <div className="pointer-events-none absolute -inset-3 rounded-[32px] bg-[#d4b06a]/0 opacity-0 blur-3xl transition-all duration-500 group-hover:bg-[#d4b06a]/20 group-hover:opacity-100" />

                {/* Actual Card */}
                <div className="relative z-10 rounded-[28px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-[#d4b06a]/50 group-hover:shadow-[0_0_50px_rgba(212,176,106,0.15)]">
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Box */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      className="mb-7 flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-[#d4b06a]/20 bg-[#d4b06a]/10 text-[#d4b06a] transition-all duration-500 group-hover:border-[#d4b06a]/40 group-hover:bg-[#d4b06a]/15"
                    >
                      <item.icon size={28} strokeWidth={2.2} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-[22px] leading-tight font-bold text-white">{item.title}</h3>

                    {/* Description */}
                    <p className="mt-5 max-w-[320px] text-[16px] leading-8 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
