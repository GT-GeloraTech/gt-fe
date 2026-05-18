import Image from "next/image";
import Link from "next/link";
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
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#7C3AED20,transparent)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
                Premium Service
              </div>

              <h1 className="mb-6 text-6xl leading-tight font-bold md:text-7xl">{service.title}</h1>

              <p className="text-muted mb-8 text-xl leading-9">{service.subtitle}</p>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black"
                >
                  Start Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex rounded-full border border-white/10 px-8 py-4"
                >
                  View Portfolio
                </Link>
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
              ["Custom", "Solutions"],
              ["Fast", "Delivery"],
              ["24/7", "Support"],
              ["2026", "Founded"],
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

        <section className="relative overflow-hidden px-6 py-15">
          {/* Background blur accents */}
          <div className="bg-primary/10 absolute top-20 left-0 h-72 w-72 rounded-full blur-[120px]" />
          <div className="bg-primary/5 absolute right-0 bottom-0 h-96 w-96 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">
            {/* Heading */}
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="text-5xl leading-tight font-semibold md:text-6xl">What We Deliver</h2>

              <p className="mt-6 text-lg text-white/60">
                Strategic, scalable and conversion-focused solutions designed to elevate digital
                experiences and drive measurable growth.
              </p>
            </div>

            {/* Grid */}
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {service.features.map((item, index) => (
                <div
                  key={item}
                  className="group hover:border-primary/40 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-[0_0_60px_rgba(255,255,255,0.05)]"
                >
                  {/* Top number */}
                  <span className="group-hover:text-primary/10 absolute top-8 right-8 text-6xl font-bold text-white/5 transition">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="bg-primary/10 group-hover:bg-primary mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110">
                    <Check size={22} className="text-primary group-hover:text-black" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl leading-relaxed font-medium">{item}</h3>

                    <div className="from-primary/40 mt-8 h-[1px] w-full bg-gradient-to-r via-white/10 to-transparent" />
                  </div>

                  {/* Hover glow */}
                  <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="relative overflow-hidden px-6 py-28">
          {/* Background accents */}
          <div className="bg-primary/10 absolute top-20 left-0 h-80 w-80 rounded-full blur-[120px]" />
          <div className="bg-primary/5 absolute right-0 bottom-0 h-96 w-96 rounded-full blur-[150px]" />

          <div className="relative mx-auto max-w-7xl">
            {/* Header */}
            <div className="mx-auto mb-24 max-w-3xl text-center">
              <h2 className="text-5xl leading-tight font-semibold md:text-6xl">Our Process</h2>

              <p className="mt-6 text-lg text-white/60">
                A structured approach designed to turn ideas into polished, scalable digital
                products with clarity and efficiency.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

              <div className="grid gap-8 lg:grid-cols-3">
                {service.process.map((step, index) => (
                  <div
                    key={step}
                    className="group hover:border-primary/40 relative rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.05] hover:shadow-[0_0_80px_rgba(255,255,255,0.04)]"
                  >
                    {/* Step indicator */}
                    <div className="mb-10 flex items-center justify-between">
                      <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-black">
                        <span className="text-lg font-semibold">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>

                      <div className="from-primary/40 ml-6 h-[1px] flex-1 bg-gradient-to-r to-transparent" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl leading-snug font-semibold">{step}</h3>

                    {/* Decorative large number */}
                    <div className="group-hover:text-primary/10 absolute right-8 bottom-5 text-8xl font-bold text-white/[0.03] transition-all duration-500">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>

                    {/* Hover glow */}
                    <div className="from-primary/5 absolute inset-0 rounded-[32px] bg-gradient-to-br via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* STACK */}
        <section className="relative overflow-hidden px-6 py-20">
          {/* Ambient glow */}
          <div className="bg-primary/5 absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">
            {/* Heading */}
            <div className="mx-auto mb-24 max-w-3xl text-center">
              <h2 className="text-5xl font-semibold md:text-6xl">Technologies We Use</h2>

              <p className="mt-6 text-lg text-white/60">
                Carefully selected technologies powering scalable, high-performance digital
                products.
              </p>
            </div>

            {/* Center layout */}
            <div className="relative flex min-h-[650px] items-center justify-center">
              {/* center circle */}
              <div className="absolute z-20 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur-xl">
                <span className="text-primary text-sm tracking-[0.3em] uppercase">Core</span>

                <h3 className="mt-2 text-center text-3xl font-semibold">Tech Stack</h3>
              </div>

              {/* Orbit ring */}
              <div className="absolute h-[520px] w-[520px] rounded-full border border-white/5" />

              {service.technologies.map((tech, index) => {
                const angle = (index / service.technologies.length) * 2 * Math.PI;

                const radius = 260;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={tech}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="group absolute transition-all duration-500 hover:z-50 hover:scale-110"
                  >
                    <div className="group-hover:border-primary/40 group-hover:bg-primary/10 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.05)]">
                      <span className="font-medium">{tech}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="px-6 pb-20">
          <div className="relative mx-auto max-w-6xl">
            {/* back layers */}
            <div className="absolute inset-x-8 top-4 h-full rounded-[32px] border border-white/5 bg-white/[0.02]" />
            <div className="absolute inset-x-4 top-2 h-full rounded-[32px] border border-white/5 bg-white/[0.03]" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] px-8 py-10 backdrop-blur-xl md:px-12">
              {/* ambient glow */}
              <div className="bg-primary/10 absolute -top-10 -right-10 h-52 w-52 rounded-full blur-[100px]" />

              {/* subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Content */}
                <div className="max-w-2xl">
                  <span className="border-primary/20 bg-primary/10 text-primary mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs">
                    ● Project Kickoff
                  </span>

                  <h2 className="text-3xl leading-tight font-bold md:text-4xl">
                    Ready to bring your next idea to life?
                  </h2>

                  <p className="mt-4 text-white/60">
                    Strategy, design and engineering combined into one streamlined process.
                  </p>
                </div>

                {/* CTA area */}
                <div className="flex items-center gap-5">
                  {/* mini stat */}

                  <button className="group border-primary/30 hover:border-primary relative overflow-hidden rounded-full border px-8 py-4 transition-all duration-500">
                    <div className="bg-primary absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                    <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
                      Start Project
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
