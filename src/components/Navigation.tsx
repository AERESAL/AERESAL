import React from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navigation: React.FC = () => {
  const { scrollY, isScrollingUp } = useScrollPosition();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'stats', label: 'Stats' },
    { id: 'connect', label: 'Connect' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the scroll container (App div or body)
      const scrollContainer = document.querySelector('[style*="scroll-snap-type"]') || document.documentElement;
      const elementPosition = element.getBoundingClientRect().top;
      const containerScrollTop = scrollContainer.scrollTop || window.pageYOffset;
      const targetPosition = elementPosition + containerScrollTop;

      if (scrollContainer === document.documentElement) {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      } else {
        scrollContainer.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: scrollY > 300 && !isScrollingUp ? -100 : 0,
        backgroundColor: scrollY > 50 ? 'rgba(18, 18, 18, 0.3)' : 'rgba(18, 18, 18, 0.2)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{
        boxShadow: scrollY > 50 ? '0 4px 6px rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div className="container mx-auto px-5 py-4">
        <ul className="flex justify-center items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative text-white font-medium py-2 px-1 transition-colors duration-300 hover:text-accent group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
