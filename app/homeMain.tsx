"use client";

import { useScroll, motion } from "motion/react";
import { useRef } from "react";
import Projets from "./components/rProjets/rProjets";
import Who from "./components/who/who";
import Image from "next/image";

const skills = [
    { src: "/html.svg", alt: "html", name: "HTML"  },
    { src: "/css.svg", alt: "css", name: "CSS"  },
    { src: "/js.svg", alt: "javascript", name: "JavaScript"  },
    { src: "/ts.svg", alt: "typescript", name: "TypeScript"  },
    { src: "/react.svg", alt: "react", name: "React"  },
    { src: "/next_logo.svg", alt: "next", name: "Next"  },
    { src: "/tailwind.svg", alt: "tailwind", name: "Tailwind"  },
    { src: "/node.svg", alt: "node", name: "Node"  },
    { src: "/python.svg", alt: "python", name: "Python"  },
    { src: "/pytorch.svg", alt: "pytorch", name: "Pytorch"  },
    { src: "/php.svg", alt: "php", name: "PHP"  },
    { src: "/symfony.svg", alt: "symfony", name: "Symfony"  },
    { src: "/sass.svg", alt: "sass", name: "Sass"  },
    { src: "/git.svg", alt: "git", name: "Git"  },
];

export default function Main() {
    const skillsRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: skillsRef,
        offset: ["start center", "end end"]
    });

    return(
        <main 
        className="flex flex-col items-center justify-center mt-8 md:mt-16 py-4 md:py-8 px-4 md:px-8 gap-16 md:gap-32" 
        role="main">
            <section className="relative w-full flex flex-col gap-16 md:gap-32">
                <Who />
                <Projets />
            </section>


            <section ref={skillsRef} className="w-full h-[200vh] relative" aria-labelledby="skills-heading">
            <h2 className="text-center text-xl md:text-2xl font-bold text-[#021334] w-full mb-8 md:mb-12" id="skills-heading">Mes Compétences</h2>
                <motion.div 
                    style={{ 
                        scaleY: scrollYProgress ,
                        transformOrigin: 'top'
                    }} 
                    className="w-1 md:w-2 h-[85%] absolute left-[50%] top-[10%] bg-[#021334] z-[-1] rounded-full"
                    aria-hidden="true"
                />
                <ul className="list-none p-0 m-0">
                    {[...Array(Math.ceil(skills.length / 2))].map((_, index) => (
                        <li key={index} className="absolute w-full" style={{ top: `${(index * 12.5) + 10}%` }}>
                            {/* Logo gauche */}
                            {skills[index * 2] && (
                                <div 
                                    className="absolute left-[20%] md:left-[30%] flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                                    role="group" 
                                    aria-label={`Compétences : ${skills[index * 2].name}`}
                                >
                                    <div className="p-4 bg-white/80 rounded-full shadow-lg border border-[#021334]/10 backdrop-blur-sm flex items-center justify-center">
                                        <Image
                                            src={skills[index * 2].src}
                                            alt={`Logo ${skills[index * 2].alt}`}
                                            width={80}
                                            height={80}
                                            className="w-10 h-10 md:w-16 md:h-16"
                                        />
                                    </div>
                                    <p className="text-sm md:text-base text-[#021334] font-medium">{skills[index * 2].name}</p>
                                </div>
                            )}
                            {/* Logo droite */}
                            {skills[index * 2 + 1] && (
                                <div 
                                    className="absolute right-[20%] md:right-[30%] flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                                    role="group"
                                    aria-label={`Compétences : ${skills[index * 2 + 1].name}`}>
                                    <div className="p-4 bg-white/80 rounded-full shadow-lg border border-[#021334]/10 backdrop-blur-sm flex items-center justify-center">
                                        <Image
                                            src={skills[index * 2 + 1].src}
                                            alt={skills[index * 2 + 1].alt}
                                            width={80}
                                            height={80}
                                            className="w-10 h-10 md:w-16 md:h-16"
                                        />
                                    </div>
                                    <p className="text-sm md:text-base text-[#021334] font-medium">{skills[index * 2 + 1].name}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}