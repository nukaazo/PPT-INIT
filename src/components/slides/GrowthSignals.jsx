import React from 'react';
import {
  FaUsers,
  FaStore,
  FaShoppingCart,
  FaRupeeSign,
  FaLightbulb,
  FaSignal,
  FaSyncAlt
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function GrowthSignals() {
  return (
    <div className="w-full h-full relative flex flex-col bg-[#FCFCFA] p-8 md:p-14 select-none overflow-hidden justify-between">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes wave-pulse {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-wave {
          stroke-dasharray: 120 120;
          animation: wave-pulse 3s linear infinite;
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
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0"></div>

      {/* Diagonal Pinstripe PPT Texture */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0"></div>

      {/* Faint watermark in the background */}
      <div className="absolute top-[40%] right-[10%] opacity-[0.01] pointer-events-none z-0">
        <NukaazoLogo width={300} height={300} fill="var(--color-brand-primary)" />
      </div>

      {/* PPT Technical L-Shape Crop Marks in Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#006363] via-[#e85c1c]/40 to-transparent z-10"></div>

      {/* ── Slide Header ── */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 mb-1">
          <span className="text-[11px] font-extrabold tracking-widest text-[#006363] uppercase">
            06 / PROOF OF MARKET
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Early Traction Performance
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
          Growth Signals — Early Traction
        </h2>
      </div>

      {/* ── Main Layout: Asymmetric Asymmetrical Grid ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch py-4">

        {/* Left Column: GMV + Marketplace dynamics (35% width) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-5">

          {/* Card 1: Daily Sales */}
          <div className="flex-1 bg-white border border-teal-500/20 hover:border-[#006363]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,99,99,0.03)] group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase">
                  Daily Sales Value
                </span>
                <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center text-[#006363]">
                  <FaRupeeSign size={12} />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-title">
                ₹3,000+
              </div>
              <h4 className="font-extrabold text-slate-800 text-xs mb-1">
                Daily Sales
              </h4>
              <p className="text-slate-500 text-[10px] leading-normal font-medium">
                Daily sales value generated organically through the platform.
              </p>
            </div>

            {/* Infographic: GMV Growing Vertical Bars */}
            <div className="h-14 flex items-end justify-between gap-2.5 px-2 mt-4">
              <div className="w-full bg-slate-100 rounded-t-md transition-all duration-500 group-hover:bg-[#006363]/15 h-[15%]"></div>
              <div className="w-full bg-slate-100 rounded-t-md transition-all duration-500 group-hover:bg-[#006363]/25 h-[30%]"></div>
              <div className="w-full bg-slate-100 rounded-t-md transition-all duration-500 group-hover:bg-[#006363]/40 h-[48%]"></div>
              <div className="w-full bg-slate-100 rounded-t-md transition-all duration-500 group-hover:bg-[#006363]/60 h-[70%]"></div>
              <div className="w-full bg-[#006363] rounded-t-md h-[95%] shadow-[0_0_10px_rgba(0,99,99,0.2)]"></div>
            </div>
          </div>

          {/* Card 2: Two-Sided Marketplace Dynamics */}
          <div className="flex-1 bg-white border border-orange-500/20 hover:border-[#e85c1c]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(232,92,28,0.03)] group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase">
                  Marketplace Dynamics
                </span>
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#e85c1c]">
                  <FaSignal size={12} />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-title">
                Two-Sided Pull
              </div>
              <h4 className="font-extrabold text-slate-800 text-xs mb-1">
                Ecosystem Velocity
              </h4>
              <p className="text-slate-500 text-[10px] leading-normal font-medium">
                Consumers actively order, which organically pulls merchant supply and outlet onboarding.
              </p>
            </div>

            {/* Infographic: Spinning Flywheel */}
            <div className="flex justify-center items-center h-16 mt-3">
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-orange-500/30 animate-spin-slow">
                <FaSyncAlt size={16} className="text-[#e85c1c]" />
                {/* Orbital nodes */}
                <span className="absolute -top-1 w-2.5 h-2.5 bg-[#e85c1c] border-2 border-white rounded-full"></span>
                <span className="absolute -bottom-1 w-2.5 h-2.5 bg-[#006363] border-2 border-white rounded-full"></span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: User Growth + Outlets + Daily orders + Insight (65% width) */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-5">

          {/* Top Row: 3 metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 3: Active Users */}
            <div className="bg-white border border-orange-500/20 hover:border-[#e85c1c]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(232,92,28,0.03)] group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase">
                    Consumer Adoption
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#e85c1c]">
                    <FaUsers size={12} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-title">
                  300+
                </div>
                <h4 className="font-extrabold text-slate-800 text-xs mb-1">
                  Active Users
                </h4>
                <p className="text-slate-500 text-[10px] leading-normal font-medium">
                  Consistent repeat usage and ordering behavior.
                </p>
              </div>

              {/* Infographic: Rising curve line chart */}
              <div className="h-10 mt-4 overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path
                    d="M0,40 Q25,38 50,22 T100,4"
                    fill="none"
                    stroke="#e85c1c"
                    strokeWidth="2.5"
                    className="animate-wave"
                  />
                  <path
                    d="M0,40 Q25,38 50,22 T100,4 L100,40 Z"
                    fill="url(#orange-gradient)"
                    opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e85c1c" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Card 4: Onboarded Outlets */}
            <div className="bg-white border border-teal-500/20 hover:border-[#006363]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,99,99,0.03)] group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase">
                    Supply Network
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center text-[#006363]">
                    <FaStore size={12} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-title">
                  100+
                </div>
                <h4 className="font-extrabold text-slate-800 text-xs mb-1">
                  Active Outlets
                </h4>
                <p className="text-slate-500 text-[10px] leading-normal font-medium">
                  Continuous inbound merchant interest to register.
                </p>
              </div>

              {/* Infographic: Connected Scatter Network Nodes */}
              <div className="h-10 mt-4 relative flex justify-center items-center opacity-70 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  {/* Connection lines */}
                  <line x1="20" y1="20" x2="50" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="20" y1="20" x2="40" y2="30" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="50" y1="10" x2="80" y2="25" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="40" y1="30" x2="80" y2="25" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="50" y1="10" x2="40" y2="30" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Nodes */}
                  <circle cx="20" cy="20" r="3.5" fill="#006363" />
                  <circle cx="50" cy="10" r="4.5" fill="#e85c1c" />
                  <circle cx="40" cy="30" r="3" fill="#006363" />
                  <circle cx="80" cy="25" r="5" fill="#006363" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="80" cy="25" r="5" fill="#006363" />
                </svg>
              </div>
            </div>

            {/* Card 5: Daily Orders */}
            <div className="bg-white border border-orange-500/20 hover:border-[#e85c1c]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(232,92,28,0.03)] group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase">
                    Demand Intent
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#e85c1c]">
                    <FaShoppingCart size={12} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-title">
                  15+
                </div>
                <h4 className="font-extrabold text-slate-800 text-xs mb-1">
                  Daily Orders
                </h4>
                <p className="text-slate-500 text-[10px] leading-normal font-medium">
                  Showing real purchase intent and platform reliance.
                </p>
              </div>

              {/* Infographic: Transaction pulse wave line */}
              <div className="h-10 mt-4 overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path
                    d="M 0,20 L 25,20 L 32,8 L 40,32 L 48,20 L 68,20 L 75,5 L 83,35 L 90,20 L 100,20"
                    fill="none"
                    stroke="#e85c1c"
                    strokeWidth="2.5"
                    className="animate-wave"
                  />
                </svg>
              </div>
            </div>

          </div>

          {/* Core Insights Plaque (Key Insight) */}
          <div className="bg-white border border-[#e85c1c]/25 rounded-3xl p-5 relative overflow-hidden shadow-[0_8px_24px_rgba(232,92,28,0.02)] flex-shrink-0">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[linear-gradient(to_right,transparent,#e85c1c/4)] opacity-20 pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
              <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#e85c1c] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(232,92,28,0.3)]">
                <FaLightbulb size={18} className="animate-pulse" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[10px] font-extrabold text-[#e85c1c] uppercase tracking-widest block mb-0.5">
                  Key Insight
                </span>
                <p className="text-sm font-bold text-slate-800 tracking-wide leading-relaxed">
                  "Even at an early stage, Nukaazo is demonstrating real demand, real supply onboarding, and real transactions — proving strong market fit."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ── Slide Footer Details ── */}
      <div className="relative z-10 border-t border-slate-200/50 pt-3 flex justify-between items-center text-[9px] font-extrabold text-slate-400 tracking-widest uppercase mt-2">
        <div className="flex items-center gap-1.5">
          <span>Pune Operations Unit</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-[#006363]">Cohort 1</span>
        </div>
        <div>
          <span>Nukaazo Brand deck © 2026</span>
        </div>
      </div>

    </div>
  );
}
