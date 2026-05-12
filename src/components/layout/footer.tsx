"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Globe, Link as LinkIcon, Mail, Phone } from "lucide-react";

import { navigation } from "@/constants/navigation";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "../common/container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d4b06a]/10 bg-[#2a0f2f] py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4b06a]/5 blur-3xl" />

      <Container className="relative z-10 max-w-[1300px]">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d4b06a] text-sm font-black text-black"
                >
                  GT
                </motion.div>

                <h3 className="text-[22px] font-bold text-white">Gelora Tech</h3>
              </div>

              <p className="mt-6 max-w-sm text-[15px] leading-7 text-zinc-400">
                Empowering businesses with innovative technology solutions for the digital age.
              </p>

              {/* Social */}
              <div className="mt-8 flex items-center gap-4">
                {[Globe, LinkIcon, Mail, Phone].map((Icon, index) => (
                  <motion.button
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4b06a]/15 bg-[#3a173f]/60 text-[#d4b06a] transition-all duration-500 hover:border-[#d4b06a]/35 hover:bg-[#d4b06a]/10 hover:shadow-[0_0_20px_rgba(212,176,106,0.12)]"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.1}>
            <div>
              <h4 className="text-[20px] font-bold text-white">Quick Links</h4>

              <div className="mt-8 flex flex-col gap-5">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-[15px] text-zinc-400 transition-colors duration-300 hover:text-[#d4b06a]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Services */}
          <Reveal delay={0.2}>
            <div>
              <h4 className="text-[20px] font-bold text-white">Services</h4>

              <div className="mt-8 flex flex-col gap-5">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "AI Automation",
                  "Cybersecurity",
                  "IT Consulting",
                ].map((service, index) => (
                  <motion.p
                    key={service}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    className="cursor-pointer text-[15px] text-zinc-400 transition-colors duration-300 hover:text-[#d4b06a]"
                  >
                    {service}
                  </motion.p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.3}>
            <div>
              <h4 className="text-[18px] font-bold text-white">Contact Us</h4>

              <div className="mt-8 space-y-6">
                {["contact@geloratech.com", "+1 (555) 123-4567", "Silicon Valley, CA 94025"].map(
                  (item, index) => (
                    <motion.p
                      key={item}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className="text-[15px] text-zinc-400"
                    >
                      {item}
                    </motion.p>
                  ),
                )}

                <motion.p
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="pt-4 text-[15px] font-medium text-[#d4b06a]"
                >
                  Available 24/7
                </motion.p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-[#d4b06a]/10 pt-8 lg:flex-row">
            <p className="text-[14px] text-zinc-500">© 2026 Gelora Tech. All rights reserved.</p>

            <div className="flex items-center gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{
                    y: -1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="text-[14px] text-zinc-500 transition-colors duration-300 hover:text-[#d4b06a]"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
