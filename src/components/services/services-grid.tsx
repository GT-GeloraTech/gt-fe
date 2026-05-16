"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "./data";

export function ServicesGrid() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-5xl font-semibold">Services</h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              className="group glass-card border-primary/10 hover:border-primary/30 overflow-hidden rounded-[32px] border transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0f2f] via-[#2a0f2f30] to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="mb-5 text-3xl font-semibold">{service.title}</h3>

                <p className="text-muted leading-8">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
