"use client";

import { motion } from "framer-motion";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Who() {
    return (
        <section 
            className="relative flex flex-col w-full p-4 md:p-8 mt-8 md:mt-16" 
            aria-labelledby="about-heading"
        >
            <motion.div 
                className="flex flex-col self-center gap-4 md:gap-6 w-full md:w-2/3 lg:w-1/2"
                initial="initial"
                animate="animate"
                variants={fadeIn}
            >
                <h2 
                    id="about-heading"
                    className="text-xl md:text-2xl font-bold text-[#021334]"
                >
                    Qui suis-je ?
                </h2>
                <div className="space-y-4 text-base md:text-lg text-[#021334]/90">
                    <p>
                        Je suis un développeur fullstack passionné par la programmation 
                        et les nouvelles technologies. J&apos;aime apprendre et découvrir 
                        de nouvelles choses, et je suis toujours à la recherche de 
                        nouveaux défis.
                    </p>
                    <p>
                        Je suis également un grand fan de jeux vidéo et de musique.
                        Mes stacks préférées sont Next et Node.js, mais je suis 
                        également à l&apos;aise avec d&apos;autres technologies tel que Symfony.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}