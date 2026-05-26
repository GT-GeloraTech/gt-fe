"use client";

import Image from "next/image";
// import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
import { projects } from "../../app/projects/data";
import { useEffect, useState } from "react";

function ProjectSlider({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[220px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 1.1,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            x: -30,
          }}
          transition={{
            duration: 0.7,
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index] ?? "/placeholder.jpg"}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#2a0f2f] via-[#2a0f2f20] to-transparent" />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsGrid() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-4xl font-semibold md:text-5xl">Selected Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            // <Link key={project.slug} href={`/projects/${project.slug}`}>
            <motion.div
              key={project.slug}
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
              <div className="relative">
                <ProjectSlider images={project.gallery} title={project.title} />

                {/* <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 opacity-0 backdrop-blur transition duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-white" />
                </div> */}
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-primary text-sm">{project.category}</span>

                  <span className="text-xs text-white/40">Case Study</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

                <p className="text-muted line-clamp-3 leading-7">{project.description}</p>
              </div>
            </motion.div>
            // </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
