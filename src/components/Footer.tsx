import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/saiseelam', label: 'Instagram' },
    { icon: () => <span className="text-lg">🎵</span>, url: 'https://tiktok.com/@saiseelam', label: 'TikTok' },
  ];

  return (
    <footer className="bg-secondary border-t border-border-color py-8">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sai Seelam. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
