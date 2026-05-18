"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { projects } from "../data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

function HeroSlider({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 1.1,
            x: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            x: -60,
          }}
          transition={{
            duration: 0.9,
          }}
          className="absolute inset-0"
        >
          <Image src={images[index]!} alt={title} fill quality={100} className="object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "h-2 w-8 bg-white" : "h-2 w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* HERO */}

        <section className="relative px-6 pt-36 pb-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#7C3AED20,transparent)]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
                {project.category}
              </div>

              <h1 className="mb-6 text-6xl font-bold md:text-7xl">{project.title}</h1>

              <p className="text-muted mb-8 text-xl leading-9">{project.subtitle}</p>

              <div className="flex flex-wrap gap-4">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black"
                  >
                    Visit Project
                    <ExternalLink size={18} />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="hover:border-primary/40 inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 transition-all duration-300 hover:translate-x-1"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-[40px] border border-white/5 p-8">
              <HeroSlider images={project.gallery} title={project.title} />
            </div>
          </div>
        </section>

        {/* RESULTS */}

        <section className="px-6 pb-24">
          <div className="glass-card mx-auto grid max-w-7xl gap-6 rounded-[40px] border border-white/5 p-8 md:grid-cols-3">
            {project.results.map((item, index) => (
              <div
                key={item.label}
                className={`flex min-h-[140px] flex-col items-center justify-center text-center ${
                  index !== project.results.length - 1 ? "md:border-r md:border-white/10" : ""
                }`}
              >
                <div className="mb-3 text-5xl leading-none font-bold">{item.value}</div>

                <p className="text-muted max-w-[180px] text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-primary mb-4">Project Story</p>

              <h2 className="mb-6 text-5xl font-semibold">Built with purpose.</h2>
            </div>

            <div>
              <p className="text-muted text-lg leading-9">{project.overview}</p>
            </div>
          </div>
        </section>

        {/* CHALLENGE + SOLUTION */}

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-2">
          <div className="glass-card rounded-[32px] border border-white/5 p-10">
            <p className="text-primary mb-4">Challenge</p>

            <h3 className="mb-5 text-3xl font-semibold">Problem Statement</h3>

            <p className="text-muted leading-8">{project.challenge}</p>
          </div>

          <div className="glass-card rounded-[32px] border border-white/5 p-10">
            <p className="text-primary mb-4">Solution</p>

            <h3 className="mb-5 text-3xl font-semibold">Our Approach</h3>

            <p className="text-muted leading-8">{project.solution}</p>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
            <div>
              <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
                Project
              </span>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Key Highlights
              </h2>
            </div>

            <p className="text-muted-foreground max-w-md leading-relaxed">
              The defining elements and product decisions that shaped the final experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {project.highlights.map((item, index) => (
              <div
                key={item}
                className="group hover:border-primary/20 rounded-[32px] border border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                    <Check size={18} />
                  </div>

                  <span className="text-6xl font-semibold tracking-tight text-white/5 transition-all duration-300 group-hover:text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="max-w-sm text-2xl leading-relaxed font-medium">{item}</h3>

                <div className="mt-8 flex items-center gap-3">
                  <div className="bg-primary h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14" />

                  <span className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
                    Feature
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}

        <section className="mx-auto max-w-7xl overflow-hidden px-6 py-24">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-semibold tracking-tight">Development Journey</h2>

            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl">
              Each phase builds on the previous one — creating a structured path from concept to
              production.
            </p>
          </div>

          <div className="relative">
            {/* connector */}
            <div className="via-primary/20 absolute top-1/2 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent to-transparent lg:block" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-center">
              {project.process.map((step, index) => {
                const offsets = ["lg:mb-0", "lg:mb-12", "lg:mb-24", "lg:mb-36", "lg:mb-48"];

                return (
                  <div
                    key={step}
                    className={`group relative w-full lg:w-[220px] ${offsets[index]}`}
                  >
                    {/* step marker */}
                    <div className="border-primary/20 bg-background text-primary absolute -top-5 left-8 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="hover:border-primary/30 rounded-[34px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 pt-12 transition-all duration-500 hover:-translate-y-3">
                      <div className="text-primary/10 group-hover:text-primary/20 mb-8 text-[70px] leading-none font-bold transition-all duration-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="mb-8 text-xl leading-snug font-medium">{step}</h3>

                      <div className="bg-primary/50 h-[2px] w-12 rounded-full transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mt-6 text-5xl font-semibold tracking-tight">Technologies Used</h2>

            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl">
              A curated technology ecosystem chosen for speed, scalability, and maintainable product
              growth.
            </p>
          </div>

          <div className="relative">
            <div className="via-primary/30 absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent to-transparent lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.technologies.map((tech, index) => (
                <div key={tech} className="group relative">
                  <div className="hover:border-primary/30 relative rounded-[32px] border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05]">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="border-primary/20 bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium">
                        {index + 1}
                      </div>

                      <div className="bg-primary/60 h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-[2.5]" />
                    </div>

                    <h3 className="text-lg font-semibold">{tech}</h3>

                    <div className="mt-8 flex items-center gap-2">
                      <div className="bg-primary/70 h-1 w-8 rounded-full" />
                      <div className="bg-primary/30 h-1 w-4 rounded-full" />
                      <div className="bg-primary/20 h-1 w-2 rounded-full" />
                    </div>
                  </div>

                  {index !== project.technologies.length - 1 && (
                    <div className="border-primary/30 bg-background absolute top-1/2 right-[-12px] hidden h-3 w-3 -translate-y-1/2 rounded-full border lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* GALLERY */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-20 flex items-end justify-between gap-8 max-md:flex-col max-md:text-center">
            <div>
              <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
                Behind The Experience
              </h2>

              <p className="text-muted-foreground mt-5 max-w-xl">
                Explore product interfaces, interactions, and key moments that shape the user
                journey.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">
                {project.gallery.length} Screens
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div key={image} className="group relative">
                {/* decorative layer */}
                <div className="border-primary/20 absolute inset-0 scale-[0.97] rotate-2 rounded-[38px] border opacity-0 transition-all duration-700 group-hover:rotate-3 group-hover:opacity-100" />

                {/* card */}
                <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition-all duration-700 hover:-translate-y-3">
                  {/* top bar */}
                  <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="bg-primary h-2.5 w-2.5 rounded-full" />
                    </div>

                    <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
                      Screen {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative h-[420px] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} screen ${index + 1}`}
                      fill
                      quality={100}
                      sizes="(max-width:768px)100vw,50vw"
                      className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                    />

                    {/* bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* reveal content */}
                    <div className="absolute right-0 bottom-0 left-0 translate-y-10 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur-sm">
                        <p className="text-primary text-xs tracking-[0.3em] uppercase">
                          Product View
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>

                        <p className="mt-2 text-sm text-white/60">
                          Built with focus on clarity, responsiveness, and user flow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}

        <section className="px-6 pb-28">
          <div className="glass-card mx-auto max-w-6xl rounded-[40px] border border-white/10 p-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">Ready to build your next project?</h2>

            <p className="text-muted mx-auto max-w-2xl">
              We create scalable products designed for long-term growth.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
