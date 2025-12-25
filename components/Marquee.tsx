import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-[#8b5cf6] py-6 overflow-hidden transform -skew-y-2 border-y-4 border-white relative z-30">
      <div className="marquee-container flex">
        <div className="marquee-content flex gap-8 pr-8">
           {Array(6).fill("DISCOVER MY WORK • ").map((text, i) => (
             <span key={i} className="text-4xl md:text-6xl font-black font-['Syne'] text-white uppercase whitespace-nowrap">
               {text} <span className="text-transparent text-outline-black" style={{WebkitTextStroke: '2px rgba(255,255,255,0.5)'}}>DISCOVER MY WORK • </span>
             </span>
           ))}
        </div>
        <div className="marquee-content flex gap-8 pr-8">
           {Array(6).fill("DISCOVER MY WORK • ").map((text, i) => (
             <span key={`clone-${i}`} className="text-4xl md:text-6xl font-black font-['Syne'] text-white uppercase whitespace-nowrap">
               {text} <span className="text-transparent text-outline-black" style={{WebkitTextStroke: '2px rgba(255,255,255,0.5)'}}>DISCOVER MY WORK • </span>
             </span>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;