import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load everything below the fold — loads only when needed
const About    = lazy(() => import('./components/About'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));
const SakuraPetalsCanvas = lazy(() => import('./components/3d/SakuraPetalsCanvas'));

// Minimal spinner shown while lazy chunks load
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F5F1E6] font-sans selection:bg-[#E8395F]/25 selection:text-[#E8395F] overflow-x-hidden">
      {/* Sakura petals — lazy, non-blocking */}
      <Suspense fallback={null}>
        <SakuraPetalsCanvas />
      </Suspense>

      {/* Navbar — always instant */}
      <Navbar />

      {/* Main content — Hero instant, rest lazy */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
