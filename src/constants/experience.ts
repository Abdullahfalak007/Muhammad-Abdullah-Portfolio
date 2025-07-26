// Experience data with company logos and websites
import strategistsHubLogo from "/assets/strategistshub-logo.jpg";
import cybergenLogo from "/assets/cybergen-logo.jpg";
import techlosetLogo from "/assets/techloset-logo.jpg";
import freelanceLogo from "/assets/freelance-logo.jpg";
import amazeworksLogo from "/assets/amazeworks-logo.jpg";

// Certificate images
import mobileCert from "/assets/mobile-dev-cert.jpg";
import reactNativeCert from "/assets/react-native-cert.jpg";
import bootcampCert from "/assets/bootcamp-cert.jpg";

export const EXPERIENCES = [
  {
    title: "Associate Software Engineer",
    company: "StrategistsHub",
    duration: "Jul 2025 - Present",
    description:
      "Joined StrategistsHub as an Associate Software Engineer working with the MERN stack, focused on building scalable web apps with PostgreSQL, Next.js, Node.js, Express.js, and MongoDB.",
    current: true,
    logo: strategistsHubLogo,
    website: "https://strategisthub.com/",
  },
  {
    title: "Junior Developer",
    company: "Cybergen, Faisalabad",
    duration: "June 2024 - Oct 2024",
    description:
      "Developed AI-integrated software for a US-based company, focusing on scalable front-end and back-end solutions.",
    current: false,
    logo: cybergenLogo,
    website: "https://cybergen.com",
  },
  {
    title: "Full Stack Developer Trainee",
    company: "TechloSet Solutions, Faisalabad",
    duration: "Feb 2024 - May 2024",
    description:
      "Completed a 4-month hands-on program and built 4 full-stack apps using React, React Native, Next.js, Node.js, MongoDB & Firebase.",
    current: false,
    logo: techlosetLogo,
    website: "https://techloset.com",
  },
  {
    title: "Full Stack Web Developer",
    company: "Fiverr | Upwork",
    duration: "Nov 2024 - Present",
    description:
      "Building responsive web apps with React, Next.js, and Tailwind CSS. Integrating REST APIs and authentication using Node.js, MongoDB, and FastAPI to deliver scalable solutions for clients.",
    current: true,
    logo: freelanceLogo,
    website: "https://www.upwork.com/freelancers/~01c0f8755d4b590d1a",
  },
  {
    title: "Intern, Software Engineer",
    company: "AmazeWorks Pvt. Ltd.",
    duration: "May 2022 - Aug 2022",
    description:
      "Contributed to ERP development by customizing front-end components and integrating features with Python and XML.",
    current: false,
    logo: amazeworksLogo,
    website: "https://pk.linkedin.com/company/amaze-works",
  },
];

export const CERTIFICATES = [
  {
    title: "Mobile App Development (E-rozgar Training Program)",
    duration: "Feb 2024 - Apr 2024",
    description:
      "Android & iOS development with hands‑on UI design and backend integration.",
  },
  {
    title: "React Native (NAVTTC)",
    duration: "Feb 2024 - Mar 2024",
    description:
      "Recognized by Pakistan's National Vocational and Technical Training Commission.",
  },
  {
    title: "IELTS Certification",
    duration: "Oct 2023 - Present",
    description:
      "Successfully completed the IELTS exam with an overall score of 7.0, corresponding to a CEFR Level of C1, showing proficiency in English language.",
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
    image: mobileCert,
    title: "Mobile App Development Certificate",
    description: "E-rozgar Training Program - Android & iOS Development",
  },
  {
    image: reactNativeCert,
    title: "React Native Certificate",
    description: "NAVTTC - React Native Development Certification",
  },
  {
    image: bootcampCert,
    title: "Bootcamp Completion Certificate",
    description: "Techloset Solutions - Full Stack Development Bootcamp",
  },
];
