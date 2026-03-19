// import { useEffect, useRef, useState } from 'react';
// import { 
//   FileCode,   // Programming
//   Brain,      // AI & CV
//   Bot,        // Robotics
//   BarChart3,  // Data & Analytics
//   Workflow,   // Automation Tools
//   Box,       // CAD & Simulation
//   Palette,    // UI/UX
//   Users       // Professional Skills
// } from 'lucide-react';


// const skillsData = [
//   // Programming
//   { name: 'Programming', icon: FileCode, description: 'Python, C++, HTML, CSS' },

//   // AI / ML / CV
//   { name: 'AI & Computer Vision', icon: Brain, description: 'TensorFlow, OpenCV, Keras, LibROSA' },

//   // Robotics
//   { name: 'Robotics & Automation', icon: Bot, description: 'ROS2, Microcontrollers, PLCs, SCADA, Control Systems' },

//   // Data & Analytics
//   { name: 'Data & Analytics', icon: BarChart3, description: 'SQL, Power BI, Excel' },

//   // Automation Tools
//   { name: 'Automation Tools', icon: Workflow, description: 'UiPath, Pega, Selenium' },

//   // CAD & Simulation
//   { name: 'CAD & Simulation', icon: Box, description: 'Fusion 360, AutoCAD, Ansys, CATIA' },

//   // Design
//   { name: 'UI/UX & Design', icon: Palette, description: 'Figma, Adobe Creative Suite' },

//   // Professional Skills
//   { name: 'Professional Skills', icon: Users, description: 'Leadership, Creative Thinking, Time Management, Communication' }
// ];



// const Skills = () => {
//   const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
//   const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.3,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = parseInt(entry.target.getAttribute('data-index') || '0');
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setVisibleItems(prev => new Set([...prev, index]));
//           }, index * 100);
//         }
//       });
//     }, observerOptions);

//     skillRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       skillRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background via-butter/5 to-background">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
//             Skills & Expertise
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A diverse toolkit for bringing creative ideas to life through code and design
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {skillsData.map((skill, index) => {
//             const IconComponent = skill.icon;
//             const isVisible = visibleItems.has(index);
            
//             return (
//               <div
//                 key={skill.name}
//                 ref={(el) => (skillRefs.current[index] = el)}
//                 data-index={index}
//                 className={`group p-6 rounded-2xl bg-card border border-border hover-lift hover:border-tangerine/50 cursor-pointer transition-all duration-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="p-4 rounded-xl bg-gradient-card mb-4 group-hover:bg-gradient-hero transition-all duration-300">
//                     <IconComponent className="w-8 h-8 text-tangerine group-hover:text-white transition-colors" />
//                   </div>
                  
//                   <h3 className="font-semibold text-lg mb-2 group-hover:text-tangerine transition-colors">
//                     {skill.name}
//                   </h3>
                  
//                   <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
//                     {skill.description}
//                   </p>
//                 </div>
                
//                 {/* Hover effect decoration */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
//               </div>
//             );
//           })}
//         </div>
        
//         {/* Decorative elements */}
//         <div className="mt-16 flex justify-center">
//           <div className="flex gap-2">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="w-3 h-3 rounded-full bg-tangerine/30 animate-pulse"
//                 style={{ animationDelay: `${i * 0.2}s` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
// import { useEffect, useRef, useState } from 'react';
// import { 
//   FileCode,   // Programming
//   Brain,      // AI & CV
//   Bot,        // Robotics
//   BarChart3,  // Data & Analytics
//   Workflow,   // Automation Tools
//   Box,        // CAD & Simulation
//   Palette,    // UI/UX
//   Users       // Professional Skills
// } from 'lucide-react';

// const skillsData = [
//   { name: 'Programming', icon: FileCode, category: 'Python, C++, HTML, CSS' },
//   { name: 'AI & Computer Vision', icon: Brain, category: 'TensorFlow, OpenCV, Keras, LibROSA' },
//   { name: 'Robotics & Automation', icon: Bot, category: 'ROS2, Microcontrollers, PLCs, SCADA, Control Systems' },
//   { name: 'Data & Analytics', icon: BarChart3, category: 'SQL, Power BI, Excel' },
//   { name: 'Automation Tools', icon: Workflow, category: 'UiPath, Pega, Selenium' },
//   { name: 'CAD & Simulation', icon: Box, category: 'Fusion 360, AutoCAD, Ansys, CATIA' },
//   { name: 'UI/UX & Design', icon: Palette, category: 'Figma, Adobe Creative Suite' },
//   { name: 'Professional Skills', icon: Users, category: 'Leadership, Creative Thinking, Time Management' }
// ];

// const Skills = () => {
//   const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
//   const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.3,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = parseInt(entry.target.getAttribute('data-index') || '0');
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setVisibleItems(prev => new Set([...prev, index]));
//           }, index * 100);
//         }
//       });
//     }, observerOptions);

//     skillRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       skillRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background via-butter/5 to-background">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
//             Skills
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             My toolbox for robotics, AI, and engineering innovation 🚀
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
//           {skillsData.map((skill, index) => {
//             const IconComponent = skill.icon;
//             const isVisible = visibleItems.has(index);
            
//             return (
//               <div
//                 key={skill.name}
//                 ref={(el) => (skillRefs.current[index] = el)}
//                 data-index={index}
//                 className={`group p-6 rounded-xl border bg-card border-border flex flex-col items-center justify-center text-center shadow-sm transition-all duration-500 hover:border-tangerine hover:shadow-lg cursor-pointer ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 {/* Icon */}
//                 <div className="p-4 rounded-full bg-gradient-card mb-4 group-hover:bg-gradient-hero transition-all duration-300">
//                   <IconComponent className="w-10 h-10 text-tangerine group-hover:text-white transition-colors" />
//                 </div>

//                 {/* Skill Name */}
//                 <h3 className="font-semibold text-lg mb-1 group-hover:text-tangerine transition-colors">
//                   {skill.name}
//                 </h3>

//                 {/* Category / Description */}
//                 <p className="text-sm text-muted-foreground">
//                   {skill.category}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { useEffect, useRef, useState } from 'react';
// import { 
//   FileCode, Brain, Bot, BarChart3, 
//   Workflow, Box, Palette, Users 
// } from 'lucide-react';

// const skillsData = [
//   { name: 'Programming', icon: FileCode, description: 'Python, C++, HTML, CSS' },
//   { name: 'AI & Computer Vision', icon: Brain, description: 'TensorFlow, OpenCV, Keras, LibROSA' },
//   { name: 'Robotics & Automation', icon: Bot, description: 'ROS2, Microcontrollers, PLCs, SCADA, Control Systems' },
//   { name: 'Data & Analytics', icon: BarChart3, description: 'SQL, Power BI, Excel' },
//   { name: 'Automation Tools', icon: Workflow, description: 'UiPath, Pega, Selenium' },
//   { name: 'CAD & Simulation', icon: Box, description: 'Fusion 360, AutoCAD, Ansys, CATIA' },
//   { name: 'UI/UX & Design', icon: Palette, description: 'Figma, Adobe Creative Suite' },
//   { name: 'Professional Skills', icon: Users, description: 'Leadership, Creative Thinking, Time Management, Communication' }
// ];

// const Skills = () => {
//   const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
//   const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observerOptions = { threshold: 0.3, rootMargin: '0px 0px -50px 0px' };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = parseInt(entry.target.getAttribute('data-index') || '0');
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setVisibleItems(prev => new Set([...prev, index]));
//           }, index * 100);
//         }
//       });
//     }, observerOptions);

//     skillRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
//     return () => { skillRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); }); };
//   }, []);

//   return (
//     <section 
//       id="skills" 
//       className="relative py-20 px-6 overflow-hidden"
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#95122C] to-[#100C08]" />
//       <div className="relative z-10 max-w-6xl mx-auto">
        
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
//             Skills & Expertise
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A diverse toolkit for bringing creative ideas to life through code and design
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {skillsData.map((skill, index) => {
//             const IconComponent = skill.icon;
//             const isVisible = visibleItems.has(index);

//             return (
//               <div
//                 key={skill.name}
//                 ref={(el) => (skillRefs.current[index] = el)}
//                 data-index={index}
//                 className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-tangerine/70 
//                             hover:shadow-[0_0_30px_rgba(255,148,8,0.4)] transition-all duration-500 
//                             ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="p-4 rounded-xl bg-gradient-card mb-4 group-hover:bg-gradient-hero transition-all duration-300">
//                     <IconComponent className="w-8 h-8 text-tangerine group-hover:text-white transition-colors" />
//                   </div>
//                   <h3 className="font-semibold text-lg mb-2 group-hover:text-tangerine transition-colors">
//                     {skill.name}
//                   </h3>
//                   <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
//                     {skill.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;
import { useEffect, useRef, useState } from 'react';
import { 
  FileCode, Brain, Bot, BarChart3, 
  Workflow, Box, Palette, Users 
} from 'lucide-react';

const skillsData = [
  { name: 'Programming', icon: FileCode, description: 'Python, C++, HTML, CSS' },
  { name: 'AI & Computer Vision', icon: Brain, description: 'TensorFlow, OpenCV, Keras, LibROSA' },
  { name: 'Robotics & Automation', icon: Bot, description: 'ROS2, Microcontrollers, PLCs, SCADA, Control Systems' },
  { name: 'Data & Analytics', icon: BarChart3, description: 'SQL, Power BI, Excel' },
  { name: 'Automation Tools', icon: Workflow, description: 'UiPath, Pega, Selenium' },
  { name: 'CAD & Simulation', icon: Box, description: 'Fusion 360, AutoCAD, Ansys, CATIA' },
  { name: 'UI/UX & Design', icon: Palette, description: 'Figma, Adobe Creative Suite' },
  { name: 'Professional Skills', icon: Users, description: 'Leadership, Creative Thinking, Time Management, Communication' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

