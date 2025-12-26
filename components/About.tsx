import React, { useState, useEffect } from 'react';
import { USER_PROFILE } from '../constants';
import { X, Cpu, Globe, Palette, Terminal, Zap, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [activeTab, setActiveTab] = useState<'bio' | 'skills'>('bio');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showMoreAbout) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMoreAbout]);

  // Derived from CV
  const skills = [
    { 
      category: "Interactive & Design", 
      icon: <Palette size={16}/>, 
      items: ["Figma", "Adobe Suite", "UI/UX Design", "3D Modeling", "VR/AR Design", "Game Design"] 
    },
    { 
      category: "Tech & Dev", 
      icon: <Terminal size={16}/>, 
      items: ["React", "TypeScript", "Unity", "HTML/CSS", "Interactive Media"] 
    },
    { 
      category: "Analysis & Strategy", 
      icon: <Cpu size={16}/>, 
      items: ["SPSS", "Data Analysis", "User Research", "Market Strategy", "Capacity Assessment"] 
    },
  ];

  const awards = [
    "2nd Prize - National Master’s Vocabulary Competition (2025)",
    "2nd Prize - National University Data Analysis Competition (2024)",
    "Outstanding Volunteer - 'Tell the Bay Area Story' Translation (2025)",
    "3rd Prize - Ministry of Education Essay Competition (2022)"
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-green-500 pl-6">
           <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider font-['Syne']">
             Hello, This Is <br />
             <span className="text-green-400">Howard Hsiao</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text Content - Main View */}
          <div className="space-y-8 font-light text-gray-300 text-lg leading-relaxed">
            <div className="space-y-2">
              <p className="block text-white font-medium">Zhuhai, Guangdong | Global Perspective</p>
              <p>Beijing Normal - Hong Kong Baptist University</p>
              <p className="text-green-400/80 font-mono text-sm">Bachelor in Animation and Interactive Media</p>
            </div>
            
            <div className="space-y-1 font-mono text-sm text-gray-400">
              <p>Aug 2021 – Jun 2025</p>
              <p>{USER_PROFILE.contacts.email}</p>
            </div>

            <div className="space-y-6 pt-4 border-t border-gray-800">
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Dec 2024 – Jan 2025</span>
                <p className="text-white font-bold">Foxconn Interconnect Technology</p>
                <p className="text-sm text-gray-400">Product & Capacity Analysis Intern</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Sep 2023 – Nov 2024</span>
                <p className="text-white font-bold">Ele.me (Alibaba Group)</p>
                <p className="text-sm text-gray-400">BD & Marketing Associate</p>
              </div>
            </div>

            <button 
              onClick={() => setShowMoreAbout(true)}
              className="mt-8 px-8 py-3 bg-[#FFE169] text-black font-bold rounded-full hover:bg-[#ffcf33] transition-colors flex items-center gap-2"
            >
              MORE ABOUT ME 
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500 rounded-lg transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-500">
               {/* Using a professional male placeholder */}
               <img 
                 src="../assets/about-me.png" 
                 alt="Howard Hsiao" 
                 className="w-full h-[500px] object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="font-['Syne'] text-2xl font-bold">Data-Driven / Creative / Strategist</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FULL SCREEN DOSSIER MODAL --- */}
      {showMoreAbout && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 p-4 md:p-0 cursor-pointer"
          onClick={() => setShowMoreAbout(false)} // CLICK BACKDROP TO CLOSE
        >
           
           {/* Background Grid & Decor */}
           <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
           <div className="absolute top-0 left-0 p-8 font-mono text-green-500/50 text-xs hidden md:block">
              SYSTEM_STATUS: ONLINE<br/>
              PROFILE: HOWARD HSIAO<br/>
              ID: UIC-2025-GRAD
           </div>

           {/* Main Container */}
           <div 
              className="w-full h-[100dvh] md:h-[90vh] md:w-[90vw] max-w-7xl bg-[#0f0f0f] border border-gray-800 md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative shadow-2xl animate-slide-up cursor-default"
              onClick={(e) => e.stopPropagation()} // PREVENT CLICKING CONTENT FROM CLOSING
           >
              
              {/* Close Button */}
              <button 
                  onClick={() => setShowMoreAbout(false)}
                  className="fixed md:absolute top-4 left-4 z-[110] p-2 rounded-full bg-black/60 text-white/80 hover:bg-white hover:text-black transition-all border border-white/10 group backdrop-blur-md"
               >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
               </button>

              {/* Decorative Corner Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-green-500 pointer-events-none opacity-50 hidden md:block"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-green-500 pointer-events-none opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-green-500 pointer-events-none opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-green-500 pointer-events-none opacity-50"></div>

              {/* LEFT COLUMN: Visual & Stats */}
              <div className="w-full md:w-5/12 relative bg-[#151515] border-r border-gray-800 flex flex-col pt-16 md:pt-0">
                 
                 {/* Image Area */}
                 <div className="h-[40vh] md:h-[55%] relative overflow-hidden group">
                    <img 
                      src="../assets/more-about-me.png" 
                      alt="Howard Profile" 
                      className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                       <h3 className="font-['Syne'] text-4xl font-bold text-white leading-none">HOWARD<br/>HSIAO</h3>
                       <p className="text-green-500 font-mono text-sm mt-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          OPEN TO WORK
                       </p>
                    </div>
                 </div>

                 {/* Stats Area */}
                 <div className="flex-1 p-8 flex flex-col justify-center space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <p className="text-gray-500 text-xs uppercase tracking-wider">Education</p>
                          <p className="text-xl font-bold text-white mt-1">BN-HKBU</p>
                       </div>
                       <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <p className="text-gray-500 text-xs uppercase tracking-wider">Major</p>
                          <p className="text-xl font-bold text-white mt-1">Interactive Media</p>
                       </div>
                       <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <p className="text-gray-500 text-xs uppercase tracking-wider">Internships</p>
                          <p className="text-xl font-bold text-white mt-1">Alibaba & FIT</p>
                       </div>
                       <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                          <p className="text-gray-500 text-xs uppercase tracking-wider">Languages</p>
                          <p className="text-xl font-bold text-white mt-1">EN / ZH</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* RIGHT COLUMN: Content */}
              <div className="w-full md:w-7/12 flex flex-col bg-[#0f0f0f]">
                 {/* Tabs */}
                 <div className="flex border-b border-gray-800">
                    <button 
                      onClick={() => setActiveTab('bio')}
                      className={`flex-1 py-6 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'bio' ? 'bg-green-500/10 text-green-500 border-b-2 border-green-500' : 'text-gray-500 hover:text-white'}`}
                    >
                       Biography
                    </button>
                    <button 
                      onClick={() => setActiveTab('skills')}
                      className={`flex-1 py-6 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'skills' ? 'bg-green-500/10 text-green-500 border-b-2 border-green-500' : 'text-gray-500 hover:text-white'}`}
                    >
                       Capabilities
                    </button>
                 </div>

                 {/* Scrollable Content */}
                 <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                    {activeTab === 'bio' ? (
                       <div className="space-y-10 animate-fade-in">
                          
                          {/* Intro */}
                          <div className="space-y-4">
                             <h4 className="text-2xl font-['Syne'] font-bold text-white flex items-center gap-2">
                                <Globe className="text-green-500" size={24} />
                                Bridging Design & Data
                             </h4>
                             <p className="text-gray-400 leading-relaxed text-lg font-light">
                                I am an <strong>Animation and Interactive Media</strong> major at Beijing Normal - Hong Kong Baptist University. My academic foundation covers a diverse spectrum from 2D/3D Animation and Storytelling to cutting-edge VR/AR and User Experience Design. I don't just create visuals; I engineer experiences.
                             </p>
                          </div>

                          {/* Work Highlights */}
                          <div className="space-y-4">
                             <h4 className="text-2xl font-['Syne'] font-bold text-white flex items-center gap-2">
                                <Zap className="text-yellow-500" size={24} />
                                Professional Impact
                             </h4>
                             <div className="space-y-4 border-l-2 border-gray-800 pl-4">
                                <div>
                                    <h5 className="text-white font-bold text-lg">Ele.me (Alibaba Group)</h5>
                                    <p className="text-gray-500 text-sm mb-2">BD & Marketing Associate</p>
                                    <p className="text-gray-400">
                                       I bridged the gap between platform and users by designing promotional materials that reached <strong>5,000+ students</strong> and organizing offline events attracting 1,200+ participants. I leveraged user feedback to optimize marketing strategies, proving that design drives retention.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-lg mt-4">Foxconn (FIT)</h5>
                                    <p className="text-gray-500 text-sm mb-2">Product & Capacity Analysis Intern</p>
                                    <p className="text-gray-400">
                                       Transitioning to a highly analytical role, I identified production bottlenecks and supported capacity assessments. My ability to compile complex data into actionable reports demonstrates my versatility beyond traditional design roles.
                                    </p>
                                </div>
                             </div>
                          </div>

                          {/* Awards */}
                          <div className="space-y-4">
                             <h4 className="text-2xl font-['Syne'] font-bold text-white flex items-center gap-2">
                                <Award className="text-purple-500" size={24} />
                                Honors & Recognition
                             </h4>
                             <ul className="grid grid-cols-1 gap-3">
                                {awards.map((award, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                                        <span>{award}</span>
                                    </li>
                                ))}
                             </ul>
                          </div>
                       </div>
                    ) : (
                       <div className="space-y-10 animate-fade-in">
                          <p className="text-gray-400 italic mb-6">
                              A unique blend of creative proficiency and analytical tools, enabling end-to-end product development.
                          </p>
                          
                          {skills.map((skillGroup, idx) => (
                             <div key={idx} className="space-y-4">
                                <h4 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-gray-800 pb-2">
                                   {skillGroup.icon}
                                   {skillGroup.category}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                   {skillGroup.items.map((item, i) => (
                                      <span 
                                        key={i} 
                                        className="px-4 py-2 bg-[#1a1a1a] text-gray-300 rounded-lg border border-gray-800 hover:border-green-500/50 hover:text-green-400 transition-colors cursor-default"
                                      >
                                         {item}
                                      </span>
                                   ))}
                                </div>
                             </div>
                          ))}
                          
                          {/* "System" Decoration */}
                          <div className="pt-8 mt-8 border-t border-dashed border-gray-800">
                             <div className="flex justify-between text-xs font-mono text-gray-600">
                                <span>SKILLSET_ANALYSIS</span>
                                <span>OPTIMIZED</span>
                             </div>
                             <div className="w-full h-1 bg-gray-800 mt-2 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 w-full animate-pulse"></div>
                             </div>
                          </div>
                       </div>
                    )}
                 </div>

                 {/* Footer Action */}
                 <div className="p-6 border-t border-gray-800 bg-[#111]">
                    <a 
                      href="/resume.pdf" 
                      download
                      className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-green-400 transition-colors rounded-xl"
                    >
                       <BookOpen size={18} />
                       Download Full Resume
                    </a>
                 </div>
              </div>
           </div>
        </div>
      )}
      
      {/* Add custom keyframe for slide up if not exists */}
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4ade80;
        }
      `}</style>
    </section>
  );
};

export default About;