// import { useEffect, useRef, useState } from 'react';
// import { ExternalLink, Github, Eye } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const projectsData = [
//   {
//     title: 'Swarm Warehouse Robots',
//     description: 'Collaborative mini-robots for warehouse automation using ESP8266 and OpenCV for mapping and coordination.',
    
//     technologies: ['Python', 'OpenCV', 'ESP8266', 'ArUco Markers', 'HTTP Communication', 'Path Planning (A*)'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/coordinated_mini_bots',
    
//     featured: true
//   },
//   {
//     title: 'NanBOT – AI Assistant',
//     description: 'GUI-driven AI assistant with face tracking, voice command interface, and task management. Achieved 92.35% accuracy in real-time face recognition under 5s response time.',
    
//     technologies: ['Python', 'OpenCV', 'Tkinter', 'ESP32', 'Face Recognition', 'Speech Recognition'],
//     githubUrl: '#', // (let me know if repo link exists, I’ll plug it in)
    
//     featured: true
//   },
//   {
//     title: 'AI Fitness Trainer',
//     description: 'Posture-based fitness game with real-time rep counting and movement tracking using computer vision.',
    
//     technologies: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'Pose Estimation'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/A-Posture-Based-Fitness-Game-Using-AI-Computer-Vision',
    
//     featured: true
//   },
//   {
//     title: 'Live Action Recognition System',
//     description: 'Real-time human action recognition with CNN+LSTM trained on UCF101 dataset.',
    
//     technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'LSTM', 'CNN', 'UCF101 Dataset'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/Human_action_recognition_DL_OPENCV_MODEL',
    
//     featured: false
//   },
//   {
//     title: 'File Automation Toolkit',
//     description: 'A Python toolkit for automated file handling and smart workflow organization.',
    
//     technologies: ['Python', 'OS Library', 'Shutil', 'Regex', 'Automation Scripts'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/Automated-file-management-system',
    
//     featured: false
//   },
//   {
//     title: 'AI Photo Booth (Vintage Vibes)',
//     description: 'Web-based AI-powered photo booth app with real-time filters and retro capture styles.',
    
//     technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'AI Filters'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/-AI-Enhanced-Photo-Booth-App',
    
//     featured: false
//   }
// ];

// const Projects = () => {
//   const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.2,
//       rootMargin: '0px 0px -100px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = parseInt(entry.target.getAttribute('data-index') || '0');
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setVisibleItems(prev => new Set([...prev, index]));
//           }, index * 150);
//         }
//       });
//     }, observerOptions);

//     projectRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       projectRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background via-sea/5 to-background">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work, demonstrating creativity, technical skills, and attention to detail
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project, index) => {
//             const isVisible = visibleItems.has(index);
            
//             return (
//               <div
//                 key={index}
//                 ref={(el) => (projectRefs.current[index] = el)}
//                 data-index={index}
//                 className={`group relative transition-all duration-700 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-tangerine/50 hover-lift h-full">
//                   {/* Project Image */}
//                   <div className="relative h-48 bg-gradient-card overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-t from-tangerine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     {/* Overlay buttons */}
//                     <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <Button
//                         size="sm"
//                         className="bg-white/90 text-tangerine hover:bg-white hover:scale-105"
//                         asChild
//                       >
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="bg-white/90 border-tangerine text-tangerine hover:bg-tangerine hover:text-white hover:scale-105"
//                         asChild
//                       >
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="w-4 h-4 mr-2" />
//                           Code
//                         </a>
//                       </Button>
//                     </div>
//                   </div>
                  
//                   {/* Project Content */}
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-3">
//                       <h3 className="text-xl font-bold group-hover:text-tangerine transition-colors">
//                         {project.title}
//                       </h3>
//                       {project.featured && (
//                         <span className="px-2 py-1 bg-gradient-hero text-white text-xs rounded-full font-semibold">
//                           Featured
//                         </span>
//                       )}
//                     </div>
                    
//                     <p className="text-muted-foreground mb-4 leading-relaxed">
//                       {project.description}
//                     </p>
                    
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-2 py-1 bg-gradient-card text-xs rounded-md border border-border group-hover:border-tangerine/30 transition-colors"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     <div className="flex gap-3">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="flex-1 border-tangerine text-tangerine hover:bg-tangerine hover:text-white"
//                         asChild
//                       >
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="w-4 h-4 mr-2" />
//                           Code
//                         </a>
//                       </Button>
//                       <Button
//                         size="sm"
//                         className="flex-1 bg-gradient-hero hover:scale-105"
//                         asChild
//                       >
//                       </Button>
//                     </div>
//                   </div>
                  
//                   {/* Hover gradient overlay */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
        
//         {/* View More Button */}
//         <div className="text-center mt-12">
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-2 border-tangerine text-tangerine hover:bg-tangerine hover:text-white px-8"
//           >
//             <Github className="w-5 h-5 mr-2" />
//             View All Projects on GitHub
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import { useEffect, useRef, useState } from 'react';
// import { Github } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const projectsData = [
//   {
//     title: 'Swarm Warehouse Robots',
//     description: 'Collaborative mini-robots for warehouse automation using ESP8266 and OpenCV for mapping and coordination.',
//     technologies: ['Python', 'OpenCV', 'ESP8266', 'ArUco Markers', 'HTTP Communication', 'Path Planning (A*)'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/coordinated_mini_bots',
//     featured: true,
//   },
//   {
//     title: 'NanBOT – AI Assistant',
//     description: 'GUI-driven AI assistant with face tracking, voice command interface, and task management. Achieved 92.35% accuracy in real-time face recognition under 5s response time.',
//     technologies: ['Python', 'OpenCV', 'Tkinter', 'ESP32', 'Face Recognition', 'Speech Recognition'],
//     githubUrl: '#',
//     featured: true,
//   },
//   {
//     title: 'AI Fitness Trainer',
//     description: 'Posture-based fitness game with real-time rep counting and movement tracking using computer vision.',
//     technologies: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'Pose Estimation'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/A-Posture-Based-Fitness-Game-Using-AI-Computer-Vision',
//     featured: true,
//   },
//   {
//     title: 'Live Action Recognition System',
//     description: 'Real-time human action recognition with CNN+LSTM trained on UCF101 dataset.',
//     technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'LSTM', 'CNN', 'UCF101 Dataset'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/Human_action_recognition_DL_OPENCV_MODEL',
//     featured: false,
//   },
//   {
//     title: 'File Automation Toolkit',
//     description: 'A Python toolkit for automated file handling and smart workflow organization.',
//     technologies: ['Python', 'OS Library', 'Shutil', 'Regex', 'Automation Scripts'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/Automated-file-management-system',
//     featured: false,
//   },
//   {
//     title: 'AI Photo Booth (Vintage Vibes)',
//     description: 'Web-based AI-powered photo booth app with real-time filters and retro capture styles.',
//     technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'AI Filters'],
//     githubUrl: 'https://github.com/nandinikhandelwal120603/-AI-Enhanced-Photo-Booth-App',
//     featured: false,
//   },
// ];

// const Projects = () => {
//   const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = parseInt(entry.target.getAttribute('data-index') || '0');
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setVisibleItems(prev => new Set([...prev, index]));
//           }, index * 150);
//         }
//       });
//     }, observerOptions);

//     projectRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
//     return () => { projectRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); }); };
//   }, []);

//   return (
//     <section id="projects" className="relative py-20 px-6 overflow-hidden">
//       {/* Section Background → Gradient 05 */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#95122C] to-[#100C08] animate-gradient-flow" />

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work, demonstrating creativity, technical skills, and attention to detail.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project, index) => {
//             const isVisible = visibleItems.has(index);
//             return (
//               <div
//                 key={index}
//                 ref={(el) => (projectRefs.current[index] = el)}
//                 data-index={index}
//                 className={`group relative rounded-2xl p-6 border border-border hover:shadow-[0_0_30px_rgba(255,148,8,0.4)] transition-all duration-700 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 {/* Card Background → Gradient 01 */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F3F4F5] to-[#FF9408] opacity-90" />

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between mb-3">
//                     <h3 className="text-xl font-bold group-hover:text-tangerine transition-colors">
//                       {project.title}
//                     </h3>
//                     {project.featured && (
//                       <span className="px-2 py-1 bg-gradient-hero text-white text-xs rounded-full font-semibold">
//                         Featured
//                       </span>
//                     )}
//                   </div>

//                   <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-md border border-white/30"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Single View Code Button */}
//                   <Button
//                     size="sm"
//                     className="w-full bg-white/90 text-tangerine hover:bg-white hover:scale-105 transition-transform"
//                     asChild
//                   >
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                       <Github className="w-4 h-4 mr-2" />
//                       View Code
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* View More Button */}
//         <div className="text-center mt-16">
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-2 border-tangerine text-tangerine hover:bg-tangerine hover:text-white px-8"
//           >
//             <Github className="w-5 h-5 mr-2" />
//             View All Projects on GitHub
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Swarm Warehouse Robots",
    description:
      "Collaborative mini-robots for warehouse automation using ESP8266 and OpenCV for mapping and coordination.",
    technologies: [
      "Python",
      "OpenCV",
      "ESP8266",
      "ArUco Markers",
      "HTTP Communication",
      "Path Planning (A*)",
    ],
    githubUrl:
      "https://github.com/nandinikhandelwal120603/coordinated_mini_bots",
    featured: true,
  },
  {
    title: "NanBOT – AI Assistant",
    description:
      "GUI-driven AI assistant with face tracking, voice command interface, and task management. Achieved 92.35% accuracy in real-time face recognition under 5s response time.",
    technologies: [
      "Python",
      "OpenCV",
      "Tkinter",
      "ESP32",
      "Face Recognition",
      "Speech Recognition",
    ],
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Fitness Trainer",
    description:
      "Posture-based fitness game with real-time rep counting and movement tracking using computer vision.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Flask", "Pose Estimation"],
    githubUrl:
      "https://github.com/nandinikhandelwal120603/A-Posture-Based-Fitness-Game-Using-AI-Computer-Vision",
    featured: true,
  },
  {
    title: "Live Action Recognition System",
    description:
      "Real-time human action recognition with CNN+LSTM trained on UCF101 dataset.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "LSTM",
      "CNN",
      "UCF101 Dataset",
    ],
    githubUrl:
      "https://github.com/nandinikhandelwal120603/Human_action_recognition_DL_OPENCV_MODEL",
    featured: false,
  },
  {
    title: "File Automation Toolkit",
    description:
      "A Python toolkit for automated file handling and smart workflow organization.",
    technologies: ["Python", "OS Library", "Shutil", "Regex", "Automation Scripts"],
    githubUrl:
      "https://github.com/nandinikhandelwal120603/Automated-file-management-system",
    featured: false,
  },
  {
    title: "AI Photo Booth (Vintage Vibes)",
    description:
      "Web-based AI-powered photo booth app with real-time filters and retro capture styles.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "Flask",
      "AI Filters",
    ],
    githubUrl:
      "https://github.com/nandinikhandelwal120603/-AI-Enhanced-Photo-Booth-App",
    featured: false,
  },
];

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index") || "0");
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleItems((prev) => new Set([...prev, index]));
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
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      {/* Section Background → Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#95122C] to-[#100C08] animate-gradient-flow" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white hover:text-black transition-colors duration-300">
            Featured Projects
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating creativity, technical
            skills, and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const isVisible = visibleItems.has(index);
            return (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                data-index={index}
                className={`group relative rounded-2xl p-6 border-2 border-[#f7838d] bg-white hover:bg-[#f7838d] hover:text-black hover:shadow-lg transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-black group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-[#f7838d] text-black text-xs rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-black/90 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#f7838d] text-black text-xs rounded-md border border-[#f7838d]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Code Button */}
                  <Button
                    size="sm"
                    className="w-full border-2 border-[#f7838d] bg-white text-black hover:bg-[#f7838d] hover:text-black hover:scale-105 transition-transform"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#f7838d] text-[#f7838d] hover:bg-[#f7838d] hover:text-black px-8"
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
