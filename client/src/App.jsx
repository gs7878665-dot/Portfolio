import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import HeroScene from './components/canvas/HeroScene';
import SpiralSection from './components/SpiralSection';
import ScrollMarquee from './components/ScrollMarquee';

function App() {
  // Lock document class to always be .dark for ultra-clean cyber presentation
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
  }, []);

  return (
    <div className="relative w-full h-auto min-h-screen bg-[#000000] text-white transition-colors duration-500 overflow-x-hidden">
      {/* Luxury Animated Film Grain Noise Overlay */}
      <div className="noise-overlay" />

      {/* Fixed 3D Liquid Wave background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* Floating Fog Screen Overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none bg-radial-fog opacity-100"></div>

      {/* Structural layout content */}
      <div className="relative z-20">
        <Navbar />
        
        <main className="w-full flex flex-col items-center">
          {/* Hero section is rendered directly so it is 100% visible and sharp on load */}
          <div className="w-full min-h-screen flex items-center justify-center">
            <Hero />
          </div>

          {/* Kinetic Typography 1 */}
          <ScrollMarquee text="CREATIVE DEVELOPER • FRONTEND • DESIGN • CODER •" direction={-1} speed={200} />

          <SpiralSection>
            <About />
          </SpiralSection>

          <SpiralSection>
            <Skills />
          </SpiralSection>

          {/* Kinetic Typography 2 */}
          <ScrollMarquee text="ARTIFICIAL INTELLIGENCE • GEN AI • WEB APP SOLUTIONS •" direction={1} speed={250} />

          <SpiralSection>
            <Projects />
          </SpiralSection>

          {/* Kinetic Typography 3 */}
          <ScrollMarquee text="INNOVATION • EXPERIMENTS • LEADERSHIP • COLLABORATION •" direction={-1} speed={200} />

          <SpiralSection>
            <Contact />
          </SpiralSection>
        </main>
      </div>
    </div>
  );
}

export default App;
