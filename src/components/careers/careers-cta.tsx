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
            className="bg-primary text-background mt-10 inline-flex items-center rounded-full px-10 py-4 font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,176,106,0.35)]"
          >
            Share Your Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
