import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Github, Linkedin, Twitter } from 'lucide-react';
import { ContactLink } from '../types';

interface ContactProps {
  contactLinks: ContactLink[];
}

const Contact: React.FC<ContactProps> = ({ contactLinks }) => {
  const getIcon = (type: ContactLink['type']) => {
    switch (type) {
      case 'email':
        return <Mail className="w-6 h-6" />;
      case 'instagram':
        return <Instagram className="w-6 h-6" />;
      case 'github':
        return <Github className="w-6 h-6" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'twitter':
        return <Twitter className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Feel free to reach out to me through these channels:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contactLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card-bg px-6 py-3 rounded-lg border border-border-color hover:border-accent transition-all duration-300 hover:bg-accent/10 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-accent group-hover:text-accent-hover transition-colors">
                  {getIcon(link.type)}
                </span>
                <span className="text-white group-hover:text-accent transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
