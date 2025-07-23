import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Get To Know More</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/placeholder.svg"
                  alt="About profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-5"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            {/* Experience and Education Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Experience</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Frontend Development</p>
                    <p className="font-medium">(2+ Years)</p>
                    <p>MERN Stack Developer</p>
                    <p className="font-medium">(1+ Year)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <div className="text-muted-foreground">
                    <p>Bachelor of Computer Science</p>
                    <p className="font-medium">(BSCS)</p>
                    <p>Riphah International University</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <div className="bg-gradient-card rounded-2xl p-6 shadow-card">
              <p className="text-muted-foreground leading-relaxed">
                Enthusiastic and detail-oriented Full Stack Developer and Software Engineer with hands-on experience in
                building scalable and performant web and mobile applications. Expertise in working with the MERN stack, API
                integration, and developing AI-driven solutions. Passionate about delivering high-quality software that
                meets business goals, while leveraging modern technologies like PostgreSQL, Next.js, Node.js, Express.js,
                MongoDB, and FastAPI. Committed to continuous learning and contributing to impactful, growth-oriented
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;