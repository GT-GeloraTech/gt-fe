// import { supabase } from "./supabase";

// export async function uploadResume(file: File) {
//   if (!supabase) {
//     throw new Error("Supabase not configured");
//   }

//   const fileExt = file.name.split(".").pop();

//   const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

//   const { error } = await supabase.storage.from("resumes").upload(fileName, file);

//   if (error) {
//     throw error;
//   }

//   const { data } = supabase.storage.from("resumes").getPublicUrl(fileName);

//   return data.publicUrl;
// }
import { supabase } from "./supabase";

export async function uploadResume(file: File, folder = "") {
  if (!supabase) {
    throw new Error("Supabase not configured");
  }

  const fileExt = file.name.split(".").pop();

  const fileName = `${folder}${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

  const { error } = await supabase.storage.from("resumes").upload(fileName, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from("resumes").getPublicUrl(fileName);

  return data.publicUrl;
}
