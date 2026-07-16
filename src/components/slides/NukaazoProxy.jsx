import React from 'react';
import { 
  FaUsers, 
  FaChartLine, 
  FaMapMarkerAlt, 
  FaCamera, 
  FaBrain, 
  FaLightbulb,
  FaCheckCircle
} from 'react-icons/fa';

export default function NukaazoProxy() {
  return (
    <div className="w-full h-full relative bg-[#FCFCFA] p-8 md:p-14 select-none overflow-hidden">
      {/* ── PowerPoint Template Diagonal Background Polygons ── */}
      <svg className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" className="text-[#e85c1c]/4" />
        <path d="M40,0 L100,0 L100,60 Z" fill="currentColor" className="text-[#006363]/3" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[600px] h-[350px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 L100,100 L0,0 Z" fill="currentColor" className="text-[#006363]/3" />
        <path d="M0,100 L50,100 L0,50 Z" fill="currentColor" className="text-[#e85c1c]/2" />
      </svg>

      {/* ── Slide Background Textures ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0"></div>
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0"></div>
      
      {/* PPT Technical L-Shape Crop Marks */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#e85c1c] via-[#006363]/40 to-transparent z-10"></div>

      {/* ── Main Layout Content ── */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Slide Header */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[11px] font-extrabold tracking-widest text-[#e85c1c] uppercase">
              OPERATIONAL ADVANTAGE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Efficiency & Execution
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
            Strategic Brand Growth Assets
          </h2>
          <p className="text-slate-500 mt-2 max-w-3xl text-sm font-medium">
            A comprehensive suite of on-ground and digital assets designed to maximize brand ROI, drive localized demand, and accelerate sales.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto pb-6">
          
          {/* Column 1: Shared Sales Force (Spans 1 col, visually dominant) */}
          <div className="bg-gradient-to-b from-[#e85c1c]/[0.03] to-white border border-[#e85c1c]/20 rounded-2xl p-6 shadow-sm relative group hover:border-[#e85c1c]/50 transition-colors duration-300 overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e85c1c]/10 to-transparent rounded-bl-full pointer-events-none -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#e85c1c]/10 text-[#e85c1c] flex items-center justify-center">
                <FaUsers size={22} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">Shared Sales Force</h3>
                <span className="text-[10px] font-extrabold uppercase text-[#e85c1c] tracking-wider">Nukaazo Proxy</span>
              </div>
            </div>

            <p className="text-slate-600 text-[13px] leading-relaxed mb-6 font-medium">
              Instead of one brand hiring a dedicated rep, Nukaazo proxy reps check stock, execute displays, and book orders for multiple non-competing brands during a single visit.
            </p>

            <div className="mt-auto bg-white border border-[#e85c1c]/20 shadow-sm rounded-xl p-4 flex items-start gap-3 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e85c1c]"></div>
              <FaChartLine className="text-[#e85c1c] mt-1 shrink-0 ml-1" size={16} />
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Financial Impact</p>
                <p className="text-[17px] font-black text-[#e85c1c] leading-none mb-1">60%+ Cost Reduction</p>
                <p className="text-[11px] text-slate-600 font-medium">per brand by splitting execution expenses.</p>
              </div>
            </div>
            
            {/* Demand Catalyst Section */}
            <div className="mt-5 bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#006363]"></div>
              <h4 className="text-[13px] font-bold text-slate-800 mb-1.5 flex items-center gap-2 ml-1">
                <FaCheckCircle className="text-[#006363]" size={14} /> Demand Catalyst
              </h4>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed ml-1">
                Reps drive sales by sharing real-time localized trends with shop owners and deploying "try-on product" campaigns to boost consumer trial.
              </p>
            </div>
          </div>

          {/* Column 2: Hyperlocal Campaigns */}
          <div className="bg-gradient-to-b from-[#006363]/[0.03] to-white border border-[#006363]/20 rounded-2xl p-6 shadow-sm relative group hover:border-[#006363]/50 transition-colors duration-300 overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#006363]/10 to-transparent rounded-bl-full pointer-events-none -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#006363]/10 text-[#006363] flex items-center justify-center">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">Hyperlocal Campaigns</h3>
                <span className="text-[10px] font-extrabold uppercase text-[#006363] tracking-wider">Targeted Activation</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 mt-2">
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex gap-3">
                <div className="w-6 h-6 shrink-0 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm text-[11px] font-bold">1</div>
                <div>
                  <h4 className="text-[13px] font-bold text-slate-800 mb-1">Digital Micro-Targeting</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Deployment of highly localized store app couponing to drive immediate foot traffic and conversion.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex gap-3">
                <div className="w-6 h-6 shrink-0 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm text-[11px] font-bold">2</div>
                <div>
                  <h4 className="text-[13px] font-bold text-slate-800 mb-1">Physical Deployment</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Strategic placement of posters and shelf visibility materials to capture in-store attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto bg-[#006363]/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-[#006363]/20 transition-colors hover:bg-[#006363]/15">
              <FaCamera className="text-[#006363]" size={14} />
              <span className="text-[11px] font-bold text-[#006363] tracking-wide uppercase">Verified via Photo Audits</span>
            </div>
          </div>

          {/* Column 3: AI Recommendations */}
          <div className="bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-500/20 rounded-2xl p-6 shadow-sm relative group hover:border-indigo-500/50 transition-colors duration-300 overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                <FaBrain size={22} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">AI Recommendations</h3>
                <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">Algorithmic Guidance</span>
              </div>
            </div>

            <p className="text-slate-600 text-[13px] leading-relaxed mb-6 font-medium">
              Data-driven intelligence powers decision-making across the network, optimizing sales strategies for both shop owners and CPG territory managers.
            </p>

            <div className="flex-1 flex flex-col justify-start">
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 shrink-0 rounded-full bg-white border-2 border-indigo-400 z-10 mt-0.5"></div>
                  <div className="w-0.5 h-full bg-indigo-100 my-1"></div>
                </div>
                <div className="pb-4">
                  <h4 className="text-[13px] font-bold text-slate-800 leading-none mb-1.5">What to sell</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Identifying high-velocity SKUs for specific micro-markets.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 shrink-0 rounded-full bg-white border-2 border-indigo-500 z-10 mt-0.5"></div>
                  <div className="w-0.5 h-full bg-indigo-100 my-1"></div>
                </div>
                <div className="pb-4">
                  <h4 className="text-[13px] font-bold text-slate-800 leading-none mb-1.5">When to sell</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Timing promotions with local demand surges and seasonal trends.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 shrink-0 rounded-full bg-white border-2 border-indigo-600 z-10 mt-0.5"></div>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-slate-800 leading-none mb-1.5">Where to sell</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Pinpointing exact shelf locations or stores for maximum visibility.</p>
                </div>
              </div>

            </div>
            
            <div className="mt-auto pt-4 flex justify-end">
               <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shadow-sm">
                 <FaLightbulb className="text-amber-500" size={16} />
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
