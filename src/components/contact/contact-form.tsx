"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const inquiryOptions = [
  { value: "general", label: "General enquiry" },
  { value: "web", label: "Web development" },
  { value: "mobile", label: "Mobile app" },
  { value: "cloud", label: "Cloud / infrastructure" },
  { value: "ai", label: "AI automation" },
  { value: "security", label: "Cybersecurity" },
  { value: "consulting", label: "IT consulting" },
  { value: "other", label: "Other (tell us)" },
];

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "general",
  customInquiry: "",
  message: "",
  consent: false,
  website: "", // honeypot — must stay empty
};

type FormState = typeof emptyForm;
type FieldErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const next: FieldErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!formData.fullName.trim()) next.fullName = "Full name is required";
    else if (formData.fullName.trim().length < 2)
      next.fullName = "Name must be at least 2 characters";

    if (!formData.email.trim()) next.email = "Email is required";
    else if (!emailRegex.test(formData.email)) next.email = "Enter a valid email";

    if (formData.phone.replace(/[\s-]/g, "").length > 0) {
      if (!/^[+()\d\s-]{6,20}$/.test(formData.phone)) next.phone = "Enter a valid phone number";
    }

    if (formData.company.length > 100) next.company = "Company name is too long";

    if (formData.inquiryType === "other") {
      if (!formData.customInquiry.trim())
        next.customInquiry = "Please tell us what you need help with";
      else if (formData.customInquiry.trim().length < 3)
        next.customInquiry = "Please add a little more detail";
      else if (formData.customInquiry.length > 120)
        next.customInquiry = "Keep this under 120 characters";
    }

    if (!formData.message.trim()) next.message = "Project details are required";
    else if (formData.message.trim().length < 15) next.message = "Please provide more details";

    if (!formData.consent) next.consent = "Please accept so we can contact you";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;

    if (name === "fullName" && typeof value === "string" && value.startsWith(" ")) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Honeypot: a real user never fills this. Pretend success, skip the DB.
    if (formData.website.trim() !== "") {
      setIsSubmitted(true);
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setSubmitError("Messaging is not configured yet. Please email us at hello@geloratech.com.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const { error } = await supabase.from("contact_inquiry").insert({
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        company: formData.company.trim() || null,
        inquiry_type: formData.inquiryType,
        inquiry_other: formData.inquiryType === "other" ? formData.customInquiry.trim() : null,
        message: formData.message.trim(),
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });

      if (error) throw error;

      setFormData(emptyForm);
      setErrors({});
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Something went wrong while sending your message. Please try again or email hello@geloratech.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setErrors({});
    setSubmitError("");
    setIsSubmitted(false);
  };

  const inputBase =
    "w-full rounded-2xl border bg-white/[0.03] p-4 transition outline-none placeholder:text-zinc-500";
  const fieldBorder = (hasError?: string) =>
    hasError ? "border-red-500" : "focus:border-primary border-white/10";

  const flip = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { rotateY: 90, opacity: 0 },
        animate: { rotateY: 0, opacity: 1 },
        exit: { rotateY: -90, opacity: 0 },
      };

  return (
    <div className="[perspective:1600px]">
      <AnimatePresence mode="wait" initial={false}>
        {!isSubmitted ? (
          <motion.div
            key="form"
            {...flip}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card border-primary/10 rounded-[32px] border p-8 [transform-style:preserve-3d] md:p-10"
          >
            <h2 className="mb-8 text-3xl font-semibold">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-muted mb-3 block text-sm">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    maxLength={80}
                    autoComplete="name"
                    placeholder="John Doe"
                    className={`${inputBase} ${fieldBorder(errors.fullName)}`}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="text-muted mb-3 block text-sm">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="john@company.com"
                    className={`${inputBase} ${fieldBorder(errors.email)}`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-muted mb-3 block text-sm">Phone (Optional)</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={20}
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className={`${inputBase} ${fieldBorder(errors.phone)}`}
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
                </div>

                <div>
                  <label className="text-muted mb-3 block text-sm">Company (Optional)</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    maxLength={100}
                    autoComplete="organization"
                    placeholder="Company name"
                    className={`${inputBase} ${fieldBorder(errors.company)}`}
                  />
                  {errors.company && <p className="mt-2 text-sm text-red-400">{errors.company}</p>}
                </div>
              </div>

              <div>
                <label className="text-muted mb-3 block text-sm">How can we help?</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`${inputBase} focus:border-primary border-white/10 [&>option]:bg-[#2a0f2f]`}
                >
                  {inquiryOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                {formData.inquiryType === "other" && (
                  <div className="mt-4">
                    <input
                      name="customInquiry"
                      value={formData.customInquiry}
                      onChange={handleChange}
                      maxLength={120}
                      autoFocus
                      placeholder="Briefly, what do you need help with?"
                      className={`${inputBase} ${fieldBorder(errors.customInquiry)}`}
                    />
                    {errors.customInquiry && (
                      <p className="mt-2 text-sm text-red-400">{errors.customInquiry}</p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="text-muted mb-3 block text-sm">Project Details</label>
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={4000}
                  placeholder="Tell us about your project, goals and timeline..."
                  className={`${inputBase} resize-none ${fieldBorder(errors.message)}`}
                />
                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>

              {/* Honeypot — hidden from humans, catches bots */}
              <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="accent-primary mt-1 h-4 w-4 flex-shrink-0"
                  />
                  <span className="text-muted">
                    I agree to be contacted by Gelora Tech regarding my enquiry and accept the{" "}
                    <Link
                      href="/privacy"
                      className="text-primary underline-offset-2 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && <p className="mt-2 text-sm text-red-400">{errors.consent}</p>}
              </div>

              {submitError && (
                <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary mt-2 inline-flex items-center gap-2 rounded-2xl px-10 py-5 text-lg font-medium text-black transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            {...flip}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card border-primary/20 flex min-h-[520px] flex-col items-center justify-center rounded-[32px] border p-10 text-center [transform-style:preserve-3d] md:p-14"
          >
            <motion.div
              initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-primary/10 text-primary border-primary/30 mb-8 flex h-20 w-20 items-center justify-center rounded-full border"
            >
              <CheckCircle2 size={40} />
            </motion.div>

            <h2 className="text-3xl font-semibold md:text-4xl">Thank you for reaching out</h2>

            <p className="text-muted mx-auto mt-5 max-w-md text-lg leading-8">
              Your message has reached the Gelora Tech team. One of our specialists will review the
              details of your enquiry and respond personally within one business day.
            </p>

            <p className="text-muted mx-auto mt-4 max-w-md leading-7">
              Need something urgent? Email us directly at{" "}
              <a
                href="mailto:hello@geloratech.com"
                className="text-primary underline-offset-2 hover:underline"
              >
                hello@geloratech.com
              </a>
              .
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-7 py-4 font-medium transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                <ArrowLeft size={18} />
                Send another message
              </button>
              <Link
                href="/projects"
                className="bg-primary inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-medium text-black transition hover:scale-[1.03]"
              >
                Explore our work
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
