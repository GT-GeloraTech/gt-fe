"use client";

import { Briefcase, Mail, MapPin, Paperclip, Phone, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function UploadResumePage() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden px-6 py-24">
        {/* BG */}
        <div className="hero-glow opacity-40" />
        <div className="noise pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[420px_1fr]">
          {/* ================= LEFT SIDE ================= */}
          <div className="sticky top-24">
            <div className="border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Join Our Team
            </div>

            <h1 className="mt-8 text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl">
              Let’s build
              <span className="from-primary to-primary block bg-gradient-to-r via-yellow-200 bg-clip-text text-transparent">
                something great
              </span>
              together.
            </h1>

            <p className="text-muted mt-6 max-w-md text-lg leading-8">
              We’re always looking for talented people who are passionate about building modern
              digital experiences.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              <FeatureItem
                icon={<Briefcase className="h-5 w-5" />}
                title="Growth Opportunities"
                desc="Work on impactful products with a talented team."
              />

              <FeatureItem
                icon={<MapPin className="h-5 w-5" />}
                title="Flexible Work Culture"
                desc="Remote-friendly and collaborative environment."
              />

              <FeatureItem
                icon={<Mail className="h-5 w-5" />}
                title="Fast Hiring Process"
                desc="Simple, transparent and efficient recruitment."
              />
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="glass-card premium-shadow relative overflow-hidden rounded-[40px] border border-white/10 p-8 md:p-12">
            {/* TOP GRADIENT */}
            <div className="from-primary to-primary absolute inset-x-0 top-0 h-1 bg-gradient-to-r via-purple-400" />

            <div className="mb-10">
              <h2 className="text-4xl font-bold text-white">Apply Now</h2>

              <p className="text-muted mt-3 text-lg">
                Fill in your details and upload your resume.
              </p>
            </div>

            <form className="space-y-7">
              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Full Name" placeholder="John Doe" />

                <InputField label="Email Address" placeholder="john@example.com" type="email" />
              </div>

              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField
                  label="Phone Number"
                  placeholder="+91 9876543210"
                  icon={<Phone className="h-5 w-5" />}
                />

                <InputField
                  label="Current Location"
                  placeholder="Pune, India"
                  icon={<MapPin className="h-5 w-5" />}
                />
              </div>

              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField
                  label="Job Profile"
                  placeholder="Frontend Developer"
                  icon={<Briefcase className="h-5 w-5" />}
                />

                <SelectField
                  label="Experience"
                  options={["Select Experience", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"]}
                />
              </div>

              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">
                <SelectField
                  label="How did you hear about us?"
                  options={["Select Source", "LinkedIn", "Website", "Referral", "Instagram"]}
                />

                {/* UPLOAD */}
                <div>
                  <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
                    Upload Resume
                  </label>

                  <label className="group border-primary/20 from-primary/20 to-primary/20 hover:border-primary/40 relative flex h-[60px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border bg-gradient-to-r via-purple-500/20 px-6 transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="from-primary/20 absolute inset-0 bg-gradient-to-r to-purple-500/20 blur-2xl" />
                    </div>

                    <div className="relative flex items-center gap-3">
                      <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full">
                        <Paperclip className="text-primary h-5 w-5" />
                      </div>

                      <div>
                        <p className="font-semibold text-white">Upload Resume</p>

                        <p className="text-muted text-sm">PDF up to 10MB</p>
                      </div>
                    </div>

                    <input type="file" accept=".pdf" className="hidden" />
                  </label>
                </div>
              </div>

              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Current CTC" placeholder="₹ 6 LPA" />

                <InputField label="Expected CTC" placeholder="₹ 9 LPA" />
              </div>

              <InputField label="Notice Period" placeholder="30 Days" />

              <TextAreaField label="Reason for Job Change" rows={3} />

              <TextAreaField label="Additional Message" rows={5} />

              {/* BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group from-primary relative w-full overflow-hidden rounded-2xl bg-gradient-to-r to-yellow-400 px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.01]"
                >
                  <span className="relative z-10">Submit Application</span>

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-white/20" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ================= COMPONENTS ================= */

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="border-primary/20 bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl border">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="text-muted mt-1 text-sm leading-6">{desc}</p>
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  icon,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
        {label}
      </label>

      <div className="group focus-within:border-primary/40 flex h-[60px] items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 transition-all duration-300 focus-within:bg-white/[0.05]">
        {icon && (
          <div className="text-muted group-focus-within:text-primary mr-3 transition">{icon}</div>
        )}

        <input
          type={type}
          placeholder={placeholder}
          className="placeholder:text-muted h-full w-full bg-transparent text-white outline-none"
        />
      </div>
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
        {label}
      </label>

      <select className="focus:border-primary/40 h-[60px] w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white transition-all duration-300 outline-none">
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#2a0f2f]">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({ label, rows }: { label: string; rows: number }) {
  return (
    <div>
      <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
        {label}
      </label>

      <textarea
        rows={rows}
        placeholder="Write here..."
        className="placeholder:text-muted focus:border-primary/40 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white transition-all duration-300 outline-none"
      />
    </div>
  );
}
