import { values } from "./data";

export function CoreValues() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-bold">Core Values</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="glass-card rounded-3xl p-8">
                <Icon className="text-primary mb-5" />

                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>

                <p className="text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
