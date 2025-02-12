import { motion } from "framer-motion";

interface CustomHrProps {
  dotNbr: number;
  start: string;
  end: string;
  angle: string;
  speed: number;
  delay: number;
  width?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className: string;
  classNameDots?: string;
}

const CustomHr: React.FC<CustomHrProps> = ({ 
  dotNbr, 
  start, 
  end, 
  angle, 
  speed, 
  delay, 
  width = '10%',
  top, 
  left, 
  right, 
  bottom, 
  className, 
  classNameDots 
}) => {
  const normalizePercentage = (value: string) => {
    const numValue = parseInt(value);
    return `${Math.max(0, Math.min(100, numValue))}%`;
  };

  const dotVariants = {
    animate: (custom: number) => ({
      left: [normalizePercentage(start), normalizePercentage(end)],
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
        delay: custom * delay
      },
    }),
  };

  return (
    <div style={{ 
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width: width,
      height: '96px',
      transform: `rotate(${angle})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '4px'
      }}>
        <hr 
          className={className}
          style={{
            position: 'absolute',
            width: '100%',
            margin: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 0
          }}
        />
        {Array.from({ length: dotNbr }).map((_, i) => (
          <motion.hr
            key={i}
            custom={i}
            variants={dotVariants}
            initial={{ left: normalizePercentage(start) }}
            animate="animate"
            className={`border-[6px] rounded-full ${classNameDots}`}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              }}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomHr;