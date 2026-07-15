import React, { useState } from 'react';
import NukaazoLogo from '../../lib/NukaazoLogo';
import { 
  FaUsers, 
  FaListUl, 
  FaCompass, 
  FaShoppingCart, 
  FaMotorcycle, 
  FaChevronRight, 
  FaBolt, 
  FaGlobe, 
  FaNetworkWired
} from 'react-icons/fa';

export default function HowNukaazoWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: '01',
      title: 'Onboarding',
      subtitle: 'On-Ground Supply Creation',
      desc: 'Nukaazo’s student sales reps visit local businesses across categories and onboard them directly onto the platform.',
      icon: FaUsers,
      color: '#e85c1c',
      badge: 'Field Force'
    },
    {
      number: '02',
      title: 'Digitization',
      subtitle: 'Inventory Mapping',
      desc: 'Available products, pricing, and stock are mapped and digitized, making each business fully visible online.',
      icon: FaListUl,
      color: '#006363',
      badge: 'Catalog Sync'
    },
    {
      number: '03',
      title: 'Visibility',
      subtitle: 'Location-Based Indexing',
      desc: 'Stores are indexed based on their real-time location, ensuring accurate discovery for nearby consumers.',
      icon: FaCompass,
      color: '#e85c1c',
      badge: 'Hyperlocal Map'
    },
    {
      number: '04',
      title: 'Discovery',
      subtitle: 'Consumer Ordering',
      desc: 'Users open Nukaazo, explore nearby businesses, search, compare, and place orders seamlessly.',
      icon: FaShoppingCart,
      color: '#006363',
      badge: 'E-commerce App'
    },
    {
      number: '05',
      title: 'Delivery',
      subtitle: 'Fulfillment within 15-30m',
      desc: 'Orders are fulfilled from the nearest business and delivered rapidly by nearby hyperlocal delivery partners.',
      icon: FaMotorcycle,
      color: '#e85c1c',
      badge: 'Fast Dispatch'
    }
  ];

  return (
    <div className="w-full h-full relative grid grid-cols-1 bg-[#FCFCFA] p-8 md:p-14 select-none overflow-hidden">
      <style>{`
        @keyframes flow-horizontal {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .animate-flow-path {
          stroke-dasharray: 6 6;
          animation: flow-horizontal 2s linear infinite;
        }
        .step-glow-orange {
          filter: drop-shadow(0 0 10px rgba(232, 92, 28, 0.45));
        }
        .step-glow-teal {
          filter: drop-shadow(0 0 10px rgba(0, 99, 99, 0.45));
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

      {/* ── Main Layout Content ── */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        
        {/* Slide Header */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-[11px] font-extrabold tracking-widest text-[#006363] uppercase">
              04 / OPERATIONS FLOW
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Hyperlocal Pipeline
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-title text-slate-900 tracking-tight leading-tight">
            How Nukaazo Works — Step-by-Step Ecosystem Flow
          </h2>
        </div>

        {/* ── Interactive Process Pipeline ── */}
        <div className="relative flex-1 max-w-6xl mx-auto w-full flex flex-col justify-center items-center py-4 my-auto">
          
          {/* Animated Connecting Pathway Line Behind Nodes (Desktop only) */}
          <div className="absolute top-[38%] left-10 right-10 h-1 hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-12 -translate-y-4" viewBox="0 0 1000 40" fill="none">
              <path 
                d="M 50,20 Q 250,35 450,20 T 950,20" 
                stroke="#e2e8f0" 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none" 
              />
              <path 
                d="M 50,20 Q 250,35 450,20 T 950,20" 
                stroke="url(#pipeline-gradient)" 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none"
                className="animate-flow-path"
              />
              <defs>
                <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e85c1c" />
                  <stop offset="35%" stopColor="#006363" />
                  <stop offset="65%" stopColor="#e85c1c" />
                  <stop offset="100%" stopColor="#006363" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 5-Step Columns Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isHovered = activeStep === idx;
              const isOrange = step.color === '#e85c1c';

              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`bg-white border rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative cursor-pointer group ${
                    isHovered 
                      ? isOrange 
                        ? 'border-[#e85c1c]/50 shadow-xl shadow-[#e85c1c]/5 -translate-y-2' 
                        : 'border-[#006363]/50 shadow-xl shadow-[#006363]/5 -translate-y-2'
                      : 'border-slate-200/50 shadow-sm hover:border-slate-300'
                  }`}
                >
                  {/* Card Header & Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-slate-200 transition-colors">
                      {step.badge}
                    </span>
                    <span 
                      className="text-lg font-black tracking-tight"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Medallion */}
                  <div className="flex justify-center my-3 relative">
                    {/* Ring Glow on Hover */}
                    <div className={`absolute w-12 h-12 rounded-full transition-opacity duration-300 opacity-0 ${
                      isHovered ? 'opacity-100 scale-125' : ''
                    }`}
                      style={{ backgroundColor: `${step.color}15` }}
                    ></div>

                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered 
                          ? isOrange 
                            ? 'bg-[#e85c1c] text-white step-glow-orange scale-110' 
                            : 'bg-[#006363] text-white step-glow-teal scale-110'
                          : 'bg-slate-50 text-slate-600 border border-slate-200/60'
                      }`}
                    >
                      <StepIcon size={20} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="text-center mt-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-[13px] tracking-tight group-hover:text-slate-900 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-3 font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connected Flow Line Summary pill in Center */}
          <div className="mt-8 bg-white border border-slate-200/50 rounded-full px-5 py-2.5 shadow-sm inline-flex items-center gap-2 max-w-full overflow-x-auto no-scrollbar relative z-10">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mr-2">Flow Pathway:</span>
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span 
                  className={`text-[10px] font-extrabold tracking-wider transition-colors duration-200 ${
                    activeStep === idx 
                      ? 'text-slate-900 font-black' 
                      : 'text-slate-600'
                  }`}
                  style={{ color: activeStep === idx ? step.color : undefined }}
                >
                  {step.title.split(' ')[0]}
                </span>
                {idx < steps.length - 1 && (
                  <FaChevronRight size={8} className="text-slate-300 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* ── Conclusion Statement & Insight ── */}
        <div className="bg-gradient-to-br from-[#e85c1c]/5 to-[#006363]/5 border-t-[3px] border-[#e85c1c] p-4 rounded-r-xl max-w-4xl mx-auto w-full text-center mt-2 relative z-10">
          <p className="text-slate-700 text-xs md:text-sm font-bold leading-relaxed">
            Key Insight:{' '}
            <span className="text-slate-800 font-extrabold">
              Nukaazo transforms local supply into an on-demand digital network
            </span>{' '}
            — powered by real-world onboarding and hyperlocal delivery.
          </p>
        </div>

      </div>
    </div>
  );
}
