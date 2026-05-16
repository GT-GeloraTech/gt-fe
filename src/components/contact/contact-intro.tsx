export function ContactIntro() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl md:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
              Before We Build
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
              Every successful product starts with{" "}
              <span className="text-primary">understanding the problem</span>
            </h2>

            <p className="text-muted mt-8 text-lg leading-9">
              Tell us what you&apos;re trying to build, improve, automate, or scale. Even if the
              idea is still rough, we&apos;ll help identify the right technical direction before
              development begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
