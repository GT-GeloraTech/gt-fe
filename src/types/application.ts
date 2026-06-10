// export interface ApplicationData {
//   personalDetails: {
//     fullName: string;
//     email: string;
//     phone: string;
//     location: string;
//     employment: string;
//     linkedin: string;
//   };

//   experience: {
//     yearsOfExperience: string;
//     currentCompany: string;
//     currentRole: string;
//     experienceDetails: string;
//     currentCTC: string;
//     expectedCTC: string;
//     noticePeriod: string;
//   };

//   resume: {
//     file: File | null;
//   };
// }
export interface ApplicationData {
  personalDetails: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    employment: string;
    linkedin: string;
  };

  experience: {
    yearsOfExperience: string;
    currentCompany: string;
    currentRole: string;
    experienceDetails: string;
    currentCTC: string;
    expectedCTC: string;
    noticePeriod: string;
  };

  resume: {
    file: File | null;
  };
}
