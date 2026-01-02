
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized coordinates -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden perspective-2000">
      
      {/* --- SVG FILTER FOR REALISTIC RIPPLE EFFECT --- */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-ripple-light">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" result="noise" seed="5" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite operator="in" in2="SourceGraphic" result="composite" />
          </filter>
        </defs>
      </svg>

      {/* --- BACKGROUND LAYERS (Minimalist) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute inset-0 bg-[url('https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/crmebimage/public/maintain/2026/01/01/418aeca1a214420399c5938df10e5cfd670omyjyzh.png')]"  style={{ 
                 'background-repeat':'no-repeat',
                 'background-size': '100% 100%' 
               }}></div>

         {/* Very subtle noise texture for paper feel */}
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')]"></div>

         {/* The Ripple Container - Extremely subtle for 'dog.' clean look */}
         <div className="absolute inset-0 opacity-20" style={{ filter: 'url(#liquid-ripple-light)' }}>
            <div 
               className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-gray-400 rounded-full mix-blend-multiply opacity-20 animate-blob"
               style={{ 
                 transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) scale(1.1)`,
                 filter: 'blur(100px)' 
               }}
            ></div>
            <div 
               className="absolute bottom-[-30%] right-[10%] w-[90vw] h-[60vh] bg-slate-400 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"
               style={{ 
                 transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
                 filter: 'blur(120px)'
               }}
            ></div>
         </div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative w-full max-w-[95%] mx-auto h-screen grid grid-cols-1 md:grid-cols-2 z-20 pointer-events-none">
        
        {/* LEFT: TYPOGRAPHY (Strict 'dog.' Style) */}
        <div className="flex flex-col justify-center items-start h-full pl-6 md:pl-20 perspective-1000 pointer-events-auto">
           <div className="relative flex flex-col items-start z-10">
              
              {/* Massive Bold Lowercase Text with Period */}
              <h1 className="text-[14vw] md:text-[10rem] font-black font-['Syne'] leading-[0.8] tracking-[-0.05em] text-black select-none transition-transform duration-200"
                  style={{ transform: `translateZ(30px) translateX(${mousePos.x * -15}px)` }}
              >
                crafting<br/>
                visual<br/>
                narratives.
              </h1>

              {/* Subtitle with Arrow */}
              <div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-8 md:pl-2 animate-float-slow">
                 <p className="text-xl md:text-2xl font-light text-[#555] font-['Inter'] leading-tight tracking-normal max-w-md">
                   Blending Aesthetics with Functionality to Create Immersive Experiences
                 </p>
                 
                 {/* Long Thin Arrow */}
                 <div className="hidden md:flex items-center group cursor-pointer transition-all duration-300 hover:gap-4">
                    <div className="h-[2px] w-24 bg-black group-hover:w-32 transition-all"></div>
                    <ArrowRight className="w-6 h-6 text-black -ml-1" strokeWidth={2} />
                 </div>
                 
                 <ArrowRight className="w-8 h-8 text-black md:hidden" strokeWidth={2} />
              </div>

           </div>
        </div>

        {/* RIGHT: DARK GLASS 3D LOOPS (Contrast against light bg) */}
        <div 
            className="hidden md:flex items-center justify-center relative perspective-2000"
        >
             <div 
                className="relative w-[800px] h-[800px] preserve-3d"
                style={{
                   transform: `scale(1.4) translateX(25%) rotateX(${mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`
                }}
             >
                {/* LOOP 1: Horizontal - RED FROSTED GLASS */}
                <div className="absolute inset-0 preserve-3d animate-[spin-3d_30s_linear_infinite]">
                   {Array.from({ length: 24 }).map((_, i) => {
                      const rotation = i * 15; 
                      const translateZ = 450; 
                      
                      return (
                         <div
                           key={`h-${i}`}
                           className="absolute top-1/2 left-1/2 w-24 h-64 bg-[#e60000]/70 border border-[#ff4d4d]/50 rounded-2xl backdrop-blur-md backface-visible"
                           style={{
                              transform: `translate(-50%, -50%) rotateY(${rotation}deg) translateZ(${translateZ}px)`,
                              boxShadow: `0 0 30px rgba(230, 0, 0, 0.4)`, // Red glow
                           }}
                         >
                            {/* Inner shine */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                         </div>
                      );
                   })}
                </div>

                {/* LOOP 2: Vertical - Dark Grey Glass */}
                <div className="absolute inset-0 preserve-3d animate-[spin-vertical_40s_linear_infinite]">
                   {Array.from({ length: 24 }).map((_, i) => {
                      const rotation = i * 15;
                      const translateZ = 380; 
                      
                      return (
                         <div
                           key={`v-${i}`}
                           className="absolute top-1/2 left-1/2 w-24 h-64 bg-[#333]/80 border border-black/20 rounded-2xl backdrop-blur-md backface-visible"
                           style={{
                              transform: `translate(-50%, -50%) rotateX(${rotation}deg) translateZ(${translateZ}px) rotateZ(90deg)`,
                              boxShadow: `0 10px 30px rgba(0,0,0,0.15)`,
                           }}
                         >
                             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                         </div>
                      );
                   })}
                </div>

                {/* LOOP 3: Core - Accent (Black) */}
                <div className="absolute inset-0 preserve-3d animate-[spin-vertical_25s_linear_infinite_reverse]">
                   {Array.from({ length: 16 }).map((_, i) => {
                      const rotation = i * 22.5; 
                      const translateZ = 280; 
                      
                      return (
                         <div
                           key={`v-inner-${i}`}
                           className="absolute top-1/2 left-1/2 w-16 h-48 bg-black border border-white/10 rounded-full backdrop-blur-xl backface-visible"
                           style={{
                              transform: `translate(-50%, -50%) rotateX(${rotation}deg) translateZ(${translateZ}px) rotateZ(90deg)`,
                           }}
                         >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-full opacity-50"></div>
                         </div>
                      );
                   })}
                </div>

             </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
