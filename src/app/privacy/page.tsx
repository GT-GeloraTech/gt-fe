"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Container } from "@/components/common/container";

const smoothEase = [0.22, 1, 0.36, 1] as const;

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
      ease: smoothEase,
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#35143d] pt-36 pb-28 text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                willChange: "transform, opacity",
              }}
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
                  ease: smoothEase,
                }}
                style={{
                  willChange: "transform, opacity",
                }}
                className="mt-4 text-5xl leading-tight font-semibold tracking-tight"
              >
                Privacy Policy
              </motion.h1>
            </motion.div>

            {/* Content */}
            <div className="mt-14 space-y-14 text-[16px] leading-8 text-zinc-400">
              <section>
                <h2 className="text-2xl font-semibold text-white">Privacy Policy — Gelora Tech</h2>

                <p className="mt-6">
                  Welcome to <b> Gelora Tech</b>. We value your privacy and are committed to
                  protecting your information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard information when you use our services, websites,
                  applications, APIs, software solutions, and related technologies.
                </p>

                <p className="mt-6">
                  By accessing or using our services, you agree to the practices described in this
                  Privacy Policy.
                </p>
              </section>

              <PolicySection title="1. Company Information">
                <p>
                  <b>Company Name</b>: Gelora Tech
                </p>
                <p>
                  <b>Business Location </b>: India
                </p>
                <p>
                  <b>Contact Email </b>: contact@geloratech.com
                </p>
              </PolicySection>

              <PolicySection title="2. Scope of Services">
                <p>Gelora Tech provides services including but not limited to:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Custom Software Development</li>
                  <li>Website Development</li>
                  <li>Mobile Application Development</li>
                  <li>AI Automation Solutions</li>
                  <li>Cloud Services</li>
                  <li>API Services</li>
                  <li>IT Consulting</li>
                  <li>Subscription-Based Software Solutions</li>
                  <li>Enterprise Software Solutions</li>
                  <li>Third-Party Integrations</li>
                </ul>
              </PolicySection>

              <PolicySection title="3. Information We May Collect">
                <p>Depending on the nature of the project or service, we may collect:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Business/company details</li>
                  <li>Technical information</li>
                  <li>Communication records</li>
                  <li>Project-related files and content</li>
                  <li>Usage and diagnostic data</li>
                </ul>

                <p className="mt-6">
                  We do not intentionally collect sensitive personal information unless required for
                  a specific business purpose.
                </p>
              </PolicySection>

              <PolicySection title="4. How We Use Information">
                <p>We may use collected information to:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Provide and maintain services</li>
                  <li>Develop and deliver software solutions</li>
                  <li>Improve system performance and security</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Process business communications</li>
                  <li>Monitor and prevent misuse or unauthorized activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </PolicySection>

              <PolicySection title="5. Third-Party Services">
                <p>
                  Our services may integrate with or rely on third-party providers, including cloud
                  hosting, analytics, payment gateways, APIs, or infrastructure services.
                </p>

                <p className="mt-6">
                  Gelora Tech is not responsible for the privacy practices, availability, security,
                  or operations of third-party platforms or services.
                </p>

                <p className="mt-6">
                  Users are encouraged to review third-party privacy policies separately.
                </p>
              </PolicySection>

              <PolicySection title="6. Data Security">
                <p>
                  We implement commercially reasonable technical and organizational measures to help
                  protect information against unauthorized access, misuse, or disclosure.
                </p>

                <p className="mt-6">
                  However, no system, platform, transmission method, or electronic storage mechanism
                  can be guaranteed as completely secure. Users acknowledge and accept these risks.
                </p>
              </PolicySection>

              <PolicySection title="7. Data Retention">
                <p>We may retain information for as long as necessary to:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Fulfill contractual obligations</li>
                  <li>Maintain operational records</li>
                  <li>Resolve disputes</li>
                  <li>Enforce agreements</li>
                  <li>Comply with legal requirements</li>
                </ul>

                <p className="mt-6">
                  Gelora Tech reserves the right to delete, archive, or anonymize data at its
                  discretion unless otherwise required by law or contractual agreement.
                </p>
              </PolicySection>

              <PolicySection title="8. AI & Automated Technologies Disclaimer">
                <p>
                  Some services provided by Gelora Tech may involve AI-assisted tools, automation
                  systems, machine learning models, or generated outputs.
                </p>

                <p className="mt-6">
                  AI-generated or automated outputs may contain inaccuracies, incomplete
                  information, or unintended results. Users are responsible for independently
                  reviewing and validating outputs before relying on them for business, legal,
                  financial, technical, or operational purposes.
                </p>

                <p className="mt-6">
                  Gelora Tech does not guarantee the accuracy, reliability, or suitability of
                  AI-generated content.
                </p>
              </PolicySection>

              <PolicySection title="9. User Responsibilities">
                <p>Users are solely responsible for:</p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Content, files, or data submitted to our systems</li>
                  <li>Ensuring they have necessary rights or permissions</li>
                  <li>Compliance with applicable laws and regulations</li>
                  <li>Maintaining confidentiality of credentials and access</li>
                </ul>

                <p className="mt-6">
                  Users must not upload or transmit unlawful, harmful, malicious, infringing, or
                  unauthorized content.
                </p>
              </PolicySection>

              <PolicySection title="10. Suspension & Termination">
                <p>
                  Gelora Tech reserves the right to suspend, restrict, or terminate access to
                  services at any time, without prior notice, if we reasonably believe a user:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Violates applicable laws</li>
                  <li>Abuses services or infrastructure</li>
                  <li>Engages in fraudulent or harmful activities</li>
                  <li>Violates these policies or agreements</li>
                </ul>
              </PolicySection>

              <PolicySection title="11. Intellectual Property">
                <p>
                  Unless otherwise agreed in writing, all proprietary systems, frameworks, source
                  code, software architecture, tools, designs, documentation, branding, and related
                  materials developed or owned by Gelora Tech remain the intellectual property of
                  Gelora Tech.
                </p>

                <p className="mt-6">
                  Third-party assets remain the property of their respective owners.
                </p>
              </PolicySection>

              <PolicySection title="12. No Warranty">
                <p>
                  All services, software, APIs, automation systems, platforms, and deliverables are
                  provided on an “as is” and “as available” basis without warranties of any kind,
                  whether express, implied, statutory, or otherwise.
                </p>

                <p className="mt-6">
                  Gelora Tech disclaims all warranties including, but not limited to:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Availability</li>
                  <li>Accuracy</li>
                  <li>Reliability</li>
                  <li>Security</li>
                  <li>Uninterrupted operation</li>
                </ul>
              </PolicySection>

              <PolicySection title="13. Limitation of Liability">
                <p>
                  To the maximum extent permitted under applicable law, Gelora Tech shall not be
                  liable for:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Indirect damages</li>
                  <li>Incidental damages</li>
                  <li>Consequential damages</li>
                  <li>Loss of profits</li>
                  <li>Business interruption</li>
                  <li>Data loss</li>
                  <li>Security incidents</li>
                  <li>Service downtime</li>
                  <li>Third-party failures</li>
                </ul>

                <p className="mt-6">Use of our services is at the user&apos;s own risk.</p>
              </PolicySection>

              <PolicySection title="14. Force Majeure">
                <p>
                  Gelora Tech shall not be held responsible for delays, interruptions, failures, or
                  inability to perform caused by circumstances beyond reasonable control, including
                  but not limited to:
                </p>

                <ul className="mt-5 ml-5 list-disc space-y-4 marker:text-zinc-500">
                  <li>Natural disasters</li>
                  <li>Government actions</li>
                  <li>Internet failures</li>
                  <li>Cyberattacks</li>
                  <li>Infrastructure outages</li>
                  <li>Labor disputes</li>
                  <li>Pandemic events</li>
                </ul>
              </PolicySection>

              <PolicySection title="15. Changes to This Privacy Policy">
                <p>
                  We reserve the right to modify or update this Privacy Policy at any time without
                  prior notice.
                </p>

                <p className="mt-6">
                  Continued use of services after updates constitutes acceptance of the revised
                  policy.
                </p>
              </PolicySection>

              <PolicySection title="16. Governing Law">
                <p>
                  This Privacy Policy shall be governed by and interpreted in accordance with the
                  laws of India.
                </p>

                <p className="mt-6">
                  Any disputes arising from the use of services shall be subject to the exclusive
                  jurisdiction of the courts located in India.
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
        ease: smoothEase,
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
        className="text-[22px] font-semibold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      <div className="mt-5 space-y-4 text-[16px] leading-8 text-zinc-400">{children}</div>
    </motion.section>
  );
}
