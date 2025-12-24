
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface VellaProjectProps {
  onBack: () => void;
}

const VellaProject: React.FC<VellaProjectProps> = ({ onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      // Trigger the animation slightly after scrolling starts
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F9F9F9] text-[#333] font-sans leading-relaxed selection:bg-[#7B61FF] selection:text-white">
      {/* Floating Back Button for Portfolio Navigation */}
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-[110] p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200 hover:bg-[#7B61FF] hover:text-white transition-all duration-300 group"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Back to Portfolio
        </span>
      </button>

      {/* Hero Section */}
      <div className="bg-white py-20 px-[5%] text-center relative">
        
        {/* Placeholder H1 to maintain layout height/spacing equivalent to original */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#111] opacity-0 select-none pointer-events-none">VÉLLA</h1>
        
        {/* Animated Sticky Title */}
        {/* 
            Unscrolled: Centered, Large. Matches py-20 (80px) top padding roughly.
            Scrolled: Top-Right, Small.
        */}
        <h1 
            className={`font-bold text-[#111] fixed z-[120] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap
                ${isScrolled 
                    ? 'text-2xl top-8 left-[95%] -translate-x-full' // Moves to top right
                    : 'text-5xl md:text-6xl top-[5rem] left-1/2 -translate-x-1/2' // Centered in Hero
                }
            `}
        >
            VÉLLA
        </h1>

        <p className="text-2xl text-[#7B61FF] mb-12 font-medium">Eco-Friendly Perfume Refill Experience</p>
        
        <div className="max-w-4xl mx-auto rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.01] duration-500">
          <img 
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=2000&auto=format&fit=crop" 
            alt="VÉLLA App Interface" 
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Project Meta */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 bg-white py-12 px-[5%] border-b border-gray-100 text-center md:text-left">
        <div>
          <h3 className="text-sm uppercase text-gray-400 mb-2 font-bold tracking-wider">Role</h3>
          <p className="font-bold text-lg">UX Researcher & UI Designer</p>
        </div>
        <div>
          <h3 className="text-sm uppercase text-gray-400 mb-2 font-bold tracking-wider">Timeline</h3>
          <p className="font-bold text-lg">May 2025 (4 Months)</p>
        </div>
        <div>
          <h3 className="text-sm uppercase text-gray-400 mb-2 font-bold tracking-wider">Tools</h3>
          <p className="font-bold text-lg">Figma, SPSS, Adobe Suite</p>
        </div>
      </div>

      {/* Challenge Section */}
      <section className="py-20 px-[5%] md:px-[15%] max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-l-[6px] border-[#7B61FF] pl-6 text-[#111]">The Challenge</h2>
        <p className="text-lg text-[#555] mb-12 max-w-3xl">
          In the fast-paced urban environment, traditional perfume bottles are expensive, wasteful, and inconvenient to carry. 
          Consumers want to smell good on the go but are conscious of the environmental impact of packaging waste.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            { title: "Wasteful", desc: "Traditional full-size bottles lead to excessive packaging waste." },
            { title: "Inconvenient", desc: "Large bottles are heavy and fragile to carry for daily touch-ups." },
            { title: "Expensive", desc: "High cost barriers prevent users from trying new scents frequently." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[#7B61FF] text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-[5%] md:px-[15%] bg-white max-w-[1400px] mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 border-l-[6px] border-[#7B61FF] pl-6 text-[#111]">Research & Validation</h2>
        <p className="text-lg text-[#555] mb-8 max-w-3xl">
          This project is backed by quantitative research (N=50) and the <strong>Theory of Planned Behavior (TPB)</strong> framework. 
          We used SPSS to analyze user intentions regarding eco-friendly refill services.
        </p>
        
        <div className="bg-[#F0EEFF] rounded-3xl p-10 md:p-12 mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#111] mb-4">Key Finding: Convenience Drives Value</h3>
          <p className="text-[#555] mb-6">Our Pearson correlation analysis revealed a strong positive link between <strong>"Service Convenience"</strong> and <strong>"Willingness to Pay for Membership"</strong>.</p>
          <div className="text-4xl md:text-5xl font-bold text-[#7B61FF] mb-6">r = 0.706 (p &lt; 0.001)</div>
          <p className="text-[#555]">This insight drove our design decision to prioritize "One-Click Navigation" and "Real-Time Inventory" features.</p>
          <div className="text-sm text-gray-400 mt-6 italic">[Source: VÉLLA Perfume Station Analysis Thesis, p.16]</div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-[5%] md:px-[15%] max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-16 border-l-[6px] border-[#7B61FF] pl-6 text-[#111]">The Solution</h2>

        {/* Feature 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
          <div className="order-1 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Smart Recommendation</h3>
            <p className="text-[#555] text-lg leading-relaxed">
              An intelligent system that recommends fragrances based on local weather (Temperature, Humidity) and user mood. It transforms the decision paralysis into a personalized delight.
            </p>
          </div>
          <div className="order-2 md:order-2 flex justify-center">
            <div className="bg-black p-3 rounded-[40px] shadow-2xl max-w-[300px]">
              <img src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop" alt="Smart Recommendation UI" className="w-full rounded-[30px] block" />
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="bg-black p-3 rounded-[40px] shadow-2xl max-w-[300px]">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Map Navigation UI" className="w-full rounded-[30px] block" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Find & Refill</h3>
            <p className="text-[#555] text-lg leading-relaxed">
              Users can instantly locate the nearest refill station. The filter system allows searching by scent notes (e.g., Floral, Woody) or store traffic, ensuring a seamless O2O experience.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-1 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Virtual Fragrance Consultant</h3>
            <p className="text-[#555] text-lg leading-relaxed">
              An AI-powered chat interface that helps users discover new scents like "Chanel No.5" and checks real-time stock availability before they visit the store.
            </p>
          </div>
          <div className="order-2 md:order-2 flex justify-center">
            <div className="bg-black p-3 rounded-[40px] shadow-2xl max-w-[300px]">
              <img src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=1000&auto=format&fit=crop" alt="Chat Interface UI" className="w-full rounded-[30px] block" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white py-24 px-[5%] text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-[#111]">Impact</h2>
        <p className="text-xl md:text-2xl text-[#555] max-w-4xl mx-auto leading-relaxed mb-12 font-light">
          Our validation phase showed that <strong className="text-[#7B61FF] font-bold">88% of users</strong> are willing to try the membership service after experiencing the app prototype. VÉLLA successfully bridges the gap between sustainability and luxury experience.
        </p>
        <button className="inline-block bg-[#333] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-black transition-colors shadow-lg">
          Read Full Thesis (PDF)
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-12 text-center">
        <p className="text-gray-400">© 2025 Howard Hsiao Yueyau. Designed for U Application.</p>
      </footer>
    </div>
  );
};

export default VellaProject;
