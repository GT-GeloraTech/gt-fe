"use client";

import { Globe, Laptop, Zap, BadgeCheck } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] items-center px-6 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left */}
          <div className="max-w-[700px]">
            <span className="inline-flex rounded-full border border-[#D4A24C]/30 bg-[#D4A24C]/5 px-5 py-2 text-sm tracking-wide text-[#D4A24C]">
              WE&apos;RE HIRING
            </span>

            <h1 className="mt-10 text-5xl leading-[1.05] font-bold lg:text-7xl">
              Build Products.
              <br />
              <span className="text-[#D4A24C]">Shape the Future.</span>
            </h1>

            <p className="mt-8 max-w-[620px] text-xl text-white/75">
              Join a team building exceptional digital experiences with real impact.
            </p>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                <Feature icon={<Laptop size={20} />} title="Remote" subtitle="Friendly" />

                <Feature icon={<BadgeCheck size={20} />} title="High" subtitle="Ownership" />

                <Feature icon={<Zap size={20} />} title="Fast" subtitle="Execution" />

                <Feature icon={<Globe size={20} />} title="Global" subtitle="Team" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <img src="/team.png" alt="" className="w-full max-w-[750px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#D4A24C]">{icon}</div>

      <div>
        <div className="text-3 leading-none font-semibold">{title}</div>
        <div className="mt-1 text-sm text-white/60">{subtitle}</div>
      </div>
    </div>
  );
}
