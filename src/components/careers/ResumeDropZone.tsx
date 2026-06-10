"use client";

import { UploadCloud, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { uploadResume } from "@/lib/uploadResume";

export default function ResumeDropZone() {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const processFile = async (file: File) => {
    try {
      setError("");

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setError("Only PDF, DOC and DOCX files are allowed");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setError("Maximum file size is 10MB");
        return;
      }

      setUploading(true);

      const resumeUrl = await uploadResume(file, "talent-network/");

      const { error } = await supabase!.from("resume_submissions").insert({
        file_name: file.name,
        resume_url: resumeUrl,
      });

      if (error) throw error;

      setFileName(file.name);
      setUploaded(true);
    } catch (err) {
      console.error(err);
      setError("Failed to upload resume");
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    await processFile(file);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    await processFile(file);
  };

  return (
    <section className="container mx-auto px-6 pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl font-bold">
              Don&apos;t see the
              <br />
              right role?
            </h3>

            <p className="mt-4 text-white/60">
              Join our talent network and be the first to know about new opportunities.
            </p>
          </div>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`rounded-2xl border border-dashed p-8 transition-all ${
              dragging ? "border-[#D4A24C] bg-[#D4A24C]/10" : "border-[#D4A24C]"
            }`}
          >
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-4">
              {!uploaded ? (
                <>
                  <UploadCloud className="text-[#D4A24C]" size={40} />

                  <p className="text-white/70">Drop your resume here</p>

                  <p className="text-sm text-white/40">PDF, DOC, DOCX • Max 10MB</p>

                  <label className="cursor-pointer rounded-full bg-[#D4A24C] px-8 py-4 font-medium text-black transition hover:scale-105">
                    {uploading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 size={18} className="animate-spin" />
                        Uploading...
                      </span>
                    ) : (
                      "Upload Resume"
                    )}

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      disabled={uploading}
                      onChange={handleFileChange}
                    />
                  </label>

                  {error && <p className="text-sm text-red-400">{error}</p>}
                </>
              ) : (
                <>
                  <CheckCircle2 size={48} className="text-green-400" />

                  <p className="font-medium text-white">Resume uploaded successfully</p>

                  <p className="text-sm text-white/60">{fileName}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
