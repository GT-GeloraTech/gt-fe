import { process } from "./data";

export function HowWeWork() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-4xl font-bold">How We Work</h2>

        <div className="space-y-6">
          {process.map((step, i) => (
            <div key={step.title} className="glass-card flex gap-6 rounded-3xl p-8">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full font-bold text-black">
                {i + 1}
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>

                <p className="text-muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
