"use client";

import Link from "next/link";
import { CheckCircle2, Mail, ClipboardCopy, Briefcase } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ApplicationSuccessPage() {
  const searchParams = useSearchParams();

  const applicationId = searchParams.get("id") || "GLR-2026-0542";

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#2B0135] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left */}
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 size={120} className="text-[#D4A24C]" />

                <h1 className="mt-8 text-5xl font-bold">Application Submitted</h1>

                <h2 className="text-4xl font-bold text-[#D4A24C]">Successfully!</h2>

                <p className="mt-6 text-lg text-white/80">Thank you for applying.</p>

                <p className="mt-2 text-white/60">
                  Your application has been successfully submitted.
                </p>
              </div>

              {/* Right */}
              <div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-white/60">Application ID</p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-3xl font-semibold text-[#D4A24C]">{applicationId}</span>

                    <button
                      onClick={() => navigator.clipboard.writeText(applicationId)}
                      className="flex items-center gap-2 text-sm"
                    >
                      <ClipboardCopy size={16} />
                      Copy
                    </button>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#4DA3FF] bg-[#4DA3FF]/10 p-5">
                  <div className="flex items-center gap-4">
                    <Mail className="text-[#D4A24C]" />

                    <div>
                      <p className="font-medium">Confirmation Email Sent</p>

                      <p className="text-sm text-white/70">We&apos;ve sent a confirmation email.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-semibold">What happens next?</h3>

                  <div className="mt-8 space-y-8">
                    <div className="flex gap-4">
                      <Briefcase className="text-[#D4A24C]" />
                      <p>Our team will review your application.</p>
                    </div>

                    <div className="flex gap-4">
                      <Mail className="text-[#D4A24C]" />
                      <p>Shortlisted candidates will be contacted via email or phone.</p>
                    </div>

                    <div className="flex gap-4">
                      <CheckCircle2 className="text-[#D4A24C]" />
                      <p>Hiring typically takes 5–7 business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10 text-center">
              <Link
                href="/careers"
                className="inline-flex rounded-full bg-[#D4A24C] px-10 py-4 font-medium text-black"
              >
                Browse More Opportunities →
              </Link>

              <p className="mt-8 text-white/60">Need help? Contact us at hello@geloratech.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
