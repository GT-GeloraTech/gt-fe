"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation } from "@/constants/navigation";
import { Container } from "../common/container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#2a0f2f]/80 backdrop-blur-xl" : "bg-transparent"
      } `}
    >
      <Container className="flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4b06a] font-bold text-black">
            GT
          </div>

          <h2 className="text-2xl font-bold">Gelora Tech</h2>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-zinc-300 transition hover:text-[#d4b06a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
