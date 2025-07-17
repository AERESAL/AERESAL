import React from 'react';
import { motion } from 'framer-motion';
import { Skill, Experience, Education } from '../types';
import GlassCard from './GlassCard';

interface AboutProps {
  description: string;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
}

const About: React.FC<AboutProps> = ({ description, skills, experiences, education }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          About Me
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg mb-12 text-center leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillCategory) => (
                <GlassCard key={skillCategory.category} className="rounded-lg border border-border-color">
                  <div className="p-6">
                    <h4 className="text-lg font-medium mb-4 text-white">{skillCategory.category}</h4>
                    <ul className="space-y-2">
                      {skillCategory.items.map((skill) => (
                        <li key={skill} className="text-text-secondary">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Experience</h3>
            <div className="relative">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-1 relative z-10"></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-2 top-6 w-0.5 h-full bg-border-color -z-10"></div>
                  )}
                  <div className="ml-6 flex-1">
                    <h4 className="text-lg font-medium text-white">{experience.position}</h4>
                    {experience.company && (
                      <p className="text-text-secondary font-medium">{experience.company}</p>
                    )}
                    <p className="text-accent text-sm mb-2">{experience.duration}</p>
                    <p className="text-text-secondary">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <GlassCard key={edu.id} className="rounded-lg border border-border-color">
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-white">{edu.degree}</h4>
                    <p className="text-text-secondary">{edu.institution}</p>
                    <p className="text-accent text-sm">{edu.duration}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



