import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView?: 'home' | 'interactive-works' | '3d-works' | 'internship' | 'vella';
}

const Navbar: React.FC<NavbarProps> = ({ currentView = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we are not in the home view, we typically hide the main nav or simplify it
  // because the detailed pages have their own "Back" buttons and distinct styles.
  if (currentView !== 'home') {
    return null;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Offset for fixed navbar
      const offset = 100; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center transition-all duration-300`}>
      
      {/* iOS 26 High-End Liquid Glass Container */}
      <div className={`
        relative flex items-center justify-between 
        w-[90%] md:w-[60%] 
        rounded-full py-3 px-8 
        transition-all duration-500
        overflow-hidden
        group
      `}
      style={{
        // Premium Liquid Glass Recipe
        // High Transparency + High Blur + Brightness Boost (to make dark backgrounds legible)
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)', 
        backdropFilter: 'blur(50px) saturate(140%) brightness(1.5)', 
        WebkitBackdropFilter: 'blur(50px) saturate(140%) brightness(1.5)',
        border: '1px solid rgba(255, 255, 255, 0.6)', 
        boxShadow: `
          0 20px 40px rgba(0, 0, 0, 0.1), /* Soft elevation */
          inset 0 0 30px rgba(255, 255, 255, 0.6), /* Inner liquid volume */
          inset 0 -2px 5px rgba(255, 255, 255, 0.3) /* Bottom rim light */
        `
      }}
      >
        {/* Shimmer Animation Layer - Subtler */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_6s_infinite] pointer-events-none" style={{ transform: 'skewX(-20deg)' }}></div>

        <div className="flex items-center gap-2 relative z-10">
           {/* Logo / Brand */}
           <span className="font-['Syne'] font-bold text-xl tracking-tighter text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
             HOWARD<span className="opacity-60">JONAS</span>
           </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 relative z-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-bold text-slate-900 hover:text-black transition-all tracking-[0.15em] uppercase hover:scale-105 transform duration-200"
              style={{ textShadow: '0 0 15px rgba(255,255,255,0.9)' }} // Glow ensures legibility
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black relative z-10 p-2 rounded-full hover:bg-white/30 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 bg-[#f2f2f2]/90 backdrop-blur-3xl z-[60] flex flex-col items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-8 right-8 text-black p-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all" onClick={() => setMobileMenuOpen(false)}>
           <X size={24} />
        </button>
        
        <div className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-5xl md:text-7xl font-['Syne'] font-black text-black/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Tailwind Config for Shimmer Animation (Inline for simplicity in this context, normally in tailwind.config) */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          50% { transform: translateX(250%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;