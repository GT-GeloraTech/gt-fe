"use client";

import { whyUs } from "@/constants/why-us";

import { Reveal } from "@/components/common/reveal/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { Container } from "@/components/common/container";

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative overflow-visible bg-[#35143d] py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-[900px] text-center sm:mb-16">
            <h2 className="text-[32px] leading-[1.1] font-black tracking-[-0.03em] text-white sm:text-[44px] lg:text-[56px] lg:leading-none lg:tracking-[-0.04em]">
              Why Choose <span className="text-[#d4b06a]">Gelora Tech</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-zinc-400 sm:mt-5 sm:text-[18px] sm:leading-8">
              We combine technical excellence with business understanding
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1250px] gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} direction={index % 2 ? "left" : "right"}>
              <TiltCard intensity={6} className="group relative h-full rounded-[28px]">
                <div className="pointer-events-none absolute -inset-3 rounded-[32px] bg-[#d4b06a]/0 opacity-0 blur-3xl transition-all duration-500 group-hover:bg-[#d4b06a]/20 group-hover:opacity-100" />

                <div className="relative z-10 h-full rounded-[24px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 p-7 backdrop-blur-xl transition-all duration-500 group-hover:border-[#d4b06a]/50 group-hover:shadow-[0_0_50px_rgba(212,176,106,0.15)] sm:rounded-[28px] sm:p-8">
                  <div className="relative z-10 [transform:translateZ(35px)]">
                    <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-[#d4b06a]/20 bg-[#d4b06a]/10 text-[#d4b06a] transition-all duration-500 group-hover:border-[#d4b06a]/40 group-hover:bg-[#d4b06a]/15 sm:h-[56px] sm:w-[56px] sm:rounded-[18px]">
                      <item.icon size={26} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-[20px] leading-tight font-bold text-white sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-zinc-400 sm:mt-5 sm:text-[16px] sm:leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
