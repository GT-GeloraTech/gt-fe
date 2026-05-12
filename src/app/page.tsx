// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { siteConfig } from "@/config/site";
// import { routes } from "@/constants/routes";

// export default function HomePage() {
//   return (
//     <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
//       <div className="mx-auto max-w-2xl text-center">
//         <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
//           {siteConfig.name} · Next.js Foundation
//         </h1>
//         <p className="mt-4 text-base text-gray-600">{siteConfig.description}</p>
//         <div className="mt-8 flex items-center justify-center gap-3">
//           <Link href={routes.login}>
//             <Button>Try the login example</Button>
//           </Link>
//           <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer noopener">
//             <Button>Next.js docs</Button>
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// }
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
