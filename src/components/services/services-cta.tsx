"use client";

import Link from "next/link";

export function ServicesCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="glass-card mx-auto max-w-5xl rounded-3xl border border-white/10 px-8 py-12 md:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-medium">Ready to build?</span>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              Need a technical team that stays involved after launch?
            </h2>

            <p className="text-muted mt-4 text-base leading-7">
              From new products to scaling existing platforms, we help businesses build and support
              software for long-term growth.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark rounded-2xl px-7 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
