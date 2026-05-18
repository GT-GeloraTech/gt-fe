"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

// Re-enable alongside the commented CTA buttons below:
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { AuroraBackground } from "@/components/common/aurora-background";

const tags = ["AI-Powered", "Cloud-Native", "Secure", "Scalable"];

const line1 = "Innovative IT Solutions".split(" ");
const line2 = "for Modern Businesses".split(" ");

// calm, controlled easeOutExpo — no bounce / overshoot
const EASE = [0.16, 1, 0.3, 1] as const;

// Per-word entrance delays following the premium timeline.
// line 1 (white) settles first, line 2 (gold) arrives last & slower.
const L1_BASE = 0.4;
const L1_STEP = 0.09;
const L2_BASE = 0.74;
const L2_STEP = 0.1;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  // Reduced motion: appear instantly, no transforms / blur.
  const badge: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: reduceMotion ? 0 : 0.2, duration: 0.6, ease: EASE },
    },
  };

  // word variant — `custom` carries { delay, gold }
  const wordVariant: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -40, filter: "blur(10px)" },
    visible: (c: { delay: number; gold: boolean }) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      // gold focal words get a brief entry glow that then settles
      textShadow:
        c.gold && !reduceMotion
          ? ["0 0 22px rgba(212,176,106,0.65)", "0 0 0px rgba(212,176,106,0)"]
          : "0 0 0px rgba(212,176,106,0)",
      transition: {
        delay: reduceMotion ? 0 : c.delay,
        duration: reduceMotion ? 0.3 : c.gold ? 0.85 : 0.6,
        ease: EASE,
        textShadow: { delay: reduceMotion ? 0 : c.delay, duration: 1 },
      },
    }),
  };

  const fade = (delay: number): Variants => ({
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: reduceMotion ? 0 : delay, duration: 0.7, ease: EASE },
    },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      <AuroraBackground />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[1100px] text-center"
        >
          {/* Badge — appears before the headline */}
          <motion.div variants={badge} className="mb-6 flex justify-center sm:mb-8">
            <div className="inline-flex items-center rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-4 py-2 text-[13px] font-medium text-[#d4b06a] backdrop-blur-xl sm:px-6 sm:py-3 sm:text-[15px]">
              ✨ Next-Generation IT Solutions
            </div>
          </motion.div>

          {/* Headline — assembles word by word; gold line last */}
          <h1 className="mx-auto max-w-[950px] text-[36px] leading-[1.05] font-black tracking-[-0.03em] text-white sm:text-[52px] sm:leading-[1] lg:text-[72px] lg:leading-[0.95] lg:tracking-[-0.04em]">
            <span className="inline-block">
              {line1.map((w, i) => (
                <motion.span
                  key={`l1-${i}`}
                  custom={{ delay: L1_BASE + i * L1_STEP, gold: false }}
                  variants={wordVariant}
                  className="mr-[0.25em] inline-block will-change-transform"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="mt-2 block text-[#d4b06a]">
              {line2.map((w, i) => (
                <motion.span
                  key={`l2-${i}`}
                  custom={{ delay: L2_BASE + i * L2_STEP, gold: true }}
                  variants={wordVariant}
                  className="mr-[0.25em] inline-block will-change-transform"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            variants={fade(1.1)}
            className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.7] text-zinc-300 sm:mt-8 sm:text-[18px] lg:mt-10 lg:text-[20px]"
          >
            Empowering enterprises with cutting-edge software development, cloud infrastructure, AI
            automation, cybersecurity, and comprehensive digital transformation services.
          </motion.p>

          {/* Buttons */}
          {/* <motion.div
            variants={fade(1.2)}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 lg:mt-12"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className="w-full sm:w-auto"
            >
              <Link href="/contact" className="block">
                <Button className="group h-[54px] w-full rounded-[18px] bg-[#d4b06a] px-8 text-[16px] font-semibold text-black shadow-[0_0_30px_rgba(212,176,106,0.12)] sm:h-[58px] sm:min-w-[240px] sm:rounded-[20px] sm:text-[17px]">
                  <span className="flex items-center gap-3">
                    Get Started
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className="w-full sm:w-auto"
            >
              <Link href="/contact" className="block">
                <Button className="h-[54px] w-full rounded-[18px] border border-[#d4b06a] bg-transparent px-8 text-[16px] font-semibold text-[#d4b06a] transition-all duration-300 hover:bg-[#d4b06a]/10 sm:h-[58px] sm:min-w-[240px] sm:rounded-[20px] sm:text-[17px]">
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div> */}

          {/* Pills — rise one by one after the headline settles */}
          <motion.div
            variants={fade(1.3)}
            className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 lg:mt-20"
          >
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : 1.3 + index * 0.08,
                  duration: 0.6,
                  ease: EASE,
                }}
                whileHover={{ y: -3, scale: 1.015 }}
                className="group relative overflow-hidden rounded-[18px] border border-[#d4b06a]/15 bg-white/[0.02] px-5 py-4 text-center text-[15px] text-[#d4b06a] backdrop-blur-sm transition-all duration-500 hover:border-[#d4b06a]/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,176,106,0.08)] sm:min-w-[170px] sm:rounded-[22px] sm:px-8 sm:py-5 sm:text-[18px]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute top-0 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-2xl" />
                </div>
                <div className="relative z-10">{tag}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
