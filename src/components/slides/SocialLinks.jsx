import React from 'react';
import {
  FaLinkedin,
  FaGlobe,
  FaInstagram,
  FaExternalLinkAlt
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function SocialLinks() {
  return (
    <div className="w-full h-full relative bg-[#FCFCFA] p-8 md:p-14 select-none overflow-hidden flex flex-col justify-between">
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

      {/* Faint logo watermark in the background */}
      <div className="absolute bottom-[10%] right-[10%] opacity-[0.012] pointer-events-none z-0">
        <NukaazoLogo width={220} height={220} fill="var(--color-brand-primary)" />
      </div>

      {/* PPT Technical L-Shape Crop Marks */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#e85c1c] via-[#006363]/40 to-transparent z-10"></div>

      {/* ── Slide Header ── */}
      <div className="relative z-10 flex justify-between items-start">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-extrabold tracking-widest text-[#e85c1c] uppercase">
              13 / CONNECT WITH US
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Social Links & Web Presence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
            Connect With Nukaazo
          </h2>
          <p className="text-slate-500 mt-1 max-w-3xl text-[13px] font-medium">
            Join us in our mission to digitize traditional neighborhood retail networks and empower local commerce. Follow our progress, explore our platform, or reach out.
          </p>
        </div>
      </div>

      {/* ── Main Layout (Two-Column Presentation Grid) ── */}
      <div className="relative z-10 flex-1 grid grid-cols-12 gap-6 items-center py-4 overflow-hidden">
        {/* Left Column: Thank You / Closing Card */}
        <div className="col-span-5 bg-gradient-to-b from-[#006363]/[0.02] to-white border border-[#006363]/15 rounded-2xl p-6 flex flex-col justify-between h-[280px] shadow-sm hover:border-[#006363]/30 transition-all duration-300 group">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <NukaazoLogo width={42} height={42} noBg={true} />
              <div>
                <h4 className="text-[18px] font-black text-slate-800 leading-tight">
                  Nukaa<span className="text-[#006363]">zo</span>
                </h4>
                <span className="text-[8px] font-extrabold uppercase text-[#e85c1c] tracking-widest">
                  Hyperlocal Retail Digitalization
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm font-semibold leading-relaxed mt-2">
              Thank you for your interest and support. Let's shape the future of B2B2C hyperlocal commerce together.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Live & Scaling
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-bold">Pune, India</span>
          </div>
        </div>

        {/* Right Column: Social Links / Interactive Cards */}
        <div className="col-span-7 flex flex-col gap-3">
          
          {/* Card 1: Official Website */}
          <a
            href="https://nukaazo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white border border-slate-200/80 rounded-xl p-3.5 hover:border-[#006363]/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group text-left cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#006363]/5 text-[#006363] flex items-center justify-center shrink-0 group-hover:bg-[#006363]/10 transition-colors">
                <FaGlobe size={18} />
              </div>
              <div>
                <h4 className="text-[14.5px] font-black text-slate-800 flex items-center gap-1.5 leading-none">
                  Official Website
                  <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-[#006363]/10 text-[#006363] font-bold uppercase tracking-wider">
                    nukaazo.com
                  </span>
                </h4>
                <p className="text-[10.5px] text-slate-500 font-medium leading-normal mt-1.5 max-w-[420px]">
                  Explore our live platform, digital catalog, store registration panel, and consumer discovery app features.
                </p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#006363]/10 group-hover:text-[#006363] transition-colors shrink-0">
              <FaExternalLinkAlt size={10} />
            </div>
          </a>

          {/* Card 2: LinkedIn Company Page */}
          <a
            href="https://www.linkedin.com/company/nukaazo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white border border-slate-200/80 rounded-xl p-3.5 hover:border-[#e85c1c]/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group text-left cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#e85c1c]/5 text-[#e85c1c] flex items-center justify-center shrink-0 group-hover:bg-[#e85c1c]/10 transition-colors">
                <FaLinkedin size={18} />
              </div>
              <div>
                <h4 className="text-[14.5px] font-black text-slate-800 flex items-center gap-1.5 leading-none">
                  LinkedIn Company Profile
                  <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-[#e85c1c]/10 text-[#e85c1c] font-bold uppercase tracking-wider">
                    LinkedIn
                  </span>
                </h4>
                <p className="text-[10.5px] text-slate-500 font-medium leading-normal mt-1.5 max-w-[420px]">
                  Stay updated with our weekly business milestones, customer growth stories, corporate events, and career opportunities.
                </p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#e85c1c]/10 group-hover:text-[#e85c1c] transition-colors shrink-0">
              <FaExternalLinkAlt size={10} />
            </div>
          </a>

          {/* Card 3: Instagram Profile */}
          <a
            href="https://www.instagram.com/nukaazo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white border border-slate-200/80 rounded-xl p-3.5 hover:border-pink-500/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group text-left cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-pink-500/5 text-pink-600 flex items-center justify-center shrink-0 group-hover:bg-pink-500/10 transition-colors">
                <FaInstagram size={18} />
              </div>
              <div>
                <h4 className="text-[14.5px] font-black text-slate-800 flex items-center gap-1.5 leading-none">
                  Instagram Feed
                  <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600 font-bold uppercase tracking-wider">
                    Instagram
                  </span>
                </h4>
                <p className="text-[10.5px] text-slate-500 font-medium leading-normal mt-1.5 max-w-[420px]">
                  Follow our visual highlights, neighborhood store features, community initiatives, and backstage team culture.
                </p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-pink-500/10 group-hover:text-pink-600 transition-colors shrink-0">
              <FaExternalLinkAlt size={10} />
            </div>
          </a>

        </div>
      </div>

      {/* ── Slide Footer ── */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2 border-t border-slate-100">
        <span>Connect with us online &amp; follow our scaling journey</span>
        <span className="text-[#e85c1c]">Nukaazo Presentation</span>
      </div>
    </div>
  );
}
