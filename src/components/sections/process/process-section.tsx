"use client";

import { motion } from "framer-motion";
import { process } from "@/constants/process";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#2a0f2f] py-24 lg:py-32">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-[150px]" />

      <Container>
        <Reveal>
          <div className="mx-auto mb-24 max-w-[760px] text-center">
            <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Our Product <span className="text-[#d4b06a]">Journey</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] leading-8 text-zinc-400">
              Every project follows a structured process designed to move from concept to launch
              with clarity and speed.
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-6xl">
          {/* center line */}
          <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d4b06a]/30 to-transparent lg:block" />

          <div className="space-y-12">
            {process.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;

              return (
                <Reveal key={item.step} delay={index * 0.1}>
                  <div className={`relative flex ${left ? "justify-start" : "justify-end"}`}>
                    {/* timeline dot */}
                    <div className="absolute top-10 left-1/2 hidden -translate-x-1/2 lg:block">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4b06a]/30 bg-[#34173b] text-[#d4b06a] shadow-[0_0_40px_rgba(212,176,106,.2)]"
                      >
                        <Icon size={24} />
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="group relative w-full rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:w-[46%]"
                    >
                      {/* huge step number */}
                      <div className="absolute top-4 right-6 text-[80px] font-black text-white/[0.03]">
                        0{item.step}
                      </div>

                      <div className="mb-5 inline-flex rounded-full bg-[#d4b06a]/10 px-4 py-2 text-sm font-medium text-[#d4b06a]">
                        Step {item.step}
                      </div>

                      {/* mobile icon */}
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4b06a]/20 bg-[#d4b06a]/10 text-[#d4b06a] lg:hidden">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                      <p className="mt-4 text-[15px] leading-7 text-zinc-400">{item.description}</p>

                      {/* hover glow */}
                      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                        <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-3xl" />
                      </div>
                    </motion.div>
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
