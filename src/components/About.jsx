import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code2, GraduationCap, BrainCircuit } from 'lucide-react';
import Reveal from './Reveal';

const statement = 'Great software happens where clear thinking, thoughtful interfaces and dependable engineering meet.';
const highlight = new Set(['clear', 'thinking,']);

function ScrollWord({ word, progress, range, hl }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[.25em] inline-block">
      {hl ? <span className="hl">{word}</span> : word}
    </motion.span>
  );
}

function CountUp({ to, pad = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(to);
  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: v => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{String(value).padStart(pad, '0')}</span>;
}

function Stat({ icon: Icon, value, label, delay }) {
  return (
    <Reveal delay={delay} className="group relative overflow-hidden rounded-[22px] border border-line bg-surface p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand hover:shadow-glow">
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-y-100" aria-hidden="true" />
      <div className="relative">
        <Icon size={21} className="text-accent transition-colors group-hover:text-on-brand" />
        <strong className="mt-5 block font-display text-4xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-on-brand">
          {typeof value === 'number' ? <CountUp to={value} /> : value}
        </strong>
        <small className="mt-1 block text-[11.5px] text-muted transition-colors group-hover:text-on-brand">{label}</small>
      </div>
    </Reveal>
  );
}

export default function About() {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ['start 85%', 'end 45%'] });
  const words = statement.split(' ');

  const imgRef = useRef(null);
  const { scrollYProgress: imgProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(imgProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="section">
      <div className="wrap grid items-start gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
            <h2 className="heading mt-6">Driven by <span className="hl">curiosity.</span><br />Built for what's next.</h2>
          </Reveal>

          <Reveal delay={0.1} className="relative mt-10">
            <div ref={imgRef} className="relative mx-auto max-w-[420px] overflow-hidden rounded-[30px] border border-line bg-brand lg:mx-0">
              <div className="dot-bg absolute inset-0 opacity-40" aria-hidden="true" />
              <span className="absolute -left-4 top-6 font-display text-[120px] font-extrabold leading-none text-on-brand/10" aria-hidden="true">SR</span>
              <motion.img
                style={{ y: imgY }}
                src="/images/sandeepa-cutout.png"
                alt="Portrait of Sandeepa Ravindi"
                loading="lazy"
                className="relative z-10 mx-auto h-[380px] w-auto scale-110 object-contain object-bottom pt-6"
              />
            </div>
            <div className="absolute -bottom-6 right-2 z-20 flex items-center gap-4 rounded-[22px] border border-line bg-surface p-3 pr-5 shadow-float sm:right-6 lg:right-[-10px]">
              <div className="relative flex h-16 w-16 items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow text-ink" aria-hidden="true">
                  <defs><path id="about-ring" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" /></defs>
                  <text className="stamp-text" style={{ fontSize: 11 }}><textPath href="#about-ring" textLength="248" lengthAdjust="spacing">✦ SR ✦ SR ✦ SR ✦ SR ✦ SR ✦ SR </textPath></text>
                </svg>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-sm font-extrabold text-on-brand">SR</span>
              </div>
              <span className="text-sm leading-snug text-muted">Full-Stack Developer<br /><span className="text-ink">Sri Lanka</span> <ArrowUpRight size={14} className="inline text-accent" /></span>
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-16">
          <h3 ref={textRef} aria-label={statement} className="max-w-[680px] font-display text-[clamp(1.6rem,3.2vw,2.75rem)] font-bold leading-[1.28] tracking-[-.03em] text-ink">
            <span aria-hidden="true">
              {words.map((w, i) => (
                <ScrollWord key={i} word={w} hl={highlight.has(w)} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
              ))}
            </span>
          </h3>
          <Reveal delay={0.1}>
            <p className="paragraph mt-8">I'm pursuing a BSc (Hons) in Software Engineering at NSBM Green University, after completing an HND in Software Engineering at IJSE. I build responsive web applications, secure APIs and practical AI-enhanced features.</p>
            <p className="paragraph mt-4">My AI-Powered Recruitment & Talent Management Platform brings together full-stack engineering and Gemini AI integration. I'm also expanding into Flutter and Dart through collaborative mobile development.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-3">
            <Stat icon={Code2} value={3} label="Featured projects" delay={0} />
            <Stat icon={GraduationCap} value={2} label="Education milestones" delay={0.08} />
            <Stat icon={BrainCircuit} value="AI" label="Applied integrations" delay={0.16} />
          </div>
        </div>
      </div>
    </section>
  );
}
