import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { createPortal } from 'react-dom';
import { ArrowUpRight, ArrowRight, X, Sparkles } from 'lucide-react';
import { projects, profile } from '@/data/portfolioData';
import ProjectVisual from './ProjectVisual';
import Reveal from './Reveal';
import { Github } from './BrandIcons';

function Details({ p, close }) {
  const ref = useRef(null);
  useEffect(() => {
    const old = document.body.style.overflow;
    const prev = document.activeElement;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const esc = e => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = old; window.removeEventListener('keydown', esc); prev?.focus?.(); };
  }, [close]);
  return createPortal(
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed
      inset-0 z-[100] flex items-center justify-center bg-night/80 p-4 backdrop-blur-md" onMouseDown={e =>
      { if (e.target === e.currentTarget) close(); }}>
        <motion.article initial={{ y: 40, scale: 0.94, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ type: 'spring', stiffness: 260,
          damping: 26 }} role="dialog" aria-modal="true" aria-labelledby="project-title" className="max-h-[92vh]
          w-full max-w-[820px] overflow-y-auto rounded-[30px] border border-line bg-surface p-6 shadow-float sm:p-10">
          <div className="flex items-center justify-between">
            <span className="eyebrow">CASE STUDY / {p.number}</span>
            <button ref={ref} aria-label="Close details" onClick={close} className="btn-icon"><X size={18} /></button>
          </div>
          <h2 id="project-title" className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink
          sm:text-[2.6rem] sm:leading-[1.1]">{p.title}</h2>
          <p className="paragraph mt-4">{p.story}</p>
          <div className="group my-8 overflow-hidden rounded-[22px]"><ProjectVisual kind={p.kind} /></div>
          <h3 className="font-display text-lg font-bold text-ink">Key contributions</h3>
          <ul className="mt-4 space-y-3">
            {p.highlights.map((h, i) => (
                <motion.li key={h} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.07 }}
                           className="flex gap-4 rounded-2xl border border-line bg-page p-4 text-sm leading-7 text-muted">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand font-mono
                   text-[11px] font-bold text-on-brand">0{i + 1}</span>{h}
                </motion.li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-sm leading-7 text-muted"><strong className="text-ink">Stack:</strong> {p.fullStack}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.repositories?.length ? p.repositories.map(r => (
                <a key={r.url} className="btn-brand" href={r.url.replace(/\.git$/, '')} target="_blank"
                   rel="noopener noreferrer"><Github size={17} /> {r.label} <ArrowUpRight size={16} /></a>
            )) : p.repositoryUrl ? (
                <a className="btn-brand" href={p.repositoryUrl.replace(/\.git$/, '')}
                   target="_blank" rel="noopener noreferrer"><Github size={17} /> View repository <ArrowUpRight size={16} /></a>
            ) : (
                <a className="btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub profile <ArrowUpRight size={16} /></a>
            )}
            {p.demoUrl && (
                <a className="btn-ghost" href={p.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16} /></a>
            )}
          </div>
        </motion.article>
      </motion.div>,
      document.body
  );
}

function ProjectCard({ p, i, total, progress, onOpen }) {
  const featured = i === 0;
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - i - 1) * 0.045]);
  const content = featured ? {
    kicker: 'PROJECT 01 / FULL-STACK & AI',
    intro: 'An AI-powered recruitment system built with React 18.3, TypeScript, C#, .NET 8 / ASP.NET Core, MySQL ' +
        'and Google Gemini AI — bringing intelligent candidate workflows into one secure application.',
    cta: 'Explore featured project',
  } : {
    kicker: `PROJECT ${p.number} / ${p.label}`,
    intro: p.intro,
    cta: 'Explore case study',
  };

  return (
      <div className="lg:sticky" style={{ top: `${110 + i * 26}px` }}>
        <motion.article
            style={{ scale }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`project-card group relative origin-top overflow-hidden rounded-[32px] border bg-surface 
            ${featured ? 'border-glow border-brand/50' : 'border-line'}`}
        >
          <div className={`grid lg:min-h-[520px] lg:grid-cols-[.95fr_1.05fr] ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="project-number pointer-events-none absolute right-6 top-4 text-[110px] sm:text-[150px]" aria-hidden="true">{p.number}</span>
              {featured && (
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-3 py-2 font-mono
                  text-[10px] font-bold uppercase tracking-wider text-on-brand">
                    <Sparkles size={13} /> Featured • AI integration
                  </div>
              )}
              <p className="font-mono text-[11px] uppercase tracking-[.16em] text-accent">{content.kicker}</p>
              <h3 className={`relative mt-4 font-display font-extrabold leading-[1.06] tracking-[-.035em] text-ink 
              ${featured ? 'text-[clamp(2rem,3.4vw,3.3rem)]' : 'text-[clamp(1.8rem,3vw,2.8rem)]'}`}>{p.title}</h3>
              <p className="paragraph mt-5 max-w-[520px]">{content.intro}</p>
              <div className="mt-7 flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>
              <button data-cursor="view" onClick={() => onOpen(p)} className="btn-brand group/btn mt-8 w-fit">
                {content.cta} <ArrowUpRight size={17} className="transition-transform duration-300 group-hover/btn:rotate-45" />
              </button>
            </div>
            <div className="min-h-[320px] overflow-hidden lg:min-h-full">
              <ProjectVisual kind={p.kind} />
            </div>
          </div>
        </motion.article>
      </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ['start start', 'end end'] });

  return (
      <section id="projects" className="section border-y border-line bg-surface/60">
        <div className="wrap">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">04 / SELECTED PROJECTS</p>
              <h2 className="heading mt-5">A closer look at <span className="hl">my work.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted">Three real projects, from AI-powered hiring to secure APIs and full-stack booking.</p>
          </Reveal>

          <div ref={stackRef} className="flex flex-col gap-6 lg:gap-10">
            {projects.map((p, i) => (
                <ProjectCard key={p.id} p={p} i={i} total={projects.length} progress={scrollYProgress} onOpen={setSelected} />
            ))}
          </div>

          <Reveal className="relative mt-10 flex flex-wrap items-center justify-between gap-4
          overflow-hidden rounded-[26px] bg-night px-7 py-8 text-night-foreground sm:px-10">
            <div className="brand-glow pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full" aria-hidden="true" />
            <div className="relative">
              <h3 className="font-display text-2xl font-extrabold">More on GitHub</h3>
              <p className="mt-1 text-sm text-night-muted">Explore code, experiments and ongoing learning.</p>
            </div>
            <a className="btn-brand relative" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowRight size={16} /></a>
          </Reveal>
        </div>
        <AnimatePresence>{selected && <Details key={selected.id} p={selected} close={() => setSelected(null)} />}</AnimatePresence>
      </section>
  );
}