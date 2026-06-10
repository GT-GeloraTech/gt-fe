"use client";

import { useState } from "react";
import PersonalDetailsForm from "@/components/careers/apply/PersonalDetailsForm";
import ExperienceForm from "@/components/careers/apply/ExperienceForm";
import ResumeReviewForm from "@/components/careers/apply/ResumeReviewForm";
import type { ApplicationData } from "@/types/application";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const [applicationData, setApplicationData] = useState<ApplicationData>({
    personalDetails: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      employment: "",
      linkedin: "",
    },

    experience: {
      yearsOfExperience: "",
      currentCompany: "",
      currentRole: "",
      experienceDetails: "",
      currentCTC: "",
      expectedCTC: "",
      noticePeriod: "",
    },

    resume: {
      file: null,
    },
  });

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-[#F8F4FA]"
        style={{
          backgroundImage: `
      linear-gradient(rgba(123,63,160,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(123,63,160,0.08) 1px, transparent 1px)
    `,
          backgroundSize: "32px 32px",
        }}
      >
        <section className="container mx-auto px-6 pt-20 pb-12">
          <div className="mx-auto max-w-5xl">
            {/* Top Bar */}
            <div className="mb-10 flex items-center justify-between">
              <button
                onClick={() => router.back()}
                className="text-sm font-medium text-[#7B3FA0] transition hover:underline"
              >
                ← Back to Job
              </button>

              <div className="rounded-full border border-[#B77AD3] px-4 py-1 text-xs font-medium tracking-wide text-[#7B3FA0]">
                GELORA TECH
              </div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-[48px] leading-none font-bold text-[#7B3FA0]">Apply Now</h1>

              <p className="mt-2 text-[#8A6A9E]">Fill in your details and upload your resume.</p>
            </div>

            {/* Stepper */}
            <div className="mt-8">
              <StepIndicator currentStep={step} />
            </div>

            {/* Forms */}
            <div className="mt-10">
              {step === 1 && (
                <PersonalDetailsForm
                  onNext={() => setStep(2)}
                  formData={applicationData}
                  setFormData={setApplicationData}
                />
              )}

              {step === 2 && (
                <ExperienceForm
                  onBack={() => setStep(1)}
                  onNext={() => setStep(3)}
                  formData={applicationData}
                  setFormData={setApplicationData}
                />
              )}

              {step === 3 && (
                <ResumeReviewForm
                  onBack={() => setStep(2)}
                  formData={applicationData}
                  setFormData={setApplicationData}
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = ["Personal Details", "Experience", "Resume & Submit"];

  return (
    <div className="mx-auto mt-8 flex max-w-[520px] items-start">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const active = currentStep === stepNumber;
        const completed = currentStep > stepNumber;

        return (
          <div key={step} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold transition-all ${
                  active || completed ? "bg-[#7B3FA0] text-white" : "bg-[#BDBDBD] text-[#333333]"
                }`}
              >
                {stepNumber}
              </div>

              <span
                className={`mt-3 text-center text-xs font-medium ${
                  active || completed ? "text-[#7B3FA0]" : "text-[#A0A0A0]"
                }`}
              >
                {step}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div className="mb-7 flex-1 px-8">
                <div
                  className={`h-[2px] w-full transition-all ${
                    completed ? "bg-[#7B3FA0]" : "bg-[#D6D6D6]"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
