"use client";

import { projects } from "@/constants/projects";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-30 pb-40">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-[58px] leading-[0.95] font-black tracking-[-0.04em] text-white">
            Featured <span className="text-[#d4b06a]">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[20px] leading-8 text-zinc-400">
            Showcasing our expertise in delivering enterprise-grade solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <Card className="group relative overflow-hidden rounded-[28px] border border-[#d4b06a]/18 bg-[#3a173f]/90 p-0 transition-all duration-500 hover:-translate-y-2 hover:border-[#d4b06a]/45 hover:shadow-[0_0_45px_rgba(212,176,106,0.18)]">
                {/* Top Visual */}
                <div className="relative flex h-[190px] items-center justify-center overflow-hidden border-b border-[#d4b06a]/10 bg-gradient-to-br from-[#8a6b6f]/70 via-[#6d4b62]/55 to-[#3d1a43]">
                  {/* Grid Overlay */}
                  <div
                    className="absolute inset-0 opacity-35"
                    style={{
                      backgroundImage: `
          linear-gradient(rgba(212,176,106,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,176,106,0.12) 1px, transparent 1px)
        `,
                      backgroundSize: "22px 22px",
                    }}
                  />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,176,106,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Hover Icon */}
                  <div className="z-10 flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-[#d4b06a] text-black opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="p-6">
                  <div className="mb-5 inline-flex rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-4 py-2 text-[14px] font-medium text-[#d4b06a]">
                    {project.category}
                  </div>

                  <h3 className="text-[22px] leading-tight font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[18px] leading-8 text-zinc-400">{project.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
