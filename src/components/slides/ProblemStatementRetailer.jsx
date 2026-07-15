import React from 'react';
import retailerPainImg from '../../assets/retailer_pain.png';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function ProblemStatementRetailer() {
  const problems = [
    {
      quote: "“Customers around me exist… but I can’t reach them.”",
      desc: "Local businesses have demand nearby but no digital channel to capture it."
    },
    {
      quote: "“I rely on walk-ins or repeat customers only.”",
      desc: "Growth is limited to physical visibility and word-of-mouth."
    },
    {
      quote: "“Going online is complicated and expensive.”",
      desc: "Existing platforms are not built for small/local businesses or are too costly."
    },
    {
      quote: "“I have inventory, but no way to showcase it.”",
      desc: "No tools to display products, pricing, or availability in real time."
    },
    {
      quote: "“I can’t compete with large platforms.”",
      desc: "Centralized, warehouse-driven models overshadow local supply instead of empowering it."
    },
    {
      quote: "“I have no tools to grow digitally.”",
      desc: "No access to ads, analytics, customer engagement, or cross-selling."
    }
  ];

  return (
    <div className="w-full h-full relative grid grid-cols-1 lg:grid-cols-12 bg-[#FCFCFA] select-none overflow-hidden">
      
      {/* ── PowerPoint Template Diagonal Background Polygons ── */}
      {/* Top Right Overlapping Polygons */}
      <svg className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" className="text-[#006363]/5" />
        <path d="M40,0 L100,0 L100,60 Z" fill="currentColor" className="text-[#e85c1c]/3" />
      </svg>
      
      {/* Bottom Left Overlapping Polygons */}
      <svg className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 L100,100 L0,0 Z" fill="currentColor" className="text-[#e85c1c]/4" />
        <path d="M0,100 L50,100 L0,50 Z" fill="currentColor" className="text-[#006363]/3" />
      </svg>

      {/* ── Slide Background Textures ── */}
      {/* Technical Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0"></div>
      
      {/* Diagonal Pinstripe PPT Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0"></div>
      
      {/* Faint Center Watermark Logo */}
      <div className="absolute top-[35%] left-[25%] opacity-[0.015] pointer-events-none z-0">
        <NukaazoLogo width={350} height={350} fill="var(--color-brand-primary)" />
      </div>

      {/* PPT Technical L-Shape Crop Marks in Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#006363] via-[#006363]/40 to-transparent z-10"></div>

      {/* ── Left Column: Business Problems ── */}
      <div className="lg:col-span-7 flex flex-col justify-center pl-10 md:pl-16 pr-6 relative z-10 py-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-extrabold tracking-widest text-[#006363] uppercase">
            02 / PROBLEM STATEMENT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Retailer Side
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight mb-8">
          Broken Access to Digital Demand
        </h2>

        <div className="space-y-4">
          {problems.map((p, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              {/* Number Badge (PPT Layout Style) */}
              <div className="w-6 h-6 rounded bg-[#006363]/10 text-[#006363] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1 transition-all group-hover:bg-[#006363] group-hover:text-white">
                {idx + 1}
              </div>
              
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-xs md:text-sm leading-tight">
                  {p.quote}
                </h4>
                <p className="text-slate-500 text-[11px] md:text-xs mt-1 leading-normal font-medium font-sans">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right Column: Panel (Visual Slide Layout Split) ── */}
      <div className="lg:col-span-5 bg-white/40 border-l border-slate-200/50 flex flex-col justify-center gap-6 relative z-10 py-10 px-8">
        
        {/* Subtle grid pattern just for the side panel */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#006363_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Illustration with Frame */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[200px] aspect-square p-2 bg-white border border-slate-200/40 rounded-2xl">
            <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center">
              <img 
                src={retailerPainImg} 
                alt="Retailer Pain Illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Problem Insight Box */}
        <div className="bg-gradient-to-br from-[#006363]/5 to-[#e85c1c]/5 border-l-[4px] border-[#e85c1c] p-5 bg-white border border-slate-200/20 rounded-r-xl relative z-10">
          <h5 className="text-[10px] font-extrabold tracking-widest text-[#e85c1c] uppercase mb-2">
            Core Problem Insight
          </h5>
          <p className="text-slate-700 text-xs md:text-sm font-bold leading-relaxed mb-1">
            Consumers are stuck without access to trusted local options.
          </p>
          <p className="text-slate-700 text-xs md:text-sm font-bold leading-relaxed mb-3">
            Businesses are stuck without access to digital demand.
          </p>
          <p className="text-[#006363] text-xs md:text-sm font-black uppercase tracking-wider">
            The connection layer between them is missing.
          </p>
        </div>

      </div>


    </div>
  );
}
