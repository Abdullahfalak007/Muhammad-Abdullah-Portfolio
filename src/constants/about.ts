// Static data for the AboutSection
import { Briefcase, GraduationCap, Code2, Brain } from "lucide-react";

export const ABOUT_PROFILE_IMAGE = "/about-pic.jpg";

export const ABOUT_FLOATING_STATS = [
  {
    icon: Code2,
    label: "2+ Years",
    sublabel: "Experience",
    className:
      "absolute -top-6 -right-6 bg-gradient-primary rounded-xl p-4 shadow-glow",
    iconClass: "w-6 h-6 text-primary-foreground mx-auto mb-1",
    labelClass: "text-xs text-primary-foreground font-semibold",
    sublabelClass: "text-xs text-primary-foreground/80",
    animate: { y: [0, -15, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  {
    icon: Brain,
    label: "Full Stack",
    sublabel: "Developer",
    className:
      "absolute -bottom-6 -left-6 bg-gradient-hero rounded-xl p-4 shadow-elegant",
    iconClass: "w-6 h-6 text-hero-foreground mx-auto mb-1",
    labelClass: "text-xs text-hero-foreground font-semibold",
    sublabelClass: "text-xs text-hero-foreground/80",
    animate: { y: [0, 15, 0] },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
];

export const ABOUT_CARDS = [
  {
    icon: Briefcase,
    title: "Experience",
    details: [
      { label: "Frontend Development", value: "2+ Years" },
      { label: "MERN Stack", value: "1+ Year" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    details: [
      { label: "Bachelor of Computer Science", value: "(BSCS)" },
      { label: "Riphah International University", value: "2019-2023" },
      { label: "CGPA", value: "3.60" },
    ],
  },
];

export const ABOUT_DESCRIPTION = `Passionate Full Stack Developer with MERN stack expertise and hands-on experience building scalable web/mobile apps and AI-powered solutions. Skilled in video streaming (Agora), payment integration (Stripe), JWT & OAuth authentication, Google login, webhooks, and AI assistants/chatbots. Proficient in developing dynamic dashboards using D3.js, and integrating voice AI (ElevenLabs) for interactive applications. Committed to delivering high-quality, business-aligned software and continuous growth.`;
