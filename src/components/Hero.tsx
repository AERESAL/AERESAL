import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Instagram } from 'lucide-react';
import { PersonalInfo } from '../types';
import GlassCard from './GlassCard';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/saiseelam', label: 'Instagram' },
    { icon: () => <span className="text-lg">🎵</span>, url: 'https://tiktok.com/@saiseelam', label: 'TikTok' },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mb-10 flex flex-col items-center"
      >
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden relative">
            <GlassCard className="w-full h-full rounded-full border-4 border-accent shadow-2xl shadow-accent/30" noPadding>
              <img
                src={personalInfo.profileImage || "profile-placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </GlassCard>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <GlassCard className="rounded-full shadow-lg whitespace-nowrap">
              <div className="px-8 py-4 text-center">
                <h1 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h1>
                <p className="text-text-secondary text-sm mb-3">{personalInfo.title}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors duration-300"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-text-secondary mb-2">Scroll to learn more</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
