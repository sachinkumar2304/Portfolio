import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Database, ArrowDown, Mail, ShieldCheck, FileCode2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import DeviceMockup3D from './3d/DeviceMockup3D';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  // Compute start position off-screen to the left
  const startX = isDesktop
    ? -Math.max(windowWidth * 0.85, 1150)
    : -Math.max(windowWidth * 1.25, 600);

  // Card dock state - left content stays 100% hidden until card finishes 2.4s glide
  const [cardSettled, setCardSettled] = useState(false);

  // Motion value starts at 0 immediately on every refresh
  const animProgress = useMotionValue(0);

  useEffect(() => {
    setCardSettled(false);
    // 2.4s smooth cinematic glide - card floats in and docks
    const controls = animate(animProgress, 1, {
      duration: 2.4,
      ease: [0.25, 0.1, 0.25, 1.0],
      onComplete: () => {
        // Trigger word-by-word text entrance immediately upon docking
        setCardSettled(true);
      },
    });

    return () => controls.stop();
  }, [animProgress]);

  // GPU-accelerated translateX: smoothly glides across the full screen and docks at 0
  const cardX = useTransform(animProgress, (val) => {
    return (1 - val) * startX;
  });

  // Scale down continuously from 1.35 -> 1.0 with high-precision subpixel mapping
  const cardScale = useTransform(animProgress, [0, 1], [1.35, 1.0]);

  // Opacity fades 0 -> 1 within the first 10% so the card is visible from the very start
  const cardOpacity = useTransform(animProgress, [0, 0.10], [0, 1]);

  // Typing animation state - only runs AFTER card has docked
  const roles = portfolioData.personal.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [canStartTyping, setCanStartTyping] = useState(false);

  // Initial delay once after docking before typing begins
  useEffect(() => {
    if (!cardSettled) {
      setCanStartTyping(false);
      setCurrentText('');
      setCharIndex(0);
      setIsDeleting(false);
      return;
    }

    const timer = setTimeout(() => {
      setCanStartTyping(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [cardSettled]);

  // Pure per-character typing loop at ultra-fast 2ms speed
  useEffect(() => {
    if (!canStartTyping) return;

    const fullText = roles[currentRoleIndex];
    // Smooth, snappy, legible speed
    const typingSpeed = isDeleting ? 20 : 35;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [canStartTyping, charIndex, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Content (100% hidden until card finishes 2.4s dock, then word-by-word smooth entrance) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: cardSettled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              pointerEvents: cardSettled ? 'auto' : 'none',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10 transform-gpu"
          >
            {/* Main Greeting & Name with Crisp White Typography (Zero Glow, Zero Drop-Shadow) */}
            <div className="relative">
              <motion.span
                initial={{ opacity: 0, x: -12 }}
                animate={
                  cardSettled
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -12 }
                }
                transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-mono tracking-[0.22em] text-[#9CA3AF] uppercase block mb-2 font-medium"
              >
                DATABASE & SQL SPECIALIST
              </motion.span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-[1.18]">
                <span className="inline-flex flex-wrap gap-x-3">
                  {['Hi,', "I'm", portfolioData.personal.nickname].map((word, idx) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 18 }}
                      animate={
                        cardSettled
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 18 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + idx * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={idx === 2 ? 'text-white font-medium' : ''}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={cardSettled ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  className="text-lg sm:text-2xl lg:text-3xl font-mono font-normal text-[#FFFFFF] tracking-[0.14em] uppercase inline-flex items-center mt-3 min-h-[44px]"
                >
                  {currentText}
                  <span className="inline-block w-2 h-5 sm:h-6 bg-white ml-2 animate-pulse" />
                </motion.span>
              </h1>
            </div>

            {/* High-Contrast Tagline (Clean Minimalist Body Text) */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={
                cardSettled
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 14 }
              }
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-sans font-light"
            >
              {portfolioData.personal.tagline}
            </motion.p>

            {/* 3 Minimalist Tactile Buttons (Consistent Dark Style, Zero Neon Red Glow) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={
                cardSettled
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.55, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
            >
              <motion.a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 450, damping: 18 }}
                className="neu-btn-raised px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#FFFFFF] hover:text-[#E8395F] hover:border-[#E8395F]/60 flex items-center space-x-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#E8395F]" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 450, damping: 18 }}
                className="neu-btn-raised px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#FFFFFF] hover:text-[#E8395F] hover:border-[#E8395F]/60 flex items-center space-x-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#E8395F]" />
                <span>Contact Me</span>
              </motion.a>

              <motion.a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 450, damping: 18 }}
                className="neu-btn-raised px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#FFFFFF] hover:text-[#E8395F] hover:border-[#E8395F]/60 flex items-center space-x-2 cursor-pointer"
              >
                <FileCode2 className="w-4 h-4 text-[#E8395F]" />
                <span>View Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Interactive Device Frame Mockup (120fps High-Refresh GPU Pipeline) */}
          <motion.div
            style={{
              x: cardX,
              scale: cardScale,
              opacity: cardOpacity,
              willChange: 'transform, opacity',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
            className="lg:col-span-6 w-full flex justify-center relative z-20 transform-gpu"
          >
            <DeviceMockup3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
