"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

import { navigation } from "@/constants/navigation";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "../common/container";
import { services } from "@/app/service/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d4b06a]/10 bg-[#2a0f2f] py-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4b06a]/5 blur-3xl" />

      <Container className="relative z-10 max-w-[1300px]">
        {/* Top Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  <div className="flex items-center">
                    <Image
                      src="/logo_1.png"
                      alt="Gelora Tech"
                      width={175}
                      height={175}
                      priority
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>

              <p className="mt-3 max-w-sm text-[14px] leading-6 text-zinc-400">
                Empowering businesses with innovative technology solutions for the digital age.
              </p>

              {/* Social */}
              <div className="mt-5 flex items-center gap-3">
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
                  // {
                  //   icon: Github,
                  //   href: "https://github.com/yourusername",
                  // },
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
                      className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-[#d4b06a]/15 bg-[#3a173f]/60 text-[#d4b06a] backdrop-blur-sm transition-all duration-500 hover:border-[#d4b06a]/40 hover:bg-[#d4b06a]/10 hover:shadow-[0_0_30px_rgba(212,176,106,0.18)]"
                    >
                      <Icon className="h-[16px] w-[16px] transition-transform duration-300 group-hover:scale-110" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.1}>
            <div>
              <h4 className="text-[17px] font-bold text-white">Quick Links</h4>

              <div className="mt-5 flex flex-col gap-3">
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
              <h4 className="text-[17px] font-bold text-white">Services</h4>

              <div className="mt-5 flex flex-col gap-3">
                {Object.values(services).map((service, index) => (
                  <motion.div
                    key={service.slug}
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
                      href={`/service/${service.slug}`}
                      className="block text-[15px] text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-[#d4b06a]"
                    >
                      {service.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.3}>
            <div>
              <h4 className="text-[18px] font-bold text-white">Contact Us</h4>

              <div className="mt-5 space-y-4">
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

                {/* <motion.p
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="pt-4 text-[15px] font-medium text-[#d4b06a]"
                >
                  Available 24/7
                </motion.p> */}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#d4b06a]/10 pt-5 lg:flex-row">
            <p className="text-[14px] text-zinc-500">© 2026 Gelora Tech. All rights reserved.</p>

            <div className="flex items-center gap-5">
              {[
                {
                  label: "Privacy Policy",
                  href: "/privacy",
                },
                {
                  label: "Terms of Service",
                  href: "/terms",
                },
                // {
                //   label: "Cookie Policy",
                //   href: "/cookie",
                // },
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
