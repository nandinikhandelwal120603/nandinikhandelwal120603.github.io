

// export default Skills;
import { useEffect, useRef, useState } from 'react';
import {
  FileCode, Brain, Bot, BarChart3,
  Workflow, Box, Palette, Users, Eye
} from 'lucide-react';

const skillsData = [
  { 
    name: 'AI Agents & Orchestration', 
    icon: Brain, 
    description: 'LangGraph, CrewAI, MCP, Tool Calling, RAG Systems' 
  },
  { 
    name: 'Automation & Workflow Systems', 
    icon: Workflow, 
    description: 'n8n, Webhooks, API Integrations, Event Triggers, Schedulers' 
  },
  { 
    name: 'AI-Native Development', 
    icon: FileCode, 
    description: 'Lovable, Bolt, v0, Cursor, AI Pair Programming' 
  },
  { 
    name: 'Machine Learning & Computer Vision', 
    icon: Eye, 
    description: 'TensorFlow, OpenCV, Keras, MediaPipe, CNN, LSTM' 
  },
  { 
    name: 'Robotics & Embedded Systems', 
    icon: Bot, 
    description: 'ROS2, ESP32, Microcontrollers, Control Systems, Sensors' 
  },
  { 
    name: 'Data & Intelligence', 
    icon: BarChart3, 
    description: 'SQL, Pandas, Analytics, Data Processing, Dashboards' 
  },
  { 
    name: 'Frontend & UI Systems', 
    icon: Box, 
    description: 'React, Tailwind CSS, Framer Motion, Vite' 
  },
  { 
    name: 'GenAI & Creative Tools', 
    icon: Palette, 
    description: 'Midjourney, DALL·E, Kling, Whisk, Runway' 
  },
  { 
    name: 'Systems Thinking & Execution', 
    icon: Users, 
    description: 'Problem Solving, Workflow Design, Product Thinking, Rapid Iteration' 
  }
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.3, rootMargin: '0px 0px -50px 0px' };

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

    skillRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => { skillRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); }); };
  }, []);

  return (
    <section
      id="skills"
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Section Background stays same */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#95122C] to-[#100C08]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A diverse toolkit for bringing creative ideas to life through code and design
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={skill.name}
                ref={(el) => (skillRefs.current[index] = el)}
                data-index={index}
                className={`group relative p-6 rounded-2xl bg-white border border-[#f7838d] 
                            hover:bg-[#f7838d]/20 transition-all duration-500 
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-[#f7838d]/20 mb-4 group-hover:bg-[#f7838d]/40 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-black transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-black">{skill.name}</h3>
                  <p className="text-sm text-black/80">
                    {skill.description.split(', ').map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-[#f7838d] text-black text-xs px-2 py-1 rounded-full mr-1 mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

