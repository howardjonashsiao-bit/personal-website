
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Play, ArrowRight, ArrowUpRight } from 'lucide-react';

interface InteractiveWorksProps {
  onBack: () => void;
  onVellaClick?: () => void;
}

const ProjectCard: React.FC<{
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  theme: 'pink' | 'dark' | 'blue' | 'yellow' | 'image';
  image?: string;
  buttonText?: string;
  align?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
}> = ({ number, title, subtitle, description, tags, theme, image, buttonText = "Learn More", align = 'left', className = '', onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    // Calculate normalized position -1 to 1
    const x = ((e.clientX - left) / width) - 0.5;
    const y = ((e.clientY - top) / height) - 0.5;
    // Intensity factor
    setTilt({ x: x * 5, y: y * 5 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };
  
  const themeStyles = {
    pink: "bg-[#fff0f5] text-black",
    dark: "bg-[#050505] text-white border border-gray-800",
    blue: "bg-[#f0f9ff] text-black",
    yellow: "bg-[#fffbeb] text-black",
    image: "text-white"
  };

  const buttonStyles = {
    pink: "bg-[#9ff0a8] text-black hover:bg-[#8ae095]",
    dark: "bg-[#9ff0a8] text-black hover:bg-[#8ae095]",
    blue: "bg-[#9ff0a8] text-black hover:bg-[#8ae095]",
    yellow: "bg-[#9ff0a8] text-black hover:bg-[#8ae095]",
    image: "bg-[#9ff0a8] text-black hover:bg-[#8ae095]"
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full rounded-[3rem] overflow-hidden group transition-all duration-500 hover:shadow-2xl ${themeStyles[theme]} ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y * -2}deg) rotateY(${tilt.x * 2}deg) scale3d(${isHovered ? 1.01 : 1}, ${isHovered ? 1.01 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
    >
      {/* Glare/Shine Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-soft-light"
        style={{
          background: `radial-gradient(circle at ${50 + tilt.x * 100}% ${50 + tilt.y * 100}%, rgba(255,255,255,0.4) 0%, transparent 60%)`
        }}
      />

      {/* Background Image for Image Theme */}
      {theme === 'image' && image && (
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            style={{
               transform: isHovered ? `scale(1.1) translate(${tilt.x * -10}px, ${tilt.y * -10}px)` : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>
      )}

      {/* Decorative Number & Features Label - Parallax Depth Layer 1 (Deepest) */}
      <div 
         className={`absolute top-0 left-0 p-6 md:p-10 pointer-events-none z-0 transition-transform duration-100 ease-out flex flex-col items-start`}
         style={{ transform: `translate(${tilt.x * 40}px, ${tilt.y * 40}px)` }}
      >
         <span className={`text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-0 ml-1 opacity-70 ${theme === 'dark' || theme === 'image' ? 'text-gray-300' : 'text-gray-600'}`}>
            Features
         </span>
         <span className={`text-[15vw] md:text-[12rem] font-bold font-['Syne'] leading-none opacity-10 select-none ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
           {number}
         </span>
      </div>

      <div className={`relative z-20 flex flex-col md:flex-row ${align === 'right' ? 'md:flex-row-reverse' : ''} items-center h-full p-8 md:p-16 gap-12`}>
        
        {/* Text Content - Parallax Depth Layer 2 */}
        <div 
          className="flex-1 space-y-6 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${tilt.x * 10}px, ${tilt.y * 10}px)` }}
        >
          <div className="space-y-2">
            <h3 className="text-4xl md:text-6xl font-black font-['Syne'] uppercase leading-tight">
              {title}
            </h3>
            <p className={`text-lg md:text-xl font-medium uppercase tracking-wide opacity-80`}>
              {subtitle}
            </p>
          </div>

          <p className={`max-w-md text-base md:text-lg leading-relaxed ${theme === 'dark' || theme === 'image' ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>

          <button 
            onClick={onClick}
            className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${buttonStyles[theme]}`}
          >
            {buttonText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Visual Content (Phone Mockup) - Parallax Depth Layer 3 (Front) */}
        {theme !== 'image' && (
          <div 
             className="flex-1 flex justify-center items-center relative perspective-1000 transition-transform duration-100 ease-out"
             style={{ transform: `translate(${tilt.x * -20}px, ${tilt.y * -20}px)` }}
          >
             {/* Abstract Phone/UI representation */}
             <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:shadow-[20px_20px_60px_rgba(0,0,0,0.3)]">
                <img 
                  src={image || "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop"} 
                  alt="App UI" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
             </div>
             
             {/* Secondary floating element */}
             <div className="absolute -bottom-10 -right-10 md:right-0 w-40 h-40 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl hidden md:block animate-float">
                <div className="w-full h-full flex flex-col justify-between">
                   <div className="w-8 h-8 rounded-full bg-green-400/80 shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
                   <div className="space-y-2">
                      <div className="w-full h-2 bg-white/30 rounded-full"></div>
                      <div className="w-2/3 h-2 bg-white/30 rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InteractiveWorks: React.FC<InteractiveWorksProps> = ({ onBack, onVellaClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-child');
    elements.forEach((el) => observer.observe(el));

    return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen text-black font-['Inter'] pb-0 overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Header / Nav */}
      <div className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center mix-blend-difference text-white">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider hover:text-purple-400 transition-colors group"
        >
          <div className="p-2 rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition-all">
             <ArrowLeft size={20} />
          </div>
          <span>Back to Home</span>
        </button>
        <span className="font-['Syne'] font-bold text-xl hidden md:block">INTERACTIVE WORKS 2023-2025</span>
      </div>

      {/* Hero Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 text-center bg-white relative">
        <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-[100px] pointer-events-none opacity-50"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        
        {/* UPDATED TITLE HERE */}
        <h1 className="relative z-10 text-[8vw] md:text-[7vw] font-black font-['Syne'] text-[#333] leading-[0.85] tracking-tighter uppercase reveal-child reveal">
          Frontend App <br className="md:hidden" /> & Figma Sketch
        </h1>
        <p className="relative z-10 mt-8 text-gray-500 text-lg uppercase tracking-widest reveal-child reveal delay-100">
          Crafting Intuitive, Meaningful Experiences
        </p>
      </header>

      {/* Projects Container */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 space-y-8 pb-24">
        
        {/* 01 Vella */}
        <div className="reveal-child reveal">
            <ProjectCard 
              number="01"
              title="Vella Perfume Station:"
              subtitle="Research-Driven Service Design"
              description="Role: UX Research & Interaction Design. Addressing the pain points of 'Maintaining fragrance while out' for urban users."
              theme="pink"
              image="https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/vellamain%201.png"
              onClick={onVellaClick}
            />
        </div>

        {/* 02 BodySync */}
        <div className="reveal-child reveal">
            <ProjectCard 
              number="02"
              title="BodySync:"
              subtitle="Personal Health Condition Management App"
              description="Responsible for UI/UX Design. A comprehensive health tracking ecosystem that adapts to your lifestyle."
              theme="dark"
              align="right"
              image="https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/Howard%202130031083%202.png"
              buttonText="Start Now"
            />
        </div>

        {/* 03 Yunnan */}
        <div className="reveal-child reveal">
            <ProjectCard 
              number="03"
              title="Yunnan Explorer:"
              subtitle="Seamless Travel in Yunnan"
              description="A high-fidelity landing page for AudioCat, a UI/UX case study focused on a youth-centric audiobook and social dubbing application. The site features interactive data visualization, detailed user personas, and animated user flows to showcase the product's design journey."
              theme="blue"
              image="https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/yunnan%201.png"
              buttonText="Learn more"
            />
        </div>

        {/* 04 StoryFlow */}
        <div className="reveal-child reveal">
            <ProjectCard 
              number="04"
              title="StoryFlow:"
              subtitle="Where Voices Bring Books To Life"
              description="An immersive audiobook experience designed for deep engagement and storytelling enhancement."
              theme="yellow"
              align="right"
              image="https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/image%201.png"
              buttonText="Listen Now"
            />
        </div>

        {/* Unity Header */}
        <div className="py-24 text-center reveal-child reveal relative">
           <div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[200px] bg-gradient-to-r from-transparent via-gray-100 to-transparent blur-3xl -z-10"
             style={{ opacity: Math.min(1, scrollY / 3000) }}
           ></div>
           <h2 className="text-[10vw] md:text-[8vw] font-black font-['Syne'] text-[#555] opacity-30 uppercase leading-none"
               style={{ transform: `scale(${1 + (scrollY - 2000) * 0.0001})` }} // Subtle scale on scroll
           >
             Unity
           </h2>
        </div>

        {/* 05 Meixi */}
        <div className="reveal-child reveal">
            <ProjectCard 
              number="05"
              title="Meixi Stone Archways:"
              subtitle="An Immersive VR Journey"
              description="Into the cultural legacy of the Meixi Archway. Experience history through virtual reality."
              theme="image"
              image="https://images.unsplash.com/photo-1543085078-4537b027c006?q=80&w=1000&auto=format&fit=crop"
              className="min-h-[600px]"
            />
        </div>

        {/* 06 Water */}
        <div className="reveal-child reveal">
            <ProjectCard 
              number="06"
              title="Interactive Water:"
              subtitle="Water Imitation"
              description="A Unity device that can interact with the water surface via a mouse. Simulating fluid dynamics in real-time."
              theme="blue"
              align="right"
              image="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000&auto=format&fit=crop"
              buttonText="Still Making..."
            />
        </div>

         {/* 07 Sunny Land */}
         <div className="reveal-child reveal">
            <ProjectCard 
              number="07"
              title="Sunny Land:"
              subtitle="An Interactive Game"
              description="Designed on Unity. A playful 2D platformer bringing joy and challenge."
              theme="pink"
              image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
              buttonText="Still Making..."
            />
        </div>

         {/* 08 Dream Forest */}
         <div className="reveal-child reveal">
            <ProjectCard 
              number="08"
              title="Dream Forest:"
              subtitle="A VR Space"
              description="Of a dreamy forest created through Unity. Escape into a bioluminescent world."
              theme="blue"
              align="right"
              image="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop"
              buttonText="Still Making..."
            />
        </div>

      </div>

      {/* Macro Section - The Footer/End Piece */}
      <section className="bg-[#1a0505] text-white py-24 px-6 md:px-12 rounded-t-[3rem] mt-12 relative overflow-hidden">
        {/* Background Gradients - Parallax */}
        <div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-100 ease-out" 
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Logo Area */}
          <div className="flex items-center gap-3 mb-16">
            <div className="flex gap-1">
               <div className="w-4 h-4 bg-green-400 rotate-45 animate-pulse"></div>
               <div className="w-4 h-4 bg-green-400/50 rotate-45 animate-pulse delay-75"></div>
            </div>
            <span className="text-3xl font-bold font-['Syne']">Macro</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
             <div>
                <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] leading-tight mb-8">
                  Join Macro for <br/>finance <br/> management
                </h2>
                <div className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-green-400 group-hover:text-black transition-colors duration-300">
                    <Play className="fill-current w-6 h-6 ml-1" />
                  </div>
                  <span className="text-sm text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">Watch Showreel</span>
                </div>
             </div>
             <div className="relative h-[400px] bg-[#222] rounded-3xl border border-white/10 p-6 flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500">
                {/* Mockup Chart */}
                <div className="w-full h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black p-8 group">
                    <div className="absolute top-8 left-8 z-10">
                      <div className="text-gray-400 text-sm">Total Balance</div>
                      <div className="text-3xl font-bold">$124,500.00</div>
                    </div>
                    {/* Abstract Graph Line */}
                    <svg className="absolute bottom-0 left-0 w-full h-64 group-hover:scale-110 transition-transform duration-1000 origin-bottom" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,80 C20,70 40,90 60,40 S80,10 100,20 L100,100 L0,100 Z" fill="url(#grad)" fillOpacity="0.3" />
                      <path d="M0,80 C20,70 40,90 60,40 S80,10 100,20" stroke="#4ade80" strokeWidth="2" fill="none" className="drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                </div>
             </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
             {[
               { val: "456 K", label: "Strategy", sub: "Macro Users from all over the globe" },
               { val: "466 M", label: "", sub: "Macro's Revenue in 2023 in the first Quarter" },
               { val: "256%", label: "", sub: "Macro Investment Growth in 2023" }
             ].map((stat, i) => (
                <div key={i} className="bg-[#f5f5f5] text-black p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
                    <h3 className="text-5xl font-['Syne'] font-light mb-2">{stat.val}</h3>
                    {stat.label && <p className="font-bold uppercase tracking-wide mb-4">{stat.label}</p>}
                    <p className={`text-xs text-gray-500 ${!stat.label ? 'mt-auto pt-4' : ''}`}>{stat.sub}</p>
                </div>
             ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-black/50 border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
             <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl font-['Syne'] font-bold leading-tight">
                  Let's learn how <br/> Macro works
                </h2>
                <div>
                   <span className="text-gray-500 uppercase text-xs tracking-widest mb-2 block">Partners</span>
                   <h3 className="text-2xl font-bold">Meet Macro most <br/> trusted partners</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                   Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla erat morbi amet duis mattis. Ut neque facilisis etiam dolor mauris leo nisl.
                </p>
                <button className="px-6 py-2 bg-[#9ff0a8] text-black rounded-full font-bold text-sm hover:bg-[#8ae095] hover:scale-105 transition-all">
                  Digitize Now
                </button>
             </div>

             <div className="relative z-10 flex items-center justify-end">
                <button className="bg-[#9ff0a8] text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300">
                   Join Macro Now <ArrowUpRight className="w-4 h-4" />
                </button>
             </div>
             
             {/* Abstract Background pattern */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 to-transparent opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
          </div>
          
          {/* <div className="mt-16 text-center md:text-left">
            <h4 className="text-gray-500 uppercase tracking-widest">About Us</h4>
            <p className="text-[15vw] font-['Syne'] font-bold leading-none text-[#220a0a] select-none opacity-50 transform translate-y-4">04</p>
          </div> */}

        </div>
      </section>
    </div>
  );
};

export default InteractiveWorks;
