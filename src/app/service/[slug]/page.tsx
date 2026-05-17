import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "../data";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* HERO */}

        <section className="relative px-6 pt-36 pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7C3AED20,transparent)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
                Premium Service
              </div>

              <h1 className="mb-6 text-6xl leading-tight font-bold md:text-7xl">{service.title}</h1>

              <p className="text-muted mb-8 text-xl leading-9">{service.subtitle}</p>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black">
                  Start Project
                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-white/10 px-8 py-4">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="glass-card border-primary/10 rounded-[40px] border p-8">
              <div className="relative h-[450px] overflow-hidden rounded-4xl">
                <Image src={service.heroImage} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}

        <section className="px-6 pb-24">
          <div className="glass-card mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-white/5 p-10 md:grid-cols-4">
            {[
              ["50+", "Projects"],
              ["99%", "Client Satisfaction"],
              ["24/7", "Support"],
              ["5+", "Years Experience"],
            ].map(([number, label]) => (
              <div key={label}>
                <div className="mb-2 text-5xl font-bold">{number}</div>

                <p className="text-muted">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-primary mb-5">Overview</p>

              <h2 className="mb-6 text-5xl font-semibold">Designed for scale.</h2>
            </div>

            <div>
              <p className="text-muted text-lg leading-9">{service.description}</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-14 text-center text-5xl font-semibold">What We Deliver</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {service.features.map((item) => (
              <div key={item} className="glass-card rounded-[30px] border border-white/5 p-8">
                <Check className="text-primary mb-5" />

                <h3 className="text-xl font-medium">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-14 text-center text-5xl font-semibold">Our Process</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={step} className="glass-card rounded-[32px] p-8">
                <div className="text-primary mb-6 text-5xl font-bold">0{index + 1}</div>

                <h3 className="text-2xl font-medium">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* STACK */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-10 text-center text-5xl font-semibold">Technologies</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <div key={tech} className="rounded-full border border-white/10 px-6 py-3">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}

        <section className="px-6 pb-28">
          <div className="glass-card mx-auto max-w-6xl rounded-[40px] border border-white/10 p-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">Ready to build your next product?</h2>

            <p className="text-muted mx-auto max-w-2xl">
              From idea to deployment, we build scalable digital products.
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
