"use client";

import { useRef, useState } from "react";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { services } from "@/constants/services";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { Container } from "@/components/common/container";

export function ServicesSection() {
  const preview = services.slice(0, 3);

  const gridRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll progress while the cards grid travels through the viewport.
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.85", "end 0.45"],
  });

  // -1 = none lit yet. Lights up left -> right as you scroll.
  const [activeIndex, setActiveIndex] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion) return;

    // Evenly split the active scroll range into one distinct band per card,
    // so exactly one card is lit at a time (and it reverses on scroll up).
    const START = 0.15;
    const END = 0.92;
    const n = preview.length;

    let next = -1;
    if (progress >= START) {
      const band = (END - START) / n;
      next = Math.min(n - 1, Math.floor((progress - START) / band));
    }

    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#2a0f2f] py-20 sm:py-24 lg:py-28"
    >
      <Container className="relative z-10">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-[720px] text-center sm:mb-16">
            <h2 className="text-[32px] leading-[1.1] font-black tracking-[-0.03em] text-white sm:text-[44px] lg:text-[56px] lg:leading-none lg:tracking-[-0.04em]">
              Our <span className="text-[#d4b06a]">Services</span>
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-zinc-400 sm:mt-5 sm:text-[18px] sm:leading-8">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {preview.map((service, index) => {
            const Icon = service.icon;
            // one-by-one: only the card at the current scroll position is lit
            const isActive = index === activeIndex;

            return (
              <Reveal key={service.title} delay={index * 0.1} direction={index % 2 ? "left" : "up"}>
                <TiltCard className="h-full">
                  <Link href={service.link} className="block h-full">
                    <Card
                      data-active={isActive}
                      className={`group relative h-full min-h-[230px] cursor-pointer rounded-[24px] border bg-[#341042]/60 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#d4b06a]/70 hover:shadow-[0_0_60px_rgba(212,176,106,0.3)] sm:rounded-[26px] sm:p-8 ${
                        isActive
                          ? "-translate-y-1 border-[#d4b06a]/70 shadow-[0_0_60px_rgba(212,176,106,0.3)]"
                          : "border-[#d4b06a]/20"
                      }`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 rounded-[24px] border border-[#d4b06a]/40 shadow-[0_0_80px_rgba(212,176,106,0.35)] transition-opacity duration-200 group-hover:opacity-100 sm:rounded-[26px] ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <div className="relative z-10 [transform:translateZ(40px)]">
                        <motion.div
                          animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-[18px] bg-[#d4b06a] text-black sm:h-[64px] sm:w-[64px] sm:rounded-[20px]"
                        >
                          <Icon size={28} />
                        </motion.div>

                        <h3 className="mb-4 text-[20px] font-bold text-white sm:text-[22px]">
                          {service.title}
                        </h3>
                        <p className="text-[15px] leading-7 text-zinc-400 sm:text-[16px] sm:leading-8">
                          {service.description}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center sm:mt-14">
            <Link
              href="/service"
              className="group inline-flex items-center gap-3 rounded-full border border-[#d4b06a]/30 bg-[#d4b06a]/5 px-7 py-4 text-[15px] font-semibold text-[#d4b06a] transition-all duration-300 hover:border-[#d4b06a]/60 hover:bg-[#d4b06a]/10 sm:text-[16px]"
            >
              Explore all services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
