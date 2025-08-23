import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experienceData = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of modern web applications using React and TypeScript. Implemented design systems and improved performance by 40%.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    link: '#'
  },
  {
    title: 'Full Stack Developer',
    company: 'Creative Agency Inc.',
    location: 'Remote',
    period: '2020 - 2022',
    description: 'Built responsive websites and web applications for clients across various industries. Collaborated with designers to create pixel-perfect implementations.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS', 'Figma'],
    link: '#'
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2019 - 2020',
    description: 'Developed user interfaces for a fintech startup. Focused on creating accessible and user-friendly experiences for complex financial data.',
    technologies: ['Angular', 'SCSS', 'D3.js', 'Jest', 'Cypress'],
    link: '#'
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Studio',
    location: 'New York, NY',
    period: '2018 - 2019',
    description: 'Started my journey in web development, learning modern frameworks and contributing to various client projects.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
    link: '#'
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleItems(prev => new Set([...prev, index]));
          }, index * 200);
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-butter/10 via-background to-blush/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through various roles and technologies, building expertise one project at a time
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tangerine via-butter to-blush hidden md:block" />
          
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              
              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative md:ml-16 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-6 timeline-item hidden md:block" />
                  
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-tangerine/50 hover-lift group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-tangerine transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <span className="font-semibold text-tangerine">{exp.company}</span>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <a
                        href={exp.link}
                        className="self-start p-2 rounded-lg bg-gradient-card hover:bg-gradient-hero transition-all duration-300 group/link"
                        aria-label="View company"
                      >
                        <ExternalLink className="w-5 h-5 text-tangerine group-hover/link:text-white transition-colors" />
                      </a>
                    </div>
                    
                    <p className="text-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-card text-sm rounded-full border border-border group-hover:border-tangerine/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;