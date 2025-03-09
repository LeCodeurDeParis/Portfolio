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
    const skillsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: skillsRef,
        offset: ["start end", "end end"]
    });

    return(
        <main className="flex flex-col items-center justify-center mt-16 py-8 px-8 gap-32">
            <div className="relative">
                <Who />
                <Projets />
            </div>
            <h2 className="text-2xl font-bold text-[#021334]">Mes Compétences</h2>
            <div ref={skillsRef} className="w-full h-[200vh] relative">
                <motion.div 
                    style={{ 
                        scaleY: scrollYProgress ,
                        transformOrigin: 'top'
                    }} 
                    className="w-2 h-[85%] absolute left-[50%] bg-[#021334] z-[-1] rounded-full"
                />
                {[...Array(Math.ceil(skills.length / 2))].map((_, index) => (
                    <div key={index} className="absolute w-full" style={{ top: `${index * 12.5}%` }}>
                        {/* Logo gauche */}
                        {skills[index * 2] && (
                            <div className="absolute left-[30%] flex flex-col items-center gap-2 hover:scale-110">
                                <Image
                                    src={skills[index * 2].src}
                                    alt={skills[index * 2].alt}
                                    width={80}
                                    height={80}
                                />
                                <p className="text-[#021334] font-medium">{skills[index * 2].name}</p>
                            </div>
                        )}
                        {/* Logo droite */}
                        {skills[index * 2 + 1] && (
                            <div className="absolute right-[30%] flex flex-col items-center gap-2 hover:scale-110 ">
                                <Image
                                    src={skills[index * 2 + 1].src}
                                    alt={skills[index * 2 + 1].alt}
                                    width={80}
                                    height={80}
                                />
                                <p className="text-[#021334] font-medium">{skills[index * 2 + 1].name}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}