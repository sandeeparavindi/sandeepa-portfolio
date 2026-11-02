import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Code2,
  Sparkles,
  Mail,
  MapPin,
  MousePointer2,
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { capabilities, profile } from '@/data/portfolioData';

const ease = [0.22, 1, 0.36, 1];
const rise = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
};

function Word({ children, className = '' }) {
  return (
    <span className="inline-block overflow-hidden pb-[.08em] align-bottom">
      <motion.span
        className={`inline-block ${className}`}
        variants={{ hidden: { y: '105%' }, show: { y: '0%', transition: { duration: 0.9, ease } } }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function TechPill({ children, filled = false }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-bold ${filled ? 'border-ink bg-ink text-page' : 'border-line bg-surface/70 text-ink'}`}>
      {children}
    </span>
  );
}

function Stamp() {
  return (
    <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full bg-brand text-on-brand shadow-brand">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs><path id="stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
        <text className="stamp-text"><textPath href="#stamp-circle" textLength="236" lengthAdjust="spacing">CREATIVE • BY CODE • </textPath></text>
      </svg>
      <span className="text-2xl leading-none">✳</span>
    </div>
  );
}

export default function Hero() {
  const stageRef = useRef(null);
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const portraitX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-16, 16]), { stiffness: 90, damping: 18 });
  const portraitY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-10, 10]), { stiffness: 90, damping: 18 });
  const glowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [30, -30]), { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const portraitScroll = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const nameScroll = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const onPointerMove = (event) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };
  const resetPointer = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={resetPointer}
      className="relative isolate overflow-hidden bg-page"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="wrap relative z-10 pt-[110px] sm:pt-[124px]">
        <div ref={stageRef} className="relative flex flex-col lg:block lg:min-h-[640px]">
          {/* Portrait — centred stage with yellow glow */}
          <motion.div
            className="pointer-events-none relative mx-auto mt-2 h-[400px] w-full max-w-[420px] sm:h-[460px] lg:absolute lg:bottom-0 lg:left-[47%] lg:mt-0 lg:h-[600px] lg:w-[440px] lg:max-w-none lg:-translate-x-1/2 order-2"
            style={reducedMotion ? undefined : { y: portraitScroll }}
          >
            <motion.div
              aria-hidden="true"
              className="brand-glow absolute bottom-[4%] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]"
              style={reducedMotion ? undefined : { x: glowX }}
              animate={reducedMotion ? undefined : { scale: [1, 1.06, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div aria-hidden="true" className="ring-dashed absolute bottom-[6%] left-1/2 h-[320px] w-[320px] -translate-x-1/2 animate-spin-slower rounded-full sm:h-[370px] sm:w-[370px] lg:h-[440px] lg:w-[440px]">
              <span className="absolute left-[12%] top-[10%] h-3 w-3 rounded-full bg-brand shadow-brand" />
              <span className="absolute bottom-[14%] right-[8%] h-2 w-2 rounded-full bg-ink" />
            </div>
            <div aria-hidden="true" className="ring-thin absolute bottom-[0%] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]" />
            <motion.div className="hero-portrait-mask absolute inset-x-0 bottom-0 z-[2] h-full" style={reducedMotion ? undefined : { x: portraitX, y: portraitY }}>
              <motion.img
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, ease, delay: 0.35 }}
                src="/images/sandeepa-hero.png"
                alt="Sandeepa Ravindi — software engineering undergraduate and full-stack developer"
                fetchPriority="high"
                className="hero-portrait h-full w-full object-contain object-bottom"
              />
            </motion.div>

            {/* Floating AI label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
              className="absolute left-0 top-[34%] z-[5] sm:left-[2%] lg:left-auto lg:right-[-14%] lg:top-[60%]"
            >
              <div className="flex animate-float items-center gap-2 rounded-full bg-ink px-3.5 py-2 font-mono text-[10px] font-bold text-page shadow-float">
                <Sparkles size={13} className="text-brand" /> AI + FULL STACK
              </div>
            </motion.div>

            {/* Rotating creative stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.15, type: 'spring', stiffness: 200, damping: 14 }}
              className="absolute right-0 top-[14%] z-[5] scale-75 sm:right-[2%] sm:scale-100"
              aria-hidden="true"
            >
              <Stamp />
            </motion.div>
          </motion.div>

          {/* Left: name block */}
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.09, delayChildren: 0.25 }}
            style={reducedMotion ? undefined : { y: nameScroll, opacity: fade }}
            className="relative z-20 order-1 lg:absolute lg:left-0 lg:top-[40px] lg:w-[52%]"
          >
            <motion.div variants={rise} className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-1.5 pr-4 font-mono text-[10px] font-medium tracking-[.14em] text-muted backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-on-brand"><Sparkles size={12} /></span>
              SOFTWARE ENGINEERING UNDERGRADUATE
            </motion.div>

            <motion.h1
              aria-label="I'm Sandeepa Ravindi"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="mt-6"
            >
              <span aria-hidden="true" className="block font-mono text-sm font-medium tracking-[.2em] text-muted sm:text-base">
                <Word>I'm</Word>
              </span>
              <span aria-hidden="true" className="hero-name mt-2 block text-ink"><Word>Sandeepa</Word></span>
              <span aria-hidden="true" className="hero-name block">
                <Word className="hl">Ravindi</Word>
                <Word className="ml-2 align-top text-[.32em] text-accent">✳</Word>
              </span>
            </motion.h1>

            <motion.p variants={rise} className="mt-6 font-mono text-[11px] font-medium tracking-[.16em] text-muted sm:text-[13px]">
              FULL-STACK DEVELOPER <span aria-hidden="true" className="mx-1.5 text-accent">✦</span> AI-POWERED SOLUTIONS
            </motion.p>

            <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-brand group">
                Portfolio <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <a href="#contact" className="btn-ghost">
                Hire Me <MousePointer2 size={15} />
              </a>
            </motion.div>

            <motion.div variants={rise} className="mt-10 hidden items-center gap-5 lg:flex">
              <p className="font-mono text-[10px] tracking-[.16em] text-muted">FIND ME ONLINE</p>
              <span className="h-px w-10 bg-line" />
              <div className="flex gap-2">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub profile"><Github size={18} /></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
                <a href={`mailto:${profile.email}`} className="btn-icon" aria-label="Email Sandeepa"><Mail size={17} /></a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: tagline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease }}
            className="relative z-20 hidden lg:absolute lg:right-0 lg:top-[70px] lg:block lg:w-[260px] lg:text-right"
          >
            <div className="mb-1 font-display text-5xl leading-none text-accent" aria-hidden="true">“</div>
            <p className="font-display text-[22px] font-bold leading-[1.25] tracking-[-.02em] text-ink">
              Turning ideas into thoughtful, <span className="hl">intelligent</span> digital experiences.
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[.2em] text-muted">DESIGN · DEVELOP · IMPROVE</p>
            <div className="mt-7 flex flex-wrap justify-end gap-2">
              <TechPill filled>React + TS</TechPill>
              <TechPill>ASP.NET Core</TechPill>
              <TechPill>Gemini AI</TechPill>
              <TechPill filled>Spring Boot</TechPill>
            </div>
            <div className="mt-9 flex items-center justify-end gap-3 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand text-accent"><Code2 size={20} /></div>
              <p className="text-sm font-semibold leading-[1.4] text-ink">
                03 featured projects
                <span className="block text-xs font-normal text-muted">React · ASP.NET · Spring Boot</span>
              </p>
            </div>
            <div className="mt-5 flex items-center justify-end gap-2 text-xs text-ink">
              <MapPin size={15} className="text-accent" /> Sri Lanka
            </div>
            <motion.a
              href="#about"
              aria-label="Scroll to about section"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-muted transition-colors hover:text-accent"
            >
              SCROLL TO EXPLORE
              <motion.span animate={reducedMotion ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                <ArrowDownRight size={17} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Capability strip (#01–#04), like a glass dock over the portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease }}
          className="glass relative z-30 -mt-10 grid grid-cols-2 overflow-hidden rounded-[22px] border border-line shadow-float lg:-mt-14 lg:grid-cols-4"
        >
          {capabilities.map((c, i) => (
            <a
              key={c.no}
              href="#expertise"
              className={`group relative flex flex-col gap-1.5 px-5 py-5 transition-colors duration-300 hover:bg-brand sm:px-7 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i === 1 ? 'lg:border-r' : ''} border-line`}
            >
              <span className="font-mono text-[10px] font-bold text-accent transition-colors group-hover:text-on-brand">#{c.no}</span>
              <span className="text-[13px] font-bold leading-snug text-ink transition-colors group-hover:text-on-brand sm:text-[14px]">{c.title}</span>
              <ArrowUpRight size={15} className="absolute right-4 top-4 text-muted opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:text-on-brand group-hover:opacity-100" />
            </a>
          ))}
        </motion.div>

        {/* Mobile information */}
        <div className="relative z-20 mx-auto mb-8 mt-6 flex max-w-[580px] flex-wrap items-center justify-between gap-3 border-t border-line px-1 pt-5 lg:hidden">
          <div>
            <p className="font-mono text-[10px] tracking-[.16em] text-muted">REACT · .NET · AI</p>
            <p className="mt-1 text-xs font-semibold text-ink">03 featured projects</p>
          </div>
          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub profile"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
            <a href={profile.resume} download className="btn-icon" aria-label="Download CV"><Download size={17} /></a>
          </div>
        </div>
      </div>

      {/* Technology ticker */}
      <div className="relative z-20 mt-10 -rotate-1 scale-[1.02] border-y-2 border-ink bg-brand py-4 text-on-brand lg:mt-16">
        <div className="pause-on-hover flex overflow-hidden">
          <div className="flex w-max animate-marquee items-center whitespace-nowrap">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="flex items-center gap-8 pr-8 font-display text-[16px] font-extrabold uppercase tracking-[-.01em] sm:text-[20px]">
                <span>✳</span> React &amp; TypeScript
                <span>✳</span> ASP.NET Core
                <span>✳</span> Gemini AI
                <span>✳</span> Full-Stack Development
                <span>✳</span> Spring Boot
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10" />
    </section>
  );
}
