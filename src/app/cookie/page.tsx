import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Container } from "@/components/common/container";

export default function CookiesPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#35143d] pt-36 pb-28 text-white">
        <Container>
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
            {/* Header */}
            <div className="border-b border-white/10 pb-10">
              <p className="text-sm font-medium tracking-[0.18em] text-[#d4b06a] uppercase">
                Legal
              </p>

              <h1 className="mt-4 text-4xl leading-tight font-medium tracking-tight text-zinc-100">
                Cookies Policy
              </h1>
            </div>

            {/* Content */}
            <div className="mt-14 space-y-16 text-[16px] leading-8 text-zinc-300">
              <section>
                <h2 className="text-[20px] font-medium tracking-tight text-zinc-200">
                  Cookies Policy — Gelora Tech
                </h2>

                <p className="mt-6">
                  This Cookies Policy explains how<b> Gelora Tech </b> uses cookies, tracking
                  technologies, and similar tools when you access or use our websites, applications,
                  platforms, and related services.
                </p>

                <p className="mt-6">
                  By continuing to use our services, you consent to the use of cookies and related
                  technologies as described in this policy.
                </p>
              </section>

              <PolicySection title="1. What Are Cookies">
                <p>
                  Cookies are small text files stored on your device by websites and applications.
                  Cookies help improve functionality, user experience, analytics, performance, and
                  security.
                </p>
              </PolicySection>

              <PolicySection title="2. Types of Cookies We May Use">
                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Essential cookies</li>
                  <li>Performance and analytics cookies</li>
                  <li>Functional preference cookies</li>
                  <li>Security and authentication cookies</li>
                  <li>Third-party integration cookies</li>
                </ul>
              </PolicySection>

              <PolicySection title="3. Purpose of Cookies">
                <p>We may use cookies to:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Maintain website functionality</li>
                  <li>Improve user experience and performance</li>
                  <li>Analyze traffic and usage patterns</li>
                  <li>Enhance security and fraud prevention</li>
                  <li>Remember user preferences and settings</li>
                  <li>Support integrations with third-party services</li>
                </ul>
              </PolicySection>

              <PolicySection title="4. Third-Party Cookies">
                <p>
                  Some services or integrations may use third-party cookies, including analytics
                  providers, hosting platforms, APIs, embedded content, or external tools.
                </p>

                <p className="mt-6">
                  <b> Gelora Tech </b> is not responsible for the practices or policies of
                  third-party providers. Users are encouraged to review third-party privacy and
                  cookie policies separately.
                </p>
              </PolicySection>

              <PolicySection title="5. Cookie Management">
                <p>
                  Most web browsers allow users to manage, block, or delete cookies through browser
                  settings.
                </p>

                <p className="mt-6">
                  Disabling cookies may affect functionality, performance, or availability of
                  certain services or features.
                </p>
              </PolicySection>

              <PolicySection title="6. Analytics & Tracking">
                <p>
                  <b> Gelora Tech </b> may use analytics or monitoring technologies to understand
                  website usage, system performance, traffic trends, and technical diagnostics.
                </p>

                <p className="mt-6">
                  Analytics data may be collected in aggregated or anonymized form where applicable.
                </p>
              </PolicySection>

              <PolicySection title="7. Data Security">
                <p>
                  We implement commercially reasonable safeguards designed to protect information
                  collected through cookies and related technologies.
                </p>

                <p className="mt-6">
                  However, no digital storage or transmission method can be guaranteed as fully
                  secure.
                </p>
              </PolicySection>

              <PolicySection title="8. Changes to This Cookies Policy">
                <p>
                  <b> Gelora Tech </b> reserves the right to modify or update this Cookies Policy at
                  any time without prior notice.
                </p>

                <p className="mt-6">
                  Continued use of services after updates constitutes acceptance of the revised
                  policy.
                </p>
              </PolicySection>

              <PolicySection title="9. Governing Law">
                <p>
                  This Cookies Policy shall be governed and interpreted in accordance with the laws
                  of India.
                </p>
              </PolicySection>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-white/6 pb-14">
      <h2 className="text-[18px] font-medium tracking-tight text-zinc-200">{title}</h2>

      <div className="mt-5 space-y-5 text-[16px] leading-8 text-zinc-300">{children}</div>
    </section>
  );
}
