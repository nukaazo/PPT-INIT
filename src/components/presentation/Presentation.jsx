import React, { useState, useEffect, useRef } from 'react';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaExpand, 
  FaCompress, 
  FaTimes, 
  FaListUl, 
  FaKeyboard,
  FaHome
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';

const slideTitles = {
  ProblemStatementConsumer: 'Consumer Friction',
  ProblemStatementRetailer: 'Retailer Invisibility',
  SolutionNukaazo: 'Introducing Nukaazo',
  HowNukaazoWorks: 'How Nukaazo Works',
  MarketValidation: 'Our Market Validation',
  GrowthSignals: 'Growth Signals',
  DataIntelligence: 'Data Intelligence & Insights',
  NukaazoProxy: 'Strategic Brand Growth Assets',
  GrowthRoadmap: 'Growth Roadmap & Milestones',
  FinancialMilestones: 'Projections & Growth Milestones',
  InvestmentAsk: 'Funding & Capital Ask'
};

export default function Presentation({ slides = [], onExit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOutline, setShowOutline] = useState(false);
  const [showShortcutTip, setShowShortcutTip] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (showOutline) {
          setShowOutline(false);
        } else {
          onExit();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, showOutline]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const ActiveSlideComponent = slides[currentIndex];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col justify-between bg-[#FCFCFA] relative overflow-hidden select-none"
    >
      
      {/* ── Background Grid Pattern ── */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#006363_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>

      {/* ── Top Indicator Progress Bar ── */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-slate-100/50 z-35">
        <div 
          className="h-full bg-gradient-to-r from-[#e85c1c] to-[#006363] transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* ── Slide Frame (Borderless, Shadowless, Full Size Aspect) ── */}
      <main className="relative z-10 flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-w-7xl aspect-[16/10] bg-[#FCFCFA] relative flex flex-col justify-between">
          <ActiveSlideComponent />
        </div>
      </main>


      {/* ── Floating Control Deck (Classy, Flat, No Shadow) ── */}
      <div className="absolute bottom-6 right-8 z-30 flex items-center gap-2 bg-white/90 border border-slate-200/60 rounded-full px-4 py-2 select-none">
        
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`p-1.5 rounded-full transition-colors cursor-pointer ${
            currentIndex === 0 
              ? 'text-slate-300 cursor-not-allowed' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
          title="Previous Slide"
        >
          <FaArrowLeft size={12} />
        </button>

        {/* Slide Counter */}
        <span className="text-[11px] font-bold text-slate-500 tracking-wider px-1">
          {currentIndex + 1} / {slides.length}
        </span>

        {/* Next / Finish Button */}
        <button
          onClick={currentIndex === slides.length - 1 ? onExit : nextSlide}
          className="p-1.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          title={currentIndex === slides.length - 1 ? "Finish Presentation" : "Next Slide"}
        >
          <FaArrowRight size={12} style={{ color: currentIndex === slides.length - 1 ? 'var(--color-brand-secondary)' : 'inherit' }} />
        </button>

        {/* Separator */}
        <span className="w-[1px] h-3 bg-slate-200 mx-1"></span>

        {/* Outline Menu */}
        <button 
          onClick={() => setShowOutline(!showOutline)}
          className="p-1.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          title="Slide Outline"
        >
          <FaListUl size={12} />
        </button>

        {/* Shortcuts */}
        <button 
          onClick={() => setShowShortcutTip(!showShortcutTip)}
          className="p-1.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          title="Shortcuts"
        >
          <FaKeyboard size={12} />
        </button>

        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <FaCompress size={12} /> : <FaExpand size={12} />}
        </button>

        {/* Separator */}
        <span className="w-[1px] h-3 bg-slate-200 mx-1"></span>

        {/* Exit Button */}
        <button
          onClick={onExit}
          className="p-1.5 rounded-full text-[#e85c1c] hover:bg-red-50 transition-colors cursor-pointer font-bold"
          title="Exit to Welcome Screen"
        >
          <FaHome size={12} />
        </button>

      </div>

      {/* ── Slide Outline Drawer Overlay ── */}
      {showOutline && (
        <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm z-40 flex justify-end transition-opacity duration-300">
          <div className="w-[300px] h-full bg-white shadow-2xl flex flex-col justify-between p-6 animate-slide-in">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-title font-bold text-slate-800 text-lg">Outline</h3>
                <button 
                  onClick={() => setShowOutline(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    onExit();
                    setShowOutline(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-[#e85c1c]/30 hover:bg-[#e85c1c]/5 text-left text-xs font-bold text-slate-600 transition-all cursor-pointer"
                >
                  <FaHome className="text-[#e85c1c]" />
                  <span>0. Splash Landing Screen</span>
                </button>

                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setShowOutline(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      currentIndex === index 
                        ? 'border-[#e85c1c] bg-[#e85c1c]/5 text-[#e85c1c] font-bold' 
                        : 'border-slate-100 hover:border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>
                      {index + 1}. {slideTitles[slides[index].name] || slides[index].name || 'Slide'}
                    </span>
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                      currentIndex === index ? 'bg-[#e85c1c]/15' : 'bg-slate-100 text-slate-500'
                    }`}>
                      Active
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Nukaazo presentation
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Keyboard Shortcuts Tip Modal ── */}
      {showShortcutTip && (
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-slate-100 shadow-sm relative">
            <button 
              onClick={() => setShowShortcutTip(false)}
              className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              <FaTimes />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <FaKeyboard className="text-[#e85c1c]" />
              <h3 className="font-title font-bold text-slate-800 text-base">Keyboard Shortcuts</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Next Slide</span>
                <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded font-semibold text-slate-700">Right Arrow / Space</kbd>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Previous Slide</span>
                <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded font-semibold text-slate-700">Left Arrow</kbd>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Exit Presentation</span>
                <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded font-semibold text-slate-700">Escape</kbd>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
