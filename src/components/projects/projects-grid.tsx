"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../app/projects/data";

export function ProjectsGrid() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-5xl font-semibold">Selected Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                className="group glass-card border-primary/10 hover:border-primary/30 cursor-pointer overflow-hidden rounded-[32px] border transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a0f2f] via-[#2a0f2f20] to-transparent" />

                  <div className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 opacity-0 backdrop-blur transition duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-primary text-sm">{project.category}</span>

                    <span className="text-xs text-white/40">Case Study</span>
                  </div>

                  <h3 className="mb-5 text-2xl font-semibold">{project.title}</h3>

                  <p className="text-muted line-clamp-4 leading-8">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
