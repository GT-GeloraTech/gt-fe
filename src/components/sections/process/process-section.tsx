"use client";

import { motion } from "framer-motion";

import { process } from "@/constants/process";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#2a0f2f] py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto mb-14 max-w-[820px] text-center sm:mb-20">
            <h2 className="text-[32px] leading-[1.1] font-black tracking-[-0.03em] text-white sm:text-[44px] lg:text-[56px] lg:leading-none lg:tracking-[-0.04em]">
              How We <span className="text-[#d4b06a]">Work</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-zinc-400 sm:mt-5 sm:text-[18px] sm:leading-8">
              A proven, transparent process that turns ideas into resilient products
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-[1250px]">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-[34px] right-0 left-0 hidden h-px bg-[#d4b06a]/15 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-left bg-gradient-to-r from-[#d4b06a] to-[#d4b06a]/30"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.step} delay={index * 0.12}>
                  <div className="group relative text-center">
                    <motion.div
                      whileHover={{ scale: 1.06, rotate: 4 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-[22px] border border-[#d4b06a]/25 bg-[#2a0f2f] text-[#d4b06a] shadow-[0_0_30px_rgba(212,176,106,0.12)] transition-all duration-500 group-hover:border-[#d4b06a]/60 group-hover:bg-[#d4b06a] group-hover:text-black"
                    >
                      <Icon size={28} strokeWidth={2} />
                      <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#d4b06a] text-[12px] font-black text-black">
                        {item.step}
                      </span>
                    </motion.div>

                    <h3 className="mt-6 text-[20px] font-bold text-white sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[260px] text-[15px] leading-7 text-zinc-400 sm:text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
