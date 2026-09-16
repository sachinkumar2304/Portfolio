import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Play, 
  CheckCircle2, 
  Award,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const CHANNELS = [
  { id: 'hoodie', name: 'DEV', channel: 'CH 01' },
  { id: 'suit', name: 'FORMAL', channel: 'CH 02' },
  { id: 'terminal', name: 'SQL', channel: 'CH 03' },
];

export default function DeviceMockup3D() {
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  const [volAngle, setVolAngle] = useState(45);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [hasOptimized, setHasOptimized] = useState(false);

  // 3D Mouse tilt tracking
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Auto-channel advance every 3 seconds (pauses on hover so user can read/interact)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentChannelIndex((prev) => (prev + 1) % CHANNELS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNextChannel = () => {
    setCurrentChannelIndex((prev) => (prev + 1) % CHANNELS.length);
  };

  const handlePrevChannel = () => {
    setCurrentChannelIndex((prev) => (prev - 1 + CHANNELS.length) % CHANNELS.length);
  };

  const handleVolClick = () => {
    setVolAngle((prev) => (prev + 40) % 360);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > 25 || Math.abs(e.deltaY) > 25) {
      if (e.deltaX > 0 || e.deltaY > 0) {
        handleNextChannel();
      } else {
        handlePrevChannel();
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleRunOptimization = () => {
    if (hasOptimized) {
      setHasOptimized(false);
      return;
    }
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setHasOptimized(true);
    }, 700);
  };

  const currentChannel = CHANNELS[currentChannelIndex];

  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[660px] mx-auto perspective-1000 select-none pt-7">
      {/* 1. TOP DUAL ANTENNA (Rabbit Ears) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 flex items-end justify-center pointer-events-none">
        {/* Left Antenna Rod */}
        <div 
          className="w-1 h-14 sm:h-16 bg-gradient-to-t from-[#2A2A30] via-[#555560] to-[#AAAAAA] rounded-full origin-bottom transform -rotate-[34deg] translate-x-1.5 shadow-md relative"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] to-[#666666] absolute -top-1.5 -left-0.5 shadow-sm" />
        </div>

        {/* Center Swivel Base Dome */}
        <div className="w-7 h-4 bg-gradient-to-b from-[#33333B] to-[#141416] rounded-t-full border-t border-white/20 shadow-lg relative z-10 mx-0.5" />

        {/* Right Antenna Rod */}
        <div 
          className="w-1 h-14 sm:h-16 bg-gradient-to-t from-[#2A2A30] via-[#555560] to-[#AAAAAA] rounded-full origin-bottom transform rotate-[34deg] -translate-x-1.5 shadow-md relative"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFFFFF] to-[#666666] absolute -top-1.5 -left-0.5 shadow-sm" />
        </div>
      </div>

      {/* TV Ambient Base Drop Shadow */}
      <div 
        className="absolute -inset-3 bg-black/85 rounded-[44px] blur-2xl -z-20"
      />

      {/* Sturdy Bottom Rubber Feet */}
      <div className="absolute -bottom-3 sm:-bottom-4 left-12 sm:left-16 w-14 sm:w-18 h-4 sm:h-5 bg-gradient-to-b from-[#1C1C20] to-[#0A0A0C] rounded-b-xl border-x-2 border-b-2 border-[#28282E] shadow-[0_12px_20px_rgba(0,0,0,0.95)] z-0 transform -skew-x-6 flex justify-center items-end pb-0.5">
        <div className="w-8 h-1 bg-[#050505] rounded-full opacity-80" />
      </div>
      <div className="absolute -bottom-3 sm:-bottom-4 right-12 sm:right-16 w-14 sm:w-18 h-4 sm:h-5 bg-gradient-to-b from-[#1C1C20] to-[#0A0A0C] rounded-b-xl border-x-2 border-b-2 border-[#28282E] shadow-[0_12px_20px_rgba(0,0,0,0.95)] z-0 transform skew-x-6 flex justify-center items-end pb-0.5">
        <div className="w-8 h-1 bg-[#050505] rounded-full opacity-80" />
      </div>

      {/* 2. MAIN RETRO TV CABINET */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.015 : 1,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="relative z-10 bg-[#161619] rounded-[32px] sm:rounded-[40px] p-3 sm:p-4 border-[3px] border-[#2A2A30] shadow-[0_30px_70px_rgba(0,0,0,0.98),inset_0_2px_4px_rgba(255,255,255,0.08),inset_0_-3px_8px_rgba(0,0,0,0.85)] overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Cabinet Bezel Screws */}
        <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#2A2A30] border border-black/80 shadow-inner" />
        <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#2A2A30] border border-black/80 shadow-inner" />
        <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#2A2A30] border border-black/80 shadow-inner" />
        <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#2A2A30] border border-black/80 shadow-inner" />

        {/* 3. SPLIT TV FRONT: CRT SCREEN (LEFT ~76%) + RIGHT CONTROL PANEL (RIGHT ~24%) */}
        <div className="grid grid-cols-12 gap-2 sm:gap-3 items-stretch">
          
          {/* LEFT: CURVED CRT SCREEN */}
          <div 
            onWheel={handleWheel}
            className="col-span-9 sm:col-span-9 relative bg-[#09090C] rounded-[22px] sm:rounded-[28px] overflow-hidden border-2 border-[#1E1E24] shadow-[inset_0_4px_30px_rgba(0,0,0,0.98)] min-h-[330px] sm:min-h-[370px] flex flex-col justify-between p-3.5 sm:p-4 cursor-grab active:cursor-grabbing"
          >
            {/* Authentic CRT Glass Reflection */}
            <div 
              className="absolute inset-0 pointer-events-none z-40 opacity-70"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 28%, transparent 55%)'
              }}
            />

            {/* CRT Scanline Texture */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.04] z-30"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #FFFFFF, #FFFFFF 1px, transparent 1px, transparent 3px)'
              }}
            />

            {/* CRT Radial Screen Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.7)_100%)] pointer-events-none z-20" />

            {/* Matrix / Backdrop Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />

            {/* CRT TOP OSD BAR */}
            <div className="relative z-30 flex items-center justify-between font-mono text-[10px] sm:text-[11px] pb-1 border-b border-white/[0.06]">
              <div className="flex items-center space-x-1.5 text-white font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>BROADCAST LIVE</span>
              </div>
              <div className="text-[#A3A3A3] font-semibold tracking-wider flex items-center space-x-2">
                <span>{currentChannel.channel} // {currentChannel.name}</span>
                <span className="text-[9px] text-white/30 hidden sm:inline">↔ Drag / Scroll</span>
              </div>
            </div>

            {/* Interactive Navigation Arrow Buttons (Prev / Next) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevChannel();
              }}
              aria-label="Previous Channel"
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-50 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 hover:bg-white/20 text-white/70 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer opacity-50 hover:opacity-100"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextChannel();
              }}
              aria-label="Next Channel"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-50 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 hover:bg-white/20 text-white/70 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer opacity-50 hover:opacity-100"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* CRT SCREEN SLIDE CONTENT WITH SWIPE / DRAG CAPABILITY */}
            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -35 || velocity.x < -180) {
                  handleNextChannel();
                } else if (offset.x > 35 || velocity.x > 180) {
                  handlePrevChannel();
                }
              }}
              className="relative z-10 flex-1 flex items-center overflow-visible"
            >
              <AnimatePresence mode="wait">
                {currentChannel.id === 'hoodie' && (
                  /* CHANNEL 1: DEV / HOODIE PROFILE */
                  <motion.div
                    key="crt-hoodie"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex items-center gap-3 sm:gap-4 py-1 overflow-visible"
                  >
                    {/* Left: Sachin Hoodie Cutout */}
                    <div className="relative w-[42%] sm:w-[44%] h-full flex items-center justify-center flex-shrink-0 overflow-visible z-20">
                      {/* Subtle white aura silhouette */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-lg rounded-full opacity-70 pointer-events-none scale-110" />
                      
                      <motion.img
                        src="/sachin-hoodie.png"
                        alt="Sachin - Dev"
                        whileHover={{ scale: 1.25, y: -12 }}
                        transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                        className="max-h-[105%] sm:max-h-[110%] w-auto object-contain object-center cursor-pointer drop-shadow-[0_20px_35px_rgba(0,0,0,0.98)] filter contrast-105 z-30"
                      />
                    </div>

                    {/* Right: Portfolio Information */}
                    <div 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex-1 flex flex-col justify-center text-left space-y-1.5 pr-2 font-sans cursor-pointer group/card"
                      title={isExpanded ? "Click to collapse" : "Click to view full details"}
                    >
                      <div className="flex items-center space-x-1.5 text-[10px] font-mono text-white font-bold">
                        <span className="w-1.5 h-1.5 rounded-sm bg-white/80" />
                        <span>MCA CANDIDATE 2025-27</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight leading-none uppercase">
                          SACHIN
                        </h2>
                        <div className="text-[9px] font-mono text-white/50 opacity-70 group-hover/card:opacity-100 transition-opacity flex items-center space-x-1">
                          {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                        </div>
                      </div>

                      <div className="text-[10px] sm:text-[11px] font-mono font-semibold text-[#A3A3A3] tracking-wider uppercase">
                        SQL / DATABASE ENGINEER
                      </div>

                      {/* Click to expand full bio */}
                      <p className={`text-[10px] sm:text-[11px] text-[#D1D5DB] leading-relaxed font-normal transition-all ${
                        isExpanded 
                          ? 'line-clamp-none bg-[#141418]/90 p-1.5 rounded-lg border border-white/10 shadow-lg' 
                          : 'line-clamp-3'
                      }`}>
                        Building secure, high-throughput data systems — from complex SQL query optimization to AI-driven database security research.
                      </p>

                      {/* Metric Cards */}
                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        <div className="bg-[#121216]/90 p-1.5 rounded-lg border border-white/[0.06]">
                          <span className="text-[8px] font-mono text-[#888888] uppercase block">Target Role</span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-white block">
                            {isExpanded ? 'SQL Developer & Database Admin' : 'SQL Dev / DBA'}
                          </span>
                        </div>
                        <div className="bg-[#121216]/90 p-1.5 rounded-lg border border-white/[0.06]">
                          <span className="text-[8px] font-mono text-[#888888] uppercase block">Location</span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-white block">
                            {isExpanded ? 'Navi Mumbai / Mumbai, India' : 'Mumbai, India'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentChannel.id === 'suit' && (
                  /* CHANNEL 2: FORMAL SUIT PROFILE */
                  <motion.div
                    key="crt-suit"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex items-center gap-3 sm:gap-4 py-1 overflow-visible"
                  >
                    {/* Left: Sachin Formal Suit Cutout */}
                    <div className="relative w-[42%] sm:w-[44%] h-full flex items-center justify-center flex-shrink-0 overflow-visible z-20">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-lg rounded-full opacity-70 pointer-events-none scale-110" />
                      <motion.img
                        src="/sachin-suit.png"
                        alt="Sachin - Formal"
                        whileHover={{ scale: 1.25, y: -12 }}
                        transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                        className="max-h-[105%] sm:max-h-[110%] w-auto object-contain object-center cursor-pointer drop-shadow-[0_20px_35px_rgba(0,0,0,0.98)] filter contrast-105 z-30"
                      />
                    </div>

                    {/* Right: Formal Credentials */}
                    <div 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex-1 flex flex-col justify-center text-left space-y-1.5 pr-2 font-sans cursor-pointer group/card"
                      title={isExpanded ? "Click to collapse" : "Click to view full details"}
                    >
                      <div className="flex items-center space-x-1.5 text-[10px] font-mono text-white font-bold">
                        <Award className="w-3 h-3 text-white" />
                        <span>INTERVIEW READY</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight leading-none uppercase">
                          SACHIN
                        </h2>
                        <div className="text-[9px] font-mono text-white/50 opacity-70 group-hover/card:opacity-100 transition-opacity flex items-center space-x-1">
                          {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                        </div>
                      </div>

                      <div className="text-[10px] sm:text-[11px] font-mono font-semibold text-[#A3A3A3] tracking-wider uppercase">
                        ENTERPRISE CANDIDATE
                      </div>

                      <p className={`text-[10px] sm:text-[11px] text-[#D1D5DB] leading-relaxed font-normal transition-all ${
                        isExpanded 
                          ? 'line-clamp-none bg-[#141418]/90 p-1.5 rounded-lg border border-white/10 shadow-lg' 
                          : 'line-clamp-3'
                      }`}>
                        Master's candidate specializing in database architecture, index covering strategies, and secure multi-agent systems.
                      </p>

                      <div className="space-y-1 pt-1 border-t border-white/[0.06] text-[10px]">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1 h-1 rounded-full bg-white/60" />
                          <span className="text-[#888888] font-mono">Degree:</span>
                          <span className="font-semibold text-white">MCA (2025–2027)</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1 h-1 rounded-full bg-white/60" />
                          <span className="text-[#888888] font-mono">Focus:</span>
                          <span className="font-semibold text-white">
                            {isExpanded ? 'Advanced SQL, CTE Indexing & Partitioning' : 'Advanced SQL & Indexing'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentChannel.id === 'terminal' && (
                  /* CHANNEL 3: SQL ENGINE BENCHMARK */
                  <motion.div
                    key="crt-terminal"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex flex-col justify-between py-1 font-mono text-xs"
                  >
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08]">
                      <div className="flex items-center space-x-2">
                        <Database className="w-3.5 h-3.5 text-white/70" />
                        <span className="text-white font-semibold text-[11px]">benchmark_10M.sql</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRunOptimization();
                        }}
                        disabled={isOptimizing}
                        className="neu-btn-raised px-2.5 py-0.5 rounded text-[10px] font-semibold text-white flex items-center space-x-1 hover:border-white/40 transition-all cursor-pointer"
                      >
                        <Play className={`w-2.5 h-2.5 text-white/70 ${isOptimizing ? 'animate-spin' : ''}`} />
                        <span>{isOptimizing ? 'Running...' : hasOptimized ? 'Reset' : 'Optimize'}</span>
                      </button>
                    </div>

                    <div className="my-auto bg-[#050507] p-2 rounded-lg border border-white/[0.06] text-[10px] leading-relaxed text-gray-300">
                      <span className="text-white font-bold">SELECT</span> region, <span className="text-cyan-400">SUM</span>(amount) <span className="text-white font-bold">FROM</span> transactions_partitioned <span className="text-white font-bold">GROUP BY</span> region;
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded-lg bg-[#0F0F12] border border-white/[0.06]">
                        <div className="text-[9px] text-[#888888]">Baseline Scan</div>
                        <div className="text-xs font-bold text-white mt-0.5">1,420 ms</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0F0F12] border border-white/[0.06]">
                        <div className="text-[9px] text-[#888888]">Optimized Execution</div>
                        <div className={`text-xs font-bold mt-0.5 ${hasOptimized ? 'text-emerald-400' : 'text-gray-400'}`}>
                          {hasOptimized ? '12 ms (118x Faster)' : 'Pending Optimize'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CRT BOTTOM AUTO-ADVANCE PROGRESS BAR */}
            <div className="relative z-30 w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
              <motion.div
                key={`progress-${currentChannelIndex}`}
                initial={{ width: '0%' }}
                animate={{ width: isHovered ? '100%' : '100%' }}
                transition={{ duration: isHovered ? 0 : 3, ease: 'linear' }}
                className="h-full bg-white/60"
              />
            </div>
          </div>

          {/* RIGHT: VINTAGE TV CONTROL PANEL (KNOBS + SPEAKER + POWER) */}
          <div className="col-span-3 sm:col-span-3 flex flex-col justify-between items-center bg-[#111113] rounded-[20px] sm:rounded-[24px] p-2 sm:p-2.5 border-2 border-[#202024] shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)]">
            
            {/* Top Brand Plate: SACHIN.TV + White LED */}
            <div className="w-full bg-[#0A0A0C] py-1 px-1.5 rounded-lg border border-white/[0.08] flex items-center justify-between shadow-inner">
              <span className="font-mono text-[9px] sm:text-[10px] font-black text-white/90 tracking-wider">
                SACHIN<span className="text-white/60">.TV</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-pulse" />
            </div>

            {/* Upper Knob: Rotary Channel Selector (CH) */}
            <div className="flex flex-col items-center my-1 group">
              <span className="text-[8px] sm:text-[9px] font-mono text-[#888888] font-bold tracking-wider mb-0.5">
                CH
              </span>
              <button
                onClick={handleNextChannel}
                title="Turn Channel (Click to switch)"
                className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#2D2D35] to-[#121215] border-2 border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer hover:border-white/30 transition-all active:scale-95"
              >
                {/* Dial Tick Marks */}
                <span className="absolute -top-1 text-[7px] font-mono text-[#666666]">1</span>
                <span className="absolute -right-1 text-[7px] font-mono text-[#666666]">2</span>
                <span className="absolute -bottom-1 text-[7px] font-mono text-[#666666]">3</span>
                
                {/* Rotating Inner Knob with White Indicator Line */}
                <motion.div
                  animate={{ rotate: currentChannelIndex * 120 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="w-6 h-6 rounded-full bg-[#18181C] border border-white/20 relative flex items-center justify-center shadow-inner"
                >
                  <div className="absolute top-0.5 w-1 h-2 bg-white/80 rounded-full" />
                </motion.div>
              </button>
            </div>

            {/* Lower Knob: Rotary Volume / Fine Tuning (VOL) */}
            <div className="flex flex-col items-center my-1 group">
              <span className="text-[8px] sm:text-[9px] font-mono text-[#888888] font-bold tracking-wider mb-0.5">
                VOL
              </span>
              <button
                onClick={handleVolClick}
                title="Volume Dial"
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-b from-[#2D2D35] to-[#121215] border-2 border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.9)] flex items-center justify-center cursor-pointer hover:border-white/30 transition-all active:scale-95"
              >
                <motion.div
                  animate={{ rotate: volAngle }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="w-5 h-5 rounded-full bg-[#18181C] border border-white/20 relative flex items-center justify-center"
                >
                  <div className="absolute top-0.5 w-0.5 h-1.5 bg-white/70 rounded-full" />
                </motion.div>
              </button>
            </div>

            {/* Speaker Grille Slats */}
            <div className="w-full space-y-1 my-1 px-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-0.5 bg-black/80 rounded-full border-b border-white/[0.04]" />
              ))}
            </div>

            {/* Vintage Retro Quote/Sticker */}
            <div className="text-[7px] sm:text-[8px] font-mono text-[#777777] text-center leading-tight py-1 font-bold">
              GOOD IDEAS<br />BETTER DATABASES :)
            </div>

            {/* Bottom Power Indicator Bulb */}
            <div className="flex items-center justify-center pt-1 border-t border-white/[0.04] w-full">
              <div className="w-3 h-3 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.6)] border border-white/30 animate-pulse" />
            </div>
          </div>
        </div>

        {/* 4. CABINET BOTTOM CHIN: Engraved Plate (SQL <> DATA <> IMPACT) */}
        <div className="mt-2.5 pt-1 border-t border-white/[0.04] flex items-center justify-center">
          <div className="px-4 py-0.5 rounded bg-[#0A0A0C] border border-white/[0.06] text-[9px] sm:text-[10px] font-mono text-[#888888] tracking-widest uppercase">
            SQL &nbsp;&lt;&gt;&nbsp; DATA &nbsp;&lt;&gt;&nbsp; IMPACT
          </div>
        </div>
      </motion.div>
    </div>
  );
}
