// Experience data with company logos and websites
import strategistsHubLogo from "../../public/assets/strategistshub-logo.jpg";
import cybergenLogo from "../../public/assets/cybergen-logo.jpg";
import techlosetLogo from "../../public/assets/techloset-logo.jpg";
import freelanceLogo from "../../public/assets/freelance-logo.jpg";
import amazeworksLogo from "../../public/assets/amazeworks-logo.jpg";

// Certificate images
import mobileCert from "../../public/assets/mobile-dev-cert.jpg";
import webMobileCert from "../../public/assets/web-and-mobile-cert.jpg";
import reactNativeCert from "../../public/assets/react-native-cert.jpg";
import bootcampCert from "../../public/assets/bootcamp-cert.jpg";

export const EXPERIENCES = [
  {
    title: "Associate Software Engineer",
    company: "StrategistsHub",
    duration: "Jul 2025 - Present",
    description:
      "Developing scalable web applications using Next.js, Node.js, PostgreSQL, and MongoDB. Implementing data visualizations (D3.js), video conferencing (Agora), Stripe payment integrations, and AI voice/chat assistants (ElevenLabs) for enterprise solutions.",
    current: true,
    logo: strategistsHubLogo,
    website: "https://strategisthub.com/",
  },
  {
    title: "Junior Developer",
    company: "Cybergen, Faisalabad",
    duration: "June 2024 - Sep 2025",
    description:
      "Built AI-integrated web platforms with RESTful APIs and data-driven dashboards for a US-based company.",
    current: false,
    logo: cybergenLogo,
    website: "https://cybergen.com",
  },
  {
    title: "Full Stack Developer Trainee",
    company: "TechloSet Solutions, Faisalabad",
    duration: "Feb 2024 - May 2024",
    description:
      "Completed a 4-month coding bootcamp and built multiple full-stack apps using React, React Native, Next.js, Node.js, MongoDB, and Firebase. Implemented JWT authentication, Google login, and webhooks for real-time features in chat and collaboration apps.",
    current: false,
    logo: techlosetLogo,
    website: "https://techloset.com",
  },
  {
    title: "Full Stack Web Developer",
    company: "Fiverr | Upwork",
    duration: "Nov 2024 - Present",
    description:
      "Delivering responsive web solutions with React, Next.js, and Tailwind CSS for global clients along with REST APIs Integration, authentication modules, and FastAPI backends ensuring reliability and scalability.",
    current: true,
    logo: freelanceLogo,
    website: "https://www.upwork.com/freelancers/~01c0f8755d4b590d1a",
  },
  {
    title: "Intern, Software Engineer",
    company: "AmazeWorks Private Limited",
    duration: "May 2022 - Aug 2022",
    description:
      "Contributed to ERP system enhancement through front-end customization and Python/XML module integration.",
    current: false,
    logo: amazeworksLogo,
    website: "https://pk.linkedin.com/company/amaze-works",
  },
];

export const CERTIFICATES = [
  {
    title: "Mobile App Development (E-rozgar)",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Android & iOS development with hands‑on UI design and backend integration.",
  },
  {
    title: "Web and Mobile App Development (SMIT)",
    duration: "Dec 2023 - Dec 2024",
    description:
      "Web/mobile development course using the MERN stack to build responsive apps.",
  },
  {
    title: "React Native (NAVTTC)",
    duration: "Feb 2024 - Mar 2024",
    description:
      "Recognized by Pakistan's National Vocational and Technical Training Commission.",
  },
  {
    title: "IELTS Certification",
    duration: "Nov 2023 - Present",
    description:
      "Scored 7.0 bands, corresponding to a CEFR Level of C1, showing proficiency in English language.",
  },
  {
    title: "Techloset Bootcamp Completion",
    duration: "Feb 2024 - May 2024",
    description:
      "Bootcamp completion certificate issued by CEO of Techloset Solutions, Naveed Sarwar.",
  },
];

export const CERTIFICATE_IMAGES = [
  {
    image: bootcampCert,
    title: "Bootcamp Completion Certificate",
    description: "Techloset Solutions - Full Stack Development Bootcamp",
  },
  {
    image: reactNativeCert,
    title: "React Native Certificate",
    description: "NAVTTC - React Native Development Certification",
  },
  {
    image: mobileCert,
    title: "Mobile App Development Certificate",
    description: "E-rozgar Training Program - Android & iOS Development",
  },
  {
    image: webMobileCert,
    title: "Web and Mobile App Development Certificate",
    description: "Saylani Mass IT Training - MERN Stack Development",
  },
];
