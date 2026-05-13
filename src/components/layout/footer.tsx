"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Globe, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

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
                    scale: 1.03,
                    y: -1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="relative h-22 w-43 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Image
                      src="/logo.png"
                      alt="Gelora Tech"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              <p className="mt-6 max-w-sm text-[15px] leading-7 text-zinc-400">
                Empowering businesses with innovative technology solutions for the digital age.
              </p>

              {/* Social */}
              <div className="mt-8 flex items-center gap-4">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/geloratech/",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/GeloraTech",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/company/yourcompany",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/yourusername",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -4,
                        scale: 1.06,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4b06a]/15 bg-[#3a173f]/60 text-[#d4b06a] backdrop-blur-sm transition-all duration-500 hover:border-[#d4b06a]/40 hover:bg-[#d4b06a]/10 hover:shadow-[0_0_30px_rgba(212,176,106,0.18)]"
                    >
                      <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                    </motion.a>
                  );
                })}
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
              {[
                {
                  label: "Privacy Policy",
                  href: "/privacy",
                },
                {
                  label: "Terms of Service",
                  href: "/terms",
                },
                {
                  label: "Cookie Policy",
                  href: "/cookie",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-[14px] text-zinc-500 transition-colors duration-300 hover:text-[#d4b06a]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
