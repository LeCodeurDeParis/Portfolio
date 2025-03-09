"use client";

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

type Education = {
    date: string;
    title: string;
    school: string;
    description: string;
    skills: string[];
}

type Experience = {
    date: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
}

const education: Education[] = [
    {
        date: "2023 - 2026",
        title: "Développeur Web Full Stack",
        school: "Institut de l'Internet et du Multimédia",
        description: "Formation intensive au développement web full stack. Réalisation de projets concrets en utilisant les technologies modernes du web.",
        skills: ["JavaScript", "React.js", "TailwindCSS", "Node.js", "TypeScript", "Next.js"]
    },
    {
        date: "Août 2024",
        title: 'Diplôme "Artificial Intelligence and Machine Learning: Theory and Practice',
        school: "Oxford University",
        description: "Création d’une IA multitask analysant les sentiments à travers des textes et des images.",
        skills: ["Python", "Pytorch"]
    },
    {
        date: "2020 - 2023",
        title: "Lycéen",
        school: "Lycée Camille Sée",
        description: "Bac général - Spécialités Numérique Science Informatique (NSI) / Sciences Économiques et Sociales (SES) avec Option Européenne Allemand",
        skills: ["HTML", "CSS", "Python"]
    }
];

const experiences: Experience[] = [
    {
        date: "Septembre 2024 - Décembre 2024",
        title: "Chef de Projet",
        company: "IIM x Handiscope",
        description: "Chef de Projet lors de la Bourse Aux Projets de l’IIM 2024 sur l’atelier “Handiscope”, utilisant HTML, CSS et Javascript. Mes responsabilités comprenaient la gestion d’une équipe de 10 personnes, la communication directe avec le client, la correction des erreurs de code et le contrôle de l’évolution du projet.",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        date: "2024 - 2025",
        title: "Membre associatif",
        company: "DeVinci404",
        description: "Membre de l’association de développement web “DeVinci 404” . Participation au développement d’un site web pour le projet “Calendrier de l’Avent”, au cours duquel j’ai codé moi-même les pages de classement et de modification de profil des élèves en utilisant ReactJS.",
        skills: ["TailwindCSS", "React.js"]
    }
];

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function AboutPage() {
    const timelineRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start start", "end end"]
    });

    return (
        <main 
            className="flex flex-col items-center justify-start mt-16 py-8 px-4 md:px-8 min-h-screen"
            role="main"
        >
            <motion.h1 
                className="text-4xl font-bold text-[#021334] mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                À Propos
            </motion.h1>

            <section 
                className="w-full max-w-4xl relative mb-24"
                aria-labelledby="experience-heading"
            >
                <motion.h2 
                    id="experience-heading"
                    className="text-2xl md:text-3xl font-bold text-[#021334] mb-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Expérience Professionnelle
                </motion.h2>
                
                <div className="w-full flex flex-col gap-12 md:gap-16">
                    {experiences.map((exp, index) => (
                        <motion.article 
                            key={index}
                            className="relative flex flex-col bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8"
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
                                <div className="md:w-1/3">
                                    <span className="text-sm font-medium text-[#021334]/60">{exp.date}</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#021334] mt-2">{exp.title}</h3>
                                    <p className="text-lg text-[#021334]/80 mb-4">{exp.company}</p>
                                </div>
                                
                                <div className="md:w-2/3">
                                    <p className="text-base md:text-lg text-[#021334]/70 mb-6">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <span 
                                                key={skill}
                                                className="px-3 py-1 bg-[#021334] text-white text-sm rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section 
                ref={timelineRef} 
                className="w-full max-w-4xl relative "
                aria-label="Parcours professionnel"
            >
                <div className="hidden md:block absolute top-0 left-1/2 h-[calc(100%-16rem)] -translate-x-1/2 z-[-1]">
                    <motion.div 
                        style={{ 
                            scaleY: scrollYProgress,
                            transformOrigin: 'top'
                        }} 
                        className="w-2 h-full bg-[#021334] rounded-full"
                        aria-hidden="true"
                    />
                </div>

                <div className="w-full flex flex-col gap-16 md:gap-32 pb-32">
                    {education.map((edu, index) => (
                        <motion.article 
                            key={index}
                            className={`relative flex flex-col ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } items-start md:items-center gap-8 pl-12 md:pl-0`}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className={`w-full md:w-[calc(50%-2rem)] ${
                                index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                            }`}>
                                <span className="text-sm font-medium text-[#021334]/60">{edu.date}</span>
                                <h2 className="text-xl md:text-2xl font-bold text-[#021334] mt-2">{edu.title}</h2>
                                <h3 className="text-lg md:text-xl text-[#021334]/80 mb-4">{edu.school}</h3>
                                <p className="text-base md:text-lg text-[#021334]/70 mb-6">{edu.description}</p>
                                <div className={`flex flex-wrap gap-2 ${
                                    index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                                }`}>
                                    {edu.skills.map(skill => (
                                        <span 
                                            key={skill}
                                            className="px-3 py-1 bg-[#021334] text-white text-sm rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div 
                                className="hidden absolute top-0 left-1/2 w-10 h-10 bg-[#021334] rounded-full -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
}