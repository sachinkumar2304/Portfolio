import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Database, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isNearTop, setIsNearTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // If at home section (top 150px), always visible
      if (currentScrollY <= 150) {
        setIsVisible(true);
      } else {
        // Scrolled down into other sections
        if (currentScrollY < lastScrollY - 5) {
          // Scrolling UP -> reveal navbar
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY + 5) {
          // Scrolling DOWN -> hide navbar unless mouse is near top
          setIsVisible(false);
        }
      }
      lastScrollY = currentScrollY;

      // Scrollspy detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = currentScrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Show header when mouse cursor moves near top edge (<= 70px)
    const handleMouseMove = (e) => {
      if (e.clientY <= 70) {
        setIsNearTop(true);
      } else {
        setIsNearTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shouldShowHeader = isVisible || isNearTop;

  return (
    <header 
      style={{
        transform: shouldShowHeader ? 'translateY(0)' : 'translateY(-110%)',
        transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 py-3.5 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
    >
      <div className="w-full max-w-5xl flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="neu-card px-4 py-2 rounded-2xl hover:border-white/30 group transition-all"
        >
          <span className="font-light text-sm uppercase tracking-[0.22em] text-[#FFFFFF] group-hover:text-white transition-colors">
            Sachin
          </span>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#121212]/95 backdrop-blur-md border border-white/[0.06] shadow-neu-raised">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-[0.16em] transition-all ${isActive
                    ? 'text-white font-medium'
                    : 'text-[#A3A3A3] hover:text-[#FFFFFF]'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#0A0A0A] rounded-full shadow-neu-inset-sm border border-white/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-1.5">
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </span>
              </motion.a>
            );
          })}
        </nav>

        {/* Top Right: Connect Social Icons with Pop-Up Animations */}
        <div className="hidden md:flex items-center space-x-2.5">
          {/* GitHub */}
          <motion.a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.35, y: -6 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 14 }}
            className="neu-btn-raised p-2.5 rounded-xl text-[#FFFFFF] hover:text-[#E8395F] hover:border-[#E8395F]/80 shadow-[0_6px_18px_rgba(0,0,0,0.9)] transition-all group relative cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 group-hover:scale-120 transition-transform" />
            {/* Hover Tooltip Popup */}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#161616] text-[#FFFFFF] text-[11px] font-mono font-semibold py-1 px-2.5 rounded-lg border border-[#E8395F]/40 shadow-[0_4px_16px_rgba(0,0,0,0.9)] pointer-events-none whitespace-nowrap z-50">
              GitHub
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.35, y: -6 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 14 }}
            className="neu-btn-raised p-2.5 rounded-xl text-[#FFFFFF] hover:text-[#E8395F] hover:border-[#E8395F]/80 shadow-[0_6px_18px_rgba(0,0,0,0.9)] transition-all group relative cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 group-hover:scale-120 transition-transform" />
            {/* Hover Tooltip Popup */}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#161616] text-[#FFFFFF] text-[11px] font-mono font-semibold py-1 px-2.5 rounded-lg border border-[#E8395F]/40 shadow-[0_4px_16px_rgba(0,0,0,0.9)] pointer-events-none whitespace-nowrap z-50">
              LinkedIn
            </span>
          </motion.a>


          {/* Email — scrolls to Contact section */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            aria-label="Email"
            whileHover={{ scale: 1.35, y: -6 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 14 }}
            className="neu-btn-raised p-2.5 rounded-xl text-[#FFFFFF] hover:text-[#E8395F] hover:border-[#E8395F]/80 shadow-[0_6px_18px_rgba(0,0,0,0.9)] transition-all group relative cursor-pointer"
          >
            <Mail className="w-4 h-4 group-hover:scale-120 transition-transform" />
            {/* Hover Tooltip Popup */}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#161616] text-[#FFFFFF] text-[11px] font-mono font-semibold py-1 px-2.5 rounded-lg border border-[#E8395F]/40 shadow-[0_4px_16px_rgba(0,0,0,0.9)] pointer-events-none whitespace-nowrap z-50">
              Email
            </span>
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Navigation Menu"
          className="md:hidden neu-btn-raised p-2.5 rounded-xl text-[#FFFFFF] hover:text-[#E8395F]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-[#121212]/98 backdrop-blur-xl rounded-2xl p-4 border border-white/[0.08] shadow-[10px_10px_30px_rgba(0,0,0,0.95),-6px_-6px_20px_rgba(255,255,255,0.02)] pointer-events-auto"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive
                        ? 'bg-[#0A0A0A] text-[#E8395F] shadow-neu-inset-sm border border-[#E8395F]/35'
                        : 'text-[#D1D5DB] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]'
                      }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Mobile Socials */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-around">
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn-raised p-3 rounded-xl text-[#FFFFFF] hover:text-[#E8395F]"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn-raised p-3 rounded-xl text-[#FFFFFF] hover:text-[#E8395F]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="neu-btn-raised p-3 rounded-xl text-[#FFFFFF] hover:text-[#E8395F]"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
