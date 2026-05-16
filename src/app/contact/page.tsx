import { ContactHero } from "@/components/contact/contact-hero";
import { ContactIntro } from "@/components/contact/contact-intro";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="noise" />

        <ContactHero />
        <ContactIntro />
        <section className="px-6 pb-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[420px_1fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
