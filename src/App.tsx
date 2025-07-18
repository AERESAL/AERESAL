import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/ProjectsNew';
import Footer from './components/Footer';
import { ContactLink } from './types';

const App: React.FC = () => {
  const contactLinks: ContactLink[] = [
    {
      id: "1",
      type: "instagram",
      label: "@saitrseelam",
      url: "https://instagram.com/saitrseelam"
    },
    {
      id: "2",
      type: "tiktok",
      label: "@saiseelam",
      url: "https://tiktok.com/@saitrseelam"
    }
  ];

  return (
    <div className="bg-primary text-text-primary overflow-x-hidden h-screen overflow-y-auto" style={{ scrollSnapType: 'y mandatory' }}>
      <Navigation />
      <Hero />
      <Projects />
      
      <section 
        id="stats" 
        className="min-h-screen py-20 flex items-center relative"
        style={{
          backgroundImage: 'url(/background2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
        
        <div className="container mx-auto px-5 w-full relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Coding Stats
          </h2>
          <div className="flex justify-center">
            <div className="bg-card-bg p-4 border border-border-color rounded-lg">
              <img 
                src="https://github-readme-stats.hackclub.dev/api/wakatime?username=1380&api_domain=hackatime.hackclub.com&&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8&theme=midnight-purple"
                alt="Hackatime Stats"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section 
        id="connect" 
        className="min-h-screen py-20 bg-primary flex items-center"
        style={{
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always'
        }}
      >
        <div className="container mx-auto px-5 w-full">
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
