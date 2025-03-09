import { motion } from 'framer-motion';
import { ElementType } from 'react';

type AnimatedTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  Component?: ElementType;
}

export function AnimatedText({ children, className = "", delay = 0, yOffset = 0, Component = "div" }: AnimatedTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeInOut" }}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}