"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Workflow, TrendingUp, LifeBuoy, Code2 } from "lucide-react";

import { projects } from "@/constants/projects";

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

const selectedWork = projects.slice(0, 2);

export function AboutSection() {
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
                  className="group inline-flex items-center gap-3 rounded-full bg-[#d4b06a] px-7 py-4 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-[#ddbc79] sm:text-[16px]"
                >
                  Learn more about us
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
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

            <div className="space-y-5 sm:space-y-6">
              {selectedWork.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.1} direction="left">
                  <TiltCard intensity={5}>
                    <Link href={project.link} className="block">
                      <div className="group relative overflow-hidden rounded-[24px] border border-[#d4b06a]/15 bg-[#3a173f]/80 transition-all duration-500 hover:border-[#d4b06a]/40 hover:shadow-[0_0_50px_rgba(212,176,106,0.15)] sm:rounded-[28px]">
                        <div className="relative h-[180px] overflow-hidden sm:h-[200px]">
                          <motion.div
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 45vw"
                              className="object-cover object-center"
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1f0c24] via-[#1f0c24]/40 to-transparent" />

                          <div className="absolute right-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#d4b06a] text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <ArrowUpRight size={20} />
                          </div>
                        </div>

                        <div className="p-5 sm:p-6">
                          <div className="mb-3 inline-flex rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-3 py-1.5 text-[12px] font-medium text-[#d4b06a]">
                            {project.category}
                          </div>
                          <h3 className="text-[19px] font-bold text-white sm:text-[21px]">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-[14px] leading-7 text-zinc-400 sm:text-[15px]">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}

              <Reveal delay={0.15} direction="left">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#d4b06a] transition-colors duration-300 hover:text-[#ddbc79]"
                >
                  See all projects
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
