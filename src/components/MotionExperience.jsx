import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const dramaticEase = [0.76, 0, 0.24, 1];

export function IntroSequence() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return undefined;
    let seen = false;
    try { seen = sessionStorage.getItem('sr-motion-intro-seen') === 'yes'; } catch {}
    if (seen || reduceMotion) { setShow(false); return undefined; }
    let stopped = false;
    const dismiss = () => {
      if (stopped) return;
      try { sessionStorage.setItem('sr-motion-intro-seen', 'yes'); } catch {}
      setShow(false);
    };
    const timeout = window.setTimeout(dismiss, 1750);
    return () => { stopped = true; window.clearTimeout(timeout); };
  }, [reduceMotion, show]);

  const skip = () => {
    try { sessionStorage.setItem('sr-motion-intro-seen', 'yes'); } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.9, ease: dramaticEase }}
          className="motion-intro fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-night text-night-foreground"
          aria-label="Opening portfolio animation"
        >
          <div className="intro-grid" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            className="brand-glow absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: dramaticEase }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(14rem,40vw,34rem)] font-extrabold leading-none text-brand/10"
            initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: dramaticEase }}
            aria-hidden="true"
          >✳</motion.div>
          <motion.p
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="relative z-10 font-mono text-[10px] font-semibold uppercase tracking-[.45em] text-brand sm:text-[12px]"
          >WELCOME TO MY SPACE</motion.p>
          <div className="relative z-10 mt-4 flex items-center overflow-hidden px-4">
            {'SANDEEPA'.split('').map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: '115%' }} animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.18 + i * 0.045, ease: dramaticEase }}
                className="intro-word inline-block font-display font-extrabold tracking-[-.05em]"
              >{ch}</motion.span>
            ))}
            <motion.span
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 400, damping: 14 }}
              className="intro-word inline-block font-display font-extrabold text-brand"
            >.</motion.span>
          </div>
          <div className="absolute bottom-[68px] left-1/2 h-[2px] w-[200px] -translate-x-1/2 overflow-hidden rounded-full bg-night-line">
            <motion.div className="h-full bg-brand" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.45, ease: 'easeInOut' }} />
          </div>
          <button type="button" onClick={skip} className="absolute bottom-6 right-6 rounded-full border border-night-line px-4 py-2 font-mono text-[11px] text-night-foreground transition-colors hover:border-brand hover:text-brand">Skip intro <ArrowUpRight className="ml-1 inline" size={13} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 25, restDelta: 0.001 });
  return <motion.div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-brand" style={{ scaleX }} />;
}

export function CursorAura() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const pointer = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const activeEl = Boolean(event.target?.closest?.('a, button, [data-cursor]'));
      if (activeEl !== hoveredRef.current) { hoveredRef.current = activeEl; setHovering(activeEl); }
      setVisible(old => old || true);
    };
    const hide = () => setVisible(false);
    window.addEventListener('pointermove', pointer, { passive: true });
    document.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    return () => {
      window.removeEventListener('pointermove', pointer);
      document.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="motion-cursor pointer-events-none fixed left-0 top-0 z-[105] -ml-[19px] -mt-[19px] rounded-full"
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.8 : 1 }}
        transition={{ opacity: { duration: 0.2 }, scale: { type: 'spring', stiffness: 380, damping: 26 } }}
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        aria-hidden="true"
        className="motion-cursor-dot pointer-events-none fixed left-0 top-0 z-[106] -ml-[3px] -mt-[3px] rounded-full"
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
        style={{ x, y }}
      />
    </>
  );
}
