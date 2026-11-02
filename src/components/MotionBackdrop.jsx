import { motion, useScroll, useTransform } from 'framer-motion';

export default function MotionBackdrop() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="dot-bg absolute inset-0 opacity-60" />
      <motion.div className="brand-glow-soft absolute -right-[260px] top-[20vh] h-[640px] w-[640px] rounded-full" style={{ y }} />
      <motion.div className="brand-glow-soft absolute -left-[300px] top-[80vh] h-[600px] w-[600px] rounded-full" style={{ y: y2 }} />
    </div>
  );
}
