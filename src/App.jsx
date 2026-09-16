import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SakuraPetalsCanvas from './components/3d/SakuraPetalsCanvas';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F5F1E6] font-sans selection:bg-[#E8395F]/25 selection:text-[#E8395F] overflow-x-hidden">
      {/* Full Sakura Mood: Continuous Falling Sakura Petals (z-0, behind all content) */}
      <SakuraPetalsCanvas />

      {/* Floating Neumorphic Navigation */}
      <Navbar />

      {/* Main Single-Page Journey */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Neumorphic Footer */}
      <Footer />
    </div>
  );
}
