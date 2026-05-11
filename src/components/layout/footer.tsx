"use client";

import Link from "next/link";

import { Globe, Link as LinkIcon, Mail, Phone } from "lucide-react";

import { navigation } from "@/constants/navigation";
import { Container } from "../common/container";

export function Footer() {
  return (
    <footer className="border-t border-[#d4b06a]/10 bg-[#2a0f2f] py-16">
      <Container className="max-w-[1300px]">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d4b06a] text-sm font-black text-black">
                GT
              </div>

              <h3 className="text-[22px] font-bold text-white">Gelora Tech</h3>
            </div>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-zinc-400">
              Empowering businesses with innovative technology solutions for the digital age.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
              {[Globe, LinkIcon, Mail, Phone].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4b06a]/15 bg-[#3a173f]/60 text-[#d4b06a] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4b06a]/40 hover:bg-[#d4b06a]/10 hover:shadow-[0_0_20px_rgba(212,176,106,0.15)]"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[20px] font-bold text-white">Quick Links</h4>

            <div className="mt-8 flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] text-zinc-400 transition-colors duration-300 hover:text-[#d4b06a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[20px] font-bold text-white">Services</h4>

            <div className="mt-8 flex flex-col gap-5">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "AI Automation",
                "Cybersecurity",
                "IT Consulting",
              ].map((service) => (
                <p
                  key={service}
                  className="cursor-pointer text-[15px] text-zinc-400 transition-colors duration-300 hover:text-[#d4b06a]"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[18px] font-bold text-white">Contact Us</h4>

            <div className="mt-8 space-y-6">
              <p className="text-[15px] text-zinc-400">contact@geloratech.com</p>

              <p className="text-[15px] text-zinc-400">+1 (555) 123-4567</p>

              <p className="text-[15px] text-zinc-400">Silicon Valley, CA 94025</p>

              <p className="pt-4 text-[15px] font-medium text-[#d4b06a]">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-[#d4b06a]/10 pt-8 lg:flex-row">
          <p className="text-[14px] text-zinc-500">© 2026 Gelora Tech. All rights reserved.</p>

          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <button
                key={item}
                className="text-[14px] text-zinc-500 transition-colors duration-300 hover:text-[#d4b06a]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
