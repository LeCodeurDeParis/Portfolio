"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomeHeader() {
    return (
        <header className="flex flex-col gap-8 justify-center items-center px-4 py-8 mt-24">
            <div className="w-36 h-36 relative">
                <Image src="/Paul.jpg" alt="Paul" layout='fill' className="rounded-full object-cover" />
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <motion.h1 
                    className="text-2xl font-bold text-[#021334]"
                    initial={{ opacity: 0, y: -20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    Paul Boisaubert-Baillion
                </motion.h1>
                <motion.hr 
                    className="border-[#021334] border-2 rounded-full"
                    initial={{ width: "0%", opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                />
                <motion.p 
                    className="text-xl font-bold"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1, delay:0.3, ease: "easeOut" }}
                >
                    Fullstack Developer
                </motion.p>
                <motion.hr 
                    className="border-[#021334] border-2 rounded-full"
                    initial={{ width: "0%", opacity: 0 }}
                    animate={{ width: "50%", opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                />
            </div>
        </header>
    );
}