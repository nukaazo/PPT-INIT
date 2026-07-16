import React from 'react';
import NukaazoLogo from '../../lib/NukaazoLogo';
import appScreenImg from '../../assets/nukaazo_app_screen.png';
import kiranaStoreImg from '../../assets/kirana_store.png';
import { FaStore, FaSearch, FaBolt, FaPlay } from 'react-icons/fa';

export default function HomeSlide() {
  return (
    <div className="w-full h-full relative bg-[#FCFCFA] select-none overflow-hidden flex flex-col justify-between p-12">

      {/* ── Subtle Background Grid ── */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
          <pattern id="home-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000000" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#home-grid)" />
        </svg>
      </div>

      {/* ── Header Area ── */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NukaazoLogo width={46} height={46} noBg={true} />
          <p className="font-title font-black text-3xl tracking-tight text-slate-800 ml-1 flex items-center gap-0.5">
            <span className="text-[#e85c1c]">
              Nukaa
            </span>
            <span className="text-[#006363]">zo</span>
          </p>
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100/60 px-3 py-1 rounded-full border border-slate-200/40">
          Investor Pitch Deck
        </div>
      </div>

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-12 items-center gap-12 w-full">

          {/* Left Column: Branding, Definition & Tagline */}
          <div className="col-span-6 flex flex-col gap-6 text-left pr-4">

            <div className="flex flex-col gap-2">
              <h1 className="font-title font-bold text-[#006363] text-4xl leading-tight tracking-tight">
                Your Favorite <span className="text-[#e85c1c]">Nukkad</span> Shops, Now Online.
              </h1>
              <p className="text-sm font-semibold text-black tracking-wide uppercase">
                Local Business Digitalization
              </p>
            </div>

            <p className="text-[13px] text-slate-500 font-medium leading-[1.65]">
              Nukaazo is a hyper-local B2B2C marketplace connecting consumers directly with neighborhood retailers, enabling instant online discovery, real-time inventory visibility, and rapid local fulfillment.
            </p>

            {/* Core Pillars / Standard Icons */}
            <div className="flex flex-col gap-3.5 mt-2">

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e85c1c]/10 flex items-center justify-center flex-shrink-0">
                  <FaStore className="text-[#e85c1c]" size={14} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs font-bold text-slate-800">Local Business Digitalization</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Zero-friction onboarding to list neighborhood shops online.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#006363]/10 flex items-center justify-center flex-shrink-0">
                  <FaSearch className="text-[#006363]" size={13} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs font-bold text-slate-800">Instant Discovery</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Browse live product availability and pricing at stores nearby.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e85c1c]/10 flex items-center justify-center flex-shrink-0">
                  <FaBolt className="text-[#e85c1c]" size={13} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs font-bold text-slate-800">Rapid Fulfillment</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Powering 15-minute delivery utilizing local neighborhood networks.</p>
                </div>
              </div>

            </div>

            {/* CTA Instruction */}
            <div className="flex items-center gap-2.5 mt-4">
              <div className="w-7 h-7 rounded-full bg-[#e85c1c] flex items-center justify-center shadow-md shadow-[#e85c1c]/20">
                <FaPlay className="text-white ml-0.5" size={8} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Press Next or Right Arrow to begin
              </span>
            </div>

          </div>

          {/* Right Column: Kirana Store storefront and Smartphone Mockup */}
          <div className="col-span-6 flex items-center justify-center relative pl-4">

            <div className="relative w-full max-w-[440px] h-[320px] flex items-center justify-start">

              {/* Kirana Store Storefront Image Card */}
              <div className="w-[300px] h-[280px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 bg-white relative z-10">
                <img
                  src={kiranaStoreImg}
                  alt="Traditional Indian Kirana Store storefront"
                  className="w-full h-full object-cover"
                />
                {/* Subtle caption badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-lg px-2.5 py-1 text-[9px] font-bold text-slate-700 shadow-sm">
                  Digitizing Traditional Retail
                </div>
              </div>

              {/* Smartphone Mockup showing App Screen (Overlaps Kirana store card nicely) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[160px] h-[330px] rounded-[28px] bg-slate-900 p-1.5 shadow-2xl z-20 border border-slate-700/30"
                style={{ boxShadow: '0 20px 45px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)' }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55px] h-[14px] bg-slate-900 rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-[24px] h-[2px] rounded-full bg-slate-700 mt-[2px]"></div>
                </div>

                {/* Screen Content */}
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-white relative">
                  <img
                    src={appScreenImg}
                    alt="Nukaazo Mobile App Interface"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[50px] h-[2px] rounded-full bg-white/40 z-30"></div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── Footer ── */}
      <div className="relative z-10 flex items-center justify-between w-full border-t border-slate-200/30 pt-4">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          B2B Presentation · 2026
        </p>
        <p className="text-[10px] font-bold uppercase tracking-wider">
          <span className="text-[#e85c1c]">Nukaazo</span>{' '}
          <span className="text-slate-400">Presentation</span>
        </p>
      </div>

    </div>
  );
}
