export function ProjectsIntro() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/[0.02] px-8 py-12 md:px-20 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
            Our Approach
          </p>

          <h2 className="text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
            Building software designed
            <br />
            for real-world use
          </h2>

          <div className="text-muted mt-6 space-y-5 text-lg leading-8">
            <p>
              We focus on creating systems businesses rely on every day — platforms that support
              operations, customer workflows, internal management, automation, and long-term
              scalability without becoming difficult to maintain.
            </p>

            <p className="text-foreground font-medium">
              Below are selected examples of projects and systems we’ve helped design and build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
