

// export default Hero;

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-20 relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#95122C] via-[#eaa6c4] to-[#95122C] animate-gradient-flow" />

      {/* Glow Orbs → Soft Pink */}
      <div className="absolute top-16 left-10 w-44 h-44 rounded-full bg-[#f7838d]/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-56 h-56 rounded-full bg-[#f7838d]/20 blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-[#f7838d]/25 blur-2xl animate-pulse" />

      {/* Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black">
            <span className="text-[#f7838d]">Nandini Khandelwal</span>
          </h1>

          <p className="text-lg md:text-xl text-black/80 mb-12 max-w-xl leading-relaxed hover:text-[#f7838d] transition-colors">
            I design and build intelligent systems from autonomous robots to multi-agent AI workflows.
            Focused on turning complex real-world problems into scalable, automated solutions that operate with precision.
            <br /><br />
            Blending engineering, AI, and product thinking to create systems that don’t just respond they execute.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-[#f7838d] text-black hover:bg-[#ff9aad] hover:shadow-[0_0_25px_rgba(247,131,141,0.6)] hover:scale-105 transition-transform px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Systems
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#f7838d] text-black hover:bg-[#f7838d] hover:text-white hover:scale-105 px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Let’s Build Something
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com/nandinikhandelwal120603", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nandini-khandelwal-5b4b8b223/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:khandelwalnandini89@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-[#f7838d]/30 hover:bg-[#f7838d] hover:shadow-[0_0_20px_rgba(247,131,141,0.6)] hover:scale-110 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/gallery/main.jpg"
            alt="Nandini working on robotics"
            className="rounded-2xl shadow-lg max-w-sm md:max-w-md object-cover hover:shadow-[0_0_40px_rgba(247,131,141,0.5)] hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll to skills section"
      >
        <ArrowDown className="w-8 h-8 text-[#f7838d]" />
      </button>
    </section>
  );
};

export default Hero;
