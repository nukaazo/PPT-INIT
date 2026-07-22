import React from 'react';
import {
  FaCoins,
  FaUsers,
  FaBoxOpen,
  FaLaptopCode,
  FaCloud,
  FaBullhorn,
  FaCheckCircle,
  FaChartLine,
  FaTruck
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function InvestmentAsk() {
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
              12 / CAPITAL REQUEST
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Investment Ask & Costing Projections
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
            Funding Request & Capital Allocation
          </h2>
          <p className="text-slate-500 mt-1 max-w-3xl text-[13px] font-medium">
            Funding requirement of ₹5 Crore to execute multi-city expansion, launch dark store micro-fulfillment centers, scale field forces, and refine predictive AI models.
          </p>
        </div>
      </div>

      {/* ── Main Layout (Dashboard Grid) ── */}
      <div className="relative z-10 flex-1 grid grid-cols-12 gap-5 items-stretch py-4 overflow-hidden">
        
        {/* Left Card: The Capital Ask Summary (Spans 4 columns) */}
        <div className="col-span-4 bg-gradient-to-b from-[#e85c1c]/[0.02] to-white border border-[#e85c1c]/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-[#e85c1c]/40 transition-colors">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#e85c1c]/10 text-[#e85c1c] flex items-center justify-center shrink-0">
                <FaCoins size={14} />
              </div>
              <div>
                <h4 className="text-[14px] font-black text-slate-800 leading-tight">Seed Investment Ask</h4>
                <span className="text-[8px] font-extrabold uppercase text-[#e85c1c] tracking-wider">12-Month Runway</span>
              </div>
            </div>

            {/* Giant Ask Number */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 my-4 text-center">
              <span className="block text-[34px] font-black text-slate-900 tracking-tight leading-none mb-1">
                ₹5 Crore
              </span>
              <span className="block text-[9.5px] font-extrabold text-slate-400 uppercase tracking-widest">
                Seed Funding Request
              </span>
            </div>

            {/* Target Goals for this Funding */}
            <h5 className="text-[11.5px] font-bold text-slate-800 mb-2 uppercase tracking-wide">Key Goals in 12 Months:</h5>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-[11px] font-semibold text-slate-650">
                <FaCheckCircle className="text-[#006363] mt-0.5 shrink-0" size={12} />
                <span>Onboard <strong>5,000+ active outlets</strong></span>
              </li>
              <li className="flex items-start gap-2 text-[11px] font-semibold text-slate-650">
                <FaCheckCircle className="text-[#006363] mt-0.5 shrink-0" size={12} />
                <span>Acquire <strong>15,000+ active users</strong></span>
              </li>
              <li className="flex items-start gap-2 text-[11px] font-semibold text-slate-650">
                <FaCheckCircle className="text-[#006363] mt-0.5 shrink-0" size={12} />
                <span>Reach <strong>₹45L+ Monthly GMV Run Rate</strong></span>
              </li>
              <li className="flex items-start gap-2 text-[11px] font-semibold text-slate-650">
                <FaCheckCircle className="text-[#006363] mt-0.5 shrink-0" size={12} />
                <span>Establish <strong>5-7 local Dark Store Hubs</strong></span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-100 mt-4">
            <p className="text-[9.5px] text-slate-400 font-bold leading-normal">
              Fully aligned with our product execution roadmap and scaling unit economics.
            </p>
          </div>
        </div>

        {/* Right Panel: Cost Breakdown & Estimates (Spans 8 columns) */}
        <div className="col-span-8 flex flex-col justify-between gap-4">
          
          {/* List of Allocation Areas */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            
            {/* Allocation 1: Field Force */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-orange-200 transition-all flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                    <FaUsers size={14} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-black text-slate-800">Field Force & Ops</h4>
                    <span className="text-[8px] font-bold text-slate-400 uppercase">Outlet Onboarding</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[13px] font-black text-orange-600">₹1.75 Cr</span>
                  <span className="block text-[7.5px] font-extrabold uppercase text-slate-400">35% Share</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-normal mt-2.5">
                Funding for proxy representative compensation, regional sales leads, store onboarding incentives, and geo-market coordinator salaries.
              </p>
            </div>

            {/* Allocation 2: Marketing & Campaigns */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-amber-200 transition-all flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <FaBullhorn size={13} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-black text-slate-800">Growth & Campaigns</h4>
                    <span className="text-[8px] font-bold text-slate-400 uppercase">Marketing & Ad Placement</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[13px] font-black text-amber-600">₹1.25 Cr</span>
                  <span className="block text-[7.5px] font-extrabold uppercase text-slate-400">25% Share</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-normal mt-2.5">
                FMCG/ITC trial campaigns, hyperlocal shopkeeper ads, user referral vouchers, and digital/physical store banner branding placements.
              </p>
            </div>

            {/* Allocation 3: Dark Stores & Logistics */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-teal-200 transition-all flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#006363] flex items-center justify-center shrink-0">
                    <FaBoxOpen size={13} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-black text-slate-800">Dark Store Logistics</h4>
                    <span className="text-[8px] font-bold text-slate-400 uppercase">Micro-Fulfillment Hubs</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[13px] font-black text-[#006363]">₹1.00 Cr</span>
                  <span className="block text-[7.5px] font-extrabold uppercase text-slate-400">20% Share</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-normal mt-2.5">
                Leasing local micro-warehouses, purchasing inventory buffer, managing stock handlers, and maintaining express delivery runner logistics.
              </p>
            </div>

            {/* Allocation 4: Developer Team & AWS */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-200 transition-all flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                    <FaLaptopCode size={13} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-black text-slate-800">Tech Team & Cloud</h4>
                    <span className="text-[8px] font-bold text-slate-400 uppercase">Engineers & AWS Servers</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[13px] font-black text-indigo-600">₹1.00 Cr</span>
                  <span className="block text-[7.5px] font-extrabold uppercase text-slate-400">20% Share</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-normal mt-2.5">
                Core development team salaries (₹75L) to scale predictive AI models, and AWS infrastructure/deployment hosting costs (₹25L) for real-time telemetry.
              </p>
            </div>

          </div>

          {/* Strategic Pitch / Justification Section */}
          <div className="bg-gradient-to-r from-teal-500/[0.04] to-transparent border-l-4 border-teal-500 rounded-r-xl p-3.5 flex items-start gap-3 mt-1 shadow-sm">
            <FaChartLine className="text-teal-600 mt-0.5 shrink-0" size={14} />
            <div>
              <p className="text-[11.5px] font-extrabold text-slate-800">
                Capital Justification & Unit Economics Leverage
              </p>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-relaxed">
                By onboarding 2,000 outlets in the first 6 months, we secure the store density needed for profitable brand campaigns. The shared representative model reduces brand representative costs by 60%, fueling high margins. Setting up localized Dark Stores cuts logistics transit to under 2 hours, boosting retention and proving a scalable model before multi-region replication.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ── Slide Footer ── */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2 border-t border-slate-100">
        <span>Capital Request & Cost Allocation Breakdown</span>
        <span className="text-[#e85c1c]">Nukaazo Presentation</span>
      </div>
    </div>
  );
}
