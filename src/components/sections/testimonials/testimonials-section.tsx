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
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                <Card className="group relative overflow-hidden rounded-[28px] border border-[#d4b06a]/15 bg-[#3a173f]/85 p-8 transition-all duration-500 hover:border-[#d4b06a]/30 hover:shadow-[0_0_40px_rgba(212,176,106,0.10)]">
                  {/* Glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute top-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-3xl" />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-60" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={star}
                            whileHover={{
                              scale: 1.1,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                          >
                            <Star className="h-4 w-4 fill-[#d4b06a] text-[#d4b06a]" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1] as const,
                        }}
                      >
                        <Quote className="h-10 w-10 text-[#d4b06a]/25" strokeWidth={2.5} />
                      </motion.div>
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
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
