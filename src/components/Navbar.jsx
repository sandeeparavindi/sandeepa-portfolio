import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from 'lucide-react';
import { navigation, profile } from '@/data/portfolioData';

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive('#' + entry.target.id);
      });
    }, { rootMargin: '-25% 0px -58% 0px' });
    navigation.forEach(({ href }) => {
      const node = document.querySelector(href);
      if (node) observer.observe(node);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const esc = e => { if (e.key === 'Escape') setOpen(false); };
    const resize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('keydown', esc);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('keydown', esc);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const isDark = theme === 'dark';

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-4 sm:py-5'}`}
    >
      <div className="wrap">
        <div className={`glass relative mx-auto flex h-[62px] max-w-[1180px] items-center justify-between gap-3 rounded-full border px-2.5 transition-all duration-500 sm:h-[66px] sm:px-3 ${scrolled ? 'border-line shadow-float' : 'border-line/60'}`}>
          <a href="#home" onClick={() => setOpen(false)} aria-label="Sandeepa Ravindi — Home" className="group flex shrink-0 items-center gap-2.5 pl-1">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-[16px] font-extrabold tracking-[-.06em] text-on-brand transition-transform duration-500 group-hover:rotate-[360deg]">sr.</span>
            <span className="hidden font-display text-[15px] font-bold tracking-tight text-ink sm:block">Sandeepa<span className="text-accent">.</span></span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 rounded-full border border-line/70 bg-page/50 p-1 lg:flex">
            {navigation.map(link => {
              const on = active === link.href;
              return (
                <a
                  href={link.href}
                  key={link.href}
                  aria-current={on ? 'location' : undefined}
                  className={`relative rounded-full px-3 py-2 text-[12px] font-semibold transition-colors duration-300 xl:px-3.5 ${on ? 'text-on-brand' : 'text-muted hover:text-ink'}`}
                >
                  {on && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-brand"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={onThemeToggle}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-accent"
              title={isDark ? 'Light mode' : 'Dark mode'}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ y: 18, rotate: -90, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: -18, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <a href="#contact" className="btn-brand hidden !min-h-10 !px-5 !py-0 !text-[12px] sm:inline-flex">Let's talk <ArrowUpRight size={14} /></a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(o => !o)}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                id="mobile-nav"
                aria-label="Mobile navigation"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="glass absolute left-0 right-0 top-[calc(100%+10px)] grid gap-1 rounded-[26px] border border-line p-3 shadow-float lg:hidden"
              >
                {navigation.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold ${active === link.href ? 'bg-brand text-on-brand' : 'text-ink hover:bg-raised'}`}
                  >
                    {link.label}<ArrowUpRight size={15} />
                  </motion.a>
                ))}
                <a href={profile.resume} download onClick={() => setOpen(false)} className="mt-1 flex items-center justify-between rounded-xl border border-line px-4 py-3 text-sm font-bold text-ink">Download CV <Download size={16} /></a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
