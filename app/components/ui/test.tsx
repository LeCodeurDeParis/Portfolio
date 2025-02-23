import { motion } from "framer-motion";
import React from "react";

interface FlowLineProps {
    width?: string;
    particleCount?: number;
    particleSize?: number;
    particleColor?: string;
    lineColor?: string;
    lineWidth?: number;
    speed?: number;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    angle?: string;
    amplitude?: number;
}

const FlowLine: React.FC<FlowLineProps> = ({
    width = "300px",
    particleCount = 5,
    particleSize = 8,
    particleColor = "#A5C5CC",
    lineColor = "#021334",
    lineWidth = 4,
    speed = 2,
    top,
    left,
    right,
    bottom,
    angle = "0deg",
    amplitude = 20
}) => {
    return (
        <div 
            style={{
                position: 'absolute',
                width,
                height: `${amplitude * 2}px`,
                top,
                left,
                right,
                bottom,
                transform: `rotate(${angle})`,
                overflow: 'visible'
            }}
        >
            {/* Ligne statique */}
            <div 
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: lineWidth,
                    backgroundColor: lineColor,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderRadius: lineWidth,
                }}
            />

            {/* Particules */}
            {Array.from({ length: particleCount }).map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: particleSize,
                        height: particleSize,
                        backgroundColor: particleColor,
                        borderRadius: '50%',
                        left: 0,
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        left: ['0%', '100%'],
                        y: [
                            amplitude,
                            -amplitude,
                            amplitude
                        ]
                    }}
                    transition={{
                        left: {
                            duration: speed,
                            repeat: Infinity,
                            ease: "linear",
                            delay: (i * speed) / particleCount
                        },
                        y: {
                            duration: speed / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: (i * speed) / particleCount,
                            times: [0, 0.5, 1]
                        }
                    }}
                />
            ))}
        </div>
    );
};

export default FlowLine;