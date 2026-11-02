import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolioData';
import Reveal from './Reveal';

export default function Education() {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 75%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="education" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">05 / MY JOURNEY</p>
          <h2 className="heading mt-5">Always <span className="hl">learning.</span><br />Always building.</h2>
          <p className="paragraph mt-6 max-w-[460px]">A strong software engineering foundation, strengthened by real projects, new challenges and a genuine curiosity about how systems work.</p>
          <div className="mt-8 inline-flex h-16 w-16 animate-float items-center justify-center rounded-2xl bg-brand text-on-brand shadow-brand"><BookOpen size={27} /></div>
        </Reveal>

        <div ref={lineRef} className="relative space-y-6 pl-12 sm:pl-16">
          <div className="absolute bottom-6 left-[19px] top-6 w-[2px] rounded-full bg-line sm:left-[27px]" aria-hidden="true" />
          <motion.div style={{ scaleY: fill }} className="absolute bottom-6 left-[19px] top-6 w-[2px] origin-top rounded-full bg-brand sm:left-[27px]" aria-hidden="true" />

          {education.map((e, i) => (
            <Reveal key={e.institution} delay={i * 0.1} className="group relative">
              <span className="absolute -left-12 top-8 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand bg-page text-accent transition-all duration-500 group-hover:bg-brand group-hover:text-on-brand sm:-left-16 sm:h-14 sm:w-14">
                <span className="absolute inset-0 animate-ping rounded-full border border-brand opacity-30" aria-hidden="true" />
                <GraduationCap size={18} />
              </span>
              <div className="card relative overflow-hidden p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand group-hover:shadow-glow sm:p-8">
                <span className="pointer-events-none absolute bottom-3 right-6 font-display text-[90px] font-extrabold leading-none text-ink/[.05]" aria-hidden="true">0{i + 1}</span>
                <div className="relative flex flex-wrap items-start justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[.14em] text-accent">{e.period}</span>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${e.status === 'Completed' ? 'border border-line bg-raised text-ink' : 'bg-brand text-on-brand'}`}>{e.status}</span>
                </div>
                <h3 className="relative mt-4 font-display text-[clamp(1.3rem,2.4vw,1.8rem)] font-bold leading-tight tracking-[-.03em] text-ink">{e.qualification}</h3>
                <div className="relative mt-2 flex items-center gap-2 text-sm font-semibold text-ink">{e.institution}<ArrowUpRight size={14} className="text-accent transition-transform duration-300 group-hover:rotate-45" /></div>
                <p className="relative mt-3 text-sm leading-[1.75] text-muted">{e.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
