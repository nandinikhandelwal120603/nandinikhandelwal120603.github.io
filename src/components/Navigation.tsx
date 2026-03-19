// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import placeholderLogo from '/placeholder.svg'; // put a logo image later

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { id: 'hero', label: 'Home' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'gallery', label: 'Gallery' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item => document.getElementById(item.id));
//       const scrollPosition = window.scrollY + 100;

//       // highlight active section
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i];
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveSection(navItems[i].id);
//           break;
//         }
//       }

//       // add "shrink" effect without breaking layout
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ${
//         scrolled ? 'h-14' : 'h-16'
//       } flex items-center`}
//     >
//       <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
//         {/* Logo with placeholder */}
//         <button
//           onClick={() => scrollToSection('hero')}
//           className="flex items-center gap-2 hover:scale-105 transition-transform"
//         >
//           <img
//             src={placeholderLogo}
//             alt="Logo"
//             className="w-8 h-8 rounded-full border border-border"
//           />
//           <span className="text-lg font-bold text-gradient hidden sm:inline">
//             Nandini
//           </span>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-tangerine ${
//                 activeSection === item.id ? 'text-tangerine' : 'text-foreground'
//               }`}
//             >
//               {item.label}
//               {activeSection === item.id && (
//                 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-hero rounded-full" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <Button
//             size="sm"
//             className="bg-gradient-hero px-4 py-2 text-sm hover:scale-105 transition-transform"
//             onClick={() => scrollToSection('contact')}
//           >
//             Let's Talk
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 right-0 bg-background border-t border-border md:hidden">
//           <div className="flex flex-col gap-1 py-2 px-4">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted ${
//                   activeSection === item.id ? 'text-tangerine bg-muted' : 'text-foreground'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <Button
//               size="sm"
//               className="mt-2 bg-gradient-hero px-3 py-2 text-sm"
//               onClick={() => scrollToSection('contact')}
//             >
//               Let's Talk
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import placeholderLogo from '/placeholder.svg'; // put a logo image later

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ${
        scrolled ? 'h-14' : 'h-16'
      } flex items-center`}
    >
      <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <img
            src="/images/gallery/logo.jpg"
            alt="Logo"
            className="w-8 h-8 rounded-full border border-[#f7838d]"
          />
          <span className="text-lg font-bold text-[#f7838d] hidden sm:inline hover:text-black transition-colors">
            Nandini
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-[#f7838d] ${
                activeSection === item.id ? 'text-[#f7838d]' : 'text-black'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f7838d] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#f7838d]/80 to-[#eaa6c4]/80 text-black px-4 py-2 hover:scale-105 transition-transform"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#f7838d]/20 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/90 border-t border-[#f7838d] md:hidden backdrop-blur-sm">
          <div className="flex flex-col gap-1 py-2 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#f7838d] bg-[#f7838d]/20'
                    : 'text-black hover:bg-[#f7838d]/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="mt-2 bg-gradient-to-r from-[#f7838d]/80 to-[#eaa6c4]/80 text-black px-3 py-2 hover:scale-105 transition-transform"
              onClick={() => scrollToSection('contact')}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
