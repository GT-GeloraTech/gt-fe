"use client";

import { Container } from "@/components/common/container";

const stats = [
  {
    value: "500+",
    label: "Projects Delivered",
  },
  {
    value: "150+",
    label: "Enterprise Clients",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        {/* Heading */}
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

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-[1250px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 px-6 py-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-[#d4b06a]/30 hover:shadow-[0_0_30px_rgba(212,176,106,0.08)]"
            >
              <h3 className="text-[44px] leading-none font-black tracking-[-0.04em] text-[#d4b06a]">
                {stat.value}
              </h3>

              <p className="mt-3 text-[16px] text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="mx-auto mt-16 grid max-w-[1250px] gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-[24px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 p-8 backdrop-blur-xl">
            <div className="mb-8 flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#d4b06a] text-black">
              ⦿
            </div>

            <h3 className="text-[25px] font-black text-white">Our Mission</h3>

            <p className="mt-5 text-[16px] leading-8 text-zinc-300">
              To empower businesses with cutting-edge technology solutions that drive innovation,
              efficiency, and sustainable growth in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-[24px] border border-[#d4b06a]/12 bg-[#2a0d35]/60 p-8 backdrop-blur-xl">
            <div className="mb-8 flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#d4b06a] text-black">
              ◉
            </div>

            <h3 className="text-[25px] font-black text-white">Our Vision</h3>

            <p className="mt-5 text-[16px] leading-8 text-zinc-300">
              To be the most trusted technology partner for enterprises worldwide, recognized for
              excellence, innovation, and delivering transformative digital solutions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
