import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ease = [0.16, 1, 0.3, 1];

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.04] pt-14 pb-10">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.04]"
        >
          {/* Logo & Subtitle */}
          <div>
            <span className="font-light text-base text-[#FFFFFF] uppercase tracking-[0.22em] block">
              Sachin
            </span>
            <span className="text-[10px] text-[#9CA3AF] tracking-[0.18em] uppercase block font-mono mt-1">
              Database & SQL Engineering Specialist
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-7 text-xs font-mono uppercase tracking-[0.18em] text-[#A3A3A3]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="neu-btn-raised px-4 py-2.5 rounded-xl text-[#FFFFFF] hover:text-white group flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.18em] transition-transform hover:scale-105 cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Copyright & Engineering Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, delay: 0.1, ease }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#6E6A64]"
        >
          <div className="flex items-center space-x-1">
            <span className="tracking-wider uppercase">© {new Date().getFullYear()} Sachin. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
