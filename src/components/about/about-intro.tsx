import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Content */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="text-primary mb-4 text-xs font-medium tracking-[0.2em] uppercase sm:text-sm">
            About Gelora Tech
          </p>

          <h2 className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Building software businesses can depend on
          </h2>

          <div className="text-muted mt-8 space-y-6 text-base leading-8 sm:text-lg sm:leading-9">
            <p>
              At Gelora Tech, we believe software should solve problems, simplify operations, and
              support growth — not create unnecessary complexity.
            </p>

            <p>
              Too many systems look impressive in presentations but become difficult to maintain,
              expensive to scale, and frustrating to use once real work begins.
            </p>

            <p className="text-foreground font-medium">We built Gelora Tech differently.</p>

            <p>
              We work closely with businesses to understand how they actually operate before writing
              a single line of code. That leads to better decisions, fewer surprises, and products
              built around real workflows.
            </p>

            <p>
              Whether it&apos;s customer platforms, internal systems, mobile applications, or AI
              automation, our approach remains the same: build carefully, communicate clearly, and
              support long after launch.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] sm:rounded-[36px]">
            <Image
              src="/about-team.jpg"
              alt="Gelora team collaboration"
              width={900}
              height={700}
              className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[500px]"
            />
          </div>

          {/* Floating Image - Desktop Only */}
          <div className="absolute -bottom-10 -left-10 hidden w-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl lg:block">
            <Image
              src="/about-workflow.jpg"
              alt="Development workflow"
              width={600}
              height={400}
              className="h-[180px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
