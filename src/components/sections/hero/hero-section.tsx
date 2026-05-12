"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";

const tags = ["AI-Powered", "Cloud-Native", "Secure", "Scalable"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
      {/* Glow */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hero-glow"
      />

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[1100px] text-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-6 py-3 text-[15px] font-medium text-[#d4b06a] backdrop-blur-xl">
              ✨ Next-Generation IT Solutions
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mx-auto max-w-[950px] text-center text-[72px] leading-[0.95] font-black tracking-[-0.04em] text-white"
          >
            Innovative IT Solutions
            <motion.span
              initial={{
                opacity: 0,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 block text-[#d4b06a]"
            >
              for Modern Businesses
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mx-auto mt-10 max-w-[950px] text-center text-[20px] leading-[42px] text-zinc-300"
          >
            Empowering enterprises with cutting-edge software development, cloud infrastructure, AI
            automation, cybersecurity, and comprehensive digital transformation services.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="mt-12 flex items-center justify-center gap-5">
            <motion.div
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Button className="group h-[58px] min-w-[240px] rounded-[20px] bg-[#d4b06a] px-8 text-[17px] font-semibold text-black shadow-[0_0_30px_rgba(212,176,106,0.12)]">
                <span className="flex items-center gap-3">
                  Get Started
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Button className="h-[58px] min-w-[240px] rounded-[20px] border border-[#d4b06a] bg-transparent px-8 text-[17px] font-semibold text-[#d4b06a] transition-all duration-300 hover:bg-[#d4b06a]/10">
                Book Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Pills */}
          <motion.div variants={item} className="mt-20 flex items-center justify-center gap-6">
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8 + index * 0.08,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.015,
                }}
                className="group relative min-w-[180px] overflow-hidden rounded-[22px] border border-[#d4b06a]/15 bg-white/[0.02] px-8 py-5 text-center text-[18px] text-[#d4b06a] backdrop-blur-sm transition-all duration-500 hover:border-[#d4b06a]/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,176,106,0.08)]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute top-0 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">{tag}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
