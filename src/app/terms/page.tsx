"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/common/container";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#35143d] pt-36 pb-28 text-white">
        <Container>
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
            {/* Header */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="border-b border-white/10 pb-10"
            >
              <p className="text-sm font-medium tracking-[0.18em] text-[#d4b06a] uppercase">
                Legal
              </p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 text-4xl leading-tight font-medium tracking-tight text-zinc-100"
              >
                Terms & Conditions
              </motion.h1>
            </motion.div>

            {/* Content */}
            <div className="mt-14 space-y-16 text-[16px] leading-8 text-zinc-300">
              <section>
                <h2 className="text-[20px] font-medium tracking-tight text-zinc-200">
                  Terms & Conditions — Gelora Tech
                </h2>

                <p className="mt-6">
                  These Terms & Conditions govern access to and use of services provided by
                  <b> Gelora Tech</b>.
                </p>

                <p className="mt-6">
                  By using our services, platforms, applications, APIs, software, or websites, you
                  agree to these Terms.
                </p>
              </section>

              <PolicySection title="1. Services">
                <p>
                  <b>Gelora Tech </b> provides technology-related services including software
                  development, mobile applications, AI automation, cloud solutions, APIs,
                  consulting, enterprise systems, and related digital services.
                </p>

                <p className="mt-6">
                  We reserve the right to modify, suspend, or discontinue any service without
                  notice.
                </p>
              </PolicySection>

              <PolicySection title="2. Eligibility">
                <p>
                  Users must have legal authority and capacity to enter into binding agreements
                  under applicable law.
                </p>
              </PolicySection>

              <PolicySection title="3. Acceptable Use">
                <p>Users agree not to:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Use services for unlawful purposes</li>
                  <li>Attempt unauthorized access</li>
                  <li>Interfere with infrastructure or systems</li>
                  <li>Upload malicious code or harmful content</li>
                  <li>Reverse engineer proprietary systems</li>
                  <li>Violate intellectual property rights</li>
                  <li>Abuse APIs or automation systems</li>
                </ul>

                <p className="mt-6">
                  <b>Gelora Tech </b> may suspend or terminate access for violations.
                </p>
              </PolicySection>

              <PolicySection title="4. Intellectual Property Rights">
                <p>
                  All software, source code, systems, designs, trademarks, documentation,
                  frameworks, automation logic, APIs, and related materials owned by
                  <b>Gelora Tech </b>
                  remain exclusive intellectual property unless otherwise agreed in writing.
                </p>

                <p className="mt-6">No ownership rights are transferred by default.</p>
              </PolicySection>

              <PolicySection title="5. Client Content & Responsibility">
                <p>
                  Users retain responsibility for all data, files, content, credentials, and
                  materials submitted to <b>Gelora Tech </b>.
                </p>

                <p className="mt-6">
                  Users confirm they possess necessary permissions and rights for submitted
                  materials.
                </p>

                <p className="mt-6">
                  <b>Gelora Tech </b> is not responsible for unlawful or unauthorized content
                  provided by users.
                </p>
              </PolicySection>

              <PolicySection title="6. Third-Party Integrations">
                <p>
                  Services may rely on third-party providers, platforms, APIs, hosting services, or
                  infrastructure.
                </p>

                <p className="mt-6">
                  <b>Gelora Tech </b> is not liable for:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Third-party outages</li>
                  <li>API changes</li>
                  <li>Service discontinuation</li>
                  <li>Security incidents originating from third parties</li>
                  <li>External platform limitations</li>
                </ul>
              </PolicySection>

              <PolicySection title="7. Payments & Refunds">
                <p>Unless otherwise agreed in writing:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Payments are non-refundable</li>
                  <li>Delayed payments may result in service suspension</li>
                  <li>Subscription or service fees may change at any time</li>
                  <li>
                    Taxes and statutory charges are the responsibility of the client where
                    applicable
                  </li>
                </ul>
              </PolicySection>

              <PolicySection title="8. No Guarantee of Availability">
                <p>
                  <b>Gelora Tech </b> does not guarantee:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Continuous uptime</li>
                  <li>Error-free operation</li>
                  <li>Uninterrupted services</li>
                  <li>Compatibility with all systems</li>
                  <li>Specific business outcomes or results</li>
                </ul>

                <p className="mt-6">
                  Temporary downtime, maintenance, upgrades, failures, or interruptions may occur.
                </p>
              </PolicySection>

              <PolicySection title="9. AI & Automation Disclaimer">
                <p>
                  AI-generated outputs, automation workflows, recommendations, or machine-generated
                  results may contain errors, inaccuracies, or incomplete information.
                </p>

                <p className="mt-6">
                  Users are solely responsible for verifying outputs before implementation or
                  reliance.
                </p>

                <p className="mt-6">
                  <b>Gelora Tech </b>does not guarantee accuracy or suitability of automated or
                  AI-generated outputs.
                </p>
              </PolicySection>

              <PolicySection title="10. Confidentiality">
                <p>
                  Both parties may exchange confidential information during projects or services.
                </p>

                <p className="mt-6">
                  Unless required by law, neither party shall intentionally disclose confidential
                  business information to unauthorized third parties.
                </p>
              </PolicySection>

              <PolicySection title="11. Limitation of Liability">
                <p>
                  To the fullest extent permitted by law,<b>Gelora Tech </b> shall not be liable
                  for:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Indirect or consequential damages</li>
                  <li>Revenue loss</li>
                  <li>Data loss</li>
                  <li>Business interruption</li>
                  <li>Security breaches</li>
                  <li>Loss caused by third-party services</li>
                  <li>Delays or downtime</li>
                  <li>User misuse of services</li>
                </ul>

                <p className="mt-6">
                  Total liability, if any, shall not exceed the amount paid for the relevant service
                  giving rise to the claim.
                </p>
              </PolicySection>

              <PolicySection title="12. Indemnification">
                <p>
                  Users agree to defend, indemnify, and hold harmless<b>Gelora Tech </b>from claims,
                  liabilities, damages, losses, costs, or legal expenses arising from:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>User misuse</li>
                  <li>Violation of laws</li>
                  <li>Intellectual property infringement</li>
                  <li>Unauthorized activities</li>
                  <li>User-submitted content</li>
                </ul>
              </PolicySection>

              <PolicySection title="13. Service Suspension & Termination">
                <p>
                  <b>Gelora Tech </b> reserves the right to suspend or terminate services
                  immediately without liability if:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Terms are violated</li>
                  <li>Payments remain unpaid</li>
                  <li>Security risks are identified</li>
                  <li>Illegal or abusive activities occur</li>
                </ul>
              </PolicySection>

              <PolicySection title="14. Force Majeure">
                <p>
                  <b>Gelora Tech </b> shall not be responsible for delays or failures caused by
                  events beyond reasonable control, including infrastructure failures, internet
                  outages, government actions, cyberattacks, or natural disasters.
                </p>
              </PolicySection>

              <PolicySection title="15. Governing Law & Jurisdiction">
                <p>These Terms shall be governed under the laws of India.</p>

                <p className="mt-6">
                  Any disputes shall fall under the exclusive jurisdiction of courts located in
                  India.
                </p>
              </PolicySection>

              <PolicySection title="16. Modifications">
                <p>
                  <b>Gelora Tech </b>may update these Terms at any time without prior notice.
                </p>

                <p className="mt-6">
                  Continued use of services constitutes acceptance of revised Terms.
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
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -2,
      }}
      style={{
        willChange: "transform, opacity",
      }}
      className="border-b border-white/8 pb-12 transition-colors duration-300 hover:border-white/15"
    >
      <motion.h2
        whileHover={{
          x: 2,
        }}
        transition={{
          duration: 0.2,
        }}
        className="text-[18px] font-medium tracking-tight text-zinc-200"
      >
        {title}
      </motion.h2>

      <div className="mt-5 space-y-5 text-[16px] leading-8 text-zinc-300">{children}</div>
    </motion.section>
  );
}
