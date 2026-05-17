import { AboutHero } from "@/components/about/about-hero";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutStory } from "@/components/about/about-story";
import { MissionVision } from "@/components/about/mission-vision";
import { CoreValues } from "@/components/about/core-values";
import { HowWeWork } from "@/components/about/how-we-work";
import { AboutCTA } from "@/components/about/about-cta";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="noise" />

        <AboutHero />
        <AboutIntro />
        <AboutStory />
        <MissionVision />
        <CoreValues />
        <HowWeWork />
        {/* <AboutCTA /> */}
      </main>
      <Footer />
    </>
  );
}
