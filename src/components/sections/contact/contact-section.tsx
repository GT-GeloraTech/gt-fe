"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="group relative overflow-hidden rounded-[28px] border border-[#d4b06a]/15 bg-[#3a173f]/55 px-6 py-14 text-center backdrop-blur-xl sm:rounded-[36px] sm:px-12 sm:py-20">
            {/* drifting glow */}
            <motion.div
              animate={{ x: [-30, 30, -30], y: [-15, 15, -15] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4b06a]/15 blur-[120px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />

            <div className="relative z-10">
              <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4b06a]/20 bg-[#d4b06a]/10 text-[#d4b06a] sm:h-16 sm:w-16">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <h2 className="mx-auto max-w-[820px] text-[30px] leading-[1.1] font-black tracking-[-0.03em] text-white sm:text-[44px] lg:text-[58px] lg:leading-[1] lg:tracking-[-0.04em]">
                Ready to build something <span className="text-[#d4b06a]">exceptional?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-zinc-400 sm:mt-6 sm:text-[18px]">
                Tell us about your project and let’s discuss how we can transform your business with
                innovative digital solutions.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-11 sm:flex-row sm:gap-5">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full sm:w-auto"
                >
                  <Link href="/contact?focus=form" className="block">
                    <Button className="group relative h-[54px] w-full overflow-hidden rounded-[18px] border border-[#d4b06a]/30 bg-transparent px-8 text-[16px] font-semibold text-[#d4b06a] shadow-[0_0_30px_rgba(212,176,106,0.08)] transition-all duration-500 hover:border-[#d4b06a]/60 sm:h-[58px] sm:min-w-[240px] sm:rounded-[20px] sm:text-[17px]">
                      <div className="absolute inset-0 origin-left scale-x-0 bg-[#d4b06a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                      <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
                        Get In Touch
                        <ArrowRight
                          size={20}
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </span>
                    </Button>
                  </Link>
                </motion.div>

                {/* <a
                  href="mailto:hello@geloratech.com"
                  className="text-[15px] font-medium text-zinc-400 transition-colors duration-300 hover:text-[#d4b06a] sm:text-[16px]"
                >
                  hello@geloratech.com
                </a> */}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
