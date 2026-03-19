

import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:khandelwalnandini89@gmail.com",
      color: "text-black hover:text-[#f7838d]",
      bg: "hover:bg-[#f7838d]/20",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nandinikhandelwal120603",
      color: "text-black hover:text-[#f7838d]",
      bg: "hover:bg-[#f7838d]/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nandini-khandelwal-5b4b8b223/",
      color: "text-black hover:text-[#f7838d]",
      bg: "hover:bg-[#f7838d]/20",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "khandelwalnandini89@gmail.com",
      href: "mailto:khandelwalnandini89@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#95122C] to-[#100C08]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f7838d] hover:text-black transition-colors duration-300 drop-shadow-lg">
            Let's Connect
          </h2>
          <p className="text-lg text-[#f7838d]/90 hover:text-black transition-colors duration-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
          {/* Heading */}
          <h3 className="text-2xl font-bold mb-6 text-black hover:text-[#f7838d] transition-colors duration-300">
            Get In Touch & Follow Me
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Get In Touch Section */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card hover:bg-gradient-to-r hover:from-[#eaa6c4] hover:to-[#f7838d]/20 hover:text-[#f7838d] transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-black/10 group-hover:bg-[#f7838d]/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-black group-hover:text-[#f7838d] transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-black group-hover:text-[#f7838d] transition-colors">
                        {info.label}
                      </p>
                      <p className="text-sm text-black/70 group-hover:text-[#f7838d]/90 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Follow Me Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex gap-4 mb-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl border border-border ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 hover-wiggle group`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-6 h-6 transition-colors" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-black/70 group-hover:text-[#f7838d] transition-colors">
                Let's connect and build something incredible together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
