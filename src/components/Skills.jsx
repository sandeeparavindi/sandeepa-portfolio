import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal, Braces } from 'lucide-react';
import Reveal from './Reveal';

const groups = [
  { name: 'All tools', key: 'all' },
  { name: 'Languages & frontend', key: 'frontend' },
  { name: 'Backend & data', key: 'backend' },
  { name: 'Tools & IDEs', key: 'tools' },
];
const skills = [['React', 'react', 'frontend'], ['TypeScript', 'typescript', 'frontend'], ['JavaScript', 'javascript', 'frontend'], ['Java', 'java', 'frontend'], ['Python', 'python', 'frontend'], ['C#', 'csharp', 'frontend'], ['PHP', 'php', 'frontend'], ['Flutter', 'flutter', 'frontend'], ['Dart', 'dart', 'frontend'], ['React Native', 'react', 'frontend'], ['Tailwind CSS', 'tailwindcss', 'frontend'], ['HTML5', 'html5', 'frontend'], ['CSS3', 'css3', 'frontend'], ['Spring Boot', 'spring', 'backend'], ['Node.js', 'nodejs', 'backend'], ['Express.js', 'express', 'backend'], ['ASP.NET Core', 'dotnetcore', 'backend'], ['FastAPI', 'fastapi', 'backend'], ['MySQL', 'mysql', 'backend'], ['Prisma ORM', 'prisma', 'backend'], ['Hibernate', 'hibernate', 'backend'], ['Redux', 'redux', 'frontend'], ['Git', 'git', 'tools'], ['GitHub', 'github', 'tools'], ['Figma', 'figma', 'tools'], ['IntelliJ IDEA', 'intellij', 'tools'], ['WebStorm', 'webstorm', 'tools'], ['VS Code', 'vscode', 'tools'], ['Android Studio', 'androidstudio', 'tools'], ['Postman', 'postman', 'tools'], ['Maven', 'maven', 'tools'], ['Antigravity', '', 'tools'], ['Alembic', '', 'backend'], ['Gemini AI', '', 'backend']];
const darkLogos = new Set(['github', 'express', 'prisma']);
const groupLabel = { frontend: 'Frontend', backend: 'Backend', tools: 'Tools' };

function TechIcon({ label, slug, size = 'h-12 w-12 sm:h-14 sm:w-14' }) {
  const [fail, setFail] = useState(false);
  if (!slug || fail) {
    return (
      <div className={`flex ${size} items-center justify-center rounded-2xl bg-brand text-on-brand`}>
        {label === 'Antigravity' ? <span className="text-2xl font-black">A<span className="text-xs">✦</span></span> : label === 'Gemini AI' ? <span className="text-2xl">✦</span> : label === 'Alembic' ? <Braces size={26} /> : <Terminal size={26} />}
      </div>
    );
  }
  return <img className={`${size} object-contain ${darkLogos.has(slug) ? 'dark:invert' : ''}`} loading="lazy" src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`} onError={() => setFail(true)} alt="" />;
}

function SkillTile({ label, slug, group }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    e.currentTarget.style.setProperty('--mx', `${px * 100}%`);
    e.currentTarget.style.setProperty('--my', `${py * 100}%`);
    e.currentTarget.style.transform = `perspective(700px) rotateX(${(0.5 - py) * 14}deg) rotateY(${(px - 0.5) * 14}deg) translateY(-4px)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = ''; };
  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} className="skill-tile group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-[22px] border border-line bg-surface p-3 text-center">
      <span className="skill-shine pointer-events-none absolute inset-0" aria-hidden="true" />
      <span className="absolute left-3 top-3 font-mono text-[8.5px] uppercase tracking-[.14em] text-muted opacity-0 transition-opacity group-hover:opacity-100">{groupLabel[group]}</span>
      <div className="relative transition-transform duration-500 group-hover:scale-110">
        <TechIcon label={label} slug={slug} />
      </div>
      <span className="relative font-display text-[12px] font-bold text-ink sm:text-[13px]">{label}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="marquee-mask pause-on-hover flex overflow-hidden">
      <div className={`flex w-max items-center gap-3 pr-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map(([label, slug], i) => (
          <div key={`${label}-${i}`} className="flex items-center gap-3 rounded-full border border-line bg-surface py-2 pl-2 pr-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-raised">
              <TechIcon label={label} slug={slug} size="h-6 w-6" />
            </span>
            <span className="whitespace-nowrap font-display text-sm font-bold text-ink">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState('all');
  const visible = skills.filter(x => selected === 'all' || x[2] === selected);
  const withLogos = skills.filter(s => s[1]);
  const half = Math.ceil(withLogos.length / 2);

  return (
    <section id="skills" className="section overflow-hidden">
      <div className="wrap">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">03 / MY TOOLKIT</p>
          <h2 className="heading mt-5">The tools behind <span className="hl">my work.</span></h2>
          <p className="paragraph mx-auto mt-5 max-w-[660px]">Technology is a means to solve real problems. Here's the stack I work with and continue to explore.</p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12 space-y-3" aria-hidden="true">
        <MarqueeRow items={withLogos.slice(0, half)} />
        <MarqueeRow items={withLogos.slice(half)} reverse />
      </Reveal>

      <div className="wrap">
        <div className="mx-auto mb-10 mt-14 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-line bg-surface p-1.5">
          {groups.map(g => {
            const on = selected === g.key;
            const count = g.key === 'all' ? skills.length : skills.filter(s => s[2] === g.key).length;
            return (
              <button key={g.key} type="button" onClick={() => setSelected(g.key)} aria-pressed={on} className={`relative rounded-full px-4 py-2.5 text-[12px] font-semibold transition-colors sm:px-5 ${on ? 'text-on-brand' : 'text-muted hover:text-ink'}`}>
                {on && <motion.span layoutId="skill-pill" className="absolute inset-0 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span className="relative z-10 flex items-center gap-2">
                  {g.name}
                  <span className={`rounded-full px-1.5 py-0.5 font-mono text-[9px] ${on ? 'bg-on-brand/15' : 'bg-raised'}`}>{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 xl:grid-cols-7">
          <AnimatePresence mode="popLayout">
            {visible.map(([label, slug, group], i) => (
              <motion.div
                layout
                key={label}
                initial={{ opacity: 0, scale: 0.8, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.3), ease: [0.22, 1, 0.36, 1] }}
              >
                <SkillTile label={label} slug={slug} group={group} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 border-t border-line pt-5 text-center font-mono text-[10px] uppercase tracking-[.1em] text-muted">Flutter, FastAPI & Alembic are part of my ongoing development learning. IDE logos indicate tools I use.</div>
      </div>
    </section>
  );
}
