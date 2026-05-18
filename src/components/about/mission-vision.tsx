import { Eye, Target } from "lucide-react";

export function MissionVision() {
  return (
    <section className="px-6 py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-8">
          <Target className="text-primary mb-5" />

          <h3 className="mb-4 text-3xl font-semibold">Our Mission</h3>

          <p className="text-muted leading-8">
            To make high-quality software engineering accessible to growing businesses without
            unnecessary complexity, inflated processes, or technical confusion.
          </p>
        </div>
        <div className="glass-card rounded-3xl p-8">
          <Eye className="text-primary mb-5" />

          <h3 className="mb-4 text-3xl font-semibold">Our Vision</h3>

          <p className="text-muted leading-8">
            A future where businesses trust the technology running their operations and never feel
            trapped by the systems they invested in.
          </p>
        </div>
      </div>
    </section>
  );
}
