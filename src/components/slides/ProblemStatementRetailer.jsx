import React from 'react';
import retailerPainImg from '../../assets/retailer_pain.png';
import NukaazoLogo from '../../lib/NukaazoLogo';
import {
  FaUserSlash,
  FaWalking,
  FaCogs,
  FaBoxes,
  FaStoreSlash,
  FaChartLine,
  FaSignal
} from 'react-icons/fa';

export default function ProblemStatementRetailer() {
  const problems = [
    {
      quote: "“Customers around me exist… but I can’t reach them.”",
      desc: <span>Local businesses have demand nearby but no <strong>digital channel</strong> to capture it.</span>,
      icon: FaUserSlash
    },
    {
      quote: "“I rely on walk-ins or repeat customers only.”",
      desc: <span>Growth is strictly limited to <strong>physical visibility</strong> and word-of-mouth.</span>,
      icon: FaWalking
    },
    {
      quote: "“Going online is complicated and expensive.”",
      desc: <span>Existing platforms are not built for small/local businesses or are too costly.</span>,
      icon: FaCogs
    },
    {
      quote: "“I have inventory, but no way to showcase it.”",
      desc: <span>No tools to display products, pricing, or availability in <strong>real time</strong>.</span>,
      icon: FaBoxes
    },
    {
      quote: "“I can’t compete with large platforms.”",
      desc: <span>Centralized, warehouse-driven models overshadow local stores instead of empowering them.</span>,
      icon: FaStoreSlash
    },
    {
      quote: "“I have no tools to grow digitally.”",
      desc: <span>No access to localized ads, customer insights, or smart inventory guidance.</span>,
      icon: FaChartLine
    }
  ];

  return (
    <div className="w-full h-full relative grid grid-cols-1 lg:grid-cols-12 bg-[#FCFCFA] select-none overflow-hidden">

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#006363] via-[#006363]/40 to-transparent z-10" />

      {/* ── PowerPoint Template Diagonal Background Polygons ── */}
      <svg className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" className="text-[#006363]/4" />
        <path d="M40,0 L100,0 L100,60 Z" fill="currentColor" className="text-[#e85c1c]/3" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 L100,100 L0,0 Z" fill="currentColor" className="text-[#e85c1c]/3" />
        <path d="M0,100 L50,100 L0,50 Z" fill="currentColor" className="text-[#006363]/2" />
      </svg>

      {/* ── Slide Background Textures ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0" />

      {/* PPT Technical L-Shape Crop Marks */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10" />

      {/* Watermark Logo */}
      <div className="absolute top-[35%] left-[25%] opacity-[0.012] pointer-events-none z-0">
        <NukaazoLogo width={350} height={350} fill="#006363" />
      </div>

      {/* ── Left Column: Problem Statements ── */}
      <div className="lg:col-span-7 flex flex-col justify-center pl-10 md:pl-16 pr-8 relative z-10 py-10">
        <div className="flex items-center gap-2 mb-1.5 select-none">
          <span className="text-[11px] font-extrabold tracking-widest text-[#006363] uppercase">
            02 / PROBLEM STATEMENT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Retailer Side
          </span>
        </div>
        <h2 className="text-3xl md:text-[28px] font-extrabold font-title text-slate-900 tracking-tight leading-tight mb-5">
          Broken Access to Digital Demand
        </h2>

        {/* Timeline Path of Friction Cards */}
        <div className="relative space-y-3.5 pl-4 border-l border-slate-200/50">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="relative group">

                {/* Timeline node icon */}
                <div
                  className="absolute -left-[29px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 group-hover:scale-105 z-10"
                  style={{
                    color: '#006363',
                    backgroundColor: '#FCFCFA',
                    borderColor: '#00636340'
                  }}
                >
                  <Icon size={10} />
                </div>

                {/* Glass Card */}
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 pl-4 border border-slate-200/50 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-1 relative overflow-hidden">

                  {/* Subtle top-right gradient pattern */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 pointer-events-none -mr-4 -mt-4 transition-transform duration-500 rounded-bl-full"
                    style={{
                      background: `radial-gradient(circle at top right, #00636312, transparent 70%)`
                    }}
                  />

                  <h4 className="font-extrabold text-slate-800 text-[13.5px] leading-snug italic font-title relative z-10">
                    {p.quote}
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium relative z-10">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Right Column: Captioned Image Panel & Core problem callout ── */}
      <div className="lg:col-span-5 bg-slate-50/20 border-l border-slate-200/40 flex flex-col justify-center gap-5 relative z-10 py-10 px-8 select-none">

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#006363_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Captioned Polaroid/Keynote Style Card (Scale Matched to Slide 1) */}
        <div className="w-full max-w-[260px] bg-white rounded-3xl border border-slate-200/50 shadow-md hover:shadow-lg p-2.5 flex flex-col gap-3 transition-shadow duration-500 mx-auto">

          {/* Retailer Pain Illustration (100% visible) */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
            <img
              src={retailerPainImg}
              alt="Retailer Pain Illustration"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Integrated Light Caption Panel */}
          <div className="px-1.5 pb-2 text-left select-none">
            <div className="flex items-center gap-1.5 mb-1.5">
              <FaSignal className="text-[#006363]" size={11} />
              <span className="text-[8.5px] font-black uppercase tracking-widest text-[#006363]">Retailer Insight</span>
            </div>
            <h5 className="text-[12px] font-bold text-slate-800 tracking-tight leading-none">
              &lt; 5% Digital Discoverability
            </h5>
            <p className="text-slate-400 text-[9px] font-semibold mt-1 leading-normal">
              Local merchants rely strictly on physical walk-ins due to high setup barriers.
            </p>
          </div>

        </div>

        {/* Core Problem Insight Box (Text-Only, Increased Width to Balance Heights) */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative z-10 w-full max-w-[460px] mx-auto group">

          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none -mr-4 -mt-4 transition-transform duration-500 rounded-bl-full"
            style={{
              background: `radial-gradient(circle at top right, #e85c1c0a, transparent 70%)`
            }}
          />

          <h5 className="text-[10px] font-black tracking-widest text-[#e85c1c] uppercase mb-2.5">
            Core Problem Insight
          </h5>

          <div className="space-y-2 text-slate-700 text-[11px] font-semibold leading-relaxed">
            <ul className="list-disc pl-4">
              <li>Consumers are stuck without access to trusted local options.</li>
              <li>Businesses are stuck without access to digital demand.</li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100/80">
            <p className="text-[#006363] text-[10px] font-black uppercase tracking-wide">
              The connection layer between them is missing.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
