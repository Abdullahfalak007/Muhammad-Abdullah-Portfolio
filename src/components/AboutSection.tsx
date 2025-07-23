import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Code2, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer } from '@/components/AnimatedSection';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-primary-glow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Get To Know More</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimatedSection direction="left" className="flex justify-center">
            <div className="relative group">
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="w-80 h-96 rounded-2xl overflow-hidden shadow-elegant relative"
              >
                <img
                  src="/placeholder.svg"
                  alt="About profile picture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-6 -right-6 bg-gradient-primary rounded-xl p-4 shadow-glow"
              >
                <div className="text-center">
                  <Code2 className="w-6 h-6 text-primary-foreground mx-auto mb-1" />
                  <p className="text-xs text-primary-foreground font-semibold">2+ Years</p>
                  <p className="text-xs text-primary-foreground/80">Experience</p>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
                className="absolute -bottom-6 -left-6 bg-gradient-hero rounded-xl p-4 shadow-elegant"
              >
                <div className="text-center">
                  <Brain className="w-6 h-6 text-hero-foreground mx-auto mb-1" />
                  <p className="text-xs text-hero-foreground font-semibold">Full Stack</p>
                  <p className="text-xs text-hero-foreground/80">Developer</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* About Content */}
          <AnimatedSection direction="right" className="space-y-8">
            {/* Experience and Education Cards */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Briefcase className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">Experience</h3>
                    <div className="text-muted-foreground space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Frontend Development</span>
                        <span className="font-medium text-primary">2+ Years</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>MERN Stack</span>
                        <span className="font-medium text-primary">1+ Year</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                    >
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">Education</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium">Bachelor of Computer Science</p>
                      <p className="text-sm">(BSCS)</p>
                      <p className="text-sm">Riphah International University</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerContainer>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-card rounded-2xl p-8 shadow-card relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
              <motion.p 
                className="text-muted-foreground leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Enthusiastic and detail-oriented Full Stack Developer and Software Engineer with hands-on experience in
                building scalable and performant web and mobile applications. Expertise in working with the MERN stack, API
                integration, and developing AI-driven solutions. Passionate about delivering high-quality software that
                meets business goals, while leveraging modern technologies like PostgreSQL, Next.js, Node.js, Express.js,
                MongoDB, and FastAPI. Committed to continuous learning and contributing to impactful, growth-oriented
                projects.
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;