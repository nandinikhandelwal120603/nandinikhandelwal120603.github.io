

// export default Footer;
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nandinikhandelwal120603', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nandini-khandelwal-5b4b8b223/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:khandelwalnandini89@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-[#95122C] to-[#100C08] text-black py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold mb-3 hover:text-[#f7838d] transition-colors"
          >
            Nandini Khandelwal
          </button>

          <p className="text-black/70 mb-6 max-w-md mx-auto hover:text-[#f7838d] transition-colors">
            Building robotics, AI, and automation systems with creativity, precision, and impact.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-full border border-black/20 hover:bg-[#f7838d]/20 hover:scale-110 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-black group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-black/20 pt-4">
            <p className="text-black/70 text-sm flex items-center justify-center gap-2">
              © {currentYear} Nandini Khandelwal. Made with
              <Heart className="w-4 h-4 text-[#f7838d] animate-pulse" />
              and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
