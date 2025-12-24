
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import InteractiveWorks from './components/InteractiveWorks';
import ThreeDWorks from './components/ThreeDWorks';
import InternshipProjects from './components/InternshipProjects';
import VellaProject from './components/VellaProject';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'interactive-works' | '3d-works' | 'internship' | 'vella'>('home');

  // Setup reveal animations
  useEffect(() => {
    // We only run this observer setup on the Home view initially.
    if (currentView === 'home') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));
      }, 100);

      return () => observer.disconnect();
    }
  }, [currentView]);

  const handleNavigateToInteractiveWorks = () => {
    setCurrentView('interactive-works');
    window.scrollTo(0, 0);
  };

  const handleNavigateToThreeDWorks = () => {
    setCurrentView('3d-works');
    window.scrollTo(0, 0);
  }

  const handleNavigateToInternship = () => {
    setCurrentView('internship');
    window.scrollTo(0, 0);
  }

  const handleNavigateToVella = () => {
    setCurrentView('vella');
    window.scrollTo(0, 0);
  }

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleBackToInteractive = () => {
    setCurrentView('interactive-works');
  }

  if (currentView === 'interactive-works') {
    return <InteractiveWorks onBack={handleBackToHome} onVellaClick={handleNavigateToVella} />;
  }

  if (currentView === '3d-works') {
    return <ThreeDWorks onBack={handleBackToHome} />;
  }

  if (currentView === 'internship') {
    return <InternshipProjects onBack={handleBackToHome} />;
  }

  if (currentView === 'vella') {
    return <VellaProject onBack={handleBackToInteractive} />;
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar currentView={currentView} />
      
      <main>
        <Hero />
        
        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Projects 
            onInteractiveClick={handleNavigateToInteractiveWorks} 
            onThreeDClick={handleNavigateToThreeDWorks}
            onInternshipClick={handleNavigateToInternship}
          />
        </div>
        
        <div className="reveal">
          <Experience />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>

      <AIChat />
    </div>
  );
};

export default App;
