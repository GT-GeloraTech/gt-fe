import { ServicesHero } from "@/components/services/services-hero";
import { ServicesIntro } from "@/components/services/services-intro";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesCTA } from "@/components/services/services-cta";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="noise" />

        <ServicesHero />

        <ServicesIntro />

        <ServicesGrid />

        {/* <ServicesCTA /> */}
      </main>
      <Footer />
    </>
  );
}
