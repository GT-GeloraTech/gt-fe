import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="px-6 py-24">
      <div className="premium-shadow glass-card mx-auto max-w-6xl rounded-[40px] p-14 text-center">
        <h2 className="text-4xl font-bold">
          Looking for a technical team that stays involved after launch?
        </h2>

        <p className="text-muted mx-auto mt-6 max-w-3xl leading-8">
          Whether you&apos;re starting from scratch, rebuilding an existing platform, or scaling a
          growing product, we&apos;re ready to help you plan and build it properly.
        </p>

        <Link
          href="/contact"
          className="bg-primary mt-10 inline-flex items-center gap-2 rounded-xl px-8 py-4 font-medium text-black"
        >
          Let&apos;s Talk
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
