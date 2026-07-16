import React from 'react';
import NukaazoLogo from '../../lib/NukaazoLogo';
import {
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaMapMarkedAlt,
  FaDatabase,
  FaTachometerAlt
} from 'react-icons/fa';

/* ─── Data ────────────────────────────────────────────── */
const founders = [
  {
    initials: 'HS',
    name: 'Harsh Sukhija',
    role: 'Co-Founder & Director',
    edu: 'B.Tech · CSE · Jaypee Institute of Information Technology',
    icon: FaCode,
    accent: '#006363',
    points: [
      <span>Ex-<strong>Full-Stack Developer</strong> at B2B Sales Technology Startup</span>,
      <span>Built <strong>SFA workflows</strong>, responsive storefronts &amp; <strong>real-time transaction engines</strong></span>,
    ],
  },
  {
    initials: 'YK',
    name: 'Yadnyesh Khotre',
    role: 'Co-Founder & Director',
    edu: 'B.E. · AI & Machine Learning',
    icon: FaBrain,
    accent: '#006363',
    points: [
      <span>Ex-<strong>Associate Product Manager &amp; ML Engineer</strong> at B2B Sales Tech Startup</span>,
      <span>Ex-<strong>Research Assistant in Logistics</strong> at ICEM Pune</span>,
    ],
  },
];

const advisors = [
  {
    initials: 'RS',
    name: 'Dr. R. S.',
    role: 'Advisor',
    edu: 'Ph.D. · Computer Science',
    icon: FaMapMarkedAlt,
    accent: '#e85c1c',
    points: [
      <span>Holder of <strong>5+ US &amp; India Mapping patents</strong></span>,
      <span>Ex-Software Engineer at <strong>HERE Technologies</strong> (Core Map Services)</span>,
    ],
  },
  {
    initials: 'SC',
    name: 'S. C.',
    role: 'Advisor',
    edu: 'M.Tech · CS · Univ. of Hyderabad',
    icon: FaDatabase,
    accent: '#e85c1c',
    points: [
      <span><strong>8+ Years</strong> Lead Data Scientist at B2B Sales Tech Startup</span>,
      <span>Built route-to-market <strong>AI-SFA</strong> for 8 of 15 leading CPGs (ITC, Mars, P&amp;G)</span>,
    ],
  },
  {
    initials: 'PR',
    name: 'P. R.',
    role: 'Advisor',
    edu: 'B.Tech · CSE · MSIT',
    icon: FaTachometerAlt,
    accent: '#e85c1c',
    points: [
      <span>Ex-Software Engineer at <strong>B2B Sales Technology Startup</strong></span>,
      <span><strong>Batch computation expert</strong> — reduced processing latency by <strong>93%</strong></span>,
    ],
  },
];

/* ─── Column Header ────────────────────────────────────── */
function ColumnHeader({ title, subtitle, icon: Icon, accent }) {
  return (
    <div className="flex items-center gap-2.5 mb-4 select-none relative z-10">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center border"
        style={{
          color: accent,
          backgroundColor: `${accent}12`,
          borderColor: `${accent}25`
        }}
      >
        <Icon size={12} />
      </div>
      <div>
        <h3 className="text-[11px] font-black uppercase tracking-[0.12em] leading-none" style={{ color: accent }}>
          {title}
        </h3>
        <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{subtitle}</p>
      </div>
      <div className="flex-1 h-px bg-slate-200/50 ml-2" />
    </div>
  );
}

/* ─── Unified Team Card ────────────────────────────────── */
function TeamCard({ initials, name, role, edu, points, icon: Icon, accent }) {
  return (
    <div
      className="flex gap-4 bg-white/80 backdrop-blur-md rounded-xl p-4.5 border border-slate-200/50 hover:border-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden"
    >
      {/* Decorative top-right gradient arc pattern */}
      <div
        className="absolute top-0 right-0 w-28 h-28 pointer-events-none -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-115 rounded-bl-full z-0"
        style={{
          background: `radial-gradient(circle at top right, ${accent}16, transparent 70%)`
        }}
      />

      {/* Avatar block */}
      <div className="relative shrink-0 select-none z-10">
        <div
          className="w-13 h-13 rounded-full flex items-center justify-center text-white font-black text-[13px] tracking-wide shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${accent}, ${accent}dd)`
          }}
        >
          {initials}
        </div>
        {/* Floating Domain Superpower Badge */}
        <div className="absolute -bottom-1 -right-1 w-5.5 h-5.5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 transition-transform duration-300 group-hover:scale-108">
          <Icon size={10} style={{ color: accent }} />
        </div>
      </div>

      {/* Info block */}
      <div className="flex-1 min-w-0 flex flex-col gap-2.5 z-10">
        {/* Identity & Credentials */}
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <h4 className="text-[14.5px] font-extrabold text-slate-800 tracking-tight leading-none group-hover:text-slate-900 transition-colors">
              {name}
            </h4>
            <div className="flex items-center gap-1 mt-1.5 text-[9.5px] text-slate-400 font-bold uppercase tracking-wider leading-none">
              <FaGraduationCap className="text-slate-300 shrink-0" size={10.5} />
              <span className="truncate">{edu}</span>
            </div>
          </div>
          <span
            className="text-[7.5px] font-extrabold uppercase tracking-wider rounded-full px-2 py-0.5 leading-none border"
            style={{
              color: accent,
              backgroundColor: `${accent}0d`,
              borderColor: `${accent}1b`
            }}
          >
            {role}
          </span>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-100/80" />

        {/* Achievement Points */}
        <ul className="space-y-1.5 flex-1 justify-center flex flex-col">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[11px] text-slate-600 font-semibold leading-relaxed">
              <span
                className="mt-[6px] w-[5px] h-[5px] rounded-full shrink-0"
                style={{
                  background: accent,
                  boxShadow: `0 0 0 2px ${accent}22`
                }}
              />
              <span className="flex-1">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Slide ───────────────────────────────────────────── */
export default function Team() {
  return (
    <div className="w-full h-full relative bg-[#FCFCFA] select-none overflow-hidden flex flex-col">

      {/* Slide Top Section Divider Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#e85c1c] via-[#006363]/40 to-transparent z-10" />

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
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#006363_1px,transparent_1px),linear-gradient(to_bottom,#006363_1px,transparent_1px)] bg-[size:48px_48px] z-0" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_12px)] z-0" />

      {/* PPT Technical L-Shape Crop Marks */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/60 pointer-events-none z-10" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/60 pointer-events-none z-10" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/60 pointer-events-none z-10" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/60 pointer-events-none z-10" />

      {/* Watermark */}
      <div className="absolute bottom-8 right-10 opacity-[0.012] pointer-events-none z-0">
        <NukaazoLogo width={180} height={180} fill="#006363" />
      </div>

      {/* ── HEADER ── */}
      <header className="relative z-10 px-12 pt-9 pb-3 shrink-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-[#e85c1c]">
            05 / Team &amp; Leadership
          </span>
          <span className="w-[3px] h-[3px] rounded-full bg-slate-300" />
          <span className="text-[9.5px] text-slate-400 font-semibold uppercase tracking-[0.14em]">Who We Are</span>
        </div>
        <h2 className="text-[24px] font-extrabold text-slate-900 tracking-tight leading-tight font-title">
          Mentored By Industry Veterans &amp; Built by CPG Tech Experts
        </h2>
        <p className="text-slate-500 mt-1 text-[11px] font-medium max-w-2xl leading-relaxed">
          Led by founders and domain advisors with hands-on experience in B2B sales technology, AI systems, geo-routing, and backend architecture.
        </p>
      </header>

      {/* ── BODY ── */}
      <main className="relative z-10 flex-1 min-h-0 px-12 pb-5 flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-6 items-stretch">

          {/* Column 1: Founding Leadership */}
          <div className="col-span-5 flex flex-col justify-between">
            <ColumnHeader title="Founding Leadership" subtitle="Core Vision &amp; Execution" icon={FaUsers} accent="#006363" />
            <div className="flex-1 flex flex-col justify-center gap-5">
              {founders.map((f) => <TeamCard key={f.initials} {...f} />)}
            </div>
          </div>

          {/* Column 2: Advisory Board */}
          <div className="col-span-7 border-l border-slate-200/40 pl-6 flex flex-col justify-between">
            <ColumnHeader title="Advisory Board" subtitle="Strategic Domain Experts" icon={FaLightbulb} accent="#e85c1c" />
            <div className="flex-1 flex flex-col justify-center gap-4">
              {advisors.map((a) => <TeamCard key={a.initials} {...a} />)}
            </div>
          </div>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 px-12 py-2.5 border-t border-slate-100 flex justify-between items-center shrink-0">
        <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest">
          Founders &amp; Advisory Board Overview
        </span>
        <span className="text-[8.5px] font-bold uppercase tracking-widest text-[#e85c1c]">
          Nukaazo Presentation
        </span>
      </footer>

    </div>
  );
}
