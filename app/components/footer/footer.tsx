"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Projets", href: "/projets" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/LeCodeurDeParis",
    icon: "/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-boisaubert-baillion-a03791291/",
    icon: "/linkedin.svg",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white/30 backdrop-blur-sm border-t border-[#021334]/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo et description */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link href="/" className="text-xl font-bold text-[#021334]">
              Paul Boisaubert-Baillion
            </Link>
            <p className="text-sm text-[#021334]/70 max-w-xs">
              Développeur full-stack passionné par la création
              d&apos;applications web modernes, responsives et accessibles.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-[#021334]">
              Navigation
            </h3>
            <nav>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#021334]/80 hover:text-[#021334] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-[#021334]">
              Me suivre
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 bg-white/80 rounded-full shadow-sm border border-[#021334]/10 hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px w-full bg-[#021334]/10 my-6 md:my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-[#021334]/60">
            &copy; {new Date().getFullYear()} Paul Boisaubert-Baillion. Tous
            droits réservés.
          </p>
          <p className="text-xs md:text-sm text-[#021334]/60">
            Site créé avec Next.js, TypeScript et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
