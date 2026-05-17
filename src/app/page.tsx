import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { ScrollProgress } from "@/components/common/scroll-progress";

import { HeroSection } from "@/components/sections/hero/hero-section";
import { TrustedBySection } from "@/components/sections/trusted-by/trusted-by-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { AboutSection } from "@/components/sections/about/about-section";
import { WhyUsSection } from "@/components/sections/why-us/why-us-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { FaqSection } from "@/components/sections/faq/faq-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        {/* <TrustedBySection /> */}
        <ServicesSection />
        <AboutSection />
        <WhyUsSection />
        <ProcessSection />
        {/* <ProjectsSection /> */}
        {/* <TestimonialsSection /> */}
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
