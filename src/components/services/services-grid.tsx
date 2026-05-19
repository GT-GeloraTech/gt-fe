"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../app/service/data";

export function ServicesGrid() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-semibold"
        >
          Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Object.values(services).map((service, i) => (
            <Link key={service.slug} href={`/service/${service.slug}`} className="block">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -12,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                className="group border-primary/15 from-background via-primary/5 to-background relative overflow-hidden rounded-[36px] border bg-gradient-to-br shadow-[0_20px_80px_rgba(124,58,237,0.15)] backdrop-blur-xl transition-all duration-700 hover:shadow-[0_20px_80px_rgba(124,58,237,0.25)]"
              >
                {/* Animated glow */}
                {/* Animated glow */}
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                  <div className="bg-primary/20 absolute top-0 -left-20 h-72 w-72 rounded-full blur-[100px]" />
                  <div className="bg-primary/15 absolute right-0 bottom-0 h-72 w-72 rounded-full blur-[120px]" />
                </div>

                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  <div className="from-background via-primary/10 absolute inset-0 bg-gradient-to-t to-transparent" />

                  {/* floating button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    className="bg-primary/15 border-primary/20 absolute top-6 right-6 rounded-full border p-3 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-primary h-2 w-2 rounded-full" />

                    <span className="text-sm tracking-[0.25em] text-zinc-400 uppercase">
                      Service
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl font-semibold transition duration-500 group-hover:translate-x-2">
                    {service.title}
                  </h3>

                  <p className="text-muted leading-8">{service.description}</p>

                  {/* reveal CTA */}
                  <div className="mt-6 flex translate-y-4 items-center gap-2 text-sm font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore Service
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
