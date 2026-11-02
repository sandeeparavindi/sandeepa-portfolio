import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Expertise from './Expertise';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import MotionBackdrop from './MotionBackdrop';
import MotionStatement from './MotionStatement';
import { IntroSequence, ScrollProgress, CursorAura } from './MotionExperience';

const THEME_KEY = 'sr-theme-yellow';

export default function PortfolioApp() {
  const [theme, setTheme] = useState('dark');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch {}
    setTheme(saved === 'light' ? 'light' : 'dark');
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }, [theme, ready]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-page text-ink transition-colors duration-300">
        <IntroSequence />
        <ScrollProgress />
        <CursorAura />
        <MotionBackdrop />
        <a className="sr-only focus:not-sr-only focus:fixed focus:z-[99] focus:bg-accent focus:p-3" href="#main">Skip to content</a>
        <div className="relative z-10">
          <Navbar theme={theme} onThemeToggle={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
          <main id="main">
            <Hero />
            <About />
            <Expertise />
            <Skills />
            <MotionStatement />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
