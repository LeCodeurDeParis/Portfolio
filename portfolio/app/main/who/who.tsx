"use client";

import { clamp, motion, useTime, useTransform } from "framer-motion";

export default function Who() {
    const time = useTime();

    const rotate = useTransform(time, [0, 6000], [0, 360], {
        clamp: false
    });
    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, #A5C5CC, #021334)`
    })
    return (
        <div className="relative flex flex-col items-center justify-center gap-4 w-3/4 bg-[#A5C5CC]">
            <div className="bg-[#A5C5CC] z-10 rounded-lg p-4">
                <h2 className="text-xl font-bold text-center z-10">Qui suis-je ?</h2>
                <p className="text-center z-10">
                    Je suis un développeur fullstack passionné par la programmation et les nouvelles technologies.
                    J'aime apprendre et découvrir de nouvelles choses, et je suis toujours à la recherche de nouveaux défis.
                    Je suis également un grand fan de jeux vidéo et de musique.
                    Mes stacks préférées sont Next et Node.js, mais je suis également à l'aise avec d'autres technologies tel que Symfony.
                </p>
            </div>
            
            <motion.div className="absolute -inset-1 rounded-lg"
            style={{background:
                rotatingBg
            }}/>
        </div>
    );
}
