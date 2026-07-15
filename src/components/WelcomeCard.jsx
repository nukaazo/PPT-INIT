import React from 'react';
import NukaazoLogo from '../lib/NukaazoLogo';
import NukaazoText from '../lib/NukaazoText';
import { FaPlay } from 'react-icons/fa';

export default function WelcomeCard({ onStartSlides }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#FCFCFA] relative overflow-hidden px-6">
      
      {/* ── Background Grid Pattern ── */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#006363_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* ── Abstract Glass Slides Floating in Background (Blurred) ── */}
      {/* Top Left Slide */}
      <div 
        className="absolute top-[12%] left-[8%] w-[280px] h-[180px] bg-white/40 border border-white/30 rounded-xl shadow-premium pointer-events-none -rotate-6 filter blur-[3px] opacity-60 hidden md:block"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="h-2 w-12 bg-brand-secondary/20 rounded"></div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-brand-primary/20 rounded"></div>
            <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Bottom Right Slide */}
      <div 
        className="absolute bottom-[15%] right-[10%] w-[320px] h-[200px] bg-white/40 border border-white/30 rounded-xl shadow-premium pointer-events-none rotate-6 filter blur-[4px] opacity-50 hidden md:block"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <div className="p-5 flex flex-col justify-between h-full">
          <div className="h-2 w-16 bg-brand-primary/25 rounded"></div>
          <div className="space-y-2">
            <div className="h-3 w-4/5 bg-brand-secondary/15 rounded"></div>
            <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Center Soft Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-primary/5 filter blur-[120px] pointer-events-none"></div>

      {/* ── Welcome Content ── */}
      <div className="relative z-10 text-center max-w-lg flex flex-col items-center">
        
        {/* Brand Logo & Name */}
        <div className="flex flex-col items-center gap-4 mb-3">
          <NukaazoLogo width={56} height={56} fill="#ffffff" />
          <NukaazoText className="text-3xl font-normal" />
        </div>

        {/* Presentation Title */}
        <h1 className="font-title text-2xl font-bold text-brand-text-secondary tracking-widest uppercase mb-4">
          B2B Brand Presentation
        </h1>

        {/* Minimal Subtitle Description */}
        <p className="text-sm text-brand-text-muted mb-10 leading-relaxed font-normal">
          Interactive overview of neighborhood commerce, checkout systems, and hyper-local settlement networks.
        </p>

        {/* ── Redesigned Pill-Shaped Presentation Button using React Icons ── */}
        <button 
          className="group flex items-center bg-brand-primary text-brand-text-inverse rounded-full pl-3 pr-7 py-2.5 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
          style={{ backgroundColor: 'var(--color-brand-primary)' }}
          onClick={onStartSlides}
          type="button"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-primary-hover)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-primary)'}
        >
          {/* White Circular Play Icon Badge using FaPlay */}
          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm mr-3">
            <FaPlay size={10} className="transform translate-x-[1px] text-brand-primary" style={{ color: 'var(--color-brand-primary)' }} />
          </span>
          
          {/* Action text */}
          <span className="font-bold text-[13px] tracking-wider uppercase text-white">
            Launch Presentation
          </span>
        </button>

      </div>
    </div>
  );
}
