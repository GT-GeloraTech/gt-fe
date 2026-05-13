"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/constants/projects";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function ProjectsSection() {
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
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                <Card className="group relative overflow-hidden rounded-[28px] border border-[#d4b06a]/15 bg-[#3a173f]/90 p-0 transition-all duration-500 hover:border-[#d4b06a]/35 hover:shadow-[0_0_40px_rgba(212,176,106,0.12)]">
                  {/* Top Visual */}
                  {/* Top Visual */}
                  <div className="relative h-[240px] overflow-hidden border-b border-[#d4b06a]/10 bg-[#2a0f2f]">
                    {/* Image */}
                    <motion.div
                      whileHover={{
                        scale: 1.04,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1] as const,
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

                    {/* Hover Button */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4b06a] text-black shadow-2xl">
                        <ArrowUpRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative p-6">
                    {/* Subtle Gradient */}
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
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
