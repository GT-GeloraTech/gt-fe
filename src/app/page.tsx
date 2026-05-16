import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { HeroSection } from "@/components/sections/hero/hero-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { AboutSection } from "@/components/sections/about/about-section";
import { WhyUsSection } from "@/components/sections/why-us/why-us-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyUsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
