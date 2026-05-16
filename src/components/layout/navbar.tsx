"use client";

import Image from "next/image";
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
        scrolled ? "border-b border-white/10 bg-[#2a0f2]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo_1.png"
            alt="Gelora Tech Logo"
            width={150}
            height={150}
            className="object-cover"
            priority
          />
        </Link>

        {/* Navigation */}
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
