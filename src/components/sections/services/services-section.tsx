"use client";

import { motion } from "framer-motion";

import { services } from "@/constants/services";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#2a0f2f] py-24">
      {/* Content */}
      <Container className="relative z-10">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto mb-16 max-w-[720px] text-center">
            <h2 className="text-[56px] leading-none font-black tracking-[-0.04em] text-white">
              Our <span className="text-[#d4b06a]">Services</span>
            </h2>

            <p className="mt-5 text-[18px] leading-8 text-zinc-400">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="group relative min-h-[250px] rounded-[26px] border border-[#d4b06a]/10 bg-[#341042]/60 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4b06a]/30 hover:shadow-[0_0_40px_rgba(212,176,106,0.10)]">
                    {/* Glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute top-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mb-7 flex h-[64px] w-[64px] items-center justify-center rounded-[20px] bg-[#d4b06a] text-black"
                      >
                        <Icon size={30} />
                      </motion.div>

                      <h3 className="mb-5 text-[22px] font-bold text-white">{service.title}</h3>

                      <p className="max-w-[320px] text-[16px] leading-8 text-zinc-400">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
