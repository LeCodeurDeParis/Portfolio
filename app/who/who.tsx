"use client";


export default function Who() {
    return (
        <div className="relative flex flex-col self-start items-start justify-center ml-8 w-full p-8">
            <div className="flex flex-col gap-4 z-10 rounded-lg w-1/3">
                <h2 className="text-xl font-bold text-start z-10">Qui suis-je ?</h2>
                <p className="text-start z-10">
                    Je suis un développeur fullstack passionné par la programmation et les nouvelles technologies.
                    J'aime apprendre et découvrir de nouvelles choses, et je suis toujours à la recherche de nouveaux défis.
                </p>
                <p className="text-start z-10">
                    Je suis également un grand fan de jeux vidéo et de musique.
                    Mes stacks préférées sont Next et Node.js, mais je suis également à l'aise avec d'autres technologies tel que Symfony.
                </p>
            </div>
            
            {/* <motion.div className="absolute -inset-1 rounded-lg"
            style={{background:
                rotatingBg
            }}/> */}
        </div>
    );
}
