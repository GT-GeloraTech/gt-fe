import { CheckCircle2 } from "lucide-react";

interface ResponsibilitiesSectionProps {
  responsibilities: string[];
}

export default function ResponsibilitiesSection({
  responsibilities,
}: ResponsibilitiesSectionProps) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold">Responsibilities</h2>

      <div className="space-y-5">
        {responsibilities.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-start gap-3">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="my-10 border-b border-[#D8BCE7]" />
    </section>
  );
}
