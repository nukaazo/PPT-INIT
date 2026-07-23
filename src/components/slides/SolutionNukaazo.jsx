import React, { useState } from 'react';
import NukaazoLogo from '../../lib/NukaazoLogo';
import { FaUsers, FaStore, FaSearch, FaBolt, FaTools, FaNetworkWired } from 'react-icons/fa';

export default function SolutionNukaazo() {
  const [hoveredZone, setHoveredZone] = useState(null); // 'consumer' | 'retailer' | 'nukaazo' | null

  return (
    <div className="w-full h-full relative grid grid-cols-1 bg-[#FCFCFA] p-8 md:p-14 select-none overflow-hidden">
      <style>{`
        @keyframes flow-demand {
          from { stroke-dashoffset: 80; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flow-supply {
          from { stroke-dashoffset: -80; }
          to { stroke-dashoffset: 0; }
        }
        .animate-flow-demand {
          stroke-dasharray: 8 8;
          animation: flow-demand 3s linear infinite;
        }
        .animate-flow-demand-fast {
          stroke-dasharray: 8 8;
          animation: flow-demand 1s linear infinite;
        }
        .animate-flow-supply {
          stroke-dasharray: 8 8;
          animation: flow-supply 3s linear infinite;
        }
        .animate-flow-supply-fast {
          stroke-dasharray: 8 8;
          animation: flow-supply 1s linear infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.35; }
          100% { transform: scale(1.25); opacity: 0; }
        }
        .ring-pulse {
          animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        .glow-active {
          filter: drop-shadow(0 0 12px rgba(232, 92, 28, 0.6));
        }
        .glow-active-teal {
          filter: drop-shadow(0 0 12px rgba(0, 99, 99, 0.6));
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
      {/* Technical Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0"></div>

      {/* Diagonal Pinstripe PPT Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0"></div>

      {/* PPT Technical L-Shape Crop Marks in Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#e85c1c] via-[#006363]/40 to-transparent z-10"></div>

      {/* ── Main Bridge Layout ── */}
      <div className="relative z-10 flex flex-col justify-between h-full">

        {/* Slide Header */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-[11px] font-extrabold tracking-widest text-[#006363] uppercase">
              03 / THE SOLUTION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Ecosystem Connector
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
            Introducing Nukaazo — The Local Ecommerce Network
          </h2>
        </div>

        {/* ── Main Bridge Graphic & Column Flow ── */}
        <div className="relative flex-1 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-6 my-auto py-4">

          {/* SVG Bridge Layer - Only shown on Desktop */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bridge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e85c1c" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#006363" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#006363" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="cable-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e85c1c" />
                  <stop offset="100%" stopColor="#e85c1c" />
                </linearGradient>
                <linearGradient id="cable-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#006363" />
                  <stop offset="100%" stopColor="#006363" />
                </linearGradient>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e85c1c" />
                  <stop offset="50%" stopColor="#9a5e3f" />
                  <stop offset="100%" stopColor="#006363" />
                </linearGradient>
              </defs>

              {/* Central support pillars (under the Nukaazo logo) */}
              <line x1="490" y1="90" x2="490" y2="280" stroke="#cbd5e1" strokeWidth="2.5" />
              <line x1="510" y1="90" x2="510" y2="280" stroke="#cbd5e1" strokeWidth="2.5" />
              <line x1="480" y1="180" x2="520" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Horizontal bridge deck (the baseline connection road) */}
              <path
                d="M 140,180 L 860,180"
                stroke="url(#bridge-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 140,180 L 860,180"
                stroke="#fff"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeOpacity="0.6"
              />

              {/* Left Suspension Cable Arch (Consumer -> Nukaazo) */}
              <path
                d="M 140,180 Q 320,80 500,80"
                stroke="#e2e8f0"
                strokeWidth="3.5"
                fill="none"
              />
              <path
                d="M 140,180 Q 320,80 500,80"
                stroke="url(#cable-left)"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />

              {/* Right Suspension Cable Arch (Retailer -> Nukaazo) */}
              <path
                d="M 860,180 Q 680,80 500,80"
                stroke="#e2e8f0"
                strokeWidth="3.5"
                fill="none"
              />
              <path
                d="M 860,180 Q 680,80 500,80"
                stroke="url(#cable-right)"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />

              {/* Suspender cables (vertical drop lines from arches to deck) */}
              {/* Left suspenders */}
              <line x1="200" y1="156" x2="200" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="260" y1="135" x2="260" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="320" y1="117" x2="320" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="380" y1="102" x2="380" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="440" y1="90" x2="440" y2="180" stroke="#e2e8f0" strokeWidth="1" />

              {/* Right suspenders */}
              <line x1="800" y1="156" x2="800" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="740" y1="135" x2="740" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="680" y1="117" x2="680" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="620" y1="102" x2="620" y2="180" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="560" y1="90" x2="560" y2="180" stroke="#e2e8f0" strokeWidth="1" />

              {/* Animated Demand Flow: Consumer -> Center (pulses orange) */}
              <path
                d="M 140,180 Q 320,80 500,80"
                stroke="#e85c1c"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                className={hoveredZone === 'consumer' || hoveredZone === 'nukaazo' ? 'animate-flow-demand-fast glow-active' : 'animate-flow-demand'}
              />

              {/* Animated Supply Flow: Retailer -> Center (pulses teal) */}
              <path
                d="M 860,180 Q 680,80 500,80"
                stroke="#006363"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                className={hoveredZone === 'retailer' || hoveredZone === 'nukaazo' ? 'animate-flow-supply-fast glow-active-teal' : 'animate-flow-supply'}
              />

              {/* Animated Direct Deck Match Flow: Left <-> Right */}
              <path
                d="M 140,180 L 860,180"
                stroke="url(#flow-gradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.75"
                className="animate-flow-demand"
                style={{ animationDuration: hoveredZone ? '1.5s' : '4s' }}
              />

            </svg>
          </div>

          {/* ── Left Column: Consumer Demand (28% width) ── */}
          <div
            onMouseEnter={() => setHoveredZone('consumer')}
            onMouseLeave={() => setHoveredZone(null)}
            className={`w-full lg:w-[28%] bg-white border rounded-2xl p-5 transition-all duration-300 relative z-10 flex flex-col justify-between ${hoveredZone === 'consumer'
              ? 'border-[#e85c1c]/50 shadow-xl shadow-[#e85c1c]/5 translate-y-[-4px]'
              : 'border-slate-200/50 shadow-md'
              }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${hoveredZone === 'consumer' ? 'bg-[#e85c1c] text-white' : 'bg-[#e85c1c]/10 text-[#e85c1c]'
                }`}>
                <FaUsers size={18} />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 text-sm tracking-wide uppercase">Consumer Demand</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">The Buying Force</span>
              </div>
            </div>

            {/* Content List */}
            <div className="space-y-4">
              <div className="group/item">
                <div className="flex items-center gap-2 mb-1">
                  <FaSearch size={11} className="text-[#e85c1c]" />
                  <h4 className="font-extrabold text-slate-800 text-[12px]">Real-Time Local Discovery</h4>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Consumers browse live stock, compare pricing, and order directly from nearby trusted local merchants.
                </p>
              </div>

              <div className="group/item">
                <div className="flex items-center gap-2 mb-1">
                  <FaBolt size={11} className="text-[#e85c1c]" />
                  <h4 className="font-extrabold text-slate-800 text-[12px]">Instant Fulfillment Speed</h4>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Orders fulfilled in minutes from closest stores, marrying modern on-demand speed with offline trust.
                </p>
              </div>
            </div>

            {/* Bottom Base Anchor Node */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-[#e85c1c] tracking-widest uppercase">
              <span>DEMAND HUB</span>
              <span className={`w-2 h-2 rounded-full bg-[#e85c1c] ${hoveredZone === 'consumer' ? 'animate-ping' : ''
                }`}></span>
            </div>
          </div>

          {/* ── Center Column: Nukaazo Platform (32% width) ── */}
          <div
            onMouseEnter={() => setHoveredZone('nukaazo')}
            onMouseLeave={() => setHoveredZone(null)}
            className="w-full lg:w-[32%] flex flex-col items-center relative z-10 py-6"
          >
            {/* Pulsing visual ring behind medallion */}
            <div className="absolute top-1 w-24 h-24 pointer-events-none flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-[#e85c1c]/5 ring-pulse"></div>
              <div className="absolute w-24 h-24 rounded-full bg-[#006363]/5 ring-pulse" style={{ animationDelay: '1.25s' }}></div>
            </div>

            {/* Nukaazo Medallion (Center Pylon top) */}
            <div className={`w-20 h-20 rounded-full bg-white border-3 flex items-center justify-center shadow-lg transition-transform duration-300 relative z-20 cursor-pointer ${hoveredZone === 'nukaazo'
              ? 'border-[#e85c1c] scale-110 shadow-xl shadow-[#e85c1c]/10'
              : 'border-slate-300/80'
              }`}>
              <NukaazoLogo width={44} height={44} fill="transparent" />
            </div>

            {/* Engine Core Title */}
            <div className="text-center mt-3 mb-4">
              <h4 className="text-[10px] font-extrabold tracking-widest text-[#006363] uppercase">Nukaazo Core Engine</h4>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Active Matchmaking Node</span>
            </div>

            {/* Connected Ecosystem Card */}
            <div className={`w-full bg-gradient-to-b from-white to-[#FCFCFA] border rounded-2xl p-5 transition-all duration-300 text-center ${hoveredZone === 'nukaazo'
              ? 'border-[#006363]/50 shadow-xl shadow-[#006363]/5 translate-y-[-4px]'
              : 'border-slate-200/50 shadow-md'
              }`}>
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#e85c1c]/10 to-[#006363]/10 text-slate-800 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full uppercase mb-3">
                <FaNetworkWired size={10} className="text-[#006363]" />
                <span>Connected Local Ecosystem</span>
              </div>

              <p className="text-slate-700 text-[11px] leading-relaxed font-bold">
                The transaction layer mapping consumer discovery with offline merchant supply.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-[9px] font-bold text-slate-500">
                <div className="bg-slate-100/60 rounded px-1.5 py-1 border border-slate-200/30">
                  <div className="text-[#e85c1c]">ONDC</div>
                  <div className="text-[8px] text-slate-400">Ready</div>
                </div>
                <div className="bg-slate-100/60 rounded px-1.5 py-1 border border-slate-200/30">
                  <div className="text-[#006363]">Hyperlocal</div>
                  <div className="text-[8px] text-slate-400">Matching</div>
                </div>
                <div className="bg-slate-100/60 rounded px-1.5 py-1 border border-slate-200/30">
                  <div className="text-slate-800">Unified</div>
                  <div className="text-[8px] text-slate-400">Payments</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Retailer Supply (28% width) ── */}
          <div
            onMouseEnter={() => setHoveredZone('retailer')}
            onMouseLeave={() => setHoveredZone(null)}
            className={`w-full lg:w-[28%] bg-white border rounded-2xl p-5 transition-all duration-300 relative z-10 flex flex-col justify-between ${hoveredZone === 'retailer'
              ? 'border-[#006363]/50 shadow-xl shadow-[#006363]/5 translate-y-[-4px]'
              : 'border-slate-200/50 shadow-md'
              }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${hoveredZone === 'retailer' ? 'bg-[#006363] text-white' : 'bg-[#006363]/10 text-[#006363]'
                }`}>
                <FaStore size={18} />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 text-sm tracking-wide uppercase">Retailer Supply</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">The Selling Power</span>
              </div>
            </div>

            {/* Content List */}
            <div className="space-y-4">
              <div className="group/item">
                <div className="flex items-center gap-2 mb-1">
                  <FaStore size={11} className="text-[#006363]" />
                  <h4 className="font-extrabold text-slate-800 text-[12px]">Instant Digital Storefronts</h4>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Neighborhood merchants go online instantly without technical friction, ready to receive incoming digital orders.
                </p>
              </div>

              <div className="group/item">
                <div className="flex items-center gap-2 mb-1">
                  <FaTools size={11} className="text-[#006363]" />
                  <h4 className="font-extrabold text-slate-800 text-[12px]">Simple Business Tools</h4>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Retailers easily manage inventory, track order history, settle digital payments, and target local marketing.
                </p>
              </div>
            </div>

            {/* Bottom Base Anchor Node */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-[#006363] tracking-widest uppercase">
              <span>SUPPLY HUB</span>
              <span className={`w-2 h-2 rounded-full bg-[#006363] ${hoveredZone === 'retailer' ? 'animate-ping' : ''
                }`}></span>
            </div>
          </div>

        </div>

        {/* ── Strategic Differentiator (Moat) ── */}
        <div className="bg-gradient-to-r from-[#e85c1c]/[0.05] via-white to-[#006363]/[0.04] border-l-4 border-[#e85c1c] border-r-4 border-[#006363] border-t border-b border-slate-200/60 p-4 rounded-xl max-w-4xl mx-auto w-full text-center mt-2 shadow-[0_10px_30px_rgba(232,92,28,0.06)] hover:shadow-[0_15px_40px_rgba(232,92,28,0.1)] transition-all duration-300 relative group">
          {/* Subtle glowing ring badge */}
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#e85c1c] to-[#006363] text-white text-[9px] font-black tracking-widest px-3.5 py-1 rounded-full uppercase mb-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>Why We Win: Our Strategic Moat</span>
          </div>
          
          <p className="text-slate-800 text-xs md:text-sm font-extrabold leading-relaxed px-4">
            Nukaazo's focus on the local shop <span className="text-[#006363] font-black">"leaf nodes"</span> represents a structural <span className="text-[#e85c1c] font-black">product-based ecosystem approach</span>, not a service model.
            <span className="block text-[11px] md:text-[12px] text-slate-500 font-semibold mt-1.5 leading-relaxed italic">
              "No other competitor digitizes down to this atomic level. This pure product play is what makes us totally different and enables long-term market control."
            </span>
          </p>
        </div>

        {/* ── Slide Footer ── */}
        <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2.5 border-t border-slate-100 mt-4 select-none shrink-0">
          <span>Introducing Nukaazo Platform Solution</span>
          <span className="text-[#e85c1c]">Nukaazo Presentation</span>
        </div>
      </div>
    </div>
  );
}
