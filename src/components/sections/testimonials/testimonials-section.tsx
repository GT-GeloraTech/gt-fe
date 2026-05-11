"use client";

import { Quote, Star } from "lucide-react";

import { testimonials } from "@/constants/testimonials";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function TestimonialsSection() {
  return (
    <section className="py-13">
      <Container>
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-[58px] leading-[0.95] font-black tracking-[-0.04em] text-white">
            Client <span className="text-[#d4b06a]">Testimonials</span>
          </h2>

          <p className="mt-5 text-[20px] text-zinc-400">Trusted by industry leaders worldwide</p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <Card className="rounded-[28px] border border-[#d4b06a]/18 bg-[#3a173f]/85 p-8 transition-all duration-500 hover:border-[#d4b06a]/35 hover:shadow-[0_0_35px_rgba(212,176,106,0.10)]">
                {/* Top */}
                <div className="flex items-start justify-between">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-[#d4b06a] text-[#d4b06a]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="h-10 w-10 text-[#d4b06a]/25" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <p className="mt-4 min-h-[70px] text-[17px] leading-[2] text-zinc-300 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-[#d4b06a]/12" />

                {/* Author */}
                <div>
                  <h4 className="text-[18px] font-bold text-white">{testimonial.name}</h4>

                  <p className="mt-2 text-[14px] text-[#d4b06a]">{testimonial.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
