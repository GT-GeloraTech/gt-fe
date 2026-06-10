"use client";

import Link from "next/link";
import { BriefcaseBusiness, CalendarDays, Users, MapPin, ArrowLeft } from "lucide-react";

import type { Job } from "@/types/job";

interface JobDetailHeroProps {
  job: Job;
}

export default function JobDetailHero({ job }: JobDetailHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(123,63,160,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(123,63,160,.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-8 lg:py-12">
        {/* Top Bar */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/careers"
            className="flex items-center gap-2 text-base font-medium text-[#7B3FA0] transition hover:opacity-80"
          >
            <ArrowLeft size={18} />
            Back to Careers
          </Link>

          {job.department && (
            <div className="rounded-full border border-[#7B3FA0]/30 bg-white/80 px-5 py-2 text-sm font-semibold text-[#7B3FA0] backdrop-blur-sm">
              {job.department}
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Side */}
          <div>
            <div className="inline-flex rounded-full bg-[#EADAF2] px-5 py-2 text-sm font-semibold text-[#7B3FA0]">
              WE&apos;RE HIRING
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] font-bold text-[#7B3FA0] lg:text-7xl">
              {job.title}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#7B3FA0]/80 lg:text-xl">
              {job.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#B87CD3] bg-[#EADAF2] px-5 py-2 text-sm font-medium text-[#7B3FA0]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Info Cards */}
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <InfoCard
                icon={<BriefcaseBusiness size={24} />}
                title="Experience"
                value={`${job.min_experience}-${job.max_experience} Yrs`}
              />

              <InfoCard
                icon={<CalendarDays size={24} />}
                title="Employment"
                value={job.employment_type
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              />

              <InfoCard
                icon={<Users size={24} />}
                title="Positions"
                value={String(job.positions)}
              />

              <InfoCard icon={<MapPin size={24} />} title="Location" value={job.location} />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:-mt-24 lg:items-end">
            <div className="relative overflow-hidden">
              <img src="/job_hero.png" alt={job.title} className="-mb-40 w-full max-w-[600px]" />
            </div>

            <Link
              href={`/careers/${job.slug}/apply`}
              className="rounded-full bg-[#D4A24C] px-12 py-4 text-lg font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex h-[180px] flex-col rounded-3xl border border-[#E8DDF0] bg-white/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="text-[#7B3FA0]">{icon}</div>

      <div className="mt-4 text-sm font-medium text-[#7B3FA0]/70">{title}</div>

      <div className="mt-2 text-2xl font-bold text-[#7B3FA0]">{value}</div>
    </div>
  );
}
