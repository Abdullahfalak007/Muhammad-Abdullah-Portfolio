import { Button } from '@/components/ui/button';
import { Github, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/abdullahfalak007', 
      label: 'LinkedIn' 
    },
    { 
      icon: Github, 
      url: 'https://github.com/Abdullahfalak007', 
      label: 'GitHub' 
    },
    { 
      icon: Youtube, 
      url: 'https://www.youtube.com/c/FalakTechrary', 
      label: 'YouTube' 
    },
    { 
      icon: Facebook, 
      url: 'https://www.facebook.com/abdullahfalak007', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/Abdullahfalak007/', 
      label: 'Instagram' 
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                <img
                  src="/placeholder.svg"
                  alt="Muhammad Abdullah profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-10"></div>
            </div>
          </div>

          {/* Profile Text */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <p className="text-muted-foreground text-lg mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent animate-fade-in animation-delay-200">
              Muhammad Abdullah
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-400">
              Full Stack Developer | Associate Software Engineer
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in animation-delay-600">
              <Button
                variant="download"
                size="xl"
                onClick={() => window.open('./assets/Muhammad-Abdullah-Resume-2025.pdf')}
              >
                Download CV
              </Button>
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToContact}
              >
                Contact Info
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in animation-delay-800">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => window.open(social.url, '_blank')}
                    className="w-12 h-12 rounded-full bg-gradient-card border border-border flex items-center justify-center hover:shadow-elegant hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;