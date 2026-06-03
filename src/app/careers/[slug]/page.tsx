"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Check, MapPinned, Users } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { jobs } from "@/constants/careers";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default async function JobDetailsPage({ params }: Props) {
  const { slug } = await params;

  const job = jobs.find((item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        Job not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050505] pt-32 pb-32 text-white">
        {/* Background Blur */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-250px] left-[-250px] h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />

          <div className="absolute right-[-250px] bottom-[-250px] h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        {/* Main Container */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Top Navigation */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-24 flex items-center justify-between"
          >
            <Link href="/careers" className="text-sm text-zinc-500 transition hover:text-white">
              ← Back to Careers
            </Link>

            <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs tracking-[0.22em] text-zinc-500 uppercase">
              Gelora Tech
            </div>
          </motion.div>

          {/* HERO SECTION */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid items-start gap-16 xl:grid-cols-[minmax(0,1fr)_420px]"
          >
            {/* LEFT CONTENT */}
            <motion.div variants={fadeUp} className="min-w-0">
              {/* Badge */}
              <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400">
                Currently Hiring
              </div>

              {/* Title */}
              <h1 className="max-w-5xl text-5xl leading-[0.92] font-semibold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
                {job.title}
              </h1>

              {/* Description */}
              <p className="mt-10 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                {job.description}
              </p>

              {/* Meta Cards */}
              <motion.div
                variants={stagger}
                className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              >
                {/* Experience */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <BriefcaseBusiness size={22} className="text-zinc-400" />

                  <p className="mt-5 text-xs tracking-[0.18em] text-zinc-500 uppercase">
                    Experience
                  </p>

                  <h3 className="mt-2 text-lg font-medium text-white">{job.experience}</h3>
                </motion.div>

                {/* Positions */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <Users size={22} className="text-zinc-400" />

                  <p className="mt-5 text-xs tracking-[0.18em] text-zinc-500 uppercase">
                    Positions
                  </p>

                  <h3 className="mt-2 text-lg font-medium text-white">{job.positions}</h3>
                </motion.div>

                {/* Location */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:col-span-2 xl:col-span-1"
                >
                  <MapPinned size={22} className="text-zinc-400" />

                  <p className="mt-5 text-xs tracking-[0.18em] text-zinc-500 uppercase">Location</p>

                  <h3 className="mt-2 text-lg font-medium text-white">{job.location}</h3>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDEBAR */}
            <div className="relative flex w-full justify-center xl:justify-end">
              <motion.div
                variants={fadeUp}
                className="relative h-fit w-full max-w-[420px] overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10 xl:sticky xl:top-28"
              >
                {/* Glow */}
                <div className="absolute top-[-80px] right-[-80px] h-[240px] w-[240px] rounded-full bg-white/[0.04] blur-3xl" />

                <div className="relative z-10">
                  <p className="text-sm tracking-[0.22em] text-zinc-500 uppercase">Why Join Us</p>

                  <h2 className="mt-5 text-3xl leading-tight font-semibold md:text-4xl">
                    Work with ambitious people building scalable digital products.
                  </h2>

                  {/* Benefits */}
                  <div className="mt-10 space-y-5">
                    {[
                      "Modern engineering culture",
                      "Remote-friendly workflow",
                      "Fast-growing product ecosystem",
                      "Real ownership & autonomy",
                    ].map((item, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-center gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                          <Check size={14} />
                        </div>

                        <p className="text-zinc-400">{item}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/uploadresume"
                    className="group relative mt-12 flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#d4b06a]/30 px-6 text-sm font-semibold text-[#d4b06a] transition-all duration-500 hover:scale-[1.01] hover:border-[#d4b06a]/60"
                  >
                    {/* animated background */}
                    <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#d4b06a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                    {/* content */}
                    <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
                      Apply For This Position
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* CONTENT SECTION */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="mt-28 grid gap-10 xl:grid-cols-[minmax(0,1fr)_420px]"
          >
            {/* RESPONSIBILITIES */}
            <motion.div
              variants={fadeUp}
              className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10 xl:p-12"
            >
              <div className="mb-14">
                <p className="text-sm tracking-[0.22em] text-zinc-500 uppercase">
                  Responsibilities
                </p>

                <h2 className="mt-4 text-4xl font-semibold md:text-5xl">What You&apos; ll Do</h2>
              </div>

              <div className="space-y-5">
                {job.responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-5 rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />

                    <p className="leading-8 text-zinc-400">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-10">
              {/* Skills */}
              <motion.div
                variants={fadeUp}
                className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10 xl:p-12"
              >
                <div className="mb-14">
                  <p className="text-sm tracking-[0.22em] text-zinc-500 uppercase">Requirements</p>

                  <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Skills</h2>
                </div>

                <motion.div variants={stagger} className="flex flex-wrap gap-4">
                  {job.skills.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Good To Have */}
              <motion.div
                variants={fadeUp}
                className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10 xl:p-12"
              >
                <div className="mb-14">
                  <p className="text-sm tracking-[0.22em] text-zinc-500 uppercase">
                    Extra Advantage
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Good To Have</h2>
                </div>

                <div className="space-y-4">
                  {job.goodToHave.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <p className="leading-7 text-zinc-400">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
}
