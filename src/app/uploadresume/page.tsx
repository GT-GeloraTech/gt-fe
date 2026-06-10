// "use client";

// import { useState } from "react";
// import { Briefcase, ChevronDown, Mail, MapPin, Paperclip, Phone, Sparkles } from "lucide-react";

// import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { supabase } from "@/lib/supabase";
// import { uploadResume } from "@/lib/uploadResume";

// const MAX_FILE_SIZE = 10 * 1024 * 1024;

// const initialForm = {
//   fullName: "",
//   email: "",
//   phone: undefined as string | undefined,
//   location: "",
//   jobProfile: "",
//   experience: "",
//   source: "",
//   currentCTC: "",
//   expectedCTC: "",
//   noticePeriod: "",
//   reason: "",
//   message: "",
// };

// export default function UploadResumePage() {
//   const [form, setForm] = useState(initialForm);

//   const [resume, setResume] = useState<File | null>(null);

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const [loading, setLoading] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);

//   const validate = () => {
//     const newErrors: Record<string, string> = {};

//     if (!form.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     }

//     if (!form.phone) {
//       newErrors.phone = "Phone number is required";
//     } else if (!isValidPhoneNumber(form.phone)) {
//       newErrors.phone = "Enter valid phone number";
//     }

//     if (!resume) {
//       newErrors.resume = "Resume is required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
//   ) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [e.target.name]: "",
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     // PDF validation
//     if (file.type !== "application/pdf") {
//       setErrors((prev) => ({
//         ...prev,
//         resume: "Only PDF files are allowed",
//       }));

//       return;
//     }

//     // Size validation
//     if (file.size > MAX_FILE_SIZE) {
//       setErrors((prev) => ({
//         ...prev,
//         resume: "File size must be under 10MB",
//       }));

//       return;
//     }

//     setResume(file);

//     setErrors((prev) => ({
//       ...prev,
//       resume: "",
//     }));
//   };

//   const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const file = e.dataTransfer.files?.[0];

//     if (!file) return;

//     // PDF validation
//     if (file.type !== "application/pdf") {
//       setErrors((prev) => ({
//         ...prev,
//         resume: "Only PDF files are allowed",
//       }));

//       return;
//     }

//     // Size validation
//     if (file.size > MAX_FILE_SIZE) {
//       setErrors((prev) => ({
//         ...prev,
//         resume: "File size must be under 10MB",
//       }));

//       return;
//     }

//     setResume(file);

//     setErrors((prev) => ({
//       ...prev,
//       resume: "",
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const isValid = validate();

//     if (!isValid || !resume) return;

//     try {
//       setLoading(true);

//       if (!supabase) {
//         throw new Error("Supabase not configured");
//       }

//       // Upload Resume
//       const resumeUrl = await uploadResume(resume);

//       // Save Application
//       const { error } = await supabase.from("job_applications").insert({
//         full_name: form.fullName,
//         email: form.email,
//         phone: form.phone,

//         location: form.location,
//         job_profile: form.jobProfile,

//         experience: form.experience,
//         source: form.source,

//         current_ctc: form.currentCTC,
//         expected_ctc: form.expectedCTC,

//         notice_period: form.noticePeriod,

//         reason: form.reason,
//         message: form.message,

//         resume_url: resumeUrl,
//       });

//       if (error) {
//         throw error;
//       }

//       alert("Application Submitted Successfully!");

//       // Reset form
//       setForm(initialForm);

//       setResume(null);

//       setErrors({});
//     } catch (error) {
//       console.error(error);

//       alert("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <section className="relative overflow-hidden px-5 pt-28 pb-28 sm:px-6 md:pt-28 lg:pt-28 lg:pb-28">
//         {/* background */}
//         <div className="hero-glow opacity-40" />

//         <div className="noise pointer-events-none absolute inset-0" />

//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,176,106,0.08),transparent_35%)]" />

//         {/* glow */}
//         <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#d4b06a]/10 blur-[120px]" />

//         <div className="absolute top-[20%] -right-40 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

//         {/* MAIN */}
//         <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center">
//           {/* HERO */}
//           <div className="mx-auto mb-24 flex w-full flex-col items-center text-center">
//             {/* heading */}
//             <h1 className="mt-8 max-w-[8ch] text-center text-[3.5rem] leading-[0.9] font-bold tracking-[-0.05em] text-white sm:text-[4.5rem] lg:text-[5.5rem]">
//               Let’s build something <br />
//               <span className="text-primary">great together</span>
//             </h1>

//             {/* desc */}
//             <p className="mx-auto mt-8 max-w-[760px] text-center text-[15px] leading-8 text-white/60 sm:text-lg">
//               We’re always looking for talented people who are passionate about building modern
//               digital experiences and creating products that make an impact.
//             </p>

//             {/* divider */}
//             <div className="mx-auto mt-12 h-px w-full max-w-[760px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

//             {/* cards */}
//             <div className="mx-auto mt-14 grid w-full max-w-[1040px] gap-6 md:grid-cols-3">
//               <FeatureItem
//                 icon={<Briefcase className="h-5 w-5" />}
//                 title="Growth Opportunities"
//                 desc="Work on impactful products with a talented team."
//               />

//               <FeatureItem
//                 icon={<MapPin className="h-5 w-5" />}
//                 title="Flexible Work Culture"
//                 desc="Remote-friendly and collaborative environment."
//               />

//               <FeatureItem
//                 icon={<Mail className="h-5 w-5" />}
//                 title="Fast Hiring Process"
//                 desc="Simple, transparent and efficient recruitment."
//               />
//             </div>
//           </div>

//           {/* section divider */}
//           <div className="mx-auto mb-16 h-px w-full max-w-[1080px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//           {/* FORM */}
//           <div className="glass-card premium-shadow relative mx-auto w-full max-w-[1040px] overflow-hidden rounded-[32px] border border-white/[0.08] p-5 sm:p-6 md:p-10 xl:p-10">
//             {/* top border */}
//             <div className="from-primary to-primary absolute inset-x-0 top-0 h-1 bg-gradient-to-r via-purple-400" />

//             {/* noise */}
//             <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light">
//               <div className="h-full w-full bg-[url('/noise.png')]" />
//             </div>

//             {/* FORM HEADER */}
//             <div className="relative mb-10">
//               <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
//                 Apply Now
//               </h2>

//               <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base">
//                 Fill in your details and upload your resume.
//               </p>
//             </div>

//             {/* FORM */}
//             <form className="relative space-y-5 sm:space-y-6 md:space-y-7" onSubmit={handleSubmit}>
//               {/* ROW */}
//               <div className="grid gap-5 md:grid-cols-2">
//                 <InputField
//                   label="Full Name"
//                   name="fullName"
//                   value={form.fullName}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   error={errors.fullName}
//                 />

//                 <InputField
//                   label="Email Address"
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="name@example.com"
//                   error={errors.email}
//                 />
//               </div>

//               {/* ROW */}
//               <div className="grid gap-5 md:grid-cols-2">
//                 <div>
//                   <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
//                     Phone Number
//                   </label>

//                   <div
//                     className={`group rounded-2xl border px-5 transition-all duration-300 ${
//                       errors.phone
//                         ? "border-red-500/50 bg-red-500/5"
//                         : "focus-within:border-primary/40 border-white/10 bg-white/[0.02] backdrop-blur-md"
//                     }`}
//                   >
//                     <PhoneInput
//                       international
//                       defaultCountry="IN"
//                       countryCallingCodeEditable={false}
//                       placeholder="Enter phone number"
//                       value={form.phone}
//                       onChange={(value) => {
//                         setForm((prev) => ({
//                           ...prev,
//                           phone: value,
//                         }));

//                         setErrors((prev) => ({
//                           ...prev,
//                           phone: "",
//                         }));
//                       }}
//                       className="phone-input h-[60px]"
//                     />
//                   </div>

//                   {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
//                 </div>

//                 <InputField
//                   label="Current Location"
//                   name="location"
//                   value={form.location}
//                   onChange={handleChange}
//                   placeholder="Location"
//                   icon={<MapPin className="h-5 w-5" />}
//                 />
//               </div>

//               {/* divider */}
//               <div className="border-t border-white/[0.06]" />

//               {/* ROW */}
//               <div className="grid gap-5 md:grid-cols-2">
//                 <InputField
//                   label="Job Profile"
//                   name="jobProfile"
//                   value={form.jobProfile}
//                   onChange={handleChange}
//                   placeholder="Job Profile"
//                   icon={<Briefcase className="h-5 w-5" />}
//                 />

//                 <SelectField
//                   label="Experience"
//                   name="experience"
//                   value={form.experience}
//                   onChange={handleChange}
//                   options={["Select Experience", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"]}
//                 />
//               </div>

//               {/* ROW */}
//               <div className="grid gap-5 md:grid-cols-2">
//                 <SelectField
//                   label="How did you hear about us?"
//                   name="source"
//                   value={form.source}
//                   onChange={handleChange}
//                   options={[
//                     "Select Source",
//                     "LinkedIn",
//                     "Website",
//                     "Referral",
//                     "Instagram",
//                     "Other",
//                   ]}
//                 />
//                 {/* upload */}
//               </div>

//               {/* divider */}
//               <div className="border-t border-white/[0.06]" />

//               {/* ROW */}
//               <div className="grid gap-5 md:grid-cols-2">
//                 <InputField
//                   label="Current CTC"
//                   name="currentCTC"
//                   value={form.currentCTC}
//                   onChange={handleChange}
//                   placeholder="6"
//                 />

//                 <InputField
//                   label="Expected CTC"
//                   name="expectedCTC"
//                   value={form.expectedCTC}
//                   onChange={handleChange}
//                   placeholder="9"
//                 />
//               </div>

//               <InputField
//                 label="Notice Period"
//                 name="noticePeriod"
//                 value={form.noticePeriod}
//                 onChange={handleChange}
//                 placeholder="In Days"
//               />

//               <TextAreaField
//                 label="Reason for Job Change"
//                 name="reason"
//                 rows={3}
//                 value={form.reason}
//                 onChange={handleChange}
//               />

//               <TextAreaField
//                 label="Additional Message"
//                 name="message"
//                 rows={4}
//                 value={form.message}
//                 onChange={handleChange}
//               />

//               <div>
//                 <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
//                   Upload Resume
//                 </label>

//                 <label
//                   onDragOver={(e) => {
//                     e.preventDefault();
//                     setIsDragging(true);
//                   }}
//                   onDragLeave={() => {
//                     setIsDragging(false);
//                   }}
//                   onDrop={handleDrop}
//                   className={`group relative flex min-h-[240px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[28px] border border-dashed transition-all duration-500 ${
//                     errors.resume
//                       ? "border-red-500/50 bg-red-500/5"
//                       : isDragging
//                         ? "border-[#d4b06a] bg-[#d4b06a]/10"
//                         : "border-[#d4b06a]/20 bg-white/[0.02] hover:border-[#d4b06a]/50 hover:bg-white/[0.03]"
//                   }`}
//                 >
//                   {/* glow */}
//                   <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,176,106,0.12),transparent_70%)]" />
//                   </div>

//                   {/* content */}
//                   <div className="relative flex flex-col items-center px-6 text-center">
//                     <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-full border border-white/10">
//                       <Paperclip className="h-6 w-6" />
//                     </div>

//                     <h3 className="mt-4 text-lg font-semibold text-white">
//                       {resume ? resume.name : "Drag & Drop Resume"}
//                     </h3>

//                     <p className="mt-1 max-w-sm text-xs leading-6 text-white/45">
//                       Drop your resume here or click to browse files
//                     </p>

//                     <div className="mt-4 rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/10 px-4 py-1.5 text-xs font-medium text-[#d4b06a] transition-all duration-300 group-hover:border-[#d4b06a]/40">
//                       Browse File
//                     </div>

//                     <p className="mt-4 text-[10px] tracking-[0.2em] text-white/30 uppercase">
//                       PDF Only • Max 10MB
//                     </p>
//                   </div>

//                   <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
//                 </label>

//                 {errors.resume && <p className="mt-3 pl-1 text-sm text-red-400">{errors.resume}</p>}
//               </div>

//               {/* BUTTON */}
//               <div className="pt-2 md:pt-4">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group relative flex h-[56px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#d4b06a]/30 bg-[#d4b06a]/5 px-6 text-sm font-semibold text-[#d4b06a] backdrop-blur-xl transition-all duration-500 hover:border-[#d4b06a]/80 disabled:cursor-not-allowed disabled:opacity-50 sm:h-[60px] sm:px-8 sm:text-base"
//                 >
//                   <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#d4b06a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

//                   <div className="absolute inset-0 bg-[#d4b06a]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

//                   <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

//                   <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-500 group-hover:text-black">
//                     {loading && (
//                       <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#d4b06a]/30 border-t-[#d4b06a] group-hover:border-black/20 group-hover:border-t-black" />
//                     )}

//                     {loading ? "Submitting Application..." : "Submit Application"}
//                   </span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// /* ================= COMPONENTS ================= */

// function FeatureItem({
//   icon,
//   title,
//   desc,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   desc: string;
// }) {
//   return (
//     <div className="group relative flex h-full flex-col rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4b06a]/20 hover:bg-white/[0.03]">
//       {/* glow */}
//       <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,176,106,0.12),transparent_70%)]" />
//       </div>

//       <div className="relative flex h-full flex-col items-center text-center">
//         {/* icon */}
//         <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10">
//           {icon}
//         </div>

//         {/* title */}
//         <h3 className="mt-6 text-[1.45rem] font-semibold tracking-tight text-white">{title}</h3>

//         {/* desc */}
//         <p className="mt-4 max-w-[28ch] text-[15px] leading-7 text-white/55">{desc}</p>
//       </div>
//     </div>
//   );
// }

// function InputField({
//   label,
//   placeholder,
//   type = "text",
//   icon,
//   name,
//   value,
//   onChange,
//   error,
// }: {
//   label: string;
//   placeholder: string;
//   type?: string;
//   icon?: React.ReactNode;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error?: string;
// }) {
//   return (
//     <div>
//       <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
//         {label}
//       </label>

//       <div
//         className={`group flex h-[60px] items-center rounded-2xl border px-5 transition-all duration-300 ${
//           error
//             ? "border-red-500/50 bg-red-500/5"
//             : "focus-within:border-primary/40 border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md"
//         }`}
//       >
//         {icon && (
//           <div className="text-muted group-focus-within:text-primary mr-3 transition">{icon}</div>
//         )}

//         <input
//           name={name}
//           value={value}
//           onChange={onChange}
//           type={type}
//           placeholder={placeholder}
//           className="placeholder:text-muted h-full w-full bg-transparent text-white outline-none"
//         />
//       </div>

//       {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
//     </div>
//   );
// }

// function SelectField({
//   label,
//   options,
//   name,
//   value,
//   onChange,
// }: {
//   label: string;
//   options: string[];
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// }) {
//   return (
//     <div>
//       <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
//         {label}
//       </label>

//       <div className="relative">
//         <select
//           name={name}
//           value={value}
//           onChange={onChange}
//           className="focus:border-primary/40 h-[60px] w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white transition-all duration-300 outline-none"
//         >
//           {options.map((option) => (
//             <option key={option} value={option} className="bg-[#2a0f2f]">
//               {option}
//             </option>
//           ))}
//         </select>

//         <ChevronDown className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-white/30" />
//       </div>
//     </div>
//   );
// }

// function TextAreaField({
//   label,
//   rows,
//   name,
//   value,
//   onChange,
// }: {
//   label: string;
//   rows: number;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
// }) {
//   return (
//     <div>
//       <label className="text-primary mb-3 block text-sm font-medium tracking-wider uppercase">
//         {label}
//       </label>

//       <textarea
//         rows={rows}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder="Write here..."
//         className="placeholder:text-muted focus:border-primary/40 min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white transition-all duration-300 outline-none"
//       />
//     </div>
//   );
// }
