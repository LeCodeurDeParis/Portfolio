"use client";

import Image from "next/image";
import Link from "next/link";
import CustomHr from "../components/ui/customHr";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export default function Projets() {
    return (
        <main className="flex flex-col items-center justify-start mt-16 py-8 px-4">
            <motion.h1 
                className="text-4xl font-bold text-[#021334] mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Mes Projets
            </motion.h1>
            
            <div className="w-full h-full relative flex flex-col items-center gap-32" style={{ minHeight: '100vh' }}>
                {/* Projet Minecraft */}
                <motion.div 
                    className="w-full flex flex-col md:flex-row items-center justify-center gap-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="w-full md:w-1/2 relative group">
                        <Link href="https://github.com" target="_blank" className="block overflow-hidden rounded-lg">
                            <Image
                                src="/Minecraft_Vitrail.png"
                                alt="Projet Minecraft"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </Link>
                        <CustomHr 
                            dotNbr={4}
                            start="0"
                            end="100"
                            angle="0deg"
                            speed={2}
                            delay={0.5}
                            width="80%"
                            top="110%"
                            left="10%"
                            className="border-[#021334] border-4 bg-[#021334] rounded-full"
                            classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
                        />
                    </div>
                    <div className="w-full md:w-1/3 text-[#021334]">
                        <h2 className="text-2xl font-bold mb-4">MinecraftPallet</h2>
                        <p className="text-lg mb-4">Un générateur intelligent de palettes de blocs Minecraft pour vous aider à créer des compositions harmonieuses pour vos constructions.</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">HTML</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">CSS</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">JavaScript</span>
                        </div>
                    </div>
                </motion.div>

                {/* Projet Pokemon */}
                <motion.div 
                    className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="w-full md:w-1/2 relative group">
                        <Link href="https://github.com" target="_blank" className="block overflow-hidden rounded-lg">
                            <Image
                                src="/Pokemon_1.png"
                                alt="Projet Pokemon"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </Link>
                        <CustomHr 
                            dotNbr={4}
                            start="0"
                            end="100"
                            angle="0deg"
                            speed={2}
                            delay={0.5}
                            width="80%"
                            top="110%"
                            left="10%"
                            className="border-[#021334] border-4 bg-[#021334] rounded-full"
                            classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
                        />
                    </div>
                    <div className="w-full md:w-1/3 text-[#021334]">
                        <h2 className="text-2xl font-bold mb-4">Pokemon Fighter</h2>
                        <p className="text-lg mb-4">Un simulateur de combat Pokémon tour par tour développé en programmation orientée objet.</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">PHP</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">POO</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">MySQL</span>
                        </div>
                    </div>
                </motion.div>

                {/* Projet Netflix */}
                <motion.div 
                    className="w-full flex flex-col md:flex-row items-center justify-center gap-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="w-full md:w-1/2 relative group">
                        <Link href="https://github.com" target="_blank" className="block overflow-hidden rounded-lg">
                            <Image
                                src="/Netflix_Vitrail.png"
                                alt="Projet Netflix"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </Link>
                        <CustomHr 
                            dotNbr={4}
                            start="0"
                            end="100"
                            angle="0deg"
                            speed={2}
                            delay={0.5}
                            width="80%"
                            top="110%"
                            left="10%"
                            className="border-[#021334] border-4 bg-[#021334] rounded-full"
                            classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
                        />
                    </div>
                    <div className="w-full md:w-1/3 text-[#021334]">
                        <h2 className="text-2xl font-bold mb-4">Netflix Clone</h2>
                        <p className="text-lg mb-4">Une reproduction fidèle de l'interface utilisateur de Netflix après connexion, incluant la navigation et l'affichage des contenus.</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">React.Js</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">Tailwind</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">API TMDB</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
