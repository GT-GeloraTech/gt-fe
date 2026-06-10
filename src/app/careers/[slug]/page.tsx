import JobDetailHero from "@/components/careers/JobDetailHero";
import ResponsibilitiesSection from "@/components/careers/ResponsibilitiesSection";
import SkillsSection from "@/components/careers/SkillsSection";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { getJobs } from "@/lib/jobs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;

  const jobs = await getJobs();

  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">Job not found</h1>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7F3F8] text-[#7B3FA0]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 py-12 sm:px-6 lg:px-8">
          <JobDetailHero job={job} />

          <section className="container mx-auto px-6 pb-20">
            <div className="rounded-[32px] border border-[#B87CD3]/50 bg-white/30 p-8 backdrop-blur-sm">
              <ResponsibilitiesSection responsibilities={job.responsibilities} />
              <SkillsSection
                requirements={job.requirements ?? []}
                goodToHave={job.good_to_have ?? []}
              />
              <WhyJoinUs />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
