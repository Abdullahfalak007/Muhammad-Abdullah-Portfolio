import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "StrategistsHub",
      duration: "Jul 2025 - Present",
      description:
        "Joined StrategistsHub as an Associate Software Engineer working with the MERN stack, focused on building scalable web apps with PostgreSQL, Next.js, Node.js, Express.js, and MongoDB.",
      current: true,
    },
    {
      title: "Junior Developer",
      company: "Cybergen, Faisalabad",
      duration: "June 2024 - Oct 2024",
      description:
        "Developed AI-integrated software for a US-based company, focusing on scalable front-end and back-end solutions.",
      current: false,
    },
    {
      title: "Full Stack Developer Trainee",
      company: "TechloSet Solutions, Faisalabad",
      duration: "Feb 2024 - May 2024",
      description:
        "Completed a 4-month hands-on program and built 4 full-stack apps using React, React Native, Next.js, Node.js, MongoDB & Firebase.",
      current: false,
    },
    {
      title: "Full Stack Web Developer",
      company: "Fiverr | Upwork",
      duration: "Nov 2024 - Present",
      description:
        "Building responsive web apps with React, Next.js, and Tailwind CSS. Integrating REST APIs and authentication using Node.js, MongoDB, and FastAPI to deliver scalable solutions for clients.",
      current: true,
    },
    {
      title: "Intern, Software Engineer",
      company: "AmazeWorks Pvt. Ltd.",
      duration: "May 2022 - Aug 2022",
      description:
        "Contributed to ERP development by customizing front-end components and integrating features with Python and XML.",
      current: false,
    },
  ];

  const certificates = [
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
        "Successfully completed the IELTS exam on November 9, 2023, with an overall score of 7.0, corresponding to a CEFR Level of C1, showing proficiency in English language.",
    },
    {
      title: "Techloset Bootcamp Completion",
      duration: "Feb 2024 - May 2024",
      description:
        "Bootcamp completion certificate issued by CEO of Techloset Solutions, Naveed Sarwar.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Browse My Recent</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Work Experience
          </h2>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Professional Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 relative overflow-hidden"
              >
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Current
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0"
              >
                <CardHeader className="pb-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
