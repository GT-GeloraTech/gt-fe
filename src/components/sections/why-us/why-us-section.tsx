"use client";

import { whyUs } from "@/constants/why-us";

import { Container } from "@/components/common/container";

export function WhyUsSection() {
  return (
    <section className="py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[900px] text-center">
          <h2 className="text-[56px] leading-none font-black tracking-[-0.04em] text-white">
            Why Choose <span className="text-[#d4b06a]">Gelora Tech</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-8 text-zinc-400">
            We combine technical excellence with business understanding
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="group rounded-[28px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#d4b06a]/30 hover:shadow-[0_0_30px_rgba(212,176,106,0.08)]"
            >
              {/* Icon Box */}
              <div className="mb-7 flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-[#d4b06a]/20 bg-[#d4b06a]/10 text-[#d4b06a] transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4b06a]/40 group-hover:bg-[#d4b06a]/15">
                <item.icon size={28} strokeWidth={2.2} />
              </div>

              {/* Title */}
              <h3 className="text-[22px] leading-tight font-bold text-white">{item.title}</h3>

              {/* Description */}
              <p className="mt-5 max-w-[320px] text-[16px] leading-8 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
