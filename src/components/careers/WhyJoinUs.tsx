import { Laptop, Rocket, Target, Users } from "lucide-react";

const perks = [
  {
    title: "Modern engineering culture",
    icon: <Rocket size={18} />,
  },
  {
    title: "Remote-friendly workflow",
    icon: <Laptop size={18} />,
  },
  {
    title: "Real ownership & autonomy",
    icon: <Target size={18} />,
  },
  {
    title: "Fast-growing product ecosystem",
    icon: <Users size={18} />,
  },
];

export default function WhyJoinUs() {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold">Why Join Us</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk) => (
          <div key={perk.title} className="rounded-2xl bg-[#F3EAF8] p-5">
            <div className="mb-3">{perk.icon}</div>

            <div className="text-sm font-medium">{perk.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
