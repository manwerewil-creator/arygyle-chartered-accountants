import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  animate,
  useReducedMotion,
  type Variants,
} from 'motion/react';

/* ============================================================
   Shared animation variants
   ============================================================ */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ============================================================
   Reveal — fades + slides content in when it scrolls into view
   ============================================================ */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'li' | 'span';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  y = 26,
  once = true,
  as = 'div',
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
};

/* ============================================================
   Stagger — reveals children one after another on scroll-in
   ============================================================ */
export const Stagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}> = ({ children, className = '', once = true }) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: '-60px' }}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <motion.div className={className} variants={fadeUp}>
    {children}
  </motion.div>
);

/* ============================================================
   TextReveal — animates a headline word-by-word on scroll-in
   ============================================================ */
interface TextRevealProps {
  text: string;
  className?: string;
  highlight?: string;          // optional word(s) to render in gold
  as?: 'h1' | 'h2' | 'h3' | 'p';
  delay?: number;
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  highlight,
  as = 'h2',
  delay = 0,
  once = true,
}) => {
  const reduce = useReducedMotion();
  const Tag = as as any;
  const words = text.split(' ');
  const highlightWords = highlight ? highlight.split(' ') : [];

  if (reduce) {
    return (
      <Tag className={className}>
        {words.map((w, i) =>
          highlightWords.includes(w) ? (
            <span key={i} className="text-gold-accent">{w} </span>
          ) : (
            <span key={i}>{w} </span>
          )
        )}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: 'inline' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-40px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.045, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => {
          const isHi = highlightWords.includes(word);
          return (
            <span
              key={i}
              style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
            >
              <motion.span
                style={{ display: 'inline-block' }}
                className={isHi ? 'text-gold-accent' : undefined}
                variants={{
                  hidden: { y: '110%', opacity: 0 },
                  visible: {
                    y: '0%',
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
              <span>&nbsp;</span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
};

/* ============================================================
   Counter — counts up to a target when scrolled into view
   ============================================================ */
interface CounterProps {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  to,
  from = 0,
  duration = 1.8,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, from, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

/* ============================================================
   Magnetic — element subtly follows the cursor on hover
   ============================================================ */
export const Magnetic: React.FC<{
  children: React.ReactNode;
  className?: string;
  strength?: number;
}> = ({ children, className = '', strength = 0.35 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================================
   Marquee — infinite horizontal scroll of items
   ============================================================ */
export const Marquee: React.FC<{
  items: React.ReactNode[];
  className?: string;
}> = ({ items, className = '' }) => (
  <div className={`marquee-mask overflow-hidden ${className}`}>
    <div className="marquee-track gap-4">
      {[...items, ...items].map((item, i) => (
        <div key={i} className="flex-shrink-0">
          {item}
        </div>
      ))}
    </div>
  </div>
);

/* ============================================================
   ScrollProgress — thin gold progress bar fixed to viewport top
   ============================================================ */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-accent via-amber-300 to-gold-accent origin-left z-[60]"
    />
  );
};
