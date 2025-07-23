import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 'Experienced' },
    { name: 'CSS3', level: 'Experienced' },
    { name: 'JavaScript (ES6+)', level: 'Experienced' },
    { name: 'React.js', level: 'Experienced' },
    { name: 'Next.js', level: 'Experienced' },
    { name: 'TypeScript', level: 'Experienced' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 'Experienced' },
    { name: 'Express.js', level: 'Experienced' },
    { name: 'MongoDB', level: 'Experienced' },
    { name: 'Firebase', level: 'Experienced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'FastAPI', level: 'Intermediate' },
    { name: 'REST API', level: 'Experienced' },
    { name: 'Git', level: 'Experienced' },
  ];

  const SkillCard = ({ title, skills }: { title: string; skills: { name: string; level: string }[] }) => (
    <Card className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">{skill.name}</h4>
                <Badge 
                  variant={skill.level === 'Experienced' ? 'default' : 'secondary'}
                  className="text-xs mt-1"
                >
                  {skill.level}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Explore My</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCard title="Frontend Development" skills={frontendSkills} />
          <SkillCard title="Backend Development" skills={backendSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;