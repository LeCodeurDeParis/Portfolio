"use client"

import Image from 'next/image';
import { AnimatedText } from './components/ui/animated-text';
import { AnimatedLine } from './components/ui/animated-line';

export default function HomeHeader() {
    return (
        <header className="flex flex-col gap-4 md:gap-8 justify-center items-center px-4 py-4 md:py-8 mt-20 md:mt-24">
            <div className="w-24 h-24 md:w-36 md:h-36 relative">
                <Image 
                    src="/Paul.jpg" 
                    alt="Paul" 
                    layout='fill' 
                    className="rounded-full object-cover"
                />
            </div>
            <div className='flex flex-col gap-2 items-center px-2'>
                <AnimatedText 
                    className="text-xl md:text-2xl font-bold text-[#021334]"
                    yOffset={-20}
                    Component="h1"
                >
                    Paul Boisaubert-Baillion
                </AnimatedText>
                
                <AnimatedLine delay={0.1}/>
                
                <AnimatedText 
                    className="text-lg md:text-xl font-bold"
                    delay={0.3}
                >
                    Fullstack Developer
                </AnimatedText>
                
                <AnimatedLine width="50%" delay={0.5}/>
            </div>
        </header>
    );
}