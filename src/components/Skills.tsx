import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Layers,
  GitBranch,
  Monitor,
  Coffee
} from 'lucide-react';

const skillsData = [
  { name: 'Frontend Development', icon: Code, description: 'React, Vue, Angular' },
  { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe Creative Suite' },
  { name: 'Backend Development', icon: Database, description: 'Node.js, Python, PostgreSQL' },
  { name: 'Web Technologies', icon: Globe, description: 'HTML5, CSS3, JavaScript' },
  { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter' },
  { name: 'Performance Optimization', icon: Zap, description: 'Core Web Vitals, SEO' },
  { name: 'DevOps', icon: Layers, description: 'Docker, AWS, CI/CD' },
  { name: 'Version Control', icon: GitBranch, description: 'Git, GitHub, GitLab' },
  { name: 'Responsive Design', icon: Monitor, description: 'Mobile-first, Accessibility' },
  { name: 'Problem Solving', icon: Coffee, description: 'Creative solutions, Debugging' }
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleItems(prev => new Set([...prev, index]));
          }, index * 100);
        }
      });
    }, observerOptions);

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background via-butter/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for bringing creative ideas to life through code and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={skill.name}
                ref={(el) => (skillRefs.current[index] = el)}
                data-index={index}
                className={`group p-6 rounded-2xl bg-card border border-border hover-lift hover:border-tangerine/50 cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-gradient-card mb-4 group-hover:bg-gradient-hero transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-tangerine group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-tangerine transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.description}
                  </p>
                </div>
                
                {/* Hover effect decoration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-tangerine/30 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;