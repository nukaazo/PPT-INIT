import React, { useState } from 'react';
import {
  FaSitemap,
  FaChartLine,
  FaFire,
  FaExchangeAlt,
  FaSearchLocation,
  FaLightbulb
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';

export default function DataIntelligence() {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      id: 0,
      title: "Untapped (Leaf Node) Market Opportunities",
      subtitle: "Gaps & Dark Store Discovery",
      desc: "Machine-driven identification of high-potential retail zones and dark store locations currently unserved by distributors.",
      icon: FaSearchLocation,
      color: "#006363",
      metric: "Void analysis"
    },
    {
      id: 1,
      title: "Retail & Product Visibility",
      subtitle: "Local Distribution Mapping",
      desc: "Granular distribution matrix identifying exactly which retailers carry which brands and SKUs across localities.",
      icon: FaSitemap,
      color: "#e85c1c",
      metric: "SKU mapping"
    },
    {
      id: 2,
      title: "Customer Buying Behavior",
      subtitle: "Retention & Cohort Analytics",
      desc: "Deep analysis into customer purchase cycles, ticket size growth, repeat frequencies, and long-term cohort value.",
      icon: FaChartLine,
      color: "#006363",
      metric: "Retention curves"
    },
    {
      id: 3,
      title: "Hyperlocal Demand Trends",
      subtitle: "Geographical Brand Affinity",
      desc: "Deep visibility into area-level brand affinities, category sales spikes, and demographic-specific preferences.",
      icon: FaFire,
      color: "#e85c1c",
      metric: "Heat mapping"
    },
    // {
    //   id: 4,
    //   title: "Inventory & Supply Movement",
    //   subtitle: "Real-Time Stock Flow Analytics",
    //   desc: "Real-time tracking of stock flow, demand patterns, and inventory performance.",
    //   icon: FaExchangeAlt,
    //   color: "#006363",
    //   metric: "Live flow"
    // }
  ];

  // SUB-DASHBOARD WIDGETS
  const InventoryDashboard = () => (
    <div className="w-full h-full flex flex-col justify-between p-4">
      <div className="grid grid-cols-3 gap-3 mb-2.5">
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Fulfillment Speed</span>
          <div className="text-[15px] font-extrabold text-[#006363] mt-0.5">18.4 Mins</div>
          <span className="text-[9px] text-teal-650 font-bold">Average Delivery time</span>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Stock availability</span>
          <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">99.4%</div>
          <span className="text-[9px] text-[#e85c1c] font-bold">Fulfillment Rate</span>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Daily Turnover</span>
          <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">2.4x</div>
          <span className="text-[9px] text-slate-500 font-bold">Ecosystem Velocity</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#006363]/[0.03] border border-[#006363]/15 rounded-xl p-4 flex-1 flex flex-col justify-between overflow-hidden relative shadow-[inset_0_1px_3px_rgba(0,99,99,0.02)] min-h-[120px]">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:16px_16px]"></div>

        <div className="flex justify-between items-center z-10">
          <span className="text-[10px] text-[#006363] font-extrabold uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Active Stock-Flow Simulation
          </span>
          <span className="text-[9px] text-slate-400 font-bold uppercase">Realtime Network</span>
        </div>

        <div className="relative h-14 my-auto flex items-center justify-between z-10 px-2">
          {/* Nodes */}
          <div className="flex flex-col items-center gap-1 text-center w-12">
            <div className="w-8 h-8 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center text-teal-600 text-[11px] font-extrabold shadow-sm">
              DIS
            </div>
            <span className="text-[9px] text-slate-600 font-extrabold uppercase tracking-tight">Distributor</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center w-12">
            <div className="w-8 h-8 rounded-full bg-white border-2 border-[#e85c1c] flex items-center justify-center text-[#e85c1c] text-[11px] font-extrabold shadow-sm">
              NKZ
            </div>
            <span className="text-[9px] text-slate-650 font-extrabold uppercase tracking-tight">Nukaazo Hub</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center w-12">
            <div className="w-8 h-8 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center text-teal-600 text-[11px] font-extrabold shadow-sm">
              RET
            </div>
            <span className="text-[9px] text-slate-650 font-extrabold uppercase tracking-tight">Retailer</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center w-12">
            <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-600 text-[11px] font-extrabold shadow-sm">
              CON
            </div>
            <span className="text-[9px] text-slate-650 font-extrabold uppercase tracking-tight">Consumer</span>
          </div>

          {/* Floating animated connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            <defs>
              <linearGradient id="flow-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e85c1c" />
                <stop offset="50%" stopColor="#006363" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path d="M 40,28 L 85,28" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 125,28 L 170,28" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 210,28 L 255,28" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />

            <path d="M 40,28 L 85,28" stroke="url(#flow-line-grad)" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" className="animate-flow-path" />
            <path d="M 125,28 L 170,28" stroke="url(#flow-line-grad)" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" className="animate-flow-path" />
            <path d="M 210,28 L 255,28" stroke="url(#flow-line-grad)" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" className="animate-flow-path" />
          </svg>
        </div>

        <div className="border-t border-slate-100 pt-1.5 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase">
          <span>Supply Route: Baner Central Corridor</span>
          <span>Refresh Frequency: 200ms</span>
        </div>
      </div>
    </div>
  );

  const VisibilityDashboard = () => {
    const gridData = [
      { product: 'FMCG Biscuits (SKU-A)', kothrud: 'in-stock', viman: 'in-stock', hinjewadi: 'low-stock', baner: 'in-stock' },
      { product: 'Local Spices (SKU-B)', kothrud: 'in-stock', viman: 'out', hinjewadi: 'in-stock', baner: 'in-stock' },
      { product: 'Organic Ghee (SKU-C)', kothrud: 'low-stock', viman: 'in-stock', hinjewadi: 'in-stock', baner: 'out' },
      { product: 'Premium Tea (SKU-D)', kothrud: 'in-stock', viman: 'in-stock', hinjewadi: 'in-stock', baner: 'in-stock' }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between p-4">
        <div className="grid grid-cols-3 gap-3 mb-2.5">
          <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Onboarded Stores</span>
            <div className="text-[15px] font-extrabold text-[#006363] mt-0.5">100+ Outlets</div>
            <span className="text-[9px] text-teal-605 font-bold text-teal-605">Connected Inventory</span>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Indexed SKUs</span>
            <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">1,200+ Items</div>
            <span className="text-[9px] text-[#e85c1c] font-bold">Catalog Tracked</span>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Stock Accuracy</span>
            <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">98.2%</div>
            <span className="text-[9px] text-slate-500 font-bold">Visibility Check</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-[#006363]/[0.03] border border-[#006363]/15 rounded-xl p-3 flex-1 flex flex-col justify-between overflow-hidden relative shadow-sm min-h-[120px]">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:16px_16px]"></div>

          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] text-[#006363] font-extrabold uppercase tracking-widest">
              Live Product-Locality Placement Matrix
            </span>
            <span className="text-[9px] text-slate-400 font-bold uppercase">Grid View</span>
          </div>

          <div className="flex-1 flex flex-col justify-around my-1 text-[10px]">
            {/* Header row */}
            <div className="grid grid-cols-5 gap-1 font-extrabold text-slate-400 uppercase pb-1 border-b border-slate-100 text-[9px] text-center">
              <span className="text-left pl-1">SKU Name</span>
              <span>Kothrud</span>
              <span>Viman Nagar</span>
              <span>Hinjewadi</span>
              <span>Baner</span>
            </div>

            {/* Data rows */}
            {gridData.map((row, index) => (
              <div key={index} className="grid grid-cols-5 gap-1 py-1.5 border-b border-slate-50 items-center text-center">
                <span className="text-left font-bold text-slate-700 pl-1 text-[9px] truncate">{row.product}</span>

                <span className="flex justify-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${row.kothrud === 'in-stock' ? 'bg-emerald-500' : row.kothrud === 'low-stock' ? 'bg-amber-400' : 'bg-rose-500'
                    } shadow-[0_0_3px_rgba(0,0,0,0.1)]`}></span>
                </span>

                <span className="flex justify-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${row.viman === 'in-stock' ? 'bg-emerald-500' : row.viman === 'low-stock' ? 'bg-amber-400' : 'bg-rose-500'
                    } shadow-[0_0_3px_rgba(0,0,0,0.1)]`}></span>
                </span>

                <span className="flex justify-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${row.hinjewadi === 'in-stock' ? 'bg-emerald-500' : row.hinjewadi === 'low-stock' ? 'bg-amber-400' : 'bg-rose-500'
                    } shadow-[0_0_3px_rgba(0,0,0,0.1)]`}></span>
                </span>

                <span className="flex justify-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${row.baner === 'in-stock' ? 'bg-emerald-500' : row.baner === 'low-stock' ? 'bg-amber-400' : 'bg-rose-500'
                    } shadow-[0_0_3px_rgba(0,0,0,0.1)]`}></span>
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center justify-end text-[8px] font-extrabold uppercase mt-1.5 border-t border-slate-100 pt-1.5 text-slate-400">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active Stock</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Low Stock</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Out of Stock</span>
          </div>
        </div>
      </div>
    );
  };

  const BuyingBehaviorDashboard = () => (
    <div className="w-full h-full flex flex-col justify-between p-4">
      <div className="grid grid-cols-3 gap-3 mb-2.5">
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Cohort Retention</span>
          <div className="text-[15px] font-extrabold text-[#006363] mt-0.5">68% Repeat</div>
          <span className="text-[9px] text-teal-600 font-bold">14-Day Cycle Retention</span>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Order Recurrence</span>
          <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">3.2 Days</div>
          <span className="text-[9px] text-[#e85c1c] font-bold">Average Order Interval</span>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Ticket Size Uplift</span>
          <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">+42%</div>
          <span className="text-[9px] text-slate-500 font-bold">Organic Basket Expansion</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#e85c1c]/[0.03] border border-[#e85c1c]/15 rounded-xl p-3.5 flex-1 flex flex-col justify-between overflow-hidden relative shadow-sm min-h-[120px]">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#e85c1c_1px,transparent_1px),linear-gradient(to_bottom,#e85c1c_1px,transparent_1px)] bg-[size:16px_16px]"></div>

        <div className="flex justify-between items-center z-10 mb-1">
          <span className="text-[10px] text-[#e85c1c] font-extrabold uppercase tracking-widest">
            Repeat Purchase Frequency Curve
          </span>
          <span className="text-[9px] text-slate-400 font-bold uppercase">Cohort Trend</span>
        </div>

        <div className="flex-1 relative mt-3 z-10 h-14">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="border-b border-slate-200 w-full h-[1px]"></div>
            <div className="border-b border-slate-200 w-full h-[1px]"></div>
            <div className="border-b border-slate-200 w-full h-[1px]"></div>
          </div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path
              d="M0,28 Q15,22 30,12 T60,8 T100,2"
              fill="none"
              stroke="#e85c1c"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-wave"
            />
            <path
              d="M0,28 Q15,22 30,12 T60,8 T100,2 L100,30 L0,30 Z"
              fill="url(#chart-orange-grad)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="chart-orange-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e85c1c" />
                <stop offset="100%" stopColor="#e85c1c" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="0" cy="28" r="1.2" fill="#006363" />
            <circle cx="30" cy="12" r="1.2" fill="#006363" />
            <circle cx="60" cy="8" r="1.2" fill="#006363" />
            <circle cx="100" cy="2" r="1.8" fill="#e85c1c" className="animate-pulse" />
          </svg>

          <div className="absolute bottom-[-10px] left-0 right-0 flex justify-between text-[8px] font-extrabold text-slate-450 uppercase text-slate-400">
            <span>Onboarding</span>
            <span>Week 2</span>
            <span>Week 4</span>
            <span>Week 8+ (Active Retained)</span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-1.5 mt-2 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase">
          <span>Target Group: Pune Launch Cohort</span>
          <span>Timeline: 90 Days Post-Acquisition</span>
        </div>
      </div>
    </div>
  );

  const DemandTrendsDashboard = () => {
    const localities = [
      { name: 'Baner (IT / Tech Hub)', category: 'Energy Drinks & Ready Snacks', brandA: 'Red Bull (42%)', brandB: 'Amul (28%)', val: 90 },
      { name: 'Kothrud (Family Resident)', category: 'Premium Ghee & Fine Spices', brandA: 'Chitale (62%)', brandB: 'Amul (18%)', val: 82 },
      { name: 'Viman Nagar (Students / PG)', category: 'Instant Noodles & Bakeries', brandA: 'Nestle (45%)', brandB: 'TATA (25%)', val: 88 }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between p-4">
        <div className="grid grid-cols-3 gap-3 mb-2.5">
          <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Indexed Brands</span>
            <div className="text-[15px] font-extrabold text-[#006363] mt-0.5">40+ Brands</div>
            <span className="text-[9px] text-teal-650 font-bold">Brand Affinity Mapping</span>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Prime Category</span>
            <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">Dairy & Snacks</div>
            <span className="text-[9px] text-[#e85c1c] font-bold">62% of Transactions</span>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Local Personalization</span>
            <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">92% Match</div>
            <span className="text-[9px] text-slate-500 font-bold">Recommendation Accuracy</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-[#006363]/[0.03] border border-[#006363]/15 rounded-xl p-3 flex-1 flex flex-col justify-between overflow-hidden relative shadow-sm min-h-[120px]">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:16px_16px]"></div>

          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] text-[#006363] font-extrabold uppercase tracking-widest">
              Locality brand preference share
            </span>
            <span className="text-[9px] text-slate-400 font-bold uppercase">Affinities Mapping</span>
          </div>

          <div className="flex-1 flex flex-col justify-around my-1 gap-6">
            {localities.map((loc, index) => (
              <div key={index} className="space-y-0.5">
                <div className="flex justify-between items-center text-[9px] font-extrabold text-slate-700 uppercase">
                  <span>{loc.name}</span>
                  <span className="text-slate-400">Peak: {loc.category}</span>
                </div>
                <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-[#006363] to-teal-500 flex items-center pl-2 text-[8px] text-white font-extrabold uppercase"
                    style={{ width: `${loc.val - 35}%` }}
                  >
                    {loc.brandA}
                  </div>
                  <div
                    className="h-full bg-[#e85c1c]/80 flex items-center pl-2 text-[8px] text-white font-extrabold uppercase"
                    style={{ width: `${loc.val - 50}%` }}
                  >
                    {loc.brandB}
                  </div>
                  <div className="flex-1 bg-slate-200"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end text-[8px] font-extrabold uppercase mt-1 border-t border-slate-100 pt-1 text-slate-400">
            <span>Data illustrates brand market share within major category by area</span>
          </div>
        </div>
      </div>
    );
  };

  const UntappedMarketsDashboard = () => (
    <div className="w-full h-full flex flex-col justify-between p-4">
      <div className="grid grid-cols-3 gap-3 mb-2.5">
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Gaps Identified</span>
          <div className="text-[15px] font-extrabold text-[#006363] mt-0.5">30%+ Outlets</div>
          <span className="text-[9px] text-teal-600 font-bold">Unserved Retail Voids</span>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Local Void Density</span>
          <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">High (4.8x)</div>
          <span className="text-[9px] text-[#e85c1c] font-bold">Purchase Volume Void</span>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Untapped(Leaf Node) Pipeline Value</span>
          <div className="text-[15px] font-extrabold text-slate-800 mt-0.5">₹5L+ /Mo</div>
          <span className="text-[9px] text-slate-505 font-bold text-slate-500">Gross Addressable Opportunity</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#006363]/[0.03] border border-[#006363]/15 rounded-xl p-3 flex-1 flex flex-col justify-between overflow-hidden relative shadow-sm min-h-[120px]">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle,#006363_1px,transparent_1px)] bg-[size:16px_16px]"></div>

        <div className="flex justify-between items-center z-10">
          <span className="text-[10px] text-[#006363] font-extrabold uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e85c1c] animate-pulse"></span>
            Geographical Market Gap Radar
          </span>
          <span className="text-[9px] text-[#e85c1c] font-extrabold uppercase bg-[#e85c1c]/15 px-1.5 py-0.5 rounded">Voids Found: 12</span>
        </div>

        <div className="relative w-24 h-24 mx-auto my-1 border border-slate-200 rounded-full flex items-center justify-center overflow-hidden bg-slate-50/60 shadow-[inset_0_1px_4px_rgba(0,0,0,0.02)]">
          <div className="absolute w-18 h-18 border border-slate-150 rounded-full"></div>
          <div className="absolute w-10 h-10 border border-slate-150 rounded-full"></div>
          <div className="absolute w-4 h-4 border border-slate-150 rounded-full"></div>

          <div className="absolute w-full h-[1px] bg-slate-200"></div>
          <div className="absolute h-full w-[1px] bg-slate-200"></div>

          {/* Voids coordinates */}
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-[#e85c1c] rounded-full shadow-[0_0_8px_#e85c1c] animate-pulse"></div>
          <div className="absolute top-[60%] left-[65%] w-1.5 h-1.5 bg-[#e85c1c] rounded-full shadow-[0_0_6px_#e85c1c] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-[40%] left-[75%] w-2 h-2 bg-[#e85c1c] rounded-full shadow-[0_0_8px_#e85c1c] animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-[75%] left-[25%] w-1.5 h-1.5 bg-[#e85c1c] rounded-full shadow-[0_0_6px_#e85c1c] animate-pulse" style={{ animationDelay: '0.6s' }}></div>

          {/* Active Retail Outlets (Teal) */}
          <div className="absolute top-[35%] left-[60%] w-1.5 h-1.5 bg-[#006363] rounded-full opacity-65"></div>
          <div className="absolute top-[48%] left-[20%] w-1.5 h-1.5 bg-[#006363] rounded-full opacity-65"></div>

          {/* Radar rotating sweep line */}
          <div className="absolute w-full h-full origin-center animate-spin-slow" style={{ animationDuration: '4.5s' }}>
            <div className="w-[50%] h-[50%] absolute top-0 left-[50%] origin-bottom-left bg-gradient-to-tr from-transparent to-[#e85c1c]/12 border-r border-[#e85c1c]/25 rotate-45 rounded-tr-full"></div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-1.5 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase">
          <span>Scanning Sector: Baner / Sus Road Voids</span>
          <span>Resolution Grid: 10m spatial index</span>
        </div>
      </div>
    </div>
  );

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
        @keyframes flow-horizontal {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .animate-flow-path {
          stroke-dasharray: 6 6;
          animation: flow-horizontal 2.5s linear infinite;
        }
        @keyframes wave-pulse {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-wave {
          stroke-dasharray: 120 120;
          animation: wave-pulse 3.5s linear infinite;
        }
      `}</style>

      {/* ── Slide Background Polygons ── */}
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
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0"></div>
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0"></div>

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
          <span className="text-[13px] font-extrabold tracking-widest text-[#006363] uppercase">
            08 / DATA & INTELLIGENCE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span className="text-[12px] text-slate-400 font-bold uppercase tracking-wider">
            Value Multiplier
          </span>
        </div>
        <h2 className="text-[26px] md:text-[32px] font-extrabold font-title text-slate-900 tracking-tight leading-tight">
          Data Intelligence & Insights — What Nukaazo Unlocks
        </h2>
      </div>

      {/* ── Main Layout: Asymmetric Isometric Dashboard ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-11">

        {/* Left Column (5 cols) - Interactive 3D Isometric Stack */}
        <div className="lg:col-span-5 flex flex-col justify-center relative select-none">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-4 ml-6">
            Click layers to select section
          </span>

          <div className="relative w-full h-[260px] flex items-center justify-center">
            {/* The 3D container */}
            <div className="relative w-[280px] h-[160px] transform-gpu transition-all duration-700 mt-[-20px]"
              style={{
                transform: 'rotateX(55deg) rotateY(0deg) rotateZ(-40deg)',
                transformStyle: 'preserve-3d',
              }}>
              {items.map((item, idx) => {
                const isActive = activeTab === item.id;
                const zOffset = item.id * 32;
                const yOffset = -item.id * 12;
                // Subtle lift on active, hover gives dynamic feel
                const hoverTranslation = isActive ? 'translateZ(18px) translateY(-6px)' : 'hover:translateZ(8px) hover:translateY(-2px)';

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`absolute inset-0 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between p-4 ${isActive
                      ? 'bg-white border-slate-350'
                      : 'bg-white/70 backdrop-blur-[1.5px] border-slate-200/55 hover:bg-white/90 shadow-sm'
                      }`}
                    style={{
                      transform: `translateZ(${zOffset}px) translateY(${yOffset}px) ${hoverTranslation}`,
                      transformStyle: 'preserve-3d',
                      zIndex: item.id * 10,
                      boxShadow: isActive
                        ? `0 15px 35px -8px ${item.color === '#006363' ? 'rgba(0,99,99,0.12)' : 'rgba(232,92,28,0.12)'}, 0 0 0 1.5px ${item.color}`
                        : '0 4px 12px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7.5 h-7.5 rounded-lg flex items-center justify-center text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          <item.icon size={13} />
                        </div>
                        <div>
                          <h4 className="text-[13px] font-extrabold text-slate-800 uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: item.color + '15',
                          color: item.color,
                        }}
                      >
                        {item.metric}
                      </span>
                    </div>

                    <div
                      className={`h-0.5 w-full rounded-full mt-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-20'
                        }`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick list fallback buttons */}
          <div className="flex flex-col gap-1.5 mt-3 px-6 z-10">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-3 py-1 rounded-lg border text-left transition-all cursor-pointer ${activeTab === item.id
                  ? 'border-[#006363]/30 bg-[#006363]/5 text-[#006363] font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeTab === item.id ? 'bg-[#e85c1c]' : 'bg-slate-300'}`}></span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column (7 cols) - Dynamic Visualization Dashboard */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-slate-200/60 rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative overflow-hidden select-none">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[linear-gradient(to_right,transparent,#006363/3)] opacity-10 pointer-events-none"></div>

          {/* Title section */}
          <div className="relative z-10">
            <span className="text-[11px] font-extrabold text-[#e85c1c] uppercase tracking-widest block mb-0.5">
              Active Stream: {items[activeTab].subtitle}
            </span>
            <h3 className="text-xl font-extrabold text-slate-800 tracking-tight leading-tight mb-1.5">
              {items[activeTab].title}
            </h3>
            <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-xl">
              {items[activeTab].desc}
            </p>
          </div>

          {/* Dynamic dashboard widget render area */}
          <div className="flex-1 bg-slate-50/50 rounded-2xl border border-slate-100 my-4 flex items-center justify-center relative overflow-hidden">
            {activeTab === 0 && <UntappedMarketsDashboard />}
            {activeTab === 1 && <VisibilityDashboard />}
            {activeTab === 2 && <BuyingBehaviorDashboard />}
            {activeTab === 3 && <DemandTrendsDashboard />}
            {/* {activeTab === 4 && <InventoryDashboard />} */}
          </div>

          {/* Bottom plinth */}
          <div className="bg-[#006363]/5 border border-[#006363]/10 rounded-2xl p-3 flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 rounded-xl bg-[#006363] text-white flex items-center justify-center flex-shrink-0">
              <FaLightbulb size={14} className="animate-pulse" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-extrabold text-[#006363] uppercase tracking-wider block">Insights Unlock</span>
              <p className="text-[11px] font-bold text-slate-600 leading-normal">
                {activeTab === 0 && "Nukaazo builds a granular record of product velocities to enable hyper-efficient B2B stock predictions."}
                {activeTab === 1 && "This mapping ensures brand owners can monitor retail distribution channels live, reducing distribution leakages."}
                {activeTab === 2 && "Understand cohorts to launch hyper-targeted product promotions and establish solid customer loyalty."}
                {activeTab === 3 && "Allows brands to launch customized products per neighborhood, maximizing local market penetration."}
                {activeTab === 4 && "Provides distributor networks with warm leads to open new stores, predicting demand before capital is spent."}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Slide Footer Details ── */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-2.5 border-t border-slate-100 mt-4 select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <span>AI-SFA &amp; Local Commerce Telemetry</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-[#006363]">Pune Analytics Node</span>
        </div>
        <span className="text-[#006363]">Nukaazo Presentation</span>
      </div>

    </div>
  );
}
