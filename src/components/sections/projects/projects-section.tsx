"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/constants/projects";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function ProjectsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.85", "end 0.45"],
  });

  // -1 = none. One card lit at a time, sweeping left -> right with scroll
  // (and reversing on scroll up).
  const [activeIndex, setActiveIndex] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion) return;

    const START = 0.15;
    const END = 0.92;
    const n = projects.length;

    let next = -1;
    if (progress >= START) {
      const band = (END - START) / n;
      next = Math.min(n - 1, Math.floor((progress - START) / band));
    }

    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  return (
    <section id="projects" className="py-30 pb-40">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-[58px] leading-[0.95] font-black tracking-[-0.04em] text-white">
              Featured <span className="text-[#d4b06a]">Projects</span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-[20px] leading-8 text-zinc-400">
              Showcasing our expertise in delivering enterprise-grade solutions
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div ref={gridRef} className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <Reveal key={project.title} delay={index * 0.08}>
                <motion.div
                  animate={isActive && !reduceMotion ? { y: -6 } : { y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    className="block h-full"
                  >
                    <Card
                      className={`group relative cursor-pointer overflow-hidden rounded-[28px] border bg-[#3a173f]/90 p-0 transition-all duration-300 hover:border-[#d4b06a]/35 hover:shadow-[0_0_40px_rgba(212,176,106,0.12)] ${
                        isActive
                          ? "border-[#d4b06a]/35 shadow-[0_0_40px_rgba(212,176,106,0.12)]"
                          : "border-[#d4b06a]/15"
                      }`}
                    >
                      {/* Top Visual */}
                      <div className="relative h-[240px] overflow-hidden border-b border-[#d4b06a]/10 bg-[#2a0f2f]">
                        {/* Image */}
                        <motion.div
                          animate={isActive && !reduceMotion ? { scale: 1.04 } : { scale: 1 }}
                          whileHover={{ scale: 1.04 }}
                          transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover object-center"
                          />
                        </motion.div>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1f0c24]/85 via-[#1f0c24]/20 to-transparent" />

                        {/* Grid Overlay */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(212,176,106,0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212,176,106,0.08) 1px, transparent 1px)
                            `,
                            backgroundSize: "22px 22px",
                          }}
                        />

                        {/* Hover / active Button */}
                        <div
                          className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4b06a] text-black shadow-2xl">
                            <ArrowUpRight className="h-6 w-6" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div className="relative p-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-60" />

                        <div className="relative z-10">
                          <div className="mb-5 inline-flex rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-4 py-2 text-[14px] font-medium text-[#d4b06a]">
                            {project.category}
                          </div>

                          <h3 className="text-[22px] leading-tight font-bold text-white">
                            {project.title}
                          </h3>

                          <p className="mt-4 text-[18px] leading-8 text-zinc-400">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
