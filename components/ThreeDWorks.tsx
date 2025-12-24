import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

interface ThreeDWorksProps {
  onBack: () => void;
}

const RetroTV: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative bg-[#2a1a10] p-4 md:p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-[#3d291b] ${className}`}>
    {/* TV Texture Overlay */}
    <div className="absolute inset-0 opacity-20 pointer-events-none rounded-[3rem] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    
    {/* Main Screen Container */}
    <div className="relative bg-black rounded-[2rem] border-[10px] border-[#1a110d] overflow-hidden shadow-inner h-full">
      {/* Screen Glitch/Scanlines */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      <div className="absolute inset-0 z-20 pointer-events-none animate-pulse opacity-5 bg-white mix-blend-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>

    {/* TV Controls */}
    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30 hidden md:flex">
      <div className="w-16 h-16 rounded-full bg-[#1a110d] border-4 border-[#3d291b] shadow-lg flex items-center justify-center transform hover:rotate-45 transition-transform cursor-pointer">
        <div className="w-2 h-8 bg-[#3d291b] rounded-full"></div>
      </div>
      <div className="w-16 h-16 rounded-full bg-[#1a110d] border-4 border-[#3d291b] shadow-lg flex items-center justify-center transform hover:-rotate-45 transition-transform cursor-pointer">
        <div className="w-2 h-8 bg-[#3d291b] rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
         {[1,2,3,4].map(i => <div key={i} className="w-6 h-2 bg-[#0a0503] rounded-sm"></div>)}
      </div>
    </div>
  </div>
);

const NeonText: React.FC<{ text: string; color?: string; size?: string }> = ({ text, color = '#ff003c', size = 'text-6xl' }) => (
  <h2 className={`${size} font-black font-['Syne'] uppercase text-center tracking-widest`}
      style={{
        color: '#fff',
        textShadow: `
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 20px ${color},
          0 0 40px ${color},
          0 0 80px ${color},
          0 0 90px ${color},
          0 0 100px ${color}
        `
      }}
  >
    {text}
  </h2>
);

const ThreeDWorks: React.FC<ThreeDWorksProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#4a0404] text-white font-['Syne'] overflow-hidden relative">
      
      {/* Texture Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none z-0" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")` }}>
      </div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-black/80 text-white rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
      >
        <ArrowLeft size={20} /> <span className="uppercase font-bold text-sm tracking-widest">Back to Gallery</span>
      </button>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 text-center z-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           {/* Abstract Metal Tubes */}
           <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border-[40px] border-[#888] rounded-full shadow-[inset_0_0_20px_black] opacity-50"></div>
           <div className="absolute top-20 right-[-100px] w-[600px] h-[600px] border-[60px] border-[#aaa] rounded-full shadow-[10px_10px_30px_rgba(0,0,0,0.5)]"></div>
        </div>
        
        <h1 className="text-[12vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          3D<br/>WORKS
        </h1>
        
        {/* Intro TV */}
        <div className="max-w-4xl mx-auto mt-16 transform rotate-1 hover:rotate-0 transition-transform duration-500">
           <RetroTV className="h-[400px] md:h-[500px]">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center p-8">
                 <div className="bg-black/70 backdrop-blur-sm p-8 md:p-12 border-2 border-[#d4af37] text-center max-w-2xl shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#d4af37]">Introduction</h2>
                    <p className="text-sm md:text-base font-sans leading-relaxed text-gray-200">
                      THESE WORKS REPRESENT MY PRACTICE IN 3DS MAX AND MAYA, WHERE I EXPLORED THE BASICS OF MODELING, TEXTURING, AND RENDERING. 
                      WHILE STILL IN THE PROCESS OF DEVELOPING MY 3D SKILLS, THESE PROJECTS REFLECT MY CURIOSITY AND WILLINGNESS TO EXPERIMENT WITH DIFFERENT FORMS AND TECHNIQUES.
                    </p>
                 </div>
              </div>
           </RetroTV>
        </div>
      </section>

      {/* Project 1: A Kick of Friendship */}
      <section className="py-24 relative z-10">
         <div className="absolute inset-0 bg-[#8b0000] transform -skew-y-3 z-0 border-y-8 border-[#d4af37]"></div>
         <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             {/* Film Reel Graphic */}
             <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="w-full h-full rounded-full border-8 border-[#d4af37] border-dashed animate-[spin_10s_linear_infinite] opacity-30 absolute"></div>
                <div className="relative w-3/4 h-3/4 bg-[#3d0000] rounded-full border-4 border-[#d4af37] flex items-center justify-center shadow-2xl">
                   <div className="w-1/2 h-1/2 bg-[#5e0000] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#d4af37] rounded-full"></div>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-8 bg-black/50 rotate-45 absolute"></div>
                      <div className="w-full h-8 bg-black/50 -rotate-45 absolute"></div>
                   </div>
                </div>
             </div>
             
             <div className="text-center md:text-left">
                <NeonText text="A KICK OF" color="#ffcc00" size="text-5xl md:text-7xl" />
                <NeonText text="FRIENDSHIP" color="#ffcc00" size="text-5xl md:text-7xl" />
                <p className="mt-8 text-xl text-[#ffcc00]/80 font-sans max-w-md mx-auto md:mx-0">
                  A dynamic animation exploring the bonds formed through unexpected encounters.
                </p>
             </div>
         </div>
      </section>

      {/* Project 2: Revenge (TV) */}
      <section className="py-24 px-4 bg-[#220a0a] relative z-10">
         <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center transform -rotate-2">
               <div className="inline-block border-4 border-[#ff003c] rounded-2xl p-4 bg-black shadow-[0_0_30px_#ff003c]">
                  <NeonText text="REVENGE" color="#ff003c" />
               </div>
            </div>
            
            <RetroTV className="h-[400px] md:h-[600px]">
               <img 
                 src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop" 
                 alt="Revenge Scene" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-4 left-4 text-white/50 font-mono text-xs">REC 00:04:23</div>
            </RetroTV>
         </div>
      </section>

      {/* Project 3: Domino */}
      <section className="py-32 relative z-10 overflow-hidden">
         {/* Background Strip */}
         <div className="absolute top-1/2 left-0 w-full h-64 bg-[#e6b800] -translate-y-1/2 -rotate-3 border-y-8 border-white border-dashed"></div>
         
         <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="bg-[#5c1a1a] p-8 md:p-12 rounded-xl border-8 border-[#ffd700] shadow-[0_20px_0_#3d0e0e] transform rotate-3">
               <h2 className="text-6xl md:text-8xl font-black text-[#ffd700] tracking-widest drop-shadow-[4px_4px_0_#000]">DOMINO</h2>
               <div className="flex justify-center gap-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse"></div>
                  ))}
               </div>
            </div>

            <div className="w-80 h-96 bg-black rounded-xl border-4 border-white p-2 shadow-2xl rotate-6 transform hover:rotate-0 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1605218427306-022ba6c11581?q=80&w=1000&auto=format&fit=crop" 
                  alt="Domino" 
                  className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all"
                />
            </div>
         </div>
      </section>

      {/* Project 4: Howard The Ball (TV) */}
      <section className="py-24 px-4 bg-[#1a1a1a] text-center relative z-10">
         <div className="max-w-4xl mx-auto relative">
             {/* Ticket/Badge Header */}
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#ffaa00] text-black px-12 py-6 rounded-lg shadow-lg border-2 border-dashed border-black transform -rotate-1 z-20">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-1">
                   <span>★★★</span>
                   <span>Special Feature</span>
                   <span>★★★</span>
                </div>
                <h2 className="text-4xl font-black uppercase">Howard The Ball</h2>
             </div>

             <div className="pt-16">
               <RetroTV className="h-[300px] md:h-[500px]">
                 <img 
                   src="https://images.unsplash.com/photo-1612152842176-78280693a19b?q=80&w=1000&auto=format&fit=crop" 
                   alt="Bouncing Ball" 
                   className="w-full h-full object-cover"
                 />
               </RetroTV>
             </div>
         </div>
      </section>

      {/* Footer: Thank You */}
      <section className="py-32 bg-[#4a0404] relative z-10 overflow-hidden text-center">
         {/* Curtain Effect */}
         <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#4a0404,#4a0404_40px,#300202_40px,#300202_80px)] opacity-50"></div>
         
         <div className="relative z-10">
            <NeonText text="THANK" color="#ff9900" size="text-[15vw]" />
            <NeonText text="YOU" color="#ff9900" size="text-[15vw]" />
            <p className="text-[#ff9900] font-bold tracking-widest mt-8 text-xl uppercase bg-black/50 inline-block px-4 py-2">
              That's all for the 3D Animation Works
            </p>
         </div>
         
         {/* Cinema Seats Silhouette */}
         <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-center gap-1 opacity-80">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-16 h-20 bg-[#2a0000] rounded-t-2xl border-t border-white/10"></div>
            ))}
         </div>
      </section>

      {/* Bottom Other Works Section */}
      <section className="bg-[#fffbeb] text-black py-24 px-6 relative z-10">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-12 md:mb-0">
               <h2 className="text-6xl md:text-8xl font-['Syne'] font-bold uppercase leading-none mb-4">
                 Other <br/> 3D Works
               </h2>
               <div className="w-32 h-2 bg-black mt-6"></div>
            </div>
            
            <div className="relative w-64 h-64 md:w-96 md:h-96">
                {/* 3D Abstract Shape */}
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                  alt="3D Shape" 
                  className="w-full h-full object-contain mix-blend-multiply filter contrast-125" 
                />
            </div>
         </div>
         
         {/* Grid Placeholder for Other Works */}
         <div className="max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-20">
            {[...Array(6)].map((_, i) => (
               <div key={i} className="aspect-square bg-gray-300 rounded-xl border-2 border-gray-400"></div>
            ))}
         </div>
         
         <div className="text-center mt-12">
            <button className="bg-[#9ff0a8] text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#8ae095] transition-colors">
               Join Macro Now
            </button>
         </div>
      </section>

    </div>
  );
};

export default ThreeDWorks;