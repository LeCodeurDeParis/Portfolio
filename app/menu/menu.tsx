"use-client"

import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="relative">
      <nav className="flex justify-evenly items-center w-full fixed top-0 h-16 p-4 z-10 bg-[#021334] text-white">
        {/* <ul className="flex flex-1 justify-evenly text-white gap-2 mx-auto">
          <li><Image src="/accueil.png" alt="icon-accueil" width={32} height={32}/></li>
          <li><Image src="/about.png" alt="icon-accueil" width={32} height={32}/></li>
          <li><Image src="/projets.png" alt="icon-accueil" width={32} height={32}/></li>
          <li><Image src="/lettre.png" alt="icon-accueil" width={32} height={32}/></li>
        </ul> */}
        <Link href="/">
          Home
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <Link href="/about">
          About Me
        </Link>
        <Link href="/projets">
          Projects
        </Link>
      </nav>
      <div className="fixed top-16 left-0 right-0 h-4 bg-gradient-to-b from-[#021334] to-[#021334]/0 z-0"></div>
    </div>
  );
}
// bg-gradient-to-b from-[#021334] to-[#021334]/0