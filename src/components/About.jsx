import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  Trophy, 
  ExternalLink,
  GraduationCap,
  Compass,
  Cpu
} from 'lucide-react';

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  
  // Controls which steps have been reached and animated
  const [reachedStep, setReachedStep] = useState(1);

  // Track scroll progression down the 4-step vertical timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 55%', 'end 80%'],
  });

  // Smooth spring for line growth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001,
  });

  // Precise sync: Card reveals ONLY when the white line physically reaches that dot!
  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      if (latest >= 0.78) {
        setReachedStep(4);
      } else if (latest >= 0.46) {
        setReachedStep(3);
      } else if (latest >= 0.18) {
        setReachedStep(2);
      } else {
        // Reset when user scrolls back up
        setReachedStep(1);
      }
    });
  }, [smoothProgress]);

  const cinematicEase = [0.16, 1, 0.3, 1];

  const focusAreas = [
    'SQL & Database Engineering',
    'Python & Data Processing',
    'ETL / ELT & Data Warehousing',
    'Cloud Data Platforms & Analytics',
  ];

  const handleScrollToItem = (id) => {
    setReachedStep((prev) => Math.max(prev, id));
    const el = document.getElementById(`about-step-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      id="about" 
      className="relative bg-[#0A0A0A] border-y border-white/[0.04] pt-24 sm:pt-32 pb-32 sm:pb-40 overflow-hidden"
    >
      {/* Subtle Technical Scanline Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #FFFFFF, #FFFFFF 1px, transparent 1px, transparent 4px)'
        }}
      />

      {/* Stretched Wide Container */}
      <div className="relative z-10 max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================
            SECTION HEADER (Spacious Pure White Editorial Typography)
            Re-reveals every time on scroll with 1.5s smooth animation
        ================================================== */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h2 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: cinematicEase }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] uppercase tracking-[0.16em] sm:tracking-[0.22em] leading-tight"
          >
            Background & Education
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.15, ease: cinematicEase }}
            className="mt-4 text-xs sm:text-sm font-mono tracking-[0.2em] text-[#9CA3AF] uppercase max-w-xl leading-relaxed"
          >
            MCA Student • Database Engineering • Analytics Platforms
          </motion.p>
        </div>

        {/* ==================================================
            VERTICAL SCROLL TIMELINE (4 Steps)
            Clean pure white line connecting Dot 1 -> Dot 4.
            Card reveals with 1.5s animation only when line connects to dot.
        ================================================== */}
        <div ref={timelineRef} className="relative">
          
          {/* Continuous Muted Background Line (Runs exactly between Dot 1 and Dot 4) */}
          <div className="absolute top-6 bottom-6 left-3 sm:left-4 -translate-x-1/2 w-0.5 bg-white/[0.12] z-0" />

          {/* Animated Pure White Progress Line */}
          <motion.div 
            style={{
              scaleY: shouldReduceMotion ? 1 : smoothProgress,
              transformOrigin: 'top',
            }}
            className="absolute top-6 bottom-6 left-3 sm:left-4 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.85)] z-10"
          />

          {/* Timeline Steps with generous spacing */}
          <div className="space-y-28 sm:space-y-36">
            
            {/* --------------------------------------------------
                STEP 1: ABOUT ME
            -------------------------------------------------- */}
            <div id="about-step-1" className="relative flex items-start gap-4 sm:gap-7">
              {/* Left Dot: Pure White */}
              <div className="relative z-20 flex-shrink-0 flex items-center justify-center w-6 sm:w-8 pt-5">
                <button
                  onClick={() => handleScrollToItem(1)}
                  aria-label="Jump to About Me"
                  className="focus:outline-none cursor-pointer group"
                >
                  <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-white border-2 border-white shadow-[0_0_16px_rgba(255,255,255,1)] ring-4 ring-white/20 transition-all duration-300" />
                </button>
              </div>

              {/* Right Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.5, ease: cinematicEase }}
                className="flex-1 neu-card p-5 sm:p-6 lg:p-7 rounded-[22px] border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.95)] relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3.5 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] shadow-neu-inset-sm flex items-center justify-center border border-white/[0.1] text-white">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-light text-white uppercase tracking-[0.14em] leading-tight">
                        About Me
                      </h3>
                      <span className="text-xs text-[#9CA3AF] font-mono tracking-[0.16em] uppercase block mt-0.5">
                        From Learner to Data Engineer
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-sans md:max-w-xl lg:max-w-2xl">
                    I'm an MCA student focused on building reliable data systems, optimizing SQL workloads, and working with modern data platforms.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* --------------------------------------------------
                STEP 2: EDUCATION (Reveals in 1.5s when line reaches Dot 2)
            -------------------------------------------------- */}
            <div id="about-step-2" className="relative flex items-start gap-4 sm:gap-7">
              {/* Left Dot */}
              <div className="relative z-20 flex-shrink-0 flex items-center justify-center w-6 sm:w-8 pt-5">
                <button
                  onClick={() => handleScrollToItem(2)}
                  aria-label="Jump to Education"
                  className="focus:outline-none cursor-pointer group"
                >
                  <div className={`rounded-full transition-all duration-500 ${
                    reachedStep >= 2
                      ? 'w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 bg-white border-2 border-white shadow-[0_0_16px_rgba(255,255,255,1)] ring-4 ring-white/20'
                      : 'w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#141416] border-2 border-white/25 opacity-30'
                  }`} />
                </button>
              </div>

              {/* Right Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40, filter: 'blur(16px)' }}
                animate={
                  reachedStep >= 2
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 40, filter: 'blur(16px)' }
                }
                transition={{ duration: 1.5, ease: cinematicEase }}
                className={`flex-1 neu-card p-5 sm:p-6 lg:p-7 rounded-[22px] border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.95)] relative overflow-hidden ${
                  reachedStep < 2 ? 'pointer-events-none' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3.5 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] shadow-neu-inset-sm flex items-center justify-center border border-white/[0.1] text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-light text-white uppercase tracking-[0.14em] leading-tight">
                        Academic Credentials
                      </h3>
                      <span className="text-xs text-[#9CA3AF] font-mono tracking-[0.16em] uppercase block mt-0.5">
                        2025 — 2027 • Pursuing
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 md:max-w-xl lg:max-w-2xl bg-[#0A0A0C] px-4 py-3 rounded-xl border border-white/[0.06] shadow-neu-inset-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-white tracking-wide">
                        Master of Computer Applications (MCA)
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#A3A3A3] font-mono">
                        Bharati Vidyapeeth's Institute of Management & IT (BVIMIT)
                      </p>
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs text-[#D1D5DB] font-mono flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-white/70" />
                      <span>Navi Mumbai, India</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* --------------------------------------------------
                STEP 3: FOCUS AREAS (Reveals in 1.5s when line reaches Dot 3)
            -------------------------------------------------- */}
            <div id="about-step-3" className="relative flex items-start gap-4 sm:gap-7">
              {/* Left Dot */}
              <div className="relative z-20 flex-shrink-0 flex items-center justify-center w-6 sm:w-8 pt-5">
                <button
                  onClick={() => handleScrollToItem(3)}
                  aria-label="Jump to Focus Areas"
                  className="focus:outline-none cursor-pointer group"
                >
                  <div className={`rounded-full transition-all duration-500 ${
                    reachedStep >= 3
                      ? 'w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 bg-white border-2 border-white shadow-[0_0_16px_rgba(255,255,255,1)] ring-4 ring-white/20'
                      : 'w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#141416] border-2 border-white/25 opacity-30'
                  }`} />
                </button>
              </div>

              {/* Right Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40, filter: 'blur(16px)' }}
                animate={
                  reachedStep >= 3
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 40, filter: 'blur(16px)' }
                }
                transition={{ duration: 1.5, ease: cinematicEase }}
                className={`flex-1 neu-card p-5 sm:p-6 lg:p-7 rounded-[22px] border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.95)] relative overflow-hidden ${
                  reachedStep < 3 ? 'pointer-events-none' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3.5 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] shadow-neu-inset-sm flex items-center justify-center border border-white/[0.1] text-white">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-light text-white uppercase tracking-[0.14em] leading-tight">
                        Engineering Focus
                      </h3>
                      <span className="text-xs text-[#9CA3AF] font-mono tracking-[0.16em] uppercase block mt-0.5">
                        Core Technical Competencies
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 md:max-w-xl lg:max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {focusAreas.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2.5 px-3 py-2 rounded-xl bg-[#0A0A0C] border border-white/[0.05] shadow-neu-inset-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/80 flex-shrink-0" />
                        <span className="text-xs text-white font-normal truncate tracking-wide">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* --------------------------------------------------
                STEP 4: ACHIEVEMENT (Final Step: SIH 2025 Winner)
                Reveals in 1.5s when line reaches Dot 4.
            -------------------------------------------------- */}
            <div id="about-step-4" className="relative flex items-start gap-4 sm:gap-7">
              {/* Left Dot */}
              <div className="relative z-20 flex-shrink-0 flex items-center justify-center w-6 sm:w-8 pt-5">
                <button
                  onClick={() => handleScrollToItem(4)}
                  aria-label="Jump to Achievement"
                  className="focus:outline-none cursor-pointer group"
                >
                  <div className={`rounded-full transition-all duration-500 ${
                    reachedStep >= 4
                      ? 'w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 bg-white border-2 border-white shadow-[0_0_16px_rgba(255,255,255,1)] ring-4 ring-white/20'
                      : 'w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#141416] border-2 border-white/25 opacity-30'
                  }`} />
                </button>
              </div>

              {/* Right Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40, filter: 'blur(16px)' }}
                animate={
                  reachedStep >= 4
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 40, filter: 'blur(16px)' }
                }
                transition={{ duration: 1.5, ease: cinematicEase }}
                className={`flex-1 neu-card p-5 sm:p-6 lg:p-7 rounded-[22px] border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.95)] relative overflow-hidden group ${
                  reachedStep < 4 ? 'pointer-events-none' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] shadow-neu-inset-sm flex items-center justify-center border border-white/[0.1] text-white">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-light text-white uppercase tracking-[0.14em] leading-tight">
                        Smart India Hackathon 2025 Winner
                      </h3>
                      <span className="text-xs text-[#9CA3AF] font-mono tracking-[0.16em] uppercase block mt-0.5">
                        National Level Hackathon Achievement
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://github.com/sachinkumar2304/vaanipath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141418] hover:bg-[#1C1C22] text-xs font-mono font-medium text-white hover:text-white border border-white/25 hover:border-white/60 transition-all shadow-md w-fit cursor-pointer flex-shrink-0 uppercase tracking-wider"
                  >
                    <span>Built VaaniPath</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
