"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroSlider({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -60 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]!}
            alt={title}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "h-2 w-8 bg-white" : "h-2 w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
