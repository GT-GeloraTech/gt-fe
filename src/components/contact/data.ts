import { Mail, Clock3, CalendarDays, Globe } from "lucide-react";

export const contactDetails = [
  {
    title: "Email",
    text: ["hello@geloratech.com"],
    icon: Mail,
  },

  {
    title: "Business Hours",
    text: ["Monday – Friday", "10:00 AM – 7:00 PM IST"],
    icon: Clock3,
  },

  {
    title: "Response Time",
    text: ["Most enquiries receive a response within one business day."],
    icon: CalendarDays,
  },

  {
    title: "Availability",
    text: ["Remote-first team available for meetings by appointment."],
    icon: Globe,
  },
];
