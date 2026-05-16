export function AboutStory() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.02] px-8 py-16 md:px-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-primary mb-4 text-sm font-medium tracking-[0.2em] uppercase">
              Our Story
            </p>

            <h2 className="text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              Built from a simple observation
            </h2>

            <div className="text-muted mt-12 space-y-8 text-lg leading-9">
              <p className="text-foreground text-xl font-medium">
                Software looked impressive in presentations, but often failed where it mattered
                most.
              </p>

              <p>
                Businesses were investing in products that appeared polished during demos yet became
                difficult to maintain, expensive to scale, and unreliable as real usage increased.
              </p>

              <p>
                Projects were abandoned after launch. Small updates became costly. Teams were left
                dependent on systems that created more operational friction instead of solving it.
              </p>

              <p>
                We saw companies rebuilding software they had already paid for because the original
                foundation had never been designed properly.
              </p>

              <p className="text-foreground font-medium">So we decided to build differently.</p>

              <p>
                Gelora Tech focuses on creating systems that are scalable, maintainable, and built
                for long-term growth — software businesses can continue relying on rather than
                replacing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
