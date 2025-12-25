
import React from 'react';
import Marquee from './Marquee';

interface ProjectsProps {
  onInteractiveClick?: () => void;
  onThreeDClick?: () => void;
  onInternshipClick?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onInteractiveClick, onThreeDClick, onInternshipClick }) => {
  return (
    <section id="projects" className="bg-[#f5f5f5] text-black rounded-t-[3rem] -mt-10 relative z-20 overflow-hidden">
      
      {/* Marquee Positioned Above Header */}
      <div className="pt-24 pb-8">
        <Marquee />
      </div>

      {/* Title Section - Full Width */}
      <div className="w-full px-4 text-center">
        <h2 className="text-[12vw] md:text-[13vw] leading-[0.8] font-black text-center font-['Syne'] uppercase text-[#1a0505] tracking-tighter mb-8">
          Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-[350px_300px] gap-6 mt-4">
          
          {/* Item 1: Interactive Works - Circle */}
          <div 
            onClick={onInteractiveClick}
            className="md:col-span-1 md:row-span-2 relative group cursor-pointer"
          >
            <div className="w-full h-full bg-gradient-to-b from-blue-300 to-purple-400 rounded-[3rem] flex items-center justify-center p-8 transition-transform transform group-hover:scale-[0.98] shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
                <div className="w-48 h-48 rounded-full border border-white/40 flex items-center justify-center relative z-10 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                   <h3 className="text-2xl font-['Syne'] text-white text-center font-bold">Interactive<br/>Works</h3>
                </div>
                <div className="absolute bottom-6 text-white/50 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Click to View
                </div>
            </div>
          </div>

          {/* Item 2: Internship - Tall Pill */}
          <div 
            onClick={onInternshipClick}
            className="md:col-span-1 md:row-span-2 relative group cursor-pointer"
          >
             <div className="w-full h-full bg-[#555] rounded-[2rem] flex flex-col items-center justify-center p-6 text-white transition-all hover:bg-[#444] shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <h3 className="text-2xl font-['Syne'] relative z-10 text-center group-hover:scale-110 transition-transform">Internship<br/>Projects</h3>
                <span className="relative z-10 text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View Case Study →</span>
             </div>
          </div>

          {/* Item 3: 3D Works - Square */}
          <div 
            onClick={onThreeDClick}
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer"
          >
            <div className="w-full h-full bg-[#4a4a4a] rounded-[2rem] flex items-center justify-center p-6 text-white overflow-hidden shadow-lg transition-transform hover:scale-[0.98]">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity mix-blend-overlay" alt="3D Works"/>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
                <h3 className="text-xl font-['Syne'] relative z-10 font-bold uppercase tracking-wider text-center">
                   3D Works <br/>
                   <span className="text-xs font-normal opacity-70">View Gallery →</span>
                </h3>
            </div>
          </div>

           {/* Item 4: 2D Works - Square */}
           <div className="md:col-span-1 md:row-span-1 relative group cursor-pointer">
            <div className="w-full h-full bg-[#888] rounded-[2rem] flex items-center justify-center p-6 text-white overflow-hidden">
               <img src="https://picsum.photos/400/400?random=2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="2D Works"/>
               <h3 className="text-xl font-['Syne'] relative z-10 font-medium">2D Works</h3>
            </div>
          </div>

          {/* Item 5: Other Works - Wide */}
          <div className="md:col-span-2 md:row-span-1 relative group cursor-pointer">
             <div className="w-full h-full bg-[#aaa] rounded-[2rem] flex items-center justify-center p-6 text-[#333] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    {/* Abstract Lines */}
                    <svg width="100%" height="100%">
                        <pattern id="lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="20" y2="20" stroke="black" strokeWidth="1"/>
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#lines)"/>
                    </svg>
                </div>
                <h3 className="text-2xl font-['Syne'] relative z-10">Other Works</h3>
             </div>
          </div>

        </div>

        <div className="mt-12 text-center">
            <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 font-['Syne']">
                Projects That Speak for Themselves
            </h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
