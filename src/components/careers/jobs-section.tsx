"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

import { getJobs } from "@/lib/jobs";
import type { Job } from "@/types/job";

import { SectionHeading } from "./section-heading";

export function JobsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      const data = await getJobs();

      setJobs(data);
      setLoading(false);
    }

    loadJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id="job-section" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading badge="Opportunities" title="Current Openings" />

        {/* Search Bar */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search size={18} className="text-muted absolute top-1/2 left-5 -translate-y-1/2" />

            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-card text-foreground placeholder:text-muted h-14 w-full rounded-full border border-white/10 bg-white/5 pr-5 pl-14 transition-all duration-300 outline-none focus:border-white/30"
            />
          </div>
        </div>

        {/* Loading */}
        {loading && <div className="text-muted text-center">Loading jobs...</div>}

        {/* Empty State */}
        {!loading && filteredJobs.length === 0 && (
          <div className="text-muted text-center">No jobs found.</div>
        )}

        {/* Jobs */}
        <div className="space-y-6">
          {filteredJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="glass-card premium-shadow flex flex-col items-start justify-between rounded-[30px] p-8 md:flex-row md:items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-medium">{job.title}</h3>

                  {job.is_featured && (
                    <span className="rounded-full bg-[#d4b06a]/15 px-3 py-1 text-xs font-medium text-[#d4b06a]">
                      Featured
                    </span>
                  )}
                </div>

                <div className="text-muted mt-3 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {job.location}
                  </div>

                  <div>
                    {job.min_experience} - {job.max_experience} Years
                  </div>

                  <div>
                    {job.positions} Opening
                    {job.positions > 1 ? "s" : ""}
                  </div>

                  <div className="capitalize">{job.workplace_type}</div>
                </div>

                {job.short_description && (
                  <p className="text-muted mt-4 max-w-2xl">{job.short_description}</p>
                )}
              </div>

              <Link
                href={`/careers/${job.slug}`}
                className="group relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-full border border-[#d4b06a]/30 px-8 py-4 font-medium text-[#d4b06a] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:border-[#d4b06a]/60 hover:shadow-2xl md:mt-0"
              >
                <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#d4b06a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
                  Apply Now
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
