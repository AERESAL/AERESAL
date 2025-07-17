import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';
import GlassCard from './GlassCard';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch projects from JSON
        const response = await fetch('/projects.json');
        const projectsData: Project[] = await response.json();
        
        // Process projects with better preview images and metadata
        const projectsWithMetadata = projectsData.map((project) => {
          // Use multiple screenshot services as fallbacks
          const screenshotServices = [
            `https://image.thum.io/get/width/400/crop/600/noanimate/${project.link}`,
            `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${project.link}`,
            `https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/png?url=${encodeURIComponent(project.link)}&width=400&height=300`,
            `https://shot.screenshotapi.net/screenshot?token=demo&url=${encodeURIComponent(project.link)}&width=400&height=300`
          ];
          
          return {
            ...project,
            preview: screenshotServices[0], // Use the first service as primary
            fallbackPreviews: screenshotServices.slice(1), // Keep others as fallbacks
            title: project.name,
            description: project.description || `Explore ${project.name} - a web application built with modern technologies. Click to visit the live website and see it in action.`
          };
        });
        
        setProjects(projectsWithMetadata);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, project: Project) => {
    const img = e.target as HTMLImageElement;
    const currentSrc = img.src;
    
    // Try fallback preview services
    if (project.fallbackPreviews && project.fallbackPreviews.length > 0) {
      const nextFallback = project.fallbackPreviews.find((url: string) => url !== currentSrc);
      if (nextFallback) {
        img.src = nextFallback;
        return;
      }
    }
    
    // Final fallback to a nice placeholder
    const cleanDomain = project.link.replace(/^https?:\/\//, '').replace(/\/$/, '');
    img.src = `https://via.placeholder.com/400x300/252525/4f46e5?text=${encodeURIComponent(cleanDomain)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-primary">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            My Projects
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <GlassCard className="rounded-lg overflow-hidden border border-border-color hover:border-accent transition-all duration-300" noPadding>
                {/* Website Preview Image */}
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  <img
                    src={project.preview}
                    alt={`${project.name} website preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => handleImageError(e, project)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Domain overlay */}
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '').split('/')[0]}
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                    {project.title || project.name}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Visit Website Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
