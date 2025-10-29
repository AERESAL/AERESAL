import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(25, 50, 90, 0.6)',
          mixBlendMode: 'multiply'
        }}
      ></div>
      
      <motion.div 
        className="absolute top-1/3 left-10 transform -translate-y-1/2 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <motion.div 
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 120,
            damping: 12
          }}
        >
          <div>Sai</div>
          <div>Seelam</div>
        </motion.div>

        {/* Small description aligned under the name. Replace the placeholder text and URL with your real description and LinkedIn profile. */}
        <motion.div
          className="mt-4 max-w-lg text-white"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl font-medium">Computer Engineering Student | 43280D</p>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-accent font-medium hover:underline"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.div 
          className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-white mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1.1,
            ease: "easeOut"
          }}
        >
          ENHS'27
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10"
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
