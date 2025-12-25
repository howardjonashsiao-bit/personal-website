
import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCES } from '../constants';
import { Experience as ExperienceType } from '../types';

// Interactive Title Component
const TrajectoryTitle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left });
    }
  };

  const text = "MY TRAJECTORY";
  const letters = text.split("");

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex justify-center items-center cursor-default py-4 mb-20 select-none"
    >
      <div className="flex gap-[0.2em] md:gap-[0.5em]">
        {letters.map((char, index) => {
          if (char === " ") return <span key={index} className="w-4 md:w-8" />;

          // Calculate distance from mouse to this letter
          // We approximate letter width to be about 60px (responsive) for calculation
          const letterCenterX = index * 60 + 30; 
          const distance = Math.abs(mousePos.x - letterCenterX);
          
          // Interaction Intensity (0 to 1) based on distance
          // Range is 200px. Closer = Higher intensity
          const proximity = isHovering ? Math.max(0, 1 - distance / 250) : 0;
          
          const translateY = proximity * -40; // Jump up 40px
          const scale = 1 + proximity * 0.5; // Scale up 1.5x
          const rotate = proximity * (index % 2 === 0 ? 10 : -10); // Slight rotation

          return (
            <span
              key={index}
              className="font-['Syne'] font-black text-5xl md:text-8xl transition-all duration-100 ease-out will-change-transform"
              style={{
                transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                color: proximity > 0.5 ? '#fff' : 'transparent',
                WebkitTextStroke: proximity > 0.5 ? '0px' : '2px rgba(255, 255, 255, 0.5)',
                textShadow: proximity > 0.5 ? '0 0 20px rgba(168, 85, 247, 0.8)' : 'none'
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
      
      {/* Decorative Line beneath */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-500/50 rounded-full blur-[2px]"></div>
    </div>
  );
};

const ExperienceCard: React.FC<{ exp: ExperienceType }> = ({ exp }) => {
  const getBorderColor = (type: string) => {
    switch (type) {
      case 'Professional': return 'group-hover:border-red-500/50';
      case 'Competition': return 'group-hover:border-yellow-500/50';
      case 'Leadership': return 'group-hover:border-blue-500/50';
      default: return 'group-hover:border-green-500/50';
    }
  };

  const getDotColor = (type: string) => {
    switch (type) {
      case 'Professional': return 'bg-red-500 shadow-[0_0_10px_red]';
      case 'Competition': return 'bg-yellow-500 shadow-[0_0_10px_yellow]';
      case 'Leadership': return 'bg-blue-500 shadow-[0_0_10px_blue]';
      default: return 'bg-green-500 shadow-[0_0_10px_green]';
    }
  };

  return (
    <div className={`group relative p-8 bg-[#1a0505] border border-white/10 ${getBorderColor(exp.type)} rounded-3xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col`}>
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className={`w-3 h-3 rounded-full ${getDotColor(exp.type)}`}></div>
      </div>
      <span className="text-gray-500 text-xs tracking-widest uppercase mb-3 block opacity-60">{exp.type}</span>
      <h3 className="text-xl md:text-2xl font-['Syne'] font-bold text-white mb-2 leading-tight">{exp.role}</h3>
      <h4 className="text-base md:text-lg text-gray-400 mb-4 font-medium">{exp.company}</h4>
      <p className="text-xs md:text-sm text-gray-500 mb-6 font-mono border-l-2 border-gray-700 pl-3">{exp.period}</p>
      <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base mt-auto">
        {exp.description}
      </p>
    </div>
  );
};

const Experience: React.FC = () => {
  // Group experiences
  const professional = EXPERIENCES.filter(e => e.type === 'Professional');
  const competition = EXPERIENCES.filter(e => e.type === 'Competition');
  const leadership = EXPERIENCES.filter(e => e.type === 'Leadership');
  const volunteer = EXPERIENCES.filter(e => e.type === 'Volunteer' || e.type === 'Certification');

  const renderSection = (title: string, items: ExperienceType[]) => (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-2 h-8 bg-white/20"></div>
        <h3 className="text-2xl md:text-4xl font-['Syne'] font-bold text-white uppercase tracking-wide">
          {title}
        </h3>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {items.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="bg-[#050000] py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#2a0a0a] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-6xl md:text-8xl font-black font-['Syne'] text-center mb-4 text-[#4a1a1a] opacity-50 uppercase">
          Experiences
        </h2>
        
        {/* Replaced static header with Interactive Trajectory Title */}
        <TrajectoryTitle />

        <div className="space-y-12">
          {renderSection('Professional Experience', professional)}
          {renderSection('Competitions & Awards', competition)}
          {renderSection('Leadership & Campus Activities', leadership)}
          {renderSection('Volunteer & Certifications', volunteer)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
