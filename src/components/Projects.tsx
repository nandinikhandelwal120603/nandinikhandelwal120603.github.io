import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, and payment processing.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Stripe', 'Node.js', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/placeholder.svg',
    technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts, interactive charts, and responsive design for all devices.',
    image: '/placeholder.svg',
    technologies: ['Angular', 'D3.js', 'OpenWeather API', 'SCSS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website with smooth animations, responsive design, and optimized performance. Built with modern web technologies.',
    image: '/placeholder.svg',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    title: 'Blog Platform',
    description: 'Full-featured blog platform with markdown support, comment system, and admin dashboard. SEO optimized and mobile-friendly.',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    title: 'Data Visualization Tool',
    description: 'Interactive data visualization tool for analyzing complex datasets. Features multiple chart types and export functionality.',
    image: '/placeholder.svg',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  }
];

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          }, index * 150);
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background via-sea/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating creativity, technical skills, and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                data-index={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-tangerine/50 hover-lift h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-card overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tangerine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="bg-white/90 text-tangerine hover:bg-white hover:scale-105"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 border-tangerine text-tangerine hover:bg-tangerine hover:text-white hover:scale-105"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-tangerine transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-1 bg-gradient-hero text-white text-xs rounded-full font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-card text-xs rounded-md border border-border group-hover:border-tangerine/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-tangerine text-tangerine hover:bg-tangerine hover:text-white"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-hero hover:scale-105"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-tangerine text-tangerine hover:bg-tangerine hover:text-white px-8"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;