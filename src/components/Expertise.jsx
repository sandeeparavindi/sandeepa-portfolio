import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code2, BrainCircuit, Server, Smartphone, Plus } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  { title: 'AI-Powered Application Development', label: 'FEATURED FOCUS', icon: BrainCircuit, desc: 'Integrating useful intelligence into real application experiences.', items: ['Google Gemini AI integration in recruitment workflows', 'React and TypeScript interfaces for intelligent features', 'User-focused interaction design for AI-enhanced systems'] },
  { title: 'Full-Stack Web Development', label: 'FRONTEND + BACKEND', icon: Code2, desc: 'Building complete modern applications from polished frontend to structured backend.', items: ['React, TypeScript and Tailwind CSS', 'ASP.NET Core, Node.js and Express.js', 'Secure REST APIs and MySQL integration'] },
  { title: 'Backend & API Engineering', label: 'SYSTEM DESIGN', icon: Server, desc: 'Reliable backend services with maintainable architecture and secure data access.', items: ['Java, Spring Boot and C#', 'JWT authentication and role-based access', 'Hibernate/JPA, Prisma ORM and relational databases'] },
  { title: 'Mobile App Development', label: 'CURRENTLY LEARNING', icon: Smartphone, desc: 'Growing cross-platform application experience with Flutter and Dart.', items: ['Flutter and Dart user interfaces', 'Mobile-to-FastAPI integrations', 'Collaborative project development'] },
];

export default function Expertise() {
  const [open, setOpen] = useState(0);
  return (
    <section id="expertise" className="section border-y border-line bg-surface/60">
      <div className="wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">02 / WHAT I DO</p>
          <h2 className="heading mt-5">How I bring ideas <span className="hl">to life.</span></h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">From an initial idea to a thoughtfully engineered product — these are the areas I enjoy most.</p>
          <div className="mt-10 hidden items-center gap-3 lg:flex" aria-hidden="true">
            {services.map((s, i) => (
              <button
                key={s.title}
                type="button"
                tabIndex={-1}
                onClick={() => setOpen(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${open === i ? 'w-12 bg-brand' : 'w-5 bg-line hover:bg-muted'}`}
              />
            ))}
          </div>
        </Reveal>

        <div className="space-y-3">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className={`group relative overflow-hidden rounded-[26px] border transition-colors duration-500 ${isOpen ? 'border-brand bg-brand text-on-brand shadow-brand' : 'border-line bg-page text-ink hover:border-ink/40'}`}>
                  <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center gap-4 px-5 py-6 text-left sm:gap-6 sm:px-8 sm:py-7" aria-expanded={isOpen}>
                    <span className={`font-display text-3xl font-extrabold tracking-tight transition-colors sm:text-4xl ${isOpen ? 'text-on-brand' : 'text-outline-muted'}`}>0{i + 1}</span>
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${isOpen ? 'rotate-[-8deg] bg-on-brand text-brand' : 'bg-raised text-ink group-hover:bg-brand group-hover:text-on-brand'}`}>
                      <s.icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="flex-1">
                      <span className={`mb-1 hidden font-mono text-[9.5px] uppercase tracking-[.2em] sm:block ${isOpen ? 'opacity-70' : 'text-muted'}`}>{s.label}</span>
                      <span className="block font-display text-lg font-bold tracking-tight sm:text-[22px]">{s.title}</span>
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${isOpen ? 'border-on-brand/30' : 'border-line'}`}>
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <div className="grid gap-5 border-t border-on-brand/15 px-5 pb-8 pt-6 sm:grid-cols-[.8fr_1fr] sm:px-8">
                          <p className="max-w-sm text-[15px] font-medium leading-7">{s.desc}</p>
                          <div className="space-y-2.5">
                            {s.items.map((item, k) => (
                              <motion.p key={item} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + k * 0.06 }} className="flex items-start gap-2.5 rounded-xl bg-on-brand/[.07] px-3 py-2.5 text-sm leading-6">
                                <ArrowUpRight size={16} className="mt-1 shrink-0" />{item}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
