"use client";

import { motion } from "framer-motion";

import { Quote, Star } from "lucide-react";

import { testimonials } from "@/constants/testimonials";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function TestimonialsSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#2a0d35] py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="text-[58px] leading-[0.95] font-black tracking-[-0.04em] text-white">
              Client <span className="text-[#d4b06a]">Testimonials</span>
            </h2>

            <p className="mt-5 text-[20px] text-zinc-400">Trusted by industry leaders worldwide</p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="relative overflow-hidden py-6">
          {/* Left Fade */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#2a0d35] to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#2a0d35] to-transparent" />

          <motion.div
            className="flex items-stretch gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-[420px] flex-shrink-0"
              >
                <Card className="group relative flex h-[320px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-[#d4b06a]/50 hover:bg-white/[0.06] hover:shadow-[0_25px_80px_rgba(212,176,106,0.18)]">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#d4b06a]/15 blur-3xl" />
                  </div>
                  {/* Quote */}
                  <motion.div
                    whileHover={{
                      rotate: 12,
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <Quote className="absolute top-6 right-6 h-10 w-10 text-[#d4b06a]/20 transition-colors duration-300 group-hover:text-[#d4b06a]/40" />
                  </motion.div>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-[#d4b06a] text-[#d4b06a]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mt-6 line-clamp-4 text-[16px] leading-8 text-zinc-300">
                    “{testimonial.content}”
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/10" />

                  {/* Author */}
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>

                    <p className="mt-1 text-sm text-[#d4b06a]">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
