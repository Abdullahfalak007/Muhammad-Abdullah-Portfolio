import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import CertificateCarousel from "@/components/CertificateCarousel";
import {
  CERTIFICATE_IMAGES,
  CERTIFICATES,
  EXPERIENCES,
} from "@/constants/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Certificates */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
      {/* Certificate Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <CertificateCarousel certificates={CERTIFICATE_IMAGES} />
      </motion.div>
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
            {EXPERIENCES.map((exp, index) => (
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
                    <div className="flex justify-center">
                      <motion.button
                        onClick={() => window.open(exp.website, "_blank")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group/logo"
                      >
                        <div className="w-16 h-16 rounded-lg bg-background/50 p-2 shadow-card hover:shadow-glow transition-all duration-300 flex items-center justify-center overflow-hidden">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full rounded-lg  object-contain transition-transform duration-300 group-hover/logo:scale-110"
                          />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-3 h-3 text-primary-foreground" />
                        </div>
                      </motion.button>
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">{exp.duration}</span>
                      </div>
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
      </div>
    </section>
  );
};

export default ExperienceSection;
