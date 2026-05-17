"use client";

import { clients } from "@/constants/clients";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function TrustedBySection() {
  const row = [...clients, ...clients];

  return (
    <section className="border-y border-[#d4b06a]/10 bg-[#26102b]/40 py-12 sm:py-16">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] font-medium tracking-[0.2em] text-zinc-500 uppercase sm:text-[14px]">
            Trusted by teams at
          </p>
        </Reveal>

        <div className="marquee-pause relative mt-8 overflow-hidden sm:mt-10">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-[#2a0f2f] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-[#2a0f2f] to-transparent sm:w-28" />

          <div
            className="animate-marquee flex w-max items-center gap-10 sm:gap-16"
            style={{ ["--marquee-duration" as string]: "35s" }}
          >
            {row.map((name, i) => (
              <span
                key={i}
                className="text-[20px] font-bold whitespace-nowrap text-zinc-500 transition-colors duration-300 select-none hover:text-[#d4b06a] sm:text-[26px]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
