import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Trophy, ArrowUpRight, X, Sparkles, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Overlay state
  const [previewProject, setPreviewProject] = useState(null);
  
  const timerRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const previewHoverTimerRef = useRef(null);
  const previewCloseTimerRef = useRef(null);

  // Auto-cycle every 5 seconds (paused if card hovered or preview overlay is open)
  useEffect(() => {
    if (isHovered || previewProject !== null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, previewProject, projects.length]);

  // Lock background scroll when preview overlay is open
  useEffect(() => {
    if (previewProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [previewProject]);

  // Handle ESC key to close overlay
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && previewProject) {
        closePreviewImmediately();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewProject]);

  // Panel hover logic
  const handleMouseEnterCard = (index) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleContainerMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  // Preview Button & Overlay hover logic
  const handlePreviewButtonMouseEnter = (project) => {
    // Clear any pending close timer
    if (previewCloseTimerRef.current) {
      clearTimeout(previewCloseTimerRef.current);
      previewCloseTimerRef.current = null;
    }
    // Check if hover is supported
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (hasHover) {
      // 200ms delay to avoid accidental triggers
      previewHoverTimerRef.current = setTimeout(() => {
        setPreviewProject(project);
      }, 200);
    }
  };

  const handlePreviewButtonMouseLeave = () => {
    if (previewHoverTimerRef.current) {
      clearTimeout(previewHoverTimerRef.current);
      previewHoverTimerRef.current = null;
    }
    // Grace period of 300ms to allow moving into the overlay
    previewCloseTimerRef.current = setTimeout(() => {
      setPreviewProject(null);
    }, 300);
  };

  const handleOverlayMouseEnter = () => {
    // Keep overlay open while mouse is inside it
    if (previewCloseTimerRef.current) {
      clearTimeout(previewCloseTimerRef.current);
      previewCloseTimerRef.current = null;
    }
  };

  const handleOverlayMouseLeave = () => {
    // Grace period when leaving overlay
    previewCloseTimerRef.current = setTimeout(() => {
      setPreviewProject(null);
    }, 250);
  };

  const closePreviewImmediately = () => {
    if (previewHoverTimerRef.current) clearTimeout(previewHoverTimerRef.current);
    if (previewCloseTimerRef.current) clearTimeout(previewCloseTimerRef.current);
    setPreviewProject(null);
  };

  // Tap handler (for touch devices or direct click)
  const handlePreviewButtonClick = (e, project) => {
    e.stopPropagation();
    if (previewHoverTimerRef.current) clearTimeout(previewHoverTimerRef.current);
    if (previewCloseTimerRef.current) clearTimeout(previewCloseTimerRef.current);
    setPreviewProject(project);
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0A0A0A] border-y border-white/[0.04]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================
            SECTION HEADER
            Unified white editorial typography with 1.5s repeating scroll-reveal
        ================================================== */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] uppercase tracking-[0.16em] sm:tracking-[0.22em] leading-tight"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-xs sm:text-sm font-mono tracking-[0.2em] text-[#9CA3AF] uppercase max-w-2xl leading-relaxed"
          >
            Engineering Systems • Data Pipelines • AI Platforms
          </motion.p>
        </div>

        {/* ==================================================
            DESKTOP: ACCORDION / PIANO-KEY INTERFACE (md and up)
        ================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          onMouseLeave={handleContainerMouseLeave}
          className="hidden md:flex h-[540px] lg:h-[580px] w-full gap-3.5 select-none"
        >
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            const isSIH = project.badge === 'SIH_WINNER';
            const orderFormatted = project.order < 10 ? `0${project.order}` : `${project.order}`;

            return (
              <div
                key={project.id}
                onMouseEnter={() => handleMouseEnterCard(index)}
                onClick={() => setActiveIndex(index)}
                style={{
                  flex: isActive ? '0 0 58%' : '0 0 9.2%',
                  transition: 'flex 500ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-6 lg:p-8 transition-colors duration-500 border ${
                  isActive
                    ? 'bg-[#121212] border-white/20 shadow-2xl shadow-black/80'
                    : 'bg-[#0E0E0E] border-white/[0.06] hover:border-white/20 hover:bg-[#141414]'
                }`}
              >
                {/* Background image layer if available */}
                {project.cardImage && (
                  <div 
                    className={`absolute inset-0 pointer-events-none transition-all duration-700 overflow-hidden ${
                      isActive ? 'opacity-75 scale-100' : 'opacity-25 scale-105'
                    }`}
                  >
                    <img 
                      src={project.cardImage} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter brightness-95 contrast-110"
                    />
                    {/* Bottom gradient to protect text contrast while keeping the upper 60% of the image vividly visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
                  </div>
                )}

                {/* Background glow vignette */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                    isActive ? 'opacity-100 bg-gradient-to-b from-white/[0.04] to-transparent' : 'opacity-0'
                  }`} 
                />

                {/* Top Bar inside card */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="font-mono text-xs tracking-widest text-neutral-200 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/50 px-2 py-0.5 rounded-md border border-white/10 backdrop-blur-md">
                    {orderFormatted}
                  </span>

                  {/* SIH Winner Gold Badge: ONLY rendered when panel is EXPANDED (prevents squishing in collapsed state) */}
                  {isActive && isSIH && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      style={{
                        color: '#F0B429',
                        boxShadow: '0 0 18px rgba(240, 180, 41, 0.4)',
                        borderColor: 'rgba(240, 180, 41, 0.6)',
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-black/80 border backdrop-blur-md shadow-lg"
                    >
                      <Trophy className="w-3.5 h-3.5 text-[#F0B429]" />
                      SIH 2025 Winner
                    </motion.span>
                  )}
                </div>

                {/* COLLAPSED STATE: Vertical Rotated Title */}
                <div
                  style={{
                    opacity: isActive ? 0 : 1,
                    pointerEvents: isActive ? 'none' : 'auto',
                    transition: 'opacity 300ms ease',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                  }}
                  className="absolute inset-0 flex items-center justify-center pt-8 pb-12 z-10"
                >
                  <span className="text-sm lg:text-base font-medium tracking-[0.18em] uppercase text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] whitespace-nowrap bg-black/40 px-2 py-3 rounded-lg border border-white/5 backdrop-blur-sm">
                    {project.title}
                  </span>
                </div>

                {/* EXPANDED STATE: Full Content */}
                <div
                  style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                    transition: 'opacity 400ms ease 150ms',
                  }}
                  className="relative z-10 flex flex-col justify-end mt-auto space-y-5"
                >
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-light text-white tracking-tight leading-snug drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm lg:text-base text-neutral-200 font-normal leading-relaxed max-w-xl">
                      {project.oneLiner}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.08] text-white border border-white/15 backdrop-blur-md shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: View Project + Quick Preview */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md group/btn"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <button
                      type="button"
                      onMouseEnter={() => handlePreviewButtonMouseEnter(project)}
                      onMouseLeave={handlePreviewButtonMouseLeave}
                      onClick={(e) => handlePreviewButtonClick(e, project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-transparent text-[#EDEDED] hover:text-white border border-white/20 hover:border-white/50 hover:bg-white/[0.04] text-xs font-semibold tracking-wider uppercase transition-all duration-200"
                    >
                      <Eye className="w-4 h-4 text-neutral-400" />
                      <span>Quick Preview</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Order indicator line */}
                <div className="relative z-10 w-full pt-4">
                  <div className={`h-0.5 rounded-full transition-all duration-500 ${
                    isActive ? 'bg-white w-full' : 'bg-white/10 w-4'
                  }`} />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ==================================================
            MOBILE: STACKED EXPANDABLE CARDS (Below md)
        ================================================== */}
        <div className="md:hidden space-y-4">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            const isSIH = project.badge === 'SIH_WINNER';
            const orderFormatted = project.order < 10 ? `0${project.order}` : `${project.order}`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#121212] border-white/20 shadow-xl'
                    : 'bg-[#0E0E0E] border-white/[0.06]'
                }`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400 font-semibold">
                      {orderFormatted}
                    </span>
                    <h3 className="text-base font-medium text-white tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  {/* On mobile, only show badge when card is active to avoid clutter */}
                  {isActive && isSIH && (
                    <span 
                      style={{
                        color: '#F0B429',
                        boxShadow: '0 0 12px rgba(240, 180, 41, 0.2)',
                        borderColor: 'rgba(240, 180, 41, 0.5)',
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#F0B429]/10 border flex-shrink-0"
                    >
                      <Trophy className="w-2.5 h-2.5 text-[#F0B429]" />
                      SIH 2025
                    </span>
                  )}
                </div>

                {/* Expanded Details */}
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-4">
                    {project.cardImage && (
                      <div className="w-full h-36 rounded-xl overflow-hidden border border-white/10 relative">
                        <img 
                          src={project.cardImage} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>
                    )}
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {project.oneLiner}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-2.5">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold uppercase tracking-wider"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={(e) => handlePreviewButtonClick(e, project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-transparent text-white border border-white/20 text-xs font-semibold uppercase tracking-wider"
                      >
                        <Eye className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Quick Preview</span>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* ==================================================
      {/* ==================================================
          MODAL OVERLAY: FULL DETAILS HOVER / TAP PREVIEW
          Proper z-[100], fits comfortably on screen without navbar clash
      ================================================== */}
      <AnimatePresence>
        {previewProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 select-none">
            {/* Dimmed backdrop covering full viewport */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closePreviewImmediately}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              aria-label="Close backdrop"
            />

            {/* Overlay card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleOverlayMouseEnter}
              onMouseLeave={handleOverlayMouseLeave}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] my-auto overflow-hidden rounded-[24px] bg-[#0E0E0E] border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
            >
              {/* Close Button (X) */}
              <button
                type="button"
                onClick={closePreviewImmediately}
                className="absolute top-3.5 right-3.5 z-30 p-2 rounded-full bg-black/80 hover:bg-black text-neutral-300 hover:text-white border border-white/20 transition-all duration-150 shadow-lg"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Container */}
              <div 
                className="overflow-y-auto w-full flex-1 divide-y divide-white/[0.06]"
                style={{ scrollbarWidth: 'thin' }}
              >
                {/* Header Banner: Project Preview Image with Overlay and Badge */}
                <div className="relative w-full h-44 sm:h-56 bg-[#161616] overflow-hidden border-b border-white/10 flex-shrink-0">
                  <img
                    src={previewProject.previewImage}
                    alt={`${previewProject.title} banner`}
                    onError={(e) => {
                      // Graceful fallback if image is unreachable
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient vignette for perfect readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-black/30 pointer-events-none" />

                  {/* Top-left/bottom badge & title container */}
                  <div className="absolute bottom-4 left-5 right-12 z-10">
                    {/* SIH Winner badge on banner if present */}
                    {previewProject.badge === 'SIH_WINNER' && (
                      <div className="mb-2">
                        <span 
                          style={{
                            color: '#F0B429',
                            boxShadow: '0 0 16px rgba(240, 180, 41, 0.4)',
                            borderColor: 'rgba(240, 180, 41, 0.6)',
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-black/80 border backdrop-blur-md"
                        >
                          <Trophy className="w-3.5 h-3.5 text-[#F0B429]" />
                          SIH 2025 Winner
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white tracking-tight leading-snug drop-shadow-md">
                      {previewProject.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* One-Liner Description */}
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                    {previewProject.oneLiner}
                  </p>

                  {/* Problem & How This Project Solves It */}
                  <div className="grid grid-cols-1 gap-4 pt-1">
                    {/* Problem Box */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300">
                        <span className="w-2 h-2 rounded-full bg-red-400/80" />
                        The Problem
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-4">
                        {previewProject.problemStatement}
                      </p>
                    </div>

                    {/* Solution Box */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                        How This Project Solves It
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-4">
                        {previewProject.solutionStatement}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights & Architecture (fullDetails) */}
                  {previewProject.fullDetails && previewProject.fullDetails.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 font-semibold block">
                        Key Architecture & Engineering Specs
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {previewProject.fullDetails.map((detail, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expanded Tag Chips */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 font-semibold block">
                      Technologies & Disciplines
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(previewProject.expandedTags || previewProject.tags).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-neutral-200 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action: View on GitHub */}
                <div className="p-4 sm:p-6 bg-[#0B0B0B] flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-neutral-400 hidden sm:inline-block">
                    Verified repository hosted on GitHub
                  </span>
                  <a
                    href={previewProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md ml-auto group/btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

