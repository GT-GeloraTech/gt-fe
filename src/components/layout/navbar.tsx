"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { navigation } from "@/constants/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isLightPage = pathname.startsWith("/careers/");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   setMobileMenuOpen(false);
  // }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Wrapper */}
      <div
        className={`mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "mt-2 max-w-6xl px-3 sm:mt-4 sm:px-6" : "max-w-[1500px] px-3 sm:px-6 lg:px-8"
        }`}
      >
        {/* Navbar */}
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "glass-navbar h-14 rounded-2xl px-4 sm:h-[68px] sm:px-6" : "h-16 sm:h-20"
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
                scrolled ? "h-8 sm:h-10" : "h-10 sm:h-14 lg:h-16"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex lg:gap-9">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 text-[15px] transition-colors duration-300 ${
                    active
                      ? "font-semibold text-[#d4b06a]"
                      : scrolled
                        ? "text-white/90 hover:text-[#d4b06a]"
                        : isLightPage
                          ? "text-black hover:text-[#d4b06a]"
                          : "text-zinc-300 hover:text-[#d4b06a]"
                  }`}
                >
                  {item.label}

                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-[#d4b06a]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact?focus=form"
              className={`group relative hidden items-center justify-center overflow-hidden rounded-full px-5 py-2.5 sm:px-6 sm:py-3 md:inline-flex ${
                scrolled ? "border border-white/15 bg-white/[0.04]" : "border border-[#d4b06a]/30"
              }`}
            >
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#d4b06a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <span className="relative z-10 flex items-center gap-2 text-[14px] font-semibold text-[#d4b06a] transition-colors duration-500 group-hover:text-black sm:text-[15px]">
                Let&apos;s Talk
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
                scrolled ? "text-white" : isLightPage ? "text-black" : "text-zinc-200"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[100] md:hidden"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1d1325] via-[#24152e] to-[#120b18]" />

                {/* Subtle pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, #d4b06a 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <div className="relative flex h-full flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      <Image
                        src="/logo_1.png"
                        alt="Gelora Tech"
                        width={180}
                        height={50}
                        priority
                        className="h-10 w-auto object-contain"
                      />
                    </Link>

                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                      <X size={20} className="text-white" />
                    </button>
                  </div>

                  {/* Navigation */}
                  <nav className="flex flex-1 flex-col px-8 py-8">
                    <div className="flex flex-col">
                      {navigation.map((item) => {
                        const active = isActive(item.href);

                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`border-b border-white/5 py-5 text-xl font-medium transition-colors ${
                              active ? "text-[#d4b06a]" : "text-white/90 hover:text-[#d4b06a]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-auto pt-8">
                      <p className="mb-6 text-sm leading-relaxed text-white/60">
                        Building premium digital products, AI solutions and modern web experiences.
                      </p>

                      <Link
                        href="/contact?focus=form"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#d4b06a] py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                      >
                        Let&apos;s Talk
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
