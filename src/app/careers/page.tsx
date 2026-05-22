import { CareersHero } from "@/components/careers/careers-hero";
import { HiringProcess } from "@/components/careers/hiring-process";
import { JobsSection } from "@/components/careers/jobs-section";
import { CareersCTA } from "@/components/careers/careers-cta";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <CareersHero />
        <HiringProcess />
        <JobsSection />
        <CareersCTA />
      </main>
      <Footer />
    </>
  );
}
