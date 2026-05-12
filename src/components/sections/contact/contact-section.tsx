"use client";

import { motion } from "framer-motion";

import { Mail, Phone, MapPin, Send } from "lucide-react";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-28">
      <Container className="max-w-[1400px]">
        {/* Heading */}
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="text-[52px] leading-[1] font-black tracking-[-0.04em] text-white lg:text-[64px]">
              Get In <span className="text-[#d4b06a]">Touch</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-8 text-zinc-400">
              Ready to transform your business with innovative digital solutions? Let’s discuss your
              next project.
            </p>
          </div>
        </Reveal>

        {/* Main Wrapper */}
        <Reveal delay={0.1}>
          <motion.div
            whileHover={{
              y: -2,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="group relative grid gap-16 overflow-hidden rounded-[36px] border border-[#d4b06a]/10 bg-[#3a173f]/55 p-10 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-16"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute top-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-3xl" />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />

            {/* Left */}
            <div className="relative z-10">
              <h3 className="text-[34px] font-bold text-white">Contact Information</h3>

              <p className="mt-6 max-w-lg text-[17px] leading-8 text-zinc-400">
                Reach out through any of the following channels. Our team is ready to help you build
                scalable and future-ready solutions.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "contact@geloratech.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+1 (555) 123-4567",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Silicon Valley, CA 94025",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} delay={0.15 + index * 0.08}>
                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1] as const,
                        }}
                        className="flex items-start gap-5"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1] as const,
                          }}
                          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4b06a]/15 bg-[#d4b06a]/5 text-[#d4b06a]"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>

                        <div>
                          <h4 className="text-[18px] font-semibold text-white">{item.title}</h4>

                          <p className="mt-1 text-[16px] text-zinc-400">{item.value}</p>
                        </div>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Right Form */}
            <div className="relative z-10 space-y-6">
              {[
                {
                  label: "Full Name",
                  placeholder: "John Doe",
                  type: "text",
                },
                {
                  label: "Email Address",
                  placeholder: "john@company.com",
                  type: "email",
                },
                {
                  label: "Company",
                  placeholder: "Your Company Inc.",
                  type: "text",
                },
              ].map((field, index) => (
                <Reveal key={field.label} delay={0.2 + index * 0.08}>
                  <div>
                    <label className="mb-3 block text-[15px] font-medium text-zinc-300">
                      {field.label}
                    </label>

                    <motion.input
                      whileFocus={{
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-14 w-full rounded-2xl border border-[#d4b06a]/12 bg-[#4a2553]/40 px-5 text-[16px] text-white transition-all duration-300 outline-none placeholder:text-zinc-500 focus:border-[#d4b06a]/35 focus:bg-[#4a2553]/60"
                    />
                  </div>
                </Reveal>
              ))}

              {/* Message */}
              <Reveal delay={0.45}>
                <div>
                  <label className="mb-3 block text-[15px] font-medium text-zinc-300">
                    Message
                  </label>

                  <motion.textarea
                    whileFocus={{
                      scale: 1.01,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-[#d4b06a]/12 bg-[#4a2553]/40 px-5 py-4 text-[16px] text-white transition-all duration-300 outline-none placeholder:text-zinc-500 focus:border-[#d4b06a]/35 focus:bg-[#4a2553]/60"
                  />
                </div>
              </Reveal>

              {/* Button */}
              <Reveal delay={0.55}>
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                >
                  <Button className="mt-2 h-14 w-full rounded-2xl bg-[#d4b06a] text-[17px] font-semibold text-black transition-all duration-300 hover:bg-[#ddbc79] hover:shadow-[0_10px_30px_rgba(212,176,106,0.25)]">
                    <span className="flex items-center gap-2">
                      Send Message
                      <motion.div
                        whileHover={{
                          x: 2,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </Reveal>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
