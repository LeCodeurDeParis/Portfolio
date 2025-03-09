"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { 
        opacity: 0, 
        y: 60 
    },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.2
        }
    }
};

const itemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

export default function Projets() {
    return (
        <main className="flex flex-col items-center justify-start mt-16 py-8 px-8 gap-32">
            <motion.h1 
                className="text-4xl font-bold text-[#021334]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Mes Projets
            </motion.h1>
            
            <div className="w-full h-full relative flex flex-col items-center gap-32" style={{ minHeight: '100vh' }}>
                {/* Projet Minecraft */}
                <motion.div
                    id="minecraft"
                    className="w-full flex flex-col md:flex-row items-center justify-center gap-8 "
                    initial="initial"
                    animate="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <motion.div variants={itemAnimation} className="w-full md:w-1/2 relative group">
                        <Link href="https://github.com/LeCodeurDeParis/MinecraftPallet" target="_blank" className="w-fit flex overflow-hidden rounded-lg">
                            <Image
                                src="/Minecraft_Vitrail.png"
                                alt="Projet Minecraft"
                                className="rounded-lg shadow-xl"
                                width={500}
                                height={500}
                                sizes="100vw"
                            />
                        </Link>
                    </motion.div>
                    <div className="w-full md:w-1/3 text-[#021334]">
                        <motion.h2 variants={itemAnimation} className="text-2xl font-bold mb-4">Palcraft</motion.h2>
                        <motion.p variants={itemAnimation} className="text-lg mb-4">Un générateur intelligent de palettes de blocs Minecraft pour vous aider à créer des compositions harmonieuses pour vos constructions.</motion.p>
                        <motion.div variants={itemAnimation} className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">HTML</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">CSS</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">JavaScript</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Projet Pokemon */}
                <motion.div 
                    id="pokemon"
                    className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-8 "
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <motion.div variants={itemAnimation} className="w-full md:w-1/2 relative group flex justify-end">
                        <Link href="https://github.com/LeCodeurDeParis/Projet-Pokemon-PHP" target="_blank" className="w-fit flex overflow-hidden rounded-lg">
                            <Image
                                src="/Pokemon_1.png"
                                alt="Projet Pokemon"
                                className="rounded-lg shadow-xl"
                                width={500}
                                height={500}
                                sizes="100vw"
                            />
                        </Link>
                    </motion.div>
                    <div className="w-full md:w-1/3 text-[#021334]">
                        <motion.h2 variants={itemAnimation} className="text-2xl font-bold mb-4">Pokemon Fighter</motion.h2>
                        <motion.p variants={itemAnimation} className="text-lg mb-4">Un simulateur de combat Pokémon tour par tour développé en programmation orientée objet.</motion.p>
                        <motion.div variants={itemAnimation} className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">PHP</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">POO</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">MySQL</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Projet Netflix */}
                <motion.div 
                    id="netflix"
                    className="w-full flex flex-col md:flex-row items-center justify-center gap-8 netflix"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <motion.div variants={itemAnimation} className="w-full md:w-1/2 relative group">
                        <Link href="https://github.com/LeCodeurDeParis/Netflix404" target="_blank" className="w-fit flex overflow-hidden rounded-lg">
                            <Image
                                src="/Netflix_Vitrail.png"
                                alt="Projet Netflix"
                                className="rounded-lg shadow-xl"
                                width={500}
                                height={500}
                                sizes="100vw"
                            />
                        </Link>
                    </motion.div>
                    <div className="w-full md:w-1/3 text-[#021334]">
                        <motion.h2 variants={itemAnimation} className="text-2xl font-bold mb-4">Netflix Clone</motion.h2>
                        <motion.p variants={itemAnimation} className="text-lg mb-4">Une reproduction fidèle de l'interface utilisateur de Netflix après connexion, incluant la navigation et l'affichage des contenus.</motion.p>
                        <motion.div variants={itemAnimation} className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">React.Js</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">Tailwind</span>
                            <span className="px-4 py-2 bg-[#021334] text-white rounded-full">API TMDB</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
