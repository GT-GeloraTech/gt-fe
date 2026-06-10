import Image from "next/image";
const steps = [
  {
    id: "01",
    image: "/process_1.png",
    title: "Quick Introduction",
    desc: "We screen candidates based on technical skills, communication, and overall role alignment to understand your strengths and career goals.",
  },
  {
    id: "02",
    image: "/process_2.png",
    title: "Technical Evaluation",
    desc: "A detailed discussion focused on problem-solving ability, technical depth, architecture thinking, and practical development experience.",
  },
  {
    id: "03",
    image: "/process_3.png",
    title: "Practical Assessment",
    desc: "Complete a role-specific assignment that reflects real project scenarios and helps us evaluate your execution approach.",
  },
  {
    id: "04",
    image: "/process_4.png",
    title: "Welcome Aboard",
    desc: "Final discussions around expectations, compensation, and smooth onboarding experience with the team.",
  },
];

export default function HiringProcess() {
  return (
    <section className="container mx-auto px-6 py-28">
      <div className="text-center">
        <div className="text-sm tracking-[4px] text-[#D4A24C]">HOW IT WORKS</div>

        <h2 className="mt-3 text-4xl font-bold">Our Hiring Process</h2>

        <p className="mt-3 text-white/60">
          Transparent, practical and built to identify exceptional talent.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.id} className="relative text-center">
            <div className="mx-auto h-44 w-44 overflow-hidden rounded-full bg-white">
              <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
            </div>
            {index !== steps.length - 1 && (
              <div className="absolute top-20 left-[65%] hidden w-[70%] border-t-[3px] border-dashed border-white lg:block" />
            )}

            <div className="mx-auto mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#D4A24C] text-sm text-[#D4A24C]">
              {step.id}
            </div>

            <h3 className="mt-4 font-semibold">{step.title}</h3>

            <p className="mt-3 text-sm text-white/60">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
