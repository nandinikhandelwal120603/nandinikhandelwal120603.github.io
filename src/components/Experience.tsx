
// export default Experience;
import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experienceData = [
  {
    title: 'Research & Development Intern',
    company: 'Indian Space Research Organisation (ISRO - SAC)',
    location: 'Ahmedabad, India',
    period: 'Dec 2024 - Jun 2025',
    description: [
      "Engineered <b>Python-based automation tools</b> that reduced manual intervention in calibration workflows by <b>60%</b>, boosting efficiency in mission-critical systems.",
      "Optimized <b>actuator performance and precision control</b> for automation subsystems, achieving faster and more reliable execution under simulated space conditions.",
      "Developed and validated <b>global-to-local vector alignment methods</b>, significantly enhancing calibration accuracy for spacecraft components.",
      "Collaborated with senior scientists to design <b>scalable robotic control frameworks</b> that improved reproducibility in space hardware testing.",
      "Strengthened foundations in <b>mathematical modeling, control systems, and robotics</b>, applying them to <b>real-world space automation challenges</b>."
    ],
    technologies: ['Python', 'Control Systems', 'GUI Automation', 'Robotics', 'Mathematical Modeling'],
    link: 'files/completion_certificate.pdf'
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };

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

    itemRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => { itemRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); }); };
  }, []);

  return (
    <section id="experience" className="relative py-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3F4F5] via-[#eaa6c4]/70 to-[#f7838d] animate-gradient-flow" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f7838d] hover:text-black transition-colors duration-300">
            Experience
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            A journey through research, robotics, and automation — building expertise one breakthrough at a time.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#eaa6c4] to-[#f7838d] hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative md:ml-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-6 timeline-item hidden md:block bg-[#f7838d] rounded-full w-4 h-4" />

                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-[#f7838d]/70 hover:shadow-[0_0_30px_rgba(247,131,141,0.4)] group relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-black group-hover:text-[#f7838d] transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <span className="font-semibold text-[#f7838d]">{exp.company}</span>
                          <div className="flex items-center gap-4 text-sm text-black/70">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-black" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 text-black" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Icon Link */}
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start p-2 rounded-lg bg-[#eaa6c4]/20 hover:bg-[#f7838d]/40 transition-all duration-300"
                        aria-label="View completion letter"
                      >
                        <ExternalLink className="w-5 h-5 text-black hover:text-white transition-colors" />
                      </a>
                    </div>

                    {/* Bullet point description */}
                    <ul className="list-disc pl-5 mb-4 space-y-2 text-black/90 leading-relaxed">
                      {Array.isArray(exp.description) &&
                        exp.description.map((point, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#f7838d]/20 text-black text-sm rounded-full border border-[#f7838d]/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate button */}
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#f7838d] text-black hover:bg-[#f7838d]/90 hover:scale-105 transition-transform"
                    >
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        View Certificate
                      </a>
                    </Button>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-[#f7838d]/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
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
