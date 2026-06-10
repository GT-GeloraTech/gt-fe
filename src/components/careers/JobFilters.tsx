"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

import JobCard from "./JobCard";
import { getJobs } from "@/lib/jobs";
import type { Job } from "@/types/job";

export default function JobFilters() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await getJobs();

        // Show only active jobs
        setJobs(data.filter((job) => job.is_active));
      } catch (error) {
        console.error("Failed to load jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  const categories = useMemo(() => {
    const departments = Array.from(new Set(jobs.map((job) => job.department).filter(Boolean)));

    return [
      {
        name: "All",
        count: jobs.length,
      },
      ...departments.map((department) => ({
        name: department!,
        count: jobs.filter((job) => job.department === department).length,
      })),
    ];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = selectedCategory === "All" || job.department === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [jobs, search, selectedCategory]);

  return (
    <section className="container mx-auto px-6 pb-24">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm tracking-[4px] text-[#D4A24C]">OPPORTUNITIES</div>

        <h2 className="mt-3 text-4xl font-bold">Current Openings</h2>
      </div>

      {/* Search + Filters */}
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="relative">
          <Search className="absolute top-1/2 left-5 -translate-y-1/2 text-white/50" size={18} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Jobs..."
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-14 transition-all outline-none focus:border-[#D4A24C]/40"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full border px-6 py-3 transition-all duration-300 ${
                selectedCategory === category.name
                  ? "border-[#D4A24C] bg-[#D4A24C]/10 text-[#D4A24C]"
                  : "border-white/20 text-white hover:border-white/40"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Jobs */}
      <div className="mt-10 max-h-[800px] overflow-y-auto pr-2">
        <div className="space-y-8">
          {loading ? (
            <div className="py-12 text-center text-white/60">Loading jobs...</div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="py-12 text-center text-white/60">
              No jobs found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {/* Load More */}
      {!loading && filteredJobs.length > 5 && (
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border-2 border-[#D4A24C] px-8 py-3 text-xl font-medium text-[#D4A24C] transition-all hover:bg-[#D4A24C] hover:text-[#2B0135]">
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
