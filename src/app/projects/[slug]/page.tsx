import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { projects } from "../data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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

                <button className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="glass-card rounded-[40px] border border-white/5 p-8">
              <div className="relative h-[500px] overflow-hidden rounded-3xl">
                <Image src={project.heroImage} alt={project.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}

        <section className="px-6 pb-24">
          <div className="glass-card mx-auto grid max-w-7xl gap-6 rounded-[40px] border border-white/5 p-10 md:grid-cols-3">
            {project.results.map((item) => (
              <div key={item.label}>
                <div className="mb-3 text-5xl font-bold">{item.value}</div>

                <p className="text-muted">{item.label}</p>
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
          <h2 className="mb-14 text-center text-5xl font-semibold">Key Highlights</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {project.highlights.map((item) => (
              <div key={item} className="glass-card rounded-[30px] border border-white/5 p-8">
                <Check className="text-primary mb-6" />

                <h3 className="text-xl font-medium">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-14 text-center text-5xl font-semibold">Development Journey</h2>

          <div className="grid gap-6 md:grid-cols-5">
            {project.process.map((step, index) => (
              <div key={step} className="glass-card rounded-[30px] p-8">
                <div className="text-primary mb-6 text-5xl font-bold">0{index + 1}</div>

                <h3 className="text-xl">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-10 text-center text-5xl font-semibold">Technologies Used</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <div key={tech} className="rounded-full border border-white/10 px-6 py-3">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-14 text-center text-5xl font-semibold">Project Screens</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div key={image} className="glass-card overflow-hidden rounded-[32px]">
                <div className="relative h-[320px] sm:h-[420px]">
                  <Image
                    src={image}
                    alt={`${project.title} screen ${index + 1}`}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
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

            <button className="mt-10 rounded-full bg-white px-8 py-4 text-black">
              Start a Project
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
