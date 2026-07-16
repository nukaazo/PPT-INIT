import React from 'react';
import {
  FaStore,
  FaRupeeSign,
  FaShoppingCart,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaHandshake,
  FaMobileAlt
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function FinancialMilestones() {
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
      <div className="absolute bottom-[10%] left-[10%] opacity-[0.012] pointer-events-none z-0">
        <NukaazoLogo width={220} height={220} fill="var(--color-brand-primary)" />
      </div>

      {/* PPT Technical L-Shape Crop Marks */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10"></div>

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#006363] via-[#e85c1c]/40 to-transparent z-10"></div>

      {/* ── Slide Header ── */}
      <div className="relative z-10 flex justify-between items-start">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-extrabold tracking-widest text-[#006363] uppercase">
              11 / ROADMAP METRICS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Financial Projections
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
            Financial Projections & Growth Milestones
          </h2>
          <p className="text-slate-500 mt-1 max-w-3xl text-[13px] font-medium">
            Detailed 12-month projections highlighting transaction volume scaling, monthly GMV run rates, and strategic B2B and B2C dynamics.
          </p>
        </div>
      </div>

      {/* ── Main Dashboard Layout ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch py-4 overflow-hidden">

        {/* Left Column: 4 Cards in 2x2 Grid (8 cols / ~66% width) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Card 1: Outlet Expansion */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-[#e85c1c]/30 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#e85c1c]/10 text-[#e85c1c] flex items-center justify-center shrink-0">
                  <FaStore size={15} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800 tracking-tight">Outlet Expansion</h4>
                  <p className="text-[9.5px] text-slate-400 font-bold uppercase">Store Count & Geo Scale</p>
                </div>
              </div>
              <span className="text-[9.5px] font-black text-slate-405 bg-slate-100 rounded px-2 py-0.5 uppercase">Outlets</span>
            </div>

            <div className="my-4 grid grid-cols-3 gap-2 text-center bg-slate-50 rounded-xl p-3 border border-slate-100/50">
              <div>
                <span className="block text-[13.5px] font-black text-slate-700">100+</span>
                <span className="block text-[8.5px] font-extrabold text-slate-450 uppercase mt-0.5">Current</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Stores</span>
              </div>
              <div className="border-x border-slate-200/60">
                <span className="block text-[13.5px] font-black text-[#e85c1c]">2,000+</span>
                <span className="block text-[8.5px] font-extrabold text-[#e85c1c] uppercase mt-0.5">6 Months</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Target</span>
              </div>
              <div>
                <span className="block text-[13.5px] font-black text-[#006363]">5,000+</span>
                <span className="block text-[8.5px] font-extrabold text-[#006363] uppercase mt-0.5">12 Months</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Target</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10.5px] text-slate-500 font-medium">
              <FaArrowRight className="text-[#e85c1c] shrink-0" size={10} />
              <span>Moving from <strong>Pan-city validation</strong> to <strong>Multi-city scaling</strong>.</span>
            </div>
          </div>

          {/* Card 2: Sales Value & Revenue */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-[#006363]/30 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#006363]/10 text-[#006363] flex items-center justify-center shrink-0">
                  <FaRupeeSign size={15} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800 tracking-tight">Sales & Revenue</h4>
                  <p className="text-[9.5px] text-slate-400 font-bold uppercase">Monthly GMV Sums</p>
                </div>
              </div>
              <span className="text-[9.5px] font-black text-[#006363] bg-[#006363]/10 rounded px-2 py-0.5 uppercase">Summed</span>
            </div>

            <div className="my-4 grid grid-cols-3 gap-1 text-center bg-slate-50 rounded-xl p-3 border border-slate-100/50">
              <div>
                <span className="block text-[13.5px] font-black text-slate-700">₹90K/mo</span>
                <span className="block text-[8.5px] font-extrabold text-slate-450 uppercase mt-0.5">Current</span>
                <span className="block text-[7.5px] font-bold text-slate-400 mt-0.5">Annual Run: ₹10.8L</span>
              </div>
              <div className="border-x border-slate-200/60">
                <span className="block text-[13.5px] font-black text-[#e85c1c]">₹7.5L/mo</span>
                <span className="block text-[8.5px] font-extrabold text-[#e85c1c] uppercase mt-0.5">6 Months</span>
                <span className="block text-[7.5px] font-bold text-[#e85c1c]/70 mt-0.5">Annual Run: ₹90L</span>
              </div>
              <div>
                <span className="block text-[13.5px] font-black text-[#006363]">₹30L+/mo</span>
                <span className="block text-[8.5px] font-extrabold text-[#006363] uppercase mt-0.5">12 Months</span>
                <span className="block text-[7.5px] font-bold text-[#006363]/70 mt-0.5">Annual Run: ₹3.6Cr+</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10.5px] text-slate-500 font-medium">
              <FaArrowRight className="text-[#006363] shrink-0" size={10} />
              <span>Growth driven by higher outlet density & repeat orders.</span>
            </div>
          </div>

          {/* Card 3: Order Volume Scaling */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                  <FaShoppingCart size={15} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800 tracking-tight">Order Volumes</h4>
                  <p className="text-[9.5px] text-slate-400 font-bold uppercase">Daily Transactions</p>
                </div>
              </div>
              <span className="text-[9.5px] font-black text-indigo-600 bg-indigo-500/10 rounded px-2 py-0.5 uppercase">Orders</span>
            </div>

            <div className="my-4 grid grid-cols-3 gap-2 text-center bg-slate-50 rounded-xl p-3 border border-slate-100/50">
              <div>
                <span className="block text-[13.5px] font-black text-slate-700">15+</span>
                <span className="block text-[8.5px] font-extrabold text-slate-450 uppercase mt-0.5">Current</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Orders/day</span>
              </div>
              <div className="border-x border-slate-200/60">
                <span className="block text-[13.5px] font-black text-[#e85c1c]">150+</span>
                <span className="block text-[8.5px] font-extrabold text-[#e85c1c] uppercase mt-0.5">6 Months</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Orders/day</span>
              </div>
              <div>
                <span className="block text-[13.5px] font-black text-[#006363]">500+</span>
                <span className="block text-[8.5px] font-extrabold text-[#006363] uppercase mt-0.5">12 Months</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Orders/day</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10.5px] text-slate-500 font-medium">
              <FaArrowRight className="text-indigo-600 shrink-0" size={10} />
              <span>Scaling via active retailer push and brand campaigns.</span>
            </div>
          </div>

          {/* Card 4: Retailer Network */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-sky-500/30 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
                  <FaUsers size={16} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800 tracking-tight">Consumer Network</h4>
                  <p className="text-[9.5px] text-slate-400 font-bold uppercase">Active Platform Users</p>
                </div>
              </div>
              <span className="text-[9.5px] font-black text-sky-600 bg-sky-500/10 rounded px-2 py-0.5 uppercase">Users</span>
            </div>

            <div className="my-4 grid grid-cols-3 gap-2 text-center bg-slate-50 rounded-xl p-3 border border-slate-100/50">
              <div>
                <span className="block text-[13.5px] font-black text-slate-700">200+</span>
                <span className="block text-[8.5px] font-extrabold text-slate-450 uppercase mt-0.5">Current</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Shopkeepers</span>
              </div>
              <div className="border-x border-slate-200/60">
                <span className="block text-[13.5px] font-black text-[#e85c1c]">3,000+</span>
                <span className="block text-[8.5px] font-extrabold text-[#e85c1c] uppercase mt-0.5">6 Months</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Shopkeepers</span>
              </div>
              <div>
                <span className="block text-[13.5px] font-black text-[#006363]">6,000+</span>
                <span className="block text-[8.5px] font-extrabold text-[#006363] uppercase mt-0.5">12 Months</span>
                <span className="block text-[8px] font-bold text-slate-400 mt-0.5">Shopkeepers</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10.5px] text-slate-500 font-medium">
              <FaArrowRight className="text-sky-600 shrink-0" size={10} />
              <span>Focusing on platform retention and daily active usage.</span>
            </div>
          </div>

        </div>

        {/* Right Column: B2B vs. B2C Growth Vectors (4 cols / ~33% width) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">

          {/* B2B Growth Vectors (Brands & Retailers) */}
          <div className="flex-1 bg-gradient-to-b from-[#006363]/[0.02] to-white border border-[#006363]/25 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-[#006363]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[#006363]/10 text-[#006363] flex items-center justify-center shrink-0">
                  <FaHandshake size={13} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800">B2B Core Strategy</h4>
                  <span className="text-[8px] font-extrabold uppercase text-[#006363] tracking-wider">Retailer & Brand Value</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-4">
                Empowering neighborhood merchants to optimize inventory and book proxy orders:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-[10.5px] font-semibold text-slate-600">
                  <FaCheckCircle className="text-[#006363] mt-0.5 shrink-0" size={11} />
                  <span>Interactive sales dashboard with predictive suggestions.</span>
                </li>
                <li className="flex items-start gap-2 text-[10.5px] font-semibold text-slate-600">
                  <FaCheckCircle className="text-[#006363] mt-0.5 shrink-0" size={11} />
                  <span>Automatic restock alerts via smart inventory signals.</span>
                </li>
                <li className="flex items-start gap-2 text-[10.5px] font-semibold text-slate-600">
                  <FaCheckCircle className="text-[#006363] mt-0.5 shrink-0" size={11} />
                  <span>60%+ rep cost savings through Nukaazo proxy sharing.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-slate-400">Target Segment</span>
              <span className="text-[9.5px] font-extrabold uppercase text-[#006363] bg-[#006363]/10 px-2 py-0.5 rounded">B2B Platform</span>
            </div>
          </div>

          {/* B2C Growth Vectors (Consumers & Campaigns) */}
          <div className="flex-1 bg-gradient-to-b from-[#e85c1c]/[0.02] to-white border border-[#e85c1c]/25 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-[#e85c1c]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[#e85c1c]/10 text-[#e85c1c] flex items-center justify-center shrink-0">
                  <FaMobileAlt size={13} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800">B2C Core Strategy</h4>
                  <span className="text-[8px] font-extrabold uppercase text-[#e85c1c] tracking-wider">Hyperlocal Demand Push</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-4">
                Catalyzing localized consumer foot traffic and order velocity:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-[10.5px] font-semibold text-slate-600">
                  <FaCheckCircle className="text-[#e85c1c] mt-0.5 shrink-0" size={11} />
                  <span>Automated hyperlocal promotions & store coupons.</span>
                </li>
                <li className="flex items-start gap-2 text-[10.5px] font-semibold text-slate-600">
                  <FaCheckCircle className="text-[#e85c1c] mt-0.5 shrink-0" size={11} />
                  <span>App notifications driving repeat orders in the community.</span>
                </li>
                <li className="flex items-start gap-2 text-[10.5px] font-semibold text-slate-600">
                  <FaCheckCircle className="text-[#e85c1c] mt-0.5 shrink-0" size={11} />
                  <span>On-ground trial-packs deployed via proxy representatives.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-slate-400">Target Segment</span>
              <span className="text-[9.5px] font-extrabold uppercase text-[#e85c1c] bg-[#e85c1c]/10 px-2 py-0.5 rounded">B2C App Channel</span>
            </div>
          </div>

        </div>

      </div>

      {/* ── Slide Footer ── */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2 border-t border-slate-100">
        <span>B2B & B2C Revenue Milestones</span>
        <span className="text-[#006363]">Nukaazo Presentation</span>
      </div>
    </div>
  );
}
