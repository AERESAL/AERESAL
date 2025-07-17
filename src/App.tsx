import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/ProjectsNew';
import Footer from './components/Footer';
import GlassCard from './components/GlassCard';
import { PersonalInfo, ContactLink } from './types';

const App: React.FC = () => {
  const personalInfo: PersonalInfo = {
    name: "Sai Seelam",
    title: "ENHS'27",
    description: "Student at East Northport High School, Class of 2027",
    profileImage: "profile-placeholder.svg"
  };

  const contactLinks: ContactLink[] = [
    {
      id: "1",
      type: "instagram",
      label: "@saiseelam",
      url: "https://instagram.com/saiseelam"
    },
    {
      id: "2",
      type: "tiktok",
      label: "@saiseelam",
      url: "https://tiktok.com/@saiseelam"
    }
  ];

  return (
    <div className="bg-primary text-text-primary">
      <Navigation />
      <Hero personalInfo={personalInfo} />
      <Projects />
      
      {/* GitHub Stats Section */}
      <section id="stats" className="py-20 bg-secondary">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Coding Stats
          </h2>
          <div className="flex justify-center">
            <GlassCard className="border border-border-color" noPadding>
              <img 
                src="https://github-readme-stats.hackclub.dev/api/wakatime?username=1380&api_domain=hackatime.hackclub.com&&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8&theme=midnight-purple"
                alt="Hackatime Stats"
                className="rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="py-20 bg-primary">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Connect With Me
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Follow me on social media!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-card-bg px-6 py-3 rounded-lg border border-border-color hover:border-accent transition-all duration-300 hover:bg-accent/10 group"
                >
                  <span className="text-accent group-hover:text-accent-hover transition-colors">
                    {link.type === 'instagram' ? '📷' : '🎵'}
                  </span>
                  <span className="text-white group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
