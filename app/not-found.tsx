"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Page404() {
    useEffect(() => {
        document.title = "Page non trouvée | Portfolio";
    }, []);

    return (
        <>
            <Head>
                <title>Page non trouvée | Portfolio</title>
                <meta name="description" content="La page que vous cherchez n'existe pas ou a été déplacée." />
            </Head>

            <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
                <motion.div
                    className="max-w-xl w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1 
                        className="text-7xl md:text-9xl font-bold text-[#021334]"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 10 
                        }}
                    >
                        404
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-[#021334]">
                            Page non trouvée
                        </h2>
                        
                        <p className="mt-4 text-base md:text-lg text-[#021334]/70">
                            La page que vous recherchez n&apos;existe pas ou a été déplacée.
                        </p>
                        
                        <div className="mt-10">
                            <Link 
                                href="/" 
                                className="inline-flex items-center px-6 py-3 bg-[#021334] text-white font-medium rounded-lg hover:bg-[#021334]/90 transition-colors"
                            >
                                <svg 
                                    className="w-5 h-5 mr-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                                    />
                                </svg>
                                Retour à l&apos;accueil
                            </Link>
                        </div>
                        
                        <div className="mt-12">
                            <h3 className="text-lg md:text-xl font-medium text-[#021334]">
                                Vous pourriez être intéressé par :
                            </h3>
                            
                            <ul className="mt-4 flex flex-wrap justify-center gap-4">
                                <li>
                                    <Link 
                                        href="/projets" 
                                        className="px-4 py-2 inline-block bg-white/50 backdrop-blur-sm text-[#021334] rounded-lg border border-[#021334]/10 hover:shadow-md transition-all"
                                    >
                                        Mes projets
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/about" 
                                        className="px-4 py-2 inline-block bg-white/50 backdrop-blur-sm text-[#021334] rounded-lg border border-[#021334]/10 hover:shadow-md transition-all"
                                    >
                                        À propos
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/contact" 
                                        className="px-4 py-2 inline-block bg-white/50 backdrop-blur-sm text-[#021334] rounded-lg border border-[#021334]/10 hover:shadow-md transition-all"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </>
    );
}