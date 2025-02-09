import { motion } from "framer-motion";

interface CustomHrProps {
  dotNbr: number;
  width: string;
  start: string;
  end: string;
  angle: string;
  speed: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className: string;
  classNameDots?: string;
}

const CustomHr: React.FC<CustomHrProps> = ({ dotNbr, width, start, end, angle, speed, top, left, right, bottom, className, classNameDots }) => {
  const dotVariants = {
    animate: (custom: number) => ({
      x: [start, end],
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
        delay: custom * 0.6,
      },
    }),
  };

  return (
    <div className={`relative ${width} h-12`} style={{ transform: `rotate(${angle})` }}>
      <hr 
        className={`absolute inset-0 ${className}`}
        style={{
            top: `${top}%`,
            left: `${left}%`,
            right: `${right}%`,
            bottom: `${bottom}%`,
        }}/>
      {Array.from({ length: dotNbr }).map((_, i) => (
        <motion.hr
          key={i}
          custom={i}
          variants={dotVariants}
          initial={{ x: "0%" }}
          animate="animate"
          className={`border-4 rounded-full w-[5%] absolute ${classNameDots}`}
          style={{
              top: `${top}%`,
              left: `${left}%`,
              right: `${right}%`,
              bottom: `${bottom}%`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomHr;