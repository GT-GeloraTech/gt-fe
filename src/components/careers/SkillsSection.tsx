import { CheckCircle2 } from "lucide-react";

interface SkillsSectionProps {
  requirements: string[];
  goodToHave: string[];
}

export default function SkillsSection({ requirements, goodToHave }: SkillsSectionProps) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold">Skills</h2>

      {requirements.length > 0 && (
        <>
          <h3 className="mb-4 font-semibold">Must Have</h3>

          <div className="mb-8 flex flex-wrap gap-3">
            {requirements.map((item, index) => (
              <SkillChip key={`${item}-${index}`} label={item} />
            ))}
          </div>
        </>
      )}

      {goodToHave.length > 0 && (
        <>
          <h3 className="mb-4 font-semibold">Nice To Have</h3>

          <div className="flex flex-wrap gap-3">
            {goodToHave.map((item, index) => (
              <SkillChip key={`${item}-${index}`} label={item} />
            ))}
          </div>
        </>
      )}

      <div className="my-10 border-b border-[#D8BCE7]" />
    </section>
  );
}

function SkillChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#B87CD3] px-4 py-2">
      <CheckCircle2 size={16} />
      <span>{label}</span>
    </div>
  );
}
