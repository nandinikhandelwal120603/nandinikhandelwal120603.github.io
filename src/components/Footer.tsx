import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-tangerine via-butter to-blush text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-3xl font-bold mb-4 hover:scale-105 transition-transform inline-block"
          >
            Alex Thompson
          </button>
          
          <p className="text-white/90 mb-8 max-w-md mx-auto">
            Creating digital experiences with passion, creativity, and a commitment to excellence.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover-wiggle group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-white transition-colors" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80 text-sm flex items-center justify-center gap-2">
              © {currentYear} Alex Thompson. Made with 
              <Heart className="w-4 h-4 text-red-300 animate-pulse" />
              and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;