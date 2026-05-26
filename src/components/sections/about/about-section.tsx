"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Workflow, TrendingUp, LifeBuoy, Code2 } from "lucide-react";

import { projects } from "../../../app/projects/data";

import { Reveal } from "@/components/common/reveal/reveal";
import { TiltCard } from "@/components/common/tilt-card";
import { Container } from "@/components/common/container";

const pillars = [
  {
    icon: Workflow,
    title: "Real workflows, not demos",
    description:
      "We learn how your business actually operates before writing a single line of code.",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    description: "Architecture and decisions made for long-term growth, not short-term shortcuts.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    description: "We stay involved well beyond delivery — maintenance, fixes, and improvements.",
  },
  {
    icon: Code2,
    title: "Modern, proven stack",
    description: "Next.js, TypeScript, Node.js and PostgreSQL — reliable tools, done right.",
  },
];

const selectedWork = projects.slice(0, 4);

export function AboutSection() {
  const [activeImages, setActiveImages] = useState<number[]>(selectedWork.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImages((prev) =>
        prev.map((current, projectIndex) => {
          const gallery = selectedWork[projectIndex]?.gallery ?? [];

          return gallery.length > 0 ? (current + 1) % gallery.length : 0;
        }),
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="about" className="relative overflow-hidden bg-[#2a0d35] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,176,106,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:72px_72px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — narrative + approach */}
          <div>
            <Reveal>
              <p className="text-[13px] font-medium tracking-[0.2em] text-[#d4b06a] uppercase sm:text-[14px]">
                About Gelora Tech
              </p>
              <h2 className="mt-4 text-[30px] leading-[1.1] font-black tracking-[-0.03em] text-white sm:text-[40px] lg:text-[48px] lg:tracking-[-0.04em]">
                Software businesses can <span className="text-[#d4b06a]">depend on</span>
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-8 text-zinc-300 sm:text-[17px]">
                We&apos;re a focused engineering studio. Instead of chasing volume, we partner
                closely with a small number of teams and build software around how they really work
                — carefully, transparently, and supported long after launch.
              </p>
            </Reveal>

            {/* Approach pillars */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={index * 0.08}>
                    <div className="group h-full rounded-[20px] border border-[#d4b06a]/12 bg-white/[0.02] p-5 transition-all duration-500 hover:border-[#d4b06a]/35 hover:bg-white/[0.04] sm:p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#d4b06a]/20 bg-[#d4b06a]/10 text-[#d4b06a] transition-colors duration-500 group-hover:bg-[#d4b06a] group-hover:text-black">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <h3 className="text-[16px] font-bold text-white sm:text-[17px]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-6 text-zinc-400 sm:text-[15px]">
                        {pillar.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#d4b06a]/30 px-7 py-4 transition-all duration-500 hover:border-[#d4b06a]/60 sm:text-[16px]"
                >
                  <div className="absolute inset-0 origin-left scale-x-0 bg-[#d4b06a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <span className="relative z-10 flex items-center gap-3 text-[15px] font-semibold text-[#d4b06a] transition-colors duration-500 group-hover:text-black sm:text-[16px]">
                    Learn more about us
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </Link>

                <span className="text-[14px] text-zinc-500">Founded 2026 · Udaipur, India</span>
              </div>
            </Reveal>
          </div>

          {/* Right — selected work */}
          <div>
            <Reveal direction="left">
              <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-zinc-500 uppercase sm:text-[14px]">
                Selected work
              </p>
            </Reveal>

            <div className="grid auto-rows-fr gap-6 sm:grid-cols-2">
              {selectedWork.map((project, index) => {
                const currentImageIndex = activeImages[index] ?? 0;

                const currentImage = project.gallery?.[currentImageIndex] ?? project.image;

                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <TiltCard intensity={6}>
                      <div>
                        <div className="group relative flex h-[460px] flex-col overflow-hidden rounded-[30px] border border-[#d4b06a]/10 bg-[#34153b] transition-all duration-700 hover:border-[#d4b06a]/40 hover:shadow-[0_0_60px_rgba(212,176,106,.15)]">
                          <div className="relative h-[260px] shrink-0 overflow-hidden">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={currentImage}
                                initial={{
                                  opacity: 0,
                                  scale: 1.05,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                exit={{
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.8,
                                }}
                                className="absolute inset-0"
                              >
                                <Image
                                  src={currentImage}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </motion.div>
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#1d0c22] via-transparent to-transparent" />

                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                              {project.gallery.map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-1.5 rounded-full transition-all ${
                                    currentImageIndex === i ? "w-8 bg-white" : "w-2 bg-white/30"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="p-6">
                            <span className="inline-flex rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-3 py-1 text-xs text-[#d4b06a]">
                              {project.category}
                            </span>

                            <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>

                            <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>

            <Reveal delay={0.4}>
              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#d4b06a] hover:text-[#e4c789]"
              >
                See all projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
