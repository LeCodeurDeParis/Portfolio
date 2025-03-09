import { motion } from 'framer-motion';

type AnimatedLineProps = {
  width?: string;
  delay?: number;
}

export function AnimatedLine({ width = "100%", delay = 0 }: AnimatedLineProps) {
  return (
    <motion.hr
      className="border-[#021334] border-2 rounded-full"
      initial={{ width: "0%", opacity: 0 }}
      animate={{ width, opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeInOut" }}
    />
  );
}