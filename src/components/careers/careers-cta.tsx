"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export function CareersCTA() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-6xl">
        <motion.div className="glass-card premium-shadow rounded-[36px] p-16 text-center">
          <Briefcase size={52} className="text-primary mx-auto" />

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Don&apos;t find the right role?
          </h2>

          <p className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-8">
            Share your profile with us.
          </p>

          <Link
            href="/uploadresume"
            className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-[#d4b06a]/30 px-10 py-4 font-medium text-[#d4b06a] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:border-[#d4b06a]/60 hover:shadow-[0_0_30px_rgba(212,176,106,0.35)]"
          >
            {/* animated background */}
            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#d4b06a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

            {/* content */}
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
              Share Your Resume
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
