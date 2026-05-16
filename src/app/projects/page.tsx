import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectsIntro } from "@/components/projects/projects-intro";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsCTA } from "@/components/projects/projects-cta";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="noise" />

        <ProjectsHero />

        <ProjectsIntro />

        <ProjectsGrid />

        <ProjectsCTA />
      </main>
      <Footer />
    </>
  );
}
