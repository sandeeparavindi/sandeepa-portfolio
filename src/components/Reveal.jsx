import { motion } from 'framer-motion';

export default function Reveal({ children, className = '', delay = 0, as = 'div', ...rest }) {
  const Component = motion[as] || motion.div;
  return (
    <Component className={className}
      initial={{ opacity: 0, y: 42, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: .8, delay, ease: [.22, 1, .36, 1] }}
      {...rest}>
      {children}
    </Component>
  );
}
