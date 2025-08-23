import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Creative Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-tangerine/20 via-butter/30 to-blush/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-hero-slide">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Alex Thompson</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl font-light text-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with code, creativity, and a splash of color. 
            Welcome to my vibrant corner of the web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:scale-105 transition-transform px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-tangerine text-tangerine hover:bg-tangerine hover:text-white px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-16">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-tangerine hover:scale-110 transition-all duration-300 hover-wiggle group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-foreground group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('skills')}
          className="animate-bounce hover:scale-110 transition-transform"
          aria-label="Scroll to skills section"
        >
          <ArrowDown className="w-8 h-8 text-tangerine" />
        </button>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-accent opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-card opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full bg-match-green/20 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;