import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Heart } from 'lucide-react';
import { navigation, profile } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-night-foreground">
      <div className="brand-glow pointer-events-none absolute -top-40 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full opacity-50" aria-hidden="true" />
      <div className="wrap relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12 lg:py-20">
          <div>
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-base font-extrabold text-on-brand transition-transform duration-500 group-hover:rotate-[360deg]">sr.</span>
              <span className="font-display text-xl font-bold tracking-[-.03em]">Sandeepa Ravindi</span>
            </a>
            <p className="mt-5 max-w-[320px] text-sm leading-[1.8] text-night-muted">Curious mind, clean code and a commitment to building better digital experiences.</p>
          </div>
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.17em] text-brand">NAVIGATE</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navigation.slice(0, 6).map(l => (
                <a key={l.href} href={l.href} className="group flex w-fit items-center gap-1 text-[13px] text-night-muted transition-colors hover:text-brand">
                  <span className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-3" />{l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.17em] text-brand">CONNECT</p>
            <div className="space-y-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-1.5 text-[13px] text-night-muted transition-colors hover:text-brand">GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-1.5 text-[13px] text-night-muted transition-colors hover:text-brand">LinkedIn <ArrowUpRight size={13} /></a>
              <a href={`mailto:${profile.email}`} className="flex w-fit items-center gap-1.5 text-[13px] text-night-muted transition-colors hover:text-brand">Email <ArrowUpRight size={13} /></a>
              <a href={profile.resume} download className="flex w-fit items-center gap-1.5 text-[13px] text-night-muted transition-colors hover:text-brand">Download CV <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="select-none whitespace-nowrap text-center font-display text-[clamp(3rem,13.5vw,12rem)] font-extrabold leading-[.85] tracking-[-.01em]"
          aria-hidden="true"
        >
          <span className="text-outline-brand">SANDEEPA</span><span className="text-brand">.</span>
        </motion.div>

        <div className="flex flex-col gap-3 border-t border-night-line py-6 text-[11px] text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sandeepa Ravindi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Developed by Sandeepa Ravindi.
          </p>
          <a href="#home" className="group inline-flex items-center gap-2 font-semibold text-night-foreground transition-colors hover:text-brand">
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-on-brand transition-transform group-hover:-translate-y-1">
      <ArrowUp size={13} />
    </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
