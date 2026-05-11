"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";

const tags = ["AI-Powered", "Cloud-Native", "Secure", "Scalable"];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
      {/* Glow */}
      <div className="hero-glow" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[1100px] text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-6 py-3 text-[15px] font-medium text-[#d4b06a] backdrop-blur-xl">
              ✨ Next-Generation IT Solutions
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-[950px] text-center text-[72px] leading-[0.95] font-black tracking-[-0.04em] text-white">
            Innovative IT Solutions
            <span className="mt-2 block text-[#d4b06a]">for Modern Businesses</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-10 max-w-[950px] text-center text-[20px] leading-[42px] text-zinc-300">
            Empowering enterprises with cutting-edge software development, cloud infrastructure, AI
            automation, cybersecurity, and comprehensive digital transformation services.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex items-center justify-center gap-5">
            <Button className="group h-[58px] min-w-[240px] rounded-[20px] bg-[#d4b06a] px-8 text-[17px] font-semibold text-black shadow-[0_0_30px_rgba(212,176,106,0.12)] transition-all duration-300 hover:-translate-y-1">
              <span className="flex items-center gap-3">
                Get Started
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Button>

            <Button className="h-[58px] min-w-[240px] rounded-[20px] border border-[#d4b06a] bg-transparent px-8 text-[17px] font-semibold text-[#d4b06a] transition-all duration-300 hover:bg-[#d4b06a]/10">
              Book Consultation
            </Button>
          </div>

          {/* Pills */}
          <div className="mt-20 flex items-center justify-center gap-6">
            {tags.map((tag) => (
              <div
                key={tag}
                className="min-w-[180px] rounded-[22px] border border-[#d4b06a]/15 bg-white/[0.02] px-8 py-5 text-center text-[18px] text-[#d4b06a] backdrop-blur-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
