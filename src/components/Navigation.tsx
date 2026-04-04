
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      if (location.pathname !== '/') return;

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
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
          : "bg-transparent"
      } rounded-2xl flex items-center h-16`}
    >
      {/* Subtle Glow behind navbar */}
      <div className="absolute inset-0 rounded-2xl bg-white/5 blur-xl pointer-events-none" />

      <div className="relative z-10 w-full px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => isHomePage ? scrollToSection('hero') : navigate('/')}
          className="flex items-center gap-3 hover:scale-105 transition-all group"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 group-hover:scale-105 transition-all">
             <img
              src="/images/gallery/logo.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-black tracking-tighter text-white">
            NANDINI<span className="text-[#f7838d]">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative py-1 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeSection === item.id && isHomePage
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && isHomePage && (
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f7838d] to-white rounded-full shadow-[0_0_10px_rgba(247,131,141,0.8)]" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#f7838d] to-[#ffb3ba] text-black font-bold px-8 py-5 rounded-full hover:scale-105 transition-all shadow-[0_0_25px_rgba(247,131,141,0.5)]"
            onClick={() => scrollToSection('contact')}
          >
            LET'S TALK
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0e0e11]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2 py-6 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${
                  activeSection === item.id && isHomePage
                    ? 'text-[#f7838d] bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="lg"
              className="mt-4 bg-gradient-to-r from-[#f7838d] to-[#ffb3ba] text-black font-bold h-14 rounded-xl shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              LET'S TALK
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
