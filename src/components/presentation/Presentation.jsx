import React, { useState, useEffect, useRef } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaCompress,
  FaTimes,
  FaListUl,
  FaKeyboard,
  FaHome,
  FaCog,
  FaFilePdf,
  FaFilePowerpoint
} from 'react-icons/fa';
import NukaazoLogo from '../../lib/NukaazoLogo';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import pptxgen from 'pptxgenjs';

const slideTitles = {
  HomeSlide: 'Welcome to Nukaazo',
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
  Team: 'Who We Are',
  InvestmentAsk: 'Funding & Capital Ask',
  SocialLinks: 'Connect With Us'
};

export default function Presentation({ slides = [], onExit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOutline, setShowOutline] = useState(false);
  const [showShortcutTip, setShowShortcutTip] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportFormat, setExportFormat] = useState('');
  const [activeCaptureIndex, setActiveCaptureIndex] = useState(-1);
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
  const exportSlides = async (format) => {
    setIsExporting(true);
    setExportProgress(0);
    setExportFormat(format);

    let pdf = null;
    let ppt = null;

    if (format === 'PDF') {
      pdf = new jsPDF('l', 'px', [1280, 800]);
    } else if (format === 'PPT') {
      ppt = new pptxgen();
      ppt.defineLayout({ name: 'LAYOUT_16x10', width: 10, height: 6.25 });
      ppt.layout = 'LAYOUT_16x10';
    }

    for (let i = 0; i < slides.length; i++) {
      setActiveCaptureIndex(i);

      // Wait for rendering & assets to fully initialize
      await new Promise((resolve) => setTimeout(resolve, 600));

      const element = document.getElementById('capture-slide');
      if (element) {
        try {
          const canvas = await html2canvas(element, {
            scale: 1.5, // Retina print clarity but efficient size
            useCORS: true,
            backgroundColor: '#FCFCFA',
            logging: false,
            width: 1280,
            height: 800
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.95);

          if (format === 'PDF') {
            if (i > 0) {
              pdf.addPage([1280, 800], 'l');
            }
            pdf.addImage(imgData, 'JPEG', 0, 0, 1280, 800);
          } else if (format === 'PPT') {
            const slide = ppt.addSlide();
            slide.addImage({ data: imgData, x: 0, y: 0, w: 10, h: 6.25 });
          }
        } catch (error) {
          console.error(`Error exporting slide ${i}:`, error);
        }
      }

      setExportProgress(Math.round(((i + 1) / slides.length) * 100));
    }

    if (format === 'PDF') {
      pdf.save('nukaazo-presentation.pdf');
    } else if (format === 'PPT') {
      ppt.writeFile({ fileName: 'nukaazo-presentation.pptx' });
    }

    setActiveCaptureIndex(-1);
    setIsExporting(false);
  };
  const ActiveSlideComponent = slides[currentIndex];

  return (
    <div ref={containerRef} className="relative select-none bg-[#FCFCFA]">

      {/* ── PDF Export Styles (Force Multi-page Landscape Printing) ── */}
      <style>{`
        @media print {
          body, html, #root {
            background: #FCFCFA !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100vw !important;
            height: 62.5vw !important;
            overflow: visible !important;
          }
          @page {
            size: landscape;
            margin: 0;
          }
          .print-slide-container {
            display: block !important;
          }
          .print-slide {
            width: 100vw !important;
            height: 62.5vw !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            position: relative !important;
            overflow: hidden !important;
            background: #FCFCFA !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* ── Screen Presenter View (Hidden During Printing) ── */}
      <div className="print:hidden min-h-screen w-full flex flex-col justify-between bg-[#FCFCFA] relative overflow-hidden">

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
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${currentIndex === 0
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

          {/* Settings & Downloads Cog */}
          <div className="relative flex items-center">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${showSettings ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
              title="Settings & Downloads"
            >
              <FaCog size={12} />
            </button>

            {showSettings && (
              <div className="absolute bottom-10 right-0 w-44 bg-white border border-slate-200/60 rounded-xl shadow-xl p-2 z-50 flex flex-col gap-1 select-none">
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2.5 py-1 border-b border-slate-100 mb-1">
                  Export & Actions
                </div>
                <button
                  onClick={() => {
                    exportSlides('PDF');
                    setShowSettings(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer flex items-center gap-2"
                >
                  <FaFilePdf className="text-red-500" size={12} />
                  <span>Download as PDF</span>
                </button>
                <button
                  onClick={() => {
                    exportSlides('PPT');
                    setShowSettings(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 hover:bg-slate-50 rounded-lg text-xs font-semibold text-[#e85c1c] hover:text-[#ff7c43] cursor-pointer flex items-center gap-2"
                >
                  <FaFilePowerpoint className="text-[#e85c1c]" size={12} />
                  <span>Download as PPT</span>
                </button>
              </div>
            )}
          </div>

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
                      className={`w-full text-left p-3 rounded-xl border transition-all text-xs font-semibold flex items-center justify-between cursor-pointer ${currentIndex === index
                        ? 'border-[#e85c1c] bg-[#e85c1c]/5 text-[#e85c1c] font-bold'
                        : 'border-slate-100 hover:border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                      <span>
                        {index + 1}. {slideTitles[slides[index].name] || slides[index].name || 'Slide'}
                      </span>
                      <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${currentIndex === index ? 'bg-[#e85c1c]/15' : 'bg-slate-100 text-slate-500'
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
        {/* ── Canva-Style Export Progress Modal ── */}
        {isExporting && (
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex flex-col items-center justify-center select-none text-center">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full border border-slate-100 shadow-2xl flex flex-col items-center gap-5">

              {/* Spinner Progress Circle */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-[#e85c1c] border-t-transparent animate-spin"></div>
                <span className="text-[11px] font-black text-slate-700">{exportProgress}%</span>
              </div>

              {/* Title & Info */}
              <div>
                <h3 className="font-title font-extrabold text-slate-800 text-base">
                  Preparing Your Download
                </h3>
                <p className="text-[9px] text-[#e85c1c] font-black uppercase tracking-widest mt-1">
                  Exporting as {exportFormat}
                </p>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-2 max-w-[220px] mx-auto">
                  Please wait a moment while Nukaazo compiles your slides.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1 relative">
                <div
                  className="h-full bg-gradient-to-r from-[#e85c1c] to-[#006363] transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${exportProgress}%` }}
                ></div>
              </div>

            </div>
          </div>
        )}

        {/* ── Offscreen Capture Node for PDF/PPT Generators ── */}
        {activeCaptureIndex !== -1 && (
          <div
            id="capture-slide"
            className="fixed top-[-9999px] left-[-9999px] bg-[#FCFCFA] overflow-hidden"
            style={{
              width: '1280px',
              height: '800px',
              zIndex: -100
            }}
          >
            {React.createElement(slides[activeCaptureIndex])}
          </div>
        )}

      </div>

      {/* ── PDF Export Layout (Print Only, Multi-page Landscape) ── */}
      <div className="hidden print:block print-slide-container">
        {slides.map((SlideComponent, idx) => (
          <div key={idx} className="print-slide">
            <SlideComponent />
          </div>
        ))}
      </div>

    </div>
  );
}
