import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

import type { Job } from "@/types/job";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const formatEmploymentType = (type: string) => type.replace("-", " ").toUpperCase();

  const formatWorkplaceType = (type: string) => type.charAt(0).toUpperCase() + type.slice(1);

  const salaryRange =
    job.salary_min && job.salary_max
      ? `₹${job.salary_min / 100000}L - ₹${job.salary_max / 100000}L`
      : "Competitive";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#D4A24C]/60">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        {/* Left */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#D4A24C] px-4 py-2 text-xs font-medium text-[#D4A24C]">
              {formatEmploymentType(job.employment_type)}
            </span>

            {job.department && (
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/70">
                {job.department}
              </span>
            )}

            {job.is_featured && (
              <span className="rounded-full bg-[#D4A24C]/15 px-4 py-2 text-xs font-medium text-[#D4A24C]">
                Featured
              </span>
            )}
          </div>

          <h3 className="mt-6 text-3xl font-semibold">{job.title}</h3>

          <p className="mt-4 max-w-2xl text-white/70">
            {job.short_description ||
              "Join our growing team and work on impactful products solving real-world challenges."}
          </p>

          <div className="mt-6 flex flex-wrap gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Briefcase size={18} />
              {job.min_experience} - {job.max_experience} Years Experience
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {job.location} ({formatWorkplaceType(job.workplace_type)})
            </div>

            <div>
              {job.positions} Opening
              {job.positions > 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center justify-center border-l border-white/10 pl-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4A24C]">{salaryRange}</div>

            <p className="mt-2 text-white/60">
              {job.salary_min && job.salary_max ? "Annual Compensation" : "Competitive Salary"}
            </p>
          </div>

          <Link
            href={`/careers/${job.slug}`}
            className="mt-8 inline-flex rounded-full bg-[#D4A24C] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
