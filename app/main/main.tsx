"use client";

import Projets from "./projets/projets";
import Who from "./who/who";

import { motion } from "framer-motion";

export default function Main() {
    const dotNbr = 6;

    const dotVariants = {
        animate: (custom : number) => ({
        x: ["20%", "1880%"],
        transition: {
            duration: 3,         
            ease: "linear",      
            repeat: Infinity,    
            delay: custom * 0.6, 
        },
        }),
    };

    return(
        <main className="flex flex-col items-center justify-center mt-16 py-8 px-4">
            <Who />
                <div className="relative w-1/5 h-12" style={{ transform: 'rotate(18deg)' }}>
                    <hr className="absolute inset-0 border-4 rounded-full bg-[#021334] border-[#021334]"/>
                    {Array.from({ length: dotNbr }).map((_, i) => (
                        <motion.hr
                            key={i}
                            custom={i}
                            variants={dotVariants}
                            initial={{ x: "20%" }}
                            animate="animate"
                            className="border-2 border-[#A5C5CC] rounded-full w-[5%] absolute inset-y-0.5"
                        />
                    ))}
                </div>
            <Projets />
        </main>
    )
}