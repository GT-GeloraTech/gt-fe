"use client";

import { useState } from "react";
import type { ApplicationData } from "@/types/application";

interface Props {
  onBack: () => void;
  onNext: () => void;
  formData: ApplicationData;
  setFormData: React.Dispatch<React.SetStateAction<ApplicationData>>;
}

export default function ExperienceForm({ onBack, onNext, formData, setFormData }: Props) {
  const form = formData.experience;

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      experience: {
        ...prev.experience,
        [e.target.name]: e.target.value,
      },
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.yearsOfExperience.trim()) {
      newErrors.yearsOfExperience = "Experience is required";
    }

    if (!form.experienceDetails.trim()) {
      newErrors.experienceDetails = "Experience details are required";
    }

    if (!form.currentCTC.trim()) {
      newErrors.currentCTC = "Current CTC is required";
    }

    if (!form.expectedCTC.trim()) {
      newErrors.expectedCTC = "Expected CTC is required";
    }

    if (!form.noticePeriod) {
      newErrors.noticePeriod = "Please select notice period";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    onNext();
  };
  return (
    <div className="rounded-[32px] border border-[#B77AD3] bg-white p-8 md:p-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#7B3FA0]">Your Experience</h2>

        <p className="mt-2 text-[#8A6A9E]">Tell us about your professional background.</p>

        <div className="mx-auto mt-6 h-px max-w-4xl bg-[#E8D8F2]" />
      </div>

      {/* Total Experience */}
      <div className="mt-8">
        <Label>Total Years of Experience *</Label>

        <Input
          name="yearsOfExperience"
          value={form.yearsOfExperience}
          onChange={(e) => {
            const value = e.target.value;

            if (/^\d*\.?\d*$/.test(value)) {
              handleChange(e);
            }
          }}
          placeholder="Enter total experience"
          error={errors.yearsOfExperience}
        />
      </div>

      {/* Company */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-[#7B3FA0]">Current Company (Optional)</h3>

        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div>
            <Label>Company Name</Label>
            <Input
              name="currentCompany"
              value={form.currentCompany}
              onChange={handleChange}
              placeholder="Enter your current company"
            />
          </div>

          <div>
            <Label>Designation</Label>
            <Input
              name="currentRole"
              value={form.currentRole}
              onChange={handleChange}
              placeholder="Enter your designation"
            />
          </div>
        </div>
      </div>

      {/* Experience Details */}
      <div className="mt-6">
        <Label>Experience Details *</Label>

        <div className="relative">
          <textarea
            rows={5}
            name="experienceDetails"
            value={form.experienceDetails}
            onChange={handleChange}
            placeholder="Describe your role, responsibilities and key achievements..."
            className="w-full rounded-xl border border-[#D9C2E8] px-4 py-3 text-[#374151] outline-none placeholder:text-gray-400 focus:border-[#7B3FA0]"
          />

          {errors.experienceDetails && (
            <p className="mt-1 text-sm text-red-500">{errors.experienceDetails}</p>
          )}

          <span className="absolute right-4 bottom-3 text-xs text-gray-400">
            {form.experienceDetails.length}/500
          </span>
        </div>
      </div>

      {/* CTC */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div>
          <Label>Current CTC (in LPA) *</Label>
          <Input
            name="currentCTC"
            value={form.currentCTC}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*\.?\d*$/.test(value)) {
                handleChange(e);
              }
            }}
            placeholder="₹ e.g. 6.50"
            error={errors.currentCTC}
          />
        </div>

        <div>
          <Label>Expected CTC (in LPA) *</Label>
          <Input
            name="expectedCTC"
            value={form.expectedCTC}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*\.?\d*$/.test(value)) {
                handleChange(e);
              }
            }}
            placeholder="₹ e.g. 8.00"
            error={errors.expectedCTC}
          />
        </div>
      </div>

      {/* Notice Period */}
      <div className="mt-8">
        <Label>Notice Period *</Label>

        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {["Immediate", "Within 15 days", "Within 30 days", "More than 30 days"].map((item) => (
            <label
              key={item}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#D9C2E8] bg-white px-4 text-[#374151] hover:border-[#7B3FA0]"
            >
              <input
                type="radio"
                name="notice"
                value={item}
                checked={form.noticePeriod === item}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    experience: {
                      ...prev.experience,
                      noticePeriod: e.target.value,
                    },
                  }));

                  setErrors((prev) => ({
                    ...prev,
                    noticePeriod: "",
                  }));
                }}
                className="accent-[#7B3FA0]"
              />

              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
        {errors.noticePeriod && <p className="mt-2 text-sm text-red-500">{errors.noticePeriod}</p>}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex justify-between">
        <button
          onClick={onBack}
          className="rounded-full border border-[#7B3FA0] px-8 py-4 text-[#7B3FA0] transition hover:bg-[#FAF6FD]"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="rounded-full bg-[#D4A24C] px-8 py-4 font-medium text-black transition hover:scale-105"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-sm font-semibold text-[#7B3FA0]">{children}</label>;
}

function Input({
  placeholder,
  name,
  value,
  onChange,
  error,
  type = "text",
  min,
  step,
}: {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-12 w-full rounded-xl border bg-white px-4 text-[#374151] outline-none placeholder:text-gray-400 ${
          error ? "border-red-500" : "border-[#D9C2E8] focus:border-[#7B3FA0]"
        }`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
