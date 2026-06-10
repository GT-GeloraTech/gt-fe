"use client";

import { Upload, User, BriefcaseBusiness, Linkedin, Shield, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { uploadResume } from "@/lib/uploadResume";
import type { ApplicationData } from "@/types/application";
import { useRouter } from "next/navigation";

interface Props {
  onBack: () => void;
  formData: ApplicationData;
  setFormData: React.Dispatch<React.SetStateAction<ApplicationData>>;
}

export default function ResumeReviewForm({ onBack, formData, setFormData }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const [agreed, setAgreed] = useState(false);

  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Only PDF, DOC or DOCX files are allowed",
      }));
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size must be under 10MB",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resume: {
        file,
      },
    }));

    setErrors((prev) => ({
      ...prev,
      resume: "",
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    processFile(file);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    processFile(file);
  };

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {};

    if (!formData.resume.file) {
      newErrors.resume = "Resume is required";
    }

    if (!agreed) {
      newErrors.agreement = "Please accept the declaration";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      if (!supabase) {
        throw new Error("Supabase not configured");
      }

      const resumeUrl = await uploadResume(formData.resume.file!);

      const referenceId = `GLR-${new Date().getFullYear()}-${Math.floor(
        1000 + Math.random() * 9000,
      )}`;

      const { data, error } = await supabase
        .from("job_applications")
        .insert({
          full_name: formData.personalDetails.fullName,
          email: formData.personalDetails.email,
          phone: formData.personalDetails.phone,
          location: formData.personalDetails.location,
          employment: formData.personalDetails.employment,
          linkedin: formData.personalDetails.linkedin,

          years_of_experience: formData.experience.yearsOfExperience,
          current_company: formData.experience.currentCompany,
          current_role: formData.experience.currentRole,
          experience_details: formData.experience.experienceDetails,
          current_ctc: formData.experience.currentCTC,
          expected_ctc: formData.experience.expectedCTC,
          notice_period: formData.experience.noticePeriod,

          resume_url: resumeUrl,

          application_reference: referenceId,
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      router.push(`/careers/application-success?ref=${referenceId}`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="rounded-[32px] border border-[#B77AD3] bg-white p-8 md:p-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#7B3FA0]">Resume & Submit</h2>

        <p className="mt-2 text-[#8A6A9E]">
          Upload your resume & review your details to submit your application
        </p>

        <div className="mx-auto mt-6 h-px max-w-4xl bg-[#E8D8F2]" />
      </div>

      {/* Upload */}
      {/* Upload */}
      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-[#7B3FA0]">
          Upload your Resume *
        </label>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => {
            setIsDragging(false);
          }}
          onDrop={handleDrop}
          className={`rounded-[24px] border-2 border-dashed p-12 transition-all ${
            isDragging ? "border-[#7B3FA0] bg-[#F7F1FB]" : "border-[#E3BDEB] bg-[#FCFAFD]"
          }`}
        >
          <div className="flex flex-col items-center">
            <Upload size={40} className="text-[#7B3FA0]" />

            {!formData.resume.file ? (
              <>
                <p className="mt-4 text-lg font-medium text-[#7B3FA0]">
                  Drag and drop your file here
                </p>

                <span className="my-3 text-sm text-gray-400">or</span>

                <label className="cursor-pointer rounded-full border border-[#B77AD3] px-6 py-3 text-[#7B3FA0] transition hover:bg-[#F7F1FB]">
                  Choose File
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </>
            ) : (
              <>
                <p className="mt-4 text-lg font-semibold text-[#7B3FA0]">
                  Resume Uploaded Successfully
                </p>

                <div className="mt-4 rounded-xl bg-[#F7F1FB] px-5 py-3 text-sm font-medium text-[#7B3FA0]">
                  📄 {formData.resume.file.name}
                </div>

                <label className="mt-4 cursor-pointer text-sm font-medium text-[#7B3FA0] underline">
                  Change File
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </>
            )}

            {errors.resume && <p className="mt-4 text-sm text-red-500">{errors.resume}</p>}
          </div>
        </div>
      </div>

      {/* Review Card */}
      <div className="mt-8 rounded-[24px] border border-[#E8D8F2]">
        <div className="border-b border-[#E8D8F2] px-6 py-4">
          <h3 className="font-semibold text-[#7B3FA0]">Review your Details</h3>
        </div>

        {/* Personal */}
        <div className="grid grid-cols-[180px_1fr] border-b border-[#E8D8F2] px-6 py-6">
          <div className="flex items-start gap-2 text-[#7B3FA0]">
            <User size={16} />
            <span className="font-medium">Personal Details</span>
          </div>

          <div className="grid grid-cols-2 gap-y-2">
            <span className="font-semibold text-[#6B4E7E]">Name</span>
            <span className="font-medium text-[#4B5563]">{formData.personalDetails.fullName}</span>
            <span className="font-semibold text-[#6B4E7E]">Email</span>
            <span className="font-medium text-[#4B5563]">{formData.personalDetails.email}</span>

            <span className="font-semibold text-[#6B4E7E]">Phone</span>

            <span className="font-medium text-[#4B5563]">{formData.personalDetails.phone}</span>

            <span className="font-semibold text-[#6B4E7E]">Location</span>
            <span className="font-medium text-[#4B5563]">{formData.personalDetails.location}</span>
          </div>
        </div>

        {/* Experience */}
        <div className="grid grid-cols-[180px_1fr] border-b border-[#E8D8F2] px-6 py-6">
          <div className="flex items-start gap-2 text-[#7B3FA0]">
            <BriefcaseBusiness size={16} />
            <span className="font-medium">Experience</span>
          </div>

          <div className="grid grid-cols-2 gap-y-2">
            <span className="font-medium text-[#7B3FA0]">Total Experience</span>
            <span className="font-medium text-[#4B5563]">
              {formData.experience.yearsOfExperience}
            </span>

            <span className="font-medium text-[#7B3FA0]">Current CTC</span>
            <span className="font-medium text-[#4B5563]">
              ₹ {formData.experience.currentCTC} LPA
            </span>

            <span className="font-medium text-[#7B3FA0]">Notice Period</span>
            <span className="font-medium text-[#4B5563]">{formData.experience.noticePeriod}</span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-[180px_1fr] px-6 py-6">
          <div className="flex items-start gap-2 text-[#7B3FA0]">
            <Linkedin size={16} />
            <span className="font-medium">Additional Links</span>
          </div>

          <div className="grid grid-cols-2">
            <span className="font-medium text-[#7B3FA0]">LinkedIn</span>
            <span className="font-medium text-[#4B5563]">
              {formData.personalDetails.linkedin || "-"}
            </span>
          </div>
        </div>
      </div>

      {/* Confirmation */}
      <div className="mt-6 rounded-xl border border-[#E8D8F2] p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 accent-[#7B3FA0]"
          />
          {errors.agreement && <p className="mt-2 text-sm text-red-500">{errors.agreement}</p>}

          <span className="text-sm text-[#4B5563]">
            I confirm that all information provided is true and accurate. I understand that any
            incorrect information may affect my application.
          </span>
        </label>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="rounded-full border border-[#B77AD3] px-8 py-4 text-[#7B3FA0]"
        >
          ← Back
        </button>

        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 rounded-full bg-[#D4A24C] px-8 py-4 font-medium text-black"
        >
          Submit Application
          <Send size={16} />
        </button>
      </div>

      {/* Privacy */}
      <div className="mt-8 rounded-2xl border border-[#E8D8F2] p-5">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#F5ECFA] p-3">
            <Shield size={18} className="text-[#7B3FA0]" />
          </div>

          <div>
            <p className="font-semibold text-[#7B3FA0]">Your data is safe with us</p>

            <p className="text-sm text-gray-600">
              We respect your privacy. Your information will only be used for recruitment purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
