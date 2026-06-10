"use client";

import { useState } from "react";
import { Linkedin, Shield } from "lucide-react";
import type { ApplicationData } from "@/types/application";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
  onNext: () => void;
  formData: ApplicationData;
  setFormData: React.Dispatch<React.SetStateAction<ApplicationData>>;
}

export default function PersonalDetailsForm({ onNext, formData, setFormData }: Props) {
  const form = formData.personalDetails;

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
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

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!isValidPhoneNumber(form.phone)) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!form.location.trim()) {
      newErrors.location = "Current Location is required";
    }

    if (!form.employment) {
      newErrors.employment = "Please select employment type";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    // console.log("Personal Details:", form);

    onNext();
  };

  return (
    <div className="rounded-[32px] border border-[#B77AD3] bg-white p-8 md:p-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#7B3FA0]">Let&apos;s get started</h2>

        <p className="mt-2 text-[#8A6A9E]">Tell us a bit about yourself</p>

        <div className="mx-auto mt-6 h-px max-w-4xl bg-[#E8D8F2]" />
      </div>

      {/* Form Fields */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Input
          label="Full Name *"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          error={errors.fullName}
        />

        <Input
          label="Email Address *"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#7B3FA0]">Phone Number *</label>

          <div
            className={`rounded-xl border bg-white px-4 transition-all ${
              errors.phone ? "border-red-500" : "border-[#D9C2E8] focus-within:border-[#7B3FA0]"
            }`}
          >
            <PhoneInput
              international
              defaultCountry="IN"
              countryCallingCodeEditable={false}
              value={form.phone}
              onChange={(value) => {
                setFormData((prev) => ({
                  ...prev,
                  personalDetails: {
                    ...prev.personalDetails,
                    phone: value || "",
                  },
                }));

                setErrors((prev) => ({
                  ...prev,
                  phone: "",
                }));
              }}
              placeholder="Enter your phone number"
              className="phone-input"
            />
          </div>

          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <Input
          label="Current Location *"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Enter your city"
          error={errors.location}
        />
      </div>

      {/* Employment */}
      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-[#7B3FA0]">
          Current Employment *
        </label>

        <div className="flex flex-wrap gap-3">
          {["Full Time", "Part-time", "Contract", "Freelance", "Not Employed"].map((item) => (
            <label
              key={item}
              className={`flex h-12 min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 text-sm font-medium transition-all ${
                form.employment === item
                  ? "border-[#7B3FA0] bg-[#F7F1FB] text-[#7B3FA0]"
                  : "border-[#D9C2E8] bg-white text-[#374151]"
              }`}
            >
              <input
                type="radio"
                name="employment"
                value={item}
                checked={form.employment === item}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      employment: e.target.value,
                    },
                  }));

                  setErrors((prev) => ({
                    ...prev,
                    employment: "",
                  }));
                }}
                className="h-4 w-4 accent-[#7B3FA0]"
              />

              <span>{item}</span>
            </label>
          ))}
        </div>

        {errors.employment && <p className="mt-2 text-sm text-red-500">{errors.employment}</p>}
      </div>

      {/* LinkedIn */}
      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-[#7B3FA0]">
          LinkedIn Profile (Optional)
        </label>

        <div className="flex h-14 items-center rounded-xl border border-[#D9C2E8] bg-white px-4">
          <Linkedin size={18} className="mr-3 text-[#7B3FA0]" />

          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full text-[#374151] outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Continue */}
      <div className="mt-10 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="rounded-full bg-[#D4A24C] px-8 py-4 font-medium text-black transition hover:scale-105"
        >
          Continue →
        </button>
      </div>

      {/* Privacy */}
      <div className="mt-10 rounded-2xl border border-[#E4D3EE] p-5">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#F5ECFA] p-3">
            <Shield size={18} className="text-[#7B3FA0]" />
          </div>

          <div>
            <p className="font-semibold text-[#7B3FA0]">Your data is safe with us</p>

            <p className="mt-1 text-sm text-gray-600">
              We respect your privacy. Your information will only be be used for recruitment
              purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function Input({ label, placeholder, name, value, onChange, error }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#7B3FA0]">{label}</label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-14 w-full rounded-xl border bg-white px-4 text-black transition-all outline-none ${
          error ? "border-red-500" : "border-[#D9C2E8] focus:border-[#7B3FA0]"
        }`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
