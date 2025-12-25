
import React, { useEffect } from 'react';
import { ArrowLeft, Layout, BarChart3, Users, Layers, ExternalLink } from 'lucide-react';

interface InternshipProjectsProps {
  onBack: () => void;
}

const LaptopMockup: React.FC<{ image: string }> = ({ image }) => (
  <div className="relative mx-auto w-full max-w-4xl group perspective-1000">
    {/* Base/Keyboard Area - 3D Transform */}
    <div className="relative transform transition-transform duration-700 group-hover:rotate-x-2 group-hover:scale-105">
      {/* Screen Frame */}
      <div className="bg-[#1a1a1a] rounded-t-2xl p-2 pb-0 shadow-2xl ring-1 ring-white/10">
        <div className="bg-black rounded-t-xl overflow-hidden aspect-[16/10] relative">
          <img src={image} alt="System Dashboard" className="w-full h-full object-cover" />
          {/* Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
      {/* Bottom Half */}
      <div className="bg-[#2a2a2a] h-4 rounded-b-xl shadow-lg relative z-10 flex justify-center">
         <div className="w-16 h-1 bg-gray-600 rounded-b-md"></div>
      </div>
    </div>
  </div>
);

const ChartCard = () => (
  <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blue-50 relative overflow-hidden font-sans mx-auto lg:mr-0 transition-transform hover:scale-[1.02] duration-500 cursor-default group">
    
    {/* Background Glow */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

    {/* Header */}
    <div className="mb-8 pl-2">
      <h3 className="text-gray-800 font-bold text-lg flex flex-wrap items-baseline gap-3 tracking-tight">
        人员流动趋势比较 
        <span className="text-gray-400 text-xs font-normal font-mono tracking-wide">(2022.09.01—2022.09.31)</span>
      </h3>
    </div>

    {/* Chart Area */}
    <div className="relative h-[280px] w-full select-none">
      
      {/* Y-Axis Labels */}
      <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-gray-400 text-[11px] font-mono h-full pr-4 border-r border-dashed border-gray-100">
         {[75, 60, 45, 30, 15, 0].map(val => (
             <span key={val} className="w-4 text-right">{val}</span>
         ))}
      </div>

      {/* Main Chart Canvas */}
      <div className="absolute left-10 right-0 top-2 bottom-6">
        
        {/* Dashed Grid Lines */}
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((pos, i) => (
           <div key={i} className="absolute w-full border-t border-dashed border-gray-100" style={{ top: `${pos * 100}%` }}></div>
        ))}

        {/* The Graphs - SVG */}
        <svg viewBox="0 0 600 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
               <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
               </linearGradient>
               <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
               </linearGradient>
               <filter id="glowBlue" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
            </defs>

            {/* Blue Line (Entry Rate) */}
            {/* Smooth Bezier Curve mapping roughly to: 15 -> 13 -> 42(peak at line) -> 55 -> 16 -> 45 */}
            <path d="M0,160 C40,140 60,170 100,150 C140,130 180,90 200,88 C240,84 280,53 320,53 C360,53 400,140 440,157 C480,170 520,80 560,90 L600,100 L600,200 L0,200 Z" fill="url(#blueFill)" />
            <path d="M0,160 C40,140 60,170 100,150 C140,130 180,90 200,88 C240,84 280,53 320,53 C360,53 400,140 440,157 C480,170 520,80 560,90" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />

            {/* Green Line (Exit Rate) */}
            {/* Smooth Bezier Curve mapping roughly to: 28 -> 50(peak) -> 25(valley) -> 31(at line) -> 53 -> 14 -> 58 */}
            <path d="M0,130 C40,140 60,66 100,80 C140,90 160,133 200,117 C240,100 360,40 400,58 C440,80 460,170 500,162 C540,150 560,45 600,60 L600,200 L0,200 Z" fill="url(#greenFill)" />
            <path d="M0,130 C40,140 60,66 100,80 C140,90 160,133 200,117 C240,100 360,40 400,58 C440,80 460,170 500,162 C540,150 560,45 600,60" fill="none" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />

            {/* Vertical Indicator Line at x=200 (approx 09.06) */}
            <line x1="200" y1="-20" x2="200" y2="200" stroke="#94a3b8" strokeWidth="1" />

            {/* Intersection Dots */}
            {/* Blue Dot */}
            <circle cx="200" cy="88" r="5" fill="white" stroke="#3b82f6" strokeWidth="3" className="drop-shadow-md" />
            {/* Green Dot */}
            <circle cx="200" cy="117" r="5" fill="white" stroke="#4ade80" strokeWidth="3" className="drop-shadow-md" />

        </svg>

        {/* Floating Tooltip Box */}
        <div className="absolute top-[30px] left-[215px] bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 text-xs z-20 min-w-[140px] animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="text-gray-500 mb-3 font-mono border-b border-gray-100 pb-2">2022-09-06</div>
            <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                   <span className="text-gray-500 font-medium">入职率 : <span className="text-gray-900 font-bold ml-1 text-sm">42%</span></span>
                </div>
                <div className="flex items-center gap-2.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                   <span className="text-gray-500 font-medium">离职率 : <span className="text-gray-900 font-bold ml-1 text-sm">31%</span></span>
                </div>
            </div>
            {/* Little Triangle Pointer pointing left */}
            <div className="absolute top-1/2 -left-[6px] w-0 h-0 border-y-[6px] border-y-transparent border-r-[6px] border-r-white/95 filter drop-shadow-sm transform -translate-y-1/2"></div>
        </div>

      </div>

      {/* X-Axis Labels */}
      <div className="absolute left-10 right-0 bottom-0 flex justify-between text-gray-400 text-[10px] font-mono pt-3 border-t border-dashed border-gray-100">
         {['09.01', '09.02', '09.03', '09.04', '09.05', '09.06', '09.07', '09.08', '09.09', '09.10', '09.11', '09.12', '09.13', '09.14', '09.15', '09.16'].map((date) => (
            <span key={date} className="w-6 text-center">{date}</span>
         ))}
      </div>

    </div>
  </div>
);

const PosterCard: React.FC<{ src: string; title: string; subtitle?: string; gradient?: string; description?: string; theme?: 'dark' | 'light' }> = ({ src, title, subtitle, gradient = "from-blue-900/90", description, theme = 'light' }) => (
  <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid h-[500px]">
    <div className="w-full h-full bg-gray-100 relative">
       {/* Color Gradient Overlay */}
       <div className={`absolute inset-0 bg-gradient-to-b ${gradient} to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10`}></div>
       
       <img 
        src={src} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
      />
      
      {/* Text Content matching poster style */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
         <div className={`border-l-4 ${theme === 'light' ? 'border-white/80' : 'border-black/80'} pl-4 mb-2`}>
            <h3 className={`${theme === 'light' ? 'text-white' : 'text-black'} font-black text-2xl md:text-3xl font-['Syne'] leading-none tracking-wide`}>{title}</h3>
         </div>
         {subtitle && <p className={`${theme === 'light' ? 'text-white/90' : 'text-black/80'} text-sm font-bold tracking-widest uppercase mb-1`}>{subtitle}</p>}
         {description && <p className={`${theme === 'light' ? 'text-white/80' : 'text-black/70'} text-xs font-light tracking-wide`}>{description}</p>}
      </div>
    </div>
  </div>
);

const InternshipProjects: React.FC<InternshipProjectsProps> = ({ onBack }) => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const graphicWorks = [
    {
      // 1. Gym / Pink
      src: "https://images.unsplash.com/photo-1574680096145-63a0a0041a43?q=80&w=1000&auto=format&fit=crop", 
      title: "強強聯手",
      subtitle: "福利回饋",
      description: "餓了麼平台 快樂食間",
      gradient: "from-pink-600/90"
    },
    {
      // 2. Red / Festival
      src: "https://images.unsplash.com/photo-1512350546255-a040b2a3a0c5?q=80&w=1000&auto=format&fit=crop", 
      title: "雙旦狂歡喜訊",
      subtitle: "限時優惠",
      description: "節日特別活動視覺設計",
      gradient: "from-red-600/90"
    },
    {
      // 3. Blue / Happy Dining
      src: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop",
      title: "快樂放心點",
      subtitle: "食間準時達",
      description: "招牌商品無條件減",
      gradient: "from-blue-500/90"
    },
    {
      // 4. Dark / Laptop
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      title: "UI喜校園",
      subtitle: "正式入駐",
      description: "UIC一&二期校園推廣",
      gradient: "from-slate-900/90"
    },
    {
      // 5. Christmas Vertical Poster
      src: "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=1000&auto=format&fit=crop",
      title: "雙旦福利回饋",
      subtitle: "節日海報",
      description: "強強聯手回饋福利 5元優惠",
      gradient: "from-red-800/90"
    },
    {
      // 6. Blue Mascot Vertical
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop",
      title: "食間準時達",
      subtitle: "品牌吉祥物",
      description: "IP形象結合配送服務推廣",
      gradient: "from-blue-600/90"
    },
    {
      // 7. Standee (Physical)
      src: "https://images.unsplash.com/photo-1588534609756-34746f332039?q=80&w=1000&auto=format&fit=crop",
      title: "線下易拉寶",
      subtitle: "校園推廣",
      description: "實體活動物料展示 A版",
      gradient: "from-gray-800/80"
    },
    {
      // 8. Hallway Photo
      src: "https://images.unsplash.com/photo-1563986768427-1b0767594191?q=80&w=1000&auto=format&fit=crop",
      title: "活動現場展示",
      subtitle: "實景應用",
      description: "餐廳現場宣傳物料佈置",
      gradient: "from-gray-900/80"
    },
    {
      // 9. UI Icons Grid
      src: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=1000&auto=format&fit=crop",
      title: "Iconography",
      subtitle: "圖標系統",
      description: "食品品類圖標與UI資產設計",
      gradient: "from-orange-500/90"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-[#333] font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
         <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-blue-600 transition-colors group">
            <div className="p-2 bg-gray-100 rounded-full group-hover:bg-blue-50 transition-colors">
                <ArrowLeft size={18} />
            </div>
            Back to Projects
         </button>
         <div className="hidden md:flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="font-bold text-blue-900">Ele.me Internship</span>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
           <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
             Professional Experience
           </span>
           <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-6 font-['Syne']">
             INTERNSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">PROJECTS</span>
           </h1>
           <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed font-light">
             Including platform and graphic works designed during internship for the delivery platform <strong className="text-blue-600">‘ele.me’</strong>, which has over 3,000 users on campus.
           </p>
        </div>
      </section>

      {/* Type 1: Platform Design */}
      <section className="py-24 px-6 bg-white relative">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
               <div className="space-y-8">
                  <div className="flex items-center gap-3 text-blue-600">
                     <Layout className="w-6 h-6" />
                     <h2 className="text-3xl font-bold font-['Syne']">HR Management System</h2>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">
                     A comprehensive backend management dashboard designed for Ele.me's internal HR department. 
                     The system streamlines employee data management, recruitment tracking, and performance evaluation.
                     Key focus was on information architecture and reducing cognitive load for heavy-data usage.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                        <Users className="w-8 h-8 text-blue-500 mb-2" />
                        <h4 className="font-bold text-slate-800">User Centric</h4>
                        <p className="text-sm text-slate-500">Optimized for HR workflows</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                        <BarChart3 className="w-8 h-8 text-blue-500 mb-2" />
                        <h4 className="font-bold text-slate-800">Data Vis</h4>
                        <p className="text-sm text-slate-500">Clear analytics dashboard</p>
                     </div>
                  </div>
               </div>
               
               {/* REPLACED WITH NEW CHART CARD */}
               <ChartCard />
            </div>

            {/* Laptop Showcase */}
            <div className="mt-12 bg-slate-100 rounded-[3rem] p-8 md:p-20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <LaptopMockup image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" />
                <div className="text-center mt-12 relative z-10">
                    <button 
                     className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all hover:scale-105 shadow-xl group/btn"
                   >
                     View Prototype in Figma
                     <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
            </div>
         </div>
      </section>

      {/* Type 2: Graphic Works */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Visual Communication</span>
               <h2 className="text-4xl md:text-6xl font-black font-['Syne'] mt-2 text-slate-800">Graphic Works</h2>
               <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Promotional materials, event posters, and brand identity assets designed for large-scale campus campaigns.</p>
            </div>

            {/* 3x3 Grid for Graphic Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {graphicWorks.map((work, index) => (
                 <PosterCard 
                   key={index}
                   src={work.src} 
                   title={work.title} 
                   subtitle={work.subtitle}
                   description={work.description}
                   gradient={work.gradient}
                 />
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default InternshipProjects;
