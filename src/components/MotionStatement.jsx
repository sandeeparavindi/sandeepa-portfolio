import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

function Line({ items, outlinedIndex }) {
  return items.map((t, i) => (
    <span key={i} className="flex items-center gap-[.35em]">
      <span className={i === outlinedIndex ? 'text-outline' : ''}>{t}</span>
      <span className="text-[.5em]">✳</span>
    </span>
  ));
}

export default function MotionStatement() {
  const target = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end start'] });
  const left = useTransform(scrollYProgress, [0, 1], ['-18%', '0%']);
  const right = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);

  return (
    <section ref={target} className="relative isolate overflow-hidden py-20 sm:py-28" aria-label="Design and development philosophy">
      <div className="relative" aria-hidden="true">
        <div className="relative z-10 -rotate-[4deg] scale-x-110 border-y-2 border-ink bg-brand py-4 text-on-brand shadow-float sm:py-5">
          <motion.div className="flex w-max items-center gap-[.35em] whitespace-nowrap font-display text-[clamp(2.4rem,7vw,6rem)] font-extrabold leading-none tracking-[-.04em]" style={reduced ? undefined : { x: left }}>
            <Line items={['THINK BIG.', 'BUILD BETTER.', 'THINK BIG.', 'BUILD BETTER.']} outlinedIndex={1} />
          </motion.div>
        </div>
        <div className="relative -mt-6 rotate-[3deg] scale-x-110 bg-night pb-4 pt-9 text-night-foreground sm:-mt-8 sm:pb-6 sm:pt-12">
          <motion.div className="flex w-max items-center gap-[.35em] whitespace-nowrap font-display text-[clamp(1.8rem,5vw,4.2rem)] font-extrabold leading-none tracking-[-.04em]" style={reduced ? undefined : { x: right }}>
            <span className="flex items-center gap-[.35em]"><span className="text-outline-brand">CREATE WITH PURPOSE.</span><span className="text-[.5em] text-brand">✳</span></span>
            <span className="flex items-center gap-[.35em]"><span>CREATE WITH PURPOSE.</span><span className="text-[.5em] text-brand">✳</span></span>
            <span className="flex items-center gap-[.35em]"><span className="text-outline-brand">CREATE WITH PURPOSE.</span><span className="text-[.5em] text-brand">✳</span></span>
            <span className="flex items-center gap-[.35em]"><span>CREATE WITH PURPOSE.</span><span className="text-[.5em] text-brand">✳</span></span>
          </motion.div>
        </div>
      </div>
      <p className="sr-only">Thoughtful design, reliable engineering and useful AI-powered solutions.</p>
    </section>
  );
}
