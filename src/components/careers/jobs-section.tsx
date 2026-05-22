"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

import { jobs } from "@/constants/careers";
import { SectionHeading } from "./section-heading";

export function JobsSection() {
  const [search, setSearch] = useState("");

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
              placeholder="   Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-card text-foreground placeholder:text-muted h-14 w-full rounded-full border border-white/10 bg-white/5 pr-5 pl-14 transition-all duration-300 outline-none focus:border-white/30"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="glass-card premium-shadow flex flex-col items-start justify-between rounded-[30px] p-8 md:flex-row md:items-center"
            >
              <div>
                <h3 className="text-2xl font-medium">{job.title}</h3>

                <div className="text-muted mt-3 flex items-center gap-2">
                  <MapPin size={16} />
                  {job.location}
                </div>
              </div>

              <Link
                href={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-primary text-background mt-6 inline-flex rounded-full px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl md:mt-0"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
