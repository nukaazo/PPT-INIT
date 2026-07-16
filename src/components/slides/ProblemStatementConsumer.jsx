import React from 'react';
import consumerDoubtImg from '../../assets/consumer_doubt.png';
import NukaazoLogo from '../../lib/NukaazoLogo';
import { 
  FaEyeSlash, 
  FaSearch, 
  FaPhoneSlash, 
  FaShieldAlt, 
  FaTimesCircle,
  FaExclamationCircle
} from 'react-icons/fa';

export default function ProblemStatementConsumer() {
  const problems = [
    {
      quote: "“I want to order from nearby trusted stores… but I can’t.”",
      desc: <span>There is no simple way to <strong>discover</strong> and <strong>order</strong> from reliable local businesses online.</span>,
      icon: FaEyeSlash
    },
    {
      quote: "“I don’t know what’s actually available nearby.”",
      desc: <span>No <strong>real-time visibility</strong> into product availability, pricing, or store inventory.</span>,
      icon: FaSearch
    },
    {
      quote: "“Local options exist, but ordering is inconvenient.”",
      desc: <span>Calling, WhatsApping, or physically visiting stores is still the default experience.</span>,
      icon: FaPhoneSlash
    },
    {
      quote: "“Fast platforms are easy… but I don’t trust them fully.”",
      desc: <span>Consumers compromise on <strong>trust, quality, and familiarity</strong> for speed.</span>,
      icon: FaShieldAlt
    },
    {
      quote: "“I drop off because the experience is unreliable.”",
      desc: <span>Inconsistent delivery times and poor UX lead to <strong>abandoned purchases</strong>.</span>,
      icon: FaTimesCircle
    }
  ];

  return (
    <div className="w-full h-full relative bg-[#FCFCFA] select-none overflow-hidden flex flex-col justify-between">
      
      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#e85c1c] via-[#006363]/40 to-transparent z-10" />

      {/* ── PowerPoint Template Diagonal Background Polygons ── */}
      <svg className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" className="text-[#e85c1c]/4" />
        <path d="M40,0 L100,0 L100,60 Z" fill="currentColor" className="text-[#006363]/3" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 L100,100 L0,0 Z" fill="currentColor" className="text-[#006363]/3" />
        <path d="M0,100 L50,100 L0,50 Z" fill="currentColor" className="text-[#e85c1c]/2" />
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
      <div className="absolute bottom-8 right-10 opacity-[0.012] pointer-events-none z-0">
        <NukaazoLogo width={180} height={180} fill="#006363" />
      </div>

      {/* ── HEADER ── */}
      <header className="relative z-10 px-12 pt-9 pb-3 shrink-0">
        <div className="flex items-center gap-2 mb-1.5 select-none">
          <span className="text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-[#e85c1c]">
            01 / PROBLEM STATEMENT
          </span>
          <span className="w-[3px] h-[3px] rounded-full bg-slate-300" />
          <span className="text-[9.5px] text-slate-400 font-semibold uppercase tracking-[0.14em]">Consumer Side</span>
        </div>
        <h2 className="text-[24px] font-extrabold text-slate-900 tracking-tight leading-tight font-title">
          Real Frictions in Daily Buying
        </h2>
      </header>

      {/* ── BODY ── */}
      <main className="relative z-10 flex-1 min-h-0 px-12 pb-5 flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Problem Statements */}
          <div className="col-span-7 flex flex-col justify-center pr-2">
            {/* Timeline Path of Friction Cards */}
            <div className="relative space-y-4 pl-4 border-l border-slate-200/50">
              {problems.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="relative group">
                    
                    {/* Timeline node icon */}
                    <div 
                      className="absolute -left-[29px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 group-hover:scale-105 z-10"
                      style={{ 
                        color: '#e85c1c',
                        backgroundColor: '#FCFCFA',
                        borderColor: '#e85c1c40'
                      }}
                    >
                      <Icon size={10} />
                    </div>

                    {/* Glass Card */}
                    <div className="bg-white/80 backdrop-blur-md rounded-xl p-3.5 pl-4 border border-slate-200/50 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-1 relative overflow-hidden">
                      
                      {/* Subtle top-right gradient pattern */}
                      <div 
                        className="absolute top-0 right-0 w-24 h-24 pointer-events-none -mr-4 -mt-4 transition-transform duration-500 rounded-bl-full"
                        style={{ 
                          background: `radial-gradient(circle at top right, #e85c1c12, transparent 70%)` 
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

          {/* Right Column: Captioned Editorial Image Widget */}
          <div className="col-span-5 flex flex-col justify-center items-center relative py-2">
            
            {/* Captioned Polaroid/Keynote Style Card */}
            <div className="w-full max-w-[270px] bg-white rounded-3xl border border-slate-200/50 shadow-md hover:shadow-lg p-2.5 flex flex-col gap-3 transition-shadow duration-500">
              
              {/* Confused Indian Consumer Illustration (100% visible) */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                <img 
                  src={consumerDoubtImg} 
                  alt="Confused Indian Consumer Illustration" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Integrated Light Caption Panel */}
              <div className="px-1.5 pb-2 text-left select-none">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <FaExclamationCircle className="text-[#e85c1c]" size={11} />
                  <span className="text-[8.5px] font-black uppercase tracking-widest text-[#e85c1c]">Consumer Insight</span>
                </div>
                <h5 className="text-[12px] font-bold text-slate-800 tracking-tight leading-none">
                  68% Cart Abandonment Rate
                </h5>
                <p className="text-slate-400 text-[9px] font-semibold mt-1 leading-normal">
                  Driven by friction in localized online discovery and delivery unreliability.
                </p>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 px-12 py-2.5 border-t border-slate-100 flex justify-between items-center shrink-0">
        <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest">
          Consumer Pain Points &amp; Friction
        </span>
        <span className="text-[8.5px] font-bold uppercase tracking-widest text-[#e85c1c]">
          Nukaazo Presentation
        </span>
      </footer>

    </div>
  );
}
