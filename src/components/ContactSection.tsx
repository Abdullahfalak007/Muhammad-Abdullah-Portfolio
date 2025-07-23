import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Email Contact */}
          <Card className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-4">Email</h3>
              <a
                href="mailto:abdullahfalak007@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
              >
                abdullahfalak007@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* LinkedIn Contact */}
          <Card className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-4">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/abdullahfalak007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Connect with me
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;