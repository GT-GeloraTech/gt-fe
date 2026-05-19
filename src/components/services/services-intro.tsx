export function ServicesIntro() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[36px] border border-white/8 bg-white/[0.02] px-8 py-12 backdrop-blur-sm md:px-20 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-primary mb-3 text-sm font-medium tracking-[0.2em] uppercase">
              Our Approach
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Technology partnerships built for long-term growth
            </h2>

            <div className="text-muted mt-6 space-y-5 text-lg leading-8">
              <p>
                Most businesses don&apos;t need multiple agencies handling different parts of a
                project. They need one technical team capable of strategy, development,
                infrastructure, deployment, and long-term support working together.
              </p>

              <p className="text-foreground font-medium">That&apos;s how we work.</p>

              <p>
                Our services are designed around the complete lifecycle of a product — from early
                planning and architecture to launch, scaling, and ongoing improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
