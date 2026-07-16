import React from 'react';
import { FaCheck, FaMapMarkerAlt, FaGlobe, FaNetworkWired, FaServer } from 'react-icons/fa';
import puneMapImg from '../../assets/pune_launch_map.png';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function MarketValidation() {
  return (
    <div className="w-full h-full relative flex flex-col bg-[#FCFCFA] p-8 md:p-14 select-none overflow-hidden justify-between">
      <style>{`
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(232, 92, 28, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(232, 92, 28, 0); }
          100% { box-shadow: 0 0 0 0 rgba(232, 92, 28, 0); }
        }
        .pulse-indicator {
          animation: pulse-glow 2s infinite;
        }
        @keyframes grid-scroll {
          from { background-position: 0 0; }
          to { background-position: 48px 48px; }
        }
        .scrolling-grid {
          animation: grid-scroll 20s linear infinite;
        }
      `}</style>

      {/* ── PowerPoint Template Diagonal Background Polygons ── */}
      {/* Top Right Overlapping Polygons */}
      <svg className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" className="text-[#e85c1c]/4" />
        <path d="M40,0 L100,0 L100,60 Z" fill="currentColor" className="text-[#006363]/3" />
      </svg>

      {/* Bottom Left Overlapping Polygons */}
      <svg className="absolute bottom-0 left-0 w-[600px] h-[350px] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 L100,100 L0,0 Z" fill="currentColor" className="text-[#006363]/3" />
        <path d="M0,100 L50,100 L0,50 Z" fill="currentColor" className="text-[#e85c1c]/2" />
      </svg>

      {/* ── Slide Background Textures ── */}
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0 scrolling-grid"></div>

      {/* Diagonal Pinstripe PPT Texture */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0"></div>

      {/* Faint watermark in the background */}
      <div className="absolute top-[40%] left-[20%] opacity-[0.01] pointer-events-none z-0">
        <NukaazoLogo width={300} height={300} fill="var(--color-brand-primary)" />
      </div>

      {/* PPT Technical L-Shape Crop Marks in Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#e85c1c] via-[#006363]/40 to-transparent z-10"></div>

      {/* ── Slide Header ── */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 mb-1">
          <span className="text-[11px] font-extrabold tracking-widest text-[#e85c1c] uppercase">
            06 / PROOF OF MARKET
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            On-Ground Validation
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
          Our Market Validation — Pune launch
        </h2>
      </div>

      {/* ── Main Layout: Split Dashboard ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
        
        {/* Left Side: Milestones Flow (Visual Timeline) */}
        <div className="lg:col-span-5 flex flex-col space-y-5 justify-center">
          
          <div className="border-l-4 border-[#e85c1c] pl-4">
            <span className="text-xs font-bold text-[#e85c1c] uppercase tracking-wider block mb-0.5">
              Live Market Testbed
            </span>
            <h3 className="text-lg md:text-xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Proving Hyperlocal Scalability
            </h3>
          </div>

          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
            By deploying Nukaazo in dense urban zones, we tested our model against real supply availability and real customer ordering frequencies.
          </p>

          {/* Graphical Timeline Milestones */}
          <div className="relative border-l-2 border-slate-200 pl-6 ml-3 space-y-5 my-2">
            
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center shadow-md"></span>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider">
                  Phase 01 / Completed
                </span>
                <h4 className="font-extrabold text-slate-800 text-xs md:text-sm leading-snug">
                  Geographic Density Focus
                </h4>
                <p className="text-slate-500 text-[11px] mt-0.5 font-medium leading-normal">
                  Identified commercial corridors to ensure tight logistic distance and supply proximity.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center shadow-md"></span>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider">
                  Phase 02 / Completed
                </span>
                <h4 className="font-extrabold text-slate-800 text-xs md:text-sm leading-snug">
                  Two-Sided Pull Verification
                </h4>
                <p className="text-slate-500 text-[11px] mt-0.5 font-medium leading-normal">
                  Validated merchant onboarding ease alongside organic consumer repeat order behavior.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#e85c1c] border-4 border-white flex items-center justify-center shadow-md pulse-indicator"></span>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold text-[#e85c1c] uppercase tracking-wider">
                  Phase 03 / Active
                </span>
                <h4 className="font-extrabold text-slate-800 text-xs md:text-sm leading-snug">
                  Ecosystem Consolidation
                </h4>
                <p className="text-slate-500 text-[11px] mt-0.5 font-medium leading-normal">
                  Scaling digital operations to cover neighboring municipal sectors and merchant groups.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side: Map inside a telemetry control console */}
        <div className="lg:col-span-7 flex justify-center items-center">
          
          <div className="w-full max-w-[440px] bg-white border border-slate-200 rounded-3xl p-4 shadow-[0_12px_32px_rgba(0,0,0,0.03)] relative overflow-hidden text-slate-700">
            {/* Console grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]"></div>

            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3 text-[10px] font-mono tracking-wider text-slate-500">
              <span className="font-extrabold text-slate-700 uppercase tracking-widest">Pune Operations</span>
              <span className="flex items-center gap-1"><FaGlobe className="text-[#006363]" /> 18.7068° N, 73.6582° E</span>
            </div>

            {/* Map Frame */}
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-white border border-slate-200 relative shadow-inner">
              <img 
                src={puneMapImg} 
                alt="Pune Live Operations Map" 
                className="w-full h-full object-contain select-none"
              />
              
              {/* Telemetry coordinate marks in corners */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-slate-300/60 pointer-events-none"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-slate-300/60 pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-slate-300/60 pointer-events-none"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-slate-300/60 pointer-events-none"></div>
            </div>

            {/* Console Footer Stats overlay */}
            <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-3 mt-3 text-center">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase">Deployed Area</span>
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                  <FaMapMarkerAlt className="text-[#e85c1c]" size={9} /> Pune Urban
                </span>
              </div>
              
              <div className="flex flex-col items-center border-x border-slate-100">
                <span className="text-[9px] font-mono text-slate-400 uppercase">Coverage Network</span>
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                  <FaNetworkWired className="text-[#006363]" size={9} /> 100+ Outlets
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase">Local System</span>
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                  <FaServer className="text-emerald-600" size={9} /> Active Nodes
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── Slide Footer Details ── */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2.5 border-t border-slate-100 mt-4 select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <span>Traction, Validation &amp; Brand Adoption</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-[#e85c1c]">Cohort 1 (Pune)</span>
        </div>
        <span className="text-[#e85c1c]">Nukaazo Presentation</span>
      </div>

    </div>
  );
}
