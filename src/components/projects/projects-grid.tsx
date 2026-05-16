"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./data";

export function ProjectsGrid() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-5xl font-semibold">Selected Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
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
              className="group glass-card border-primary/10 hover:border-primary/30 overflow-hidden rounded-[32px] border transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0f2f] via-[#2a0f2f20] to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="mb-5 text-2xl font-semibold">{project.title}</h3>

                <p className="text-muted leading-8">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
