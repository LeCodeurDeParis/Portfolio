import Link from 'next/link';
import { motion } from 'framer-motion';

type Project = {
    name: string;
    description: string;
    link: string;
}

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const projects: Project[] = [
    {
        name: "Palcraft",
        description: "Générateur de palettes de blocs Minecraft",
        link: "/projets#minecraft"
    },
    {
        name: "Pokemon Fighter",
        description: "Un jeu de combat Pokémon en PHP",
        link: "/projets#pokemon"
    },
    {
        name: "Netflux",
        description: "Clone de Netflix en React",
        link: "/projets#netflix"
    } 
];

export default function RProjets() {
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
                    id="projects-heading"
                    className="text-xl md:text-2xl font-bold text-[#021334]"
                >
                    Quelques projets...
                </h2>
                <p className="text-base md:text-lg text-[#021334]/90">
                    Voici quelques projets sur lesquels j'ai travaillé. Vous pouvez retrouver 
                    l'intégralité de mes projets sur mon {' '}
                    <Link 
                        href="https://github.com/LeCodeurDeParis" 
                        className="text-[#021334] hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Link>
                    , ainsi que sur la {' '}
                    <Link 
                        href="/projets"
                        className="text-[#021334] hover:underline font-medium"
                    >
                        page dédiée
                    </Link>
                    .
                </p>
                <ul className="space-y-3 list-none">
                    {projects.map((project) => (
                        <li 
                            key={project.name}
                            className="text-base md:text-lg text-[#021334]/90 hover:text-[#021334] transition-colors"
                        >
                            <Link href={project.link} className="hover:underline" scroll={true}>
                                {project.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}