import { useEffect, useRef, useState } from "react";
import { Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { projectsData, Project } from "@/data/projectsData";

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  const navigate = useNavigate();

  return (
    <div
      data-index={index}
      onClick={() => navigate(`/project/${project.slug}`)}
      className={`group relative rounded-2xl p-7 cursor-pointer overflow-hidden
        bg-white border-2 border-[#f7838d]/20
        hover:border-[#f7838d] hover:shadow-[0_40px_80px_rgba(247,131,141,0.25)] 
        hover:scale-[1.03] transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      {/* Corner Glow Layer */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#f7838d]/30 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      {/* Glassy Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7838d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">

        {/* TOP META */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f7838d]">
            {project.type.replace("_", " ")}
          </span>

          {project.featured && (
            <span className="text-[10px] px-3 py-1 bg-black text-white rounded-full font-bold uppercase tracking-tighter shadow-lg shadow-black/10">
              Featured
            </span>
          )}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-black mb-3 leading-tight tracking-tight group-hover:text-[#f7838d] transition-colors">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-black/70 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* TECH STACK - Skills Style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] px-3 py-1 bg-[#f7838d]/10 text-black border border-[#f7838d]/20 rounded-full font-bold group-hover:bg-[#f7838d] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] text-black/40 font-bold self-center">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* SPACER */}
        <div className="flex-1" />

        {/* ACTION ROW */}
        <div className="flex items-center justify-between pt-4 border-t border-black/5">

          <div className="flex items-center gap-2 text-xs font-bold text-black group-hover:text-[#f7838d] transition-colors">
            <Eye className="w-4 h-4" />
            <span className="uppercase tracking-widest">Case Study</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="opacity-40 hover:opacity-100 hover:scale-110 transition-all text-black"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* Section Background → Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#95122C] to-[#100C08]" />
      
      {/* Subtle overlay texture/glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f7838d]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#f7838d]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-medium">
            Building intelligent, autonomous systems end-to-end. 
            Scaling complexity with architectural precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={index} 
              isVisible={visibleItems.has(index)} 
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border border-[#f7838d]/50 text-[#f7838d] hover:bg-[#f7838d] hover:text-black px-10 py-6 text-base font-bold rounded-full transition-all duration-300"
            asChild
          >
            <a href="https://github.com/nandinikhandelwal120603" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-3" />
              View Entire Repository
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
