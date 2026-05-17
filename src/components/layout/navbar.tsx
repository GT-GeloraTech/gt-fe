"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { navigation } from "@/constants/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Wrapper — full width at top, insets & floats inward once scrolled */}
      <div
        className={`mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "mt-3 max-w-6xl px-4 sm:mt-4 sm:px-6" : "max-w-[1500px] px-5 sm:px-6 lg:px-8"
        }`}
      >
        {/* Bar — plain at top, floating blurred pill when scrolled */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "h-16 rounded-2xl border border-[#d4b06a]/15 bg-[#2a0f2f]/70 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-[68px] sm:px-6"
              : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Gelora Tech — home">
            <Image
              src="/logo_1.png"
              alt="Gelora Tech Logo"
              width={220}
              height={220}
              priority
              className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled ? "h-10 sm:h-11" : "h-14 sm:h-16"
              }`}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 text-[15px] transition-colors duration-300 ${
                    active ? "font-semibold text-[#d4b06a]" : "text-zinc-300 hover:text-[#d4b06a]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-[#d4b06a]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact?focus=form"
            className="group inline-flex items-center gap-2 rounded-full bg-[#d4b06a] px-5 py-2.5 text-[14px] font-semibold text-black transition-all duration-300 hover:bg-[#ddbc79] hover:shadow-[0_8px_24px_rgba(212,176,106,0.25)] sm:px-6 sm:py-3 sm:text-[15px]"
          >
            Let&apos;s Talk
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
