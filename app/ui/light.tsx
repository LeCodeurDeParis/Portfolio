"use client"
import { motion } from "framer-motion";

interface LightProps {
    size: number;
    top: number;
    left: number;
    color: string;
    className: string;
}

export default function Light({size, top, left, color, className}: LightProps) {
    return (
      <motion.div
        className={className}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}rem`,
          height: `${size}rem`,
          backgroundColor: `#${color}`,
        }}
        animate={{
          scale: [1, 1.5, 1], // Variation de taille
          x: ["0%", "10%", "-10%", "0%"], // Légers mouvements horizontaux
          y: ["0%", "10%", "-10%", "0%"], // Légers mouvements verticaux
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
    />
    );
  }