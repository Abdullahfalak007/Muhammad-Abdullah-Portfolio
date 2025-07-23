import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "TeChat - Chatting (Android App)",
      image: "/placeholder.svg",
      github: "https://github.com/Abdullahfalak007/Techloset-TeChat-App.git",
      demo: "https://drive.google.com/file/d/1PB4nJtZRwq1VkrwGOdwO3qIe_5RqIUOs/view?usp=sharing",
      demoLabel: "APK File"
    },
    {
      title: "HR Management System",
      image: "/placeholder.svg",
      github: "https://github.com/Abdullahfalak007/Techloset-HR-Management.git",
      demo: "https://hrmanagementbyabdullah.vercel.app/",
      demoLabel: "Live Demo"
    },
    {
      title: "Delícias à Mesa - Recipe Finder",
      image: "/placeholder.svg",
      github: "https://github.com/Abdullahfalak007/Recipe-App.git",
      demo: "https://recipe-app-drab-seven.vercel.app/",
      demoLabel: "Live Demo"
    },
    {
      title: "Bright Scholars School",
      image: "/placeholder.svg",
      github: "https://github.com/Abdullahfalak007/Bright-Scholars-School",
      demo: "https://abdullahfalak007.github.io/Bright-Scholars-School/",
      demoLabel: "Live Demo"
    },
    {
      title: "DealFinity - Ecommerce Store",
      image: "/placeholder.svg",
      github: "https://github.com/Abdullahfalak007/Dealfinity.git",
      demo: "https://clever-alpaca-4f51e7.netlify.app/",
      demoLabel: "Live Demo"
    },
    {
      title: "Gmail Automation",
      image: "/placeholder.svg",
      github: "https://github.com/Abdullahfalak007/Email-extraction-script-from-the-body-of-an-email-message-using-python",
      demo: null,
      demoLabel: null
    },
    {
      title: "Lead tracker (Extension)",
      image: "/placeholder.svg",
      github: "https://github.com/Abdullahfalak007/Lead-Tracker-App.git",
      demo: null,
      demoLabel: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Browse My Recent</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                {/* Project Title */}
                <h3 className="font-semibold text-lg mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  
                  {project.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.demoLabel}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;