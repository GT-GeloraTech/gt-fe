import CareersHero from "@/components/careers/CareersHero";
import HiringProcess from "@/components/careers/HiringProcess";
import JobFilters from "@/components/careers/JobFilters";
import ResumeDropZone from "@/components/careers/ResumeDropZone";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#220027] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 py-12 sm:px-6 lg:px-8">
          <CareersHero />
          <HiringProcess />
          <JobFilters />
          <ResumeDropZone />
        </div>
      </main>
      <Footer />
    </>
  );
}
