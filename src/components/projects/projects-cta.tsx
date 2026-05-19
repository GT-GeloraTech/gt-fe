"use client";

import Link from "next/link";

export function ProjectsCTA() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-white/[0.02] px-8 py-10 backdrop-blur-sm md:px-14 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
              Start a Conversation
            </p>

            <h2 className="mt-3 text-4xl leading-[1.02] font-semibold tracking-[-0.04em] md:text-5xl">
              Software built around
              <br />
              how your business actually works
            </h2>

            <p className="text-muted mt-4 max-w-2xl text-lg leading-7">
              From internal systems and automation to scalable platforms, we help businesses build
              technology designed for long-term growth.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact?focus=form"
              className="bg-primary hover:bg-primary-dark inline-flex items-center rounded-full px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Talk With Us
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
