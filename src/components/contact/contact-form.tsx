"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    company: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      company: "",
      projectDetails: "",
      timeline: "",
      budget: "",
    };

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.startsWith(" ")) {
      newErrors.fullName = "Name cannot start with a space";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Company
    if (formData.company.length > 80) {
      newErrors.company = "Company name is too long";
    }

    // Project
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = "Please provide more details";
    }

    // Timeline
    if (formData.timeline.length > 40) {
      newErrors.timeline = "Timeline is too long";
    }

    // Budget
    if (formData.budget.length > 40) {
      newErrors.budget = "Budget is too long";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Prevent leading spaces on name
    if (name === "fullName" && value.startsWith(" ")) {
      setErrors((prev) => ({
        ...prev,
        fullName: "Name cannot start with a space",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      console.log(formData);

      // API call here

      // reset form after success
      setFormData({
        fullName: "",
        email: "",
        company: "",
        projectDetails: "",
        timeline: "",
        budget: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card border-primary/10 rounded-[32px] border p-8 md:p-10">
      <h2 className="mb-8 text-3xl font-semibold">Send Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="text-muted mb-3 block text-sm">Full Name</label>

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            maxLength={60}
            autoComplete="name"
            placeholder="John Doe"
            className={`w-full rounded-2xl border bg-white/[0.03] p-4 transition outline-none ${
              errors.fullName ? "border-red-500" : "focus:border-primary border-white/10"
            }`}
          />

          {errors.fullName && <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-muted mb-3 block text-sm">Business Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="john@company.com"
            className={`w-full rounded-2xl border bg-white/[0.03] p-4 transition outline-none ${
              errors.email ? "border-red-500" : "focus:border-primary border-white/10"
            }`}
          />

          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="text-muted mb-3 block text-sm">Company Name (Optional)</label>

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            maxLength={80}
            placeholder="Company name"
            className={`w-full rounded-2xl border bg-white/[0.03] p-4 transition outline-none ${
              errors.company ? "border-red-500" : "focus:border-primary border-white/10"
            }`}
          />

          {errors.company && <p className="mt-2 text-sm text-red-400">{errors.company}</p>}
        </div>

        {/* Project */}
        <div>
          <label className="text-muted mb-3 block text-sm">Project Details</label>

          <textarea
            rows={6}
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className={`w-full resize-none rounded-2xl border bg-white/[0.03] p-4 transition outline-none ${
              errors.projectDetails ? "border-red-500" : "focus:border-primary border-white/10"
            }`}
          />

          {errors.projectDetails && (
            <p className="mt-2 text-sm text-red-400">{errors.projectDetails}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-muted mb-3 block text-sm">Estimated Timeline</label>

            <input
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="2 months"
              className="focus:border-primary w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 outline-none"
            />
          </div>

          <div>
            <label className="text-muted mb-3 block text-sm">Budget Range</label>

            <input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="$5k - $20k"
              className="focus:border-primary w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary mt-4 rounded-2xl px-10 py-5 text-lg font-medium text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
