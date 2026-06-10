"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { navigation } from "@/constants/navigation";

import { Reveal } from "@/components/common/reveal/reveal";

// X (formerly Twitter) logo — monochrome glyph that inherits `currentColor`
// so it matches the gold colour + hover of the other footer social icons.
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { Container } from "../common/container";
import { services } from "@/app/service/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d4b06a]/10 bg-[#2a0f2f] py-8 md:py-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4b06a]/5 blur-3xl" />

      <Container className="relative z-10 max-w-[1300px]">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-5">
          {/* Brand */}
          <Reveal>
            <div className="text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
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
                      className="h-auto w-[140px] object-contain sm:w-[160px] md:w-[175px]"
                    />
                  </div>
                </motion.div>
              </div>

              <p className="mt-3 max-w-sm text-[14px] leading-6 text-zinc-400">
                Empowering businesses with innovative technology solutions for the digital age.
              </p>

              {/* Social */}
              <div className="mt-5 flex justify-center gap-3 sm:justify-start">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/geloratech/",
                  },
                  {
                    icon: XIcon,
                    href: "https://x.com/geloratech",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/gelora-tech",
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
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[17px] font-bold text-white">Quick Links</h4>

              <div className="mt-5 flex flex-col items-center gap-3 sm:items-start">
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
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[17px] font-bold text-white">Services</h4>

              <div className="mt-5 flex flex-col items-center gap-3 sm:items-start">
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
          {/* Legal */}
          <Reveal delay={0.25}>
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[17px] font-bold text-white">Legal</h4>
              <div className="mt-5 flex flex-col items-center gap-3 sm:items-start">
                {[
                  {
                    label: "Privacy Policy",
                    href: "/privacy",
                  },
                  {
                    label: "Terms & Conditions",
                    href: "/terms",
                  },
                ].map((item, index) => (
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
                      className="text-[15px] text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-[#d4b06a]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          {/* Contact */}
          <Reveal delay={0.3}>
            <div className="text-center sm:text-left">
              <h4 className="text-[17px] font-semibold text-white">Contact Us</h4>

              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: Mail,
                    content: "hello@geloratech.com",
                    href: "mailto:hello@geloratech.com",
                  },
                  {
                    icon: Phone,
                    content: "+91-8219601611",
                    href: "tel:+918219601611",
                  },
                  {
                    icon: Phone,
                    content: "+91-8233662031",
                    href: "tel:+918233662031",
                  },
                  {
                    icon: MapPin,
                    content: "Udaipur, Rajasthan",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      className="flex items-center justify-center gap-3 sm:justify-start"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d4b06a]/15 bg-[#3a173f]/50 text-[#d4b06a]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 text-left">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block text-[14px] break-words text-zinc-400 transition-colors duration-300 hover:text-[#d4b06a]"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-[14px] text-zinc-400">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-[#d4b06a]/10 pt-5 text-center">
            <p className="text-[14px] text-zinc-500">© 2026 Gelora Tech. All rights reserved.</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
