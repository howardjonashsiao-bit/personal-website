import React from 'react';
import { Mail, Instagram, Phone, MessageCircle, MessageSquare, Download, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      details: ["howardjonashsiao@gmail.com", "1691981230@qq.com"]
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      details: ["@howard_jonas_hsiao"]
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      details: ["+886 0979027166", "+86 15811690868"]
    },
    {
      icon: <MessageCircle className="w-5 h-5" />, // Using generic circle for Line
      label: "Line",
      details: ["howard2003624"]
    },
    {
      icon: <MessageSquare className="w-5 h-5" />, // Using generic square for WeChat
      label: "WeChat",
      details: ["15811690868"]
    }
  ];

  return (
    <section id="contact" className="bg-[#050505] text-white pt-32 pb-12 px-6 border-t border-white/5 font-sans">
      <div className="max-w-[90%] mx-auto">
        
        {/* Main CTA Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
           <div>
              <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">Get in Touch</p>
              <h2 className="text-[12vw] leading-[0.8] font-black font-['Syne'] text-white">
                LET'S <span className="text-transparent text-outline-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>TALK</span>
              </h2>
           </div>
           <a 
             href="mailto:howardjonashsiao@gmail.com"
             className="group flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-purple-400 transition-colors"
           >
             <span>Say Hello</span>
             <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-6 h-6" />
             </div>
           </a>
        </div>

        {/* Custom Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-start border-t border-white/10 pt-12">
          
          {/* LEFT: Production Info */}
          <div className="flex flex-col gap-1 text-sm md:text-base text-center md:text-left order-2 md:order-1 pt-2">
             <p className="text-gray-500 font-mono">2025/9 ~ Present</p>
             <p className="text-white font-bold tracking-wide">Producer: Howard Hsiao Jonas</p>
          </div>

          {/* CENTER: Interactive Social Icons */}
          <div className="flex justify-center gap-6 order-1 md:order-2 flex-wrap">
             {socialLinks.map((link, index) => (
                <div key={index} className="relative group flex flex-col items-center gap-3">
                   {/* Icon Container */}
                   <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-lg">
                      {link.icon}
                   </div>
                   
                   {/* Label */}
                   <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                     {link.label}
                   </span>

                   {/* Tooltip */}
                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[250px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                      <div className="bg-white text-black text-xs md:text-sm font-medium py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center relative">
                         {/* Details Mapping */}
                         {link.details.map((detail, idx) => (
                            <div key={idx} className={`${idx > 0 ? 'mt-1 pt-1 border-t border-gray-200' : ''}`}>
                               {detail}
                            </div>
                         ))}
                         {/* Arrow */}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white"></div>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* RIGHT: CV Download */}
          <div id="cv-section" className="flex justify-center md:justify-end order-3 md:order-3 pt-2">
             <a 
               href="https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/%E6%AA%94%E6%A1%88%EF%BC%88CV%EF%BC%89.docx" // Placeholder link
               download 
               className="flex items-center gap-3 px-8 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
             >
                <span className="font-bold tracking-wider uppercase text-sm">My CV</span>
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;