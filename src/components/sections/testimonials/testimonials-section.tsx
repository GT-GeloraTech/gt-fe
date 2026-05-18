"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { testimonials } from "@/constants/testimonials";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-[300px] flex-shrink-0 sm:w-[380px] lg:w-[420px]"
    >
      <Card className="group relative flex h-[280px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#d4b06a]/50 hover:bg-white/[0.06] hover:shadow-[0_25px_80px_rgba(212,176,106,0.18)] sm:h-[320px] sm:rounded-[28px] sm:p-8">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#d4b06a]/15 blur-3xl" />
        </div>

        <Quote className="absolute top-6 right-6 h-9 w-9 text-[#d4b06a]/20 transition-colors duration-300 group-hover:text-[#d4b06a]/40 sm:h-10 sm:w-10" />

        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-[#d4b06a] text-[#d4b06a]" />
          ))}
        </div>

        <p className="mt-4 line-clamp-4 text-[15px] leading-7 text-zinc-300 sm:mt-6 sm:text-[16px] sm:leading-8">
          “{testimonial.content}”
        </p>

        <div className="my-4 h-px bg-white/10 sm:my-6" />

        <div>
          <h4 className="text-[16px] font-semibold text-white sm:text-lg">{testimonial.name}</h4>
          <p className="mt-1 text-[13px] text-[#d4b06a] sm:text-sm">{testimonial.role}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const mid = Math.ceil(testimonials.length / 2);
  const rowOne = testimonials.slice(0, mid);
  const rowTwo = testimonials.slice(mid);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#2a0d35] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="mb-14 text-center sm:mb-20">
            <h2 className="text-[32px] leading-[1.1] font-black tracking-[-0.03em] text-white sm:text-[44px] lg:text-[58px] lg:leading-[0.95] lg:tracking-[-0.04em]">
              Client <span className="text-[#d4b06a]">Testimonials</span>
            </h2>
            <p className="mt-4 text-[15px] text-zinc-400 sm:mt-5 sm:text-[20px]">
              Trusted by industry leaders worldwide
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="marquee-pause relative space-y-5 sm:space-y-6">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-[#2a0d35] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-[#2a0d35] to-transparent sm:w-32" />

        {/* Row 1 — scroll left */}
        <div className="overflow-hidden">
          <div
            className="animate-marquee flex w-max gap-5 sm:gap-6"
            style={{ ["--marquee-duration" as string]: "45s" }}
          >
            {[...rowOne, ...rowOne].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="overflow-hidden">
          <div
            className="animate-marquee-reverse flex w-max gap-5 sm:gap-6"
            style={{ ["--marquee-duration" as string]: "55s" }}
          >
            {[...rowTwo, ...rowTwo].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
