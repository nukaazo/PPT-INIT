import React from 'react';
import {
  FaCalendarAlt,
  FaTachometerAlt,
  FaRobot,
  FaBullhorn,
  FaBoxOpen,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHandshake
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function GrowthRoadmap() {
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
        <NukaazoLogo width={250} height={250} fill="var(--color-brand-primary)" />
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
              09 / GROWTH ROADMAP
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Execution timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
            Product & Operational Execution Timeline
          </h2>
          <p className="text-slate-500 mt-1 max-w-3xl text-[13px] font-medium">
            Spanning network scale, B2B merchant dash, campaign collaborations, and two-phase predictive recommendations.
          </p>
        </div>
      </div>

      {/* ── Gantt Chart Container (Full Width) ── */}
      <div className="relative z-10 flex-1 flex flex-col bg-white border border-slate-200 rounded-2xl p-6 md:p-8 my-5 justify-between shadow-sm">
        
        {/* Gantt Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#006363]" size={16} />
            <h3 className="text-base font-black text-slate-800 tracking-tight">Initiative Execution (Gantt Chart)</h3>
          </div>
          <span className="text-[10px] font-extrabold uppercase text-slate-400 bg-slate-100 rounded px-2.5 py-1">12-Month Horizon</span>
        </div>

        {/* Timeline Grid */}
        <div className="flex-1 flex flex-col justify-between relative min-h-[320px]">
          {/* Vertical Grid Lines */}
          <div className="absolute inset-y-0 left-[25%] right-0 flex pointer-events-none z-0">
            <div className="w-[25%] border-l border-dashed border-slate-200"></div>
            {/* Highlight 6-month Milestone line */}
            <div className="w-[25%] border-l-2 border-dashed border-teal-500/60 relative">
              {/* Milestone Marker tooltip */}
              <div className="absolute -top-3 -left-[50px] bg-teal-600 text-white font-extrabold text-[9px] px-2 py-0.5 rounded shadow-sm uppercase tracking-wider z-20">
                6M Milestone
              </div>
            </div>
            <div className="w-[25%] border-l border-dashed border-slate-200"></div>
            <div className="w-[25%] border-l border-slate-200/80"></div>
          </div>

          {/* Timeline Headers */}
          <div className="grid grid-cols-12 text-center text-[11px] font-extrabold text-slate-400 uppercase pb-2 border-b border-slate-100 z-10 relative">
            <div className="col-span-3 text-left pl-3">Track & Initiative Areas</div>
            <div className="col-span-2">Q1 (Months 1–3)</div>
            <div className="col-span-2">Q2 (Months 4–6)</div>
            <div className="col-span-3">Q3 (Months 7–9)</div>
            <div className="col-span-2">Q4 (Months 10–12)</div>
          </div>

          {/* Row 1: Expansion & Ops (Outlets & Users) */}
          <div className="grid grid-cols-12 items-center py-4 border-b border-slate-100/80 z-10 relative">
            <div className="col-span-3 flex flex-col pl-3">
              <span className="text-[12px] font-black text-slate-800 leading-tight">Expansion & Ops</span>
              <span className="text-[9.5px] text-slate-400 font-bold uppercase mt-0.5">Outlets & Active Users</span>
            </div>
            <div className="col-span-9 relative h-8 flex items-center">
              {/* Bar 1: Q1-Q2 */}
              <div className="absolute left-0 w-[50%] h-7 bg-gradient-to-r from-[#e85c1c] to-[#e85c1c]/85 rounded-lg flex items-center justify-between px-3 text-white shadow-sm border border-[#e85c1c]/10">
                <span className="text-[10px] font-extrabold truncate">Outlet & User Scaling (M1-M6 Target)</span>
                <span className="text-[8.5px] font-black bg-white/20 px-1.5 py-0.5 rounded">2K outlets / 1.5K users</span>
              </div>
              {/* Bar 2: Q3-Q4 */}
              <div className="absolute left-[50%] w-[50%] h-7 bg-gradient-to-r from-[#e85c1c]/60 to-[#e85c1c] rounded-lg flex items-center justify-between px-3 text-white shadow-sm border border-[#e85c1c]/10">
                <span className="text-[10px] font-extrabold truncate">Multi-City Expansion & Replication</span>
                <span className="text-[8.5px] font-black bg-white/20 px-1.5 py-0.5 rounded">5K outlets / 4K users</span>
              </div>
            </div>
          </div>

          {/* Row 2: Retailer Dashboard (B2B Portal) */}
          <div className="grid grid-cols-12 items-center py-3 border-b border-slate-100/80 z-10 relative">
            <div className="col-span-3 flex items-center gap-2 pl-3">
              <div className="w-6 h-6 rounded bg-teal-500/10 text-[#006363] flex items-center justify-center shrink-0">
                <FaTachometerAlt size={12} />
              </div>
              <span className="text-[11px] font-bold text-slate-700">Retailer Dashboard (B2B)</span>
            </div>
            <div className="col-span-9 relative h-6 flex items-center">
              <div className="absolute left-0 w-[75%] h-5 bg-teal-500/10 border border-teal-500/20 rounded-md flex items-center justify-between px-3 text-teal-800">
                <span className="text-[9.5px] font-bold truncate">Sales insights, purchase patterns, reorder suggestions</span>
                <span className="text-[8px] font-black uppercase text-teal-700 bg-teal-500/10 px-1.5 py-0.5 rounded">Live Beta</span>
              </div>
            </div>
          </div>

          {/* Row 3: Campaign Engine (B2B + B2C Collaborations) - Starts Q1 */}
          <div className="grid grid-cols-12 items-center py-4 border-b border-slate-100/80 z-10 relative">
            <div className="col-span-3 flex items-center gap-2 pl-3">
              <div className="w-6 h-6 rounded bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                <FaBullhorn size={12} />
              </div>
              <span className="text-[11px] font-bold text-slate-700">Campaign Engine (B2B+B2C)</span>
            </div>
            <div className="col-span-9 relative h-8 flex items-center">
              {/* Bar 1: Q1-Q2 */}
              <div className="absolute left-0 w-[50%] h-7 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-between px-3 text-orange-850">
                <span className="text-[9.5px] font-bold truncate">Launch & FMCG/ITC Brand Campaigns</span>
                <span className="text-[8px] font-black uppercase text-orange-700 bg-orange-500/15 px-1.5 py-0.5 rounded">Launch (M1-M6)</span>
              </div>
              {/* Bar 2: Q3-Q4 */}
              <div className="absolute left-[50%] w-[50%] h-7 bg-orange-500/15 border border-orange-500/25 rounded-lg flex items-center justify-between px-3 text-orange-850">
                <span className="text-[9.5px] font-bold truncate">Hyperlocal Promotions & Campaign Model Enhancement</span>
                <span className="text-[8px] font-black uppercase text-orange-700 bg-orange-500/20 px-1.5 py-0.5 rounded">Scale (M7-M12)</span>
              </div>
            </div>
          </div>

          {/* Row 4: AI Recommendations & Smart Inventory (Two Phases) */}
          <div className="grid grid-cols-12 items-start py-3 border-b border-slate-100/80 z-10 relative">
            <div className="col-span-3 flex items-center gap-2 pl-3">
              <div className="w-6 h-6 rounded bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                <FaRobot size={13} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-700 leading-tight">AI & Smart Inventory</span>
                <span className="text-[8.5px] text-slate-400 font-bold uppercase">2-Phase Model</span>
              </div>
            </div>
            <div className="col-span-9 flex flex-col gap-2 relative">
              {/* Phase 1 App-Level */}
              <div className="relative h-6 flex items-center">
                <div className="absolute left-[25%] w-[50%] h-5 bg-purple-500/10 border border-purple-500/20 rounded-md flex items-center justify-between px-3 text-purple-800">
                  <span className="text-[9.5px] font-bold truncate">Phase 1: App-Level Direct Outlet Recommendations & Stock Alerts</span>
                  <span className="text-[8px] font-black uppercase text-purple-700 bg-purple-500/10 px-1.5 py-0.5 rounded">Phase 1 (Q2-Q3)</span>
                </div>
              </div>
              {/* Phase 2 B2B Predictive */}
              <div className="relative h-6 flex items-center">
                <div className="absolute left-[50%] w-[50%] h-5 bg-indigo-500/10 border border-indigo-500/20 rounded-md flex items-center justify-between px-3 text-indigo-800">
                  <span className="text-[9.5px] font-bold truncate">Phase 2: B2B Predictive Engine (What, Where & When to Sell)</span>
                  <span className="text-[8px] font-black uppercase text-indigo-700 bg-indigo-500/10 px-1.5 py-0.5 rounded">Phase 2 (Q3-Q4)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Milestone Box */}
          <div className="mt-4 bg-gradient-to-r from-teal-500/[0.04] to-transparent border-l-4 border-teal-500 rounded-r-xl p-3.5 flex items-start gap-3 z-10 relative">
            <FaCheckCircle className="text-teal-600 mt-0.5 shrink-0" size={14} />
            <div>
              <p className="text-[11.5px] font-extrabold text-slate-800">
                Crucial Operational Target: 2,000 active outlets & 1,500 active users in 6 months
              </p>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-relaxed">
                Reaching this target establishes the regional store density required to fuel Nukaazo's Campaign Engine. The high transaction frequency feeds our Phase 1 App Recommendations and lays the telemetry data foundations for the Phase 2 B2B Predictive Model (optimizing what, when, and where brands sell).
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ── Slide Footer ── */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2 border-t border-slate-100">
        <span>Timeline & Product Release Pipeline</span>
        <span className="text-[#e85c1c]">Nukaazo Presentation</span>
      </div>
    </div>
  );
}
