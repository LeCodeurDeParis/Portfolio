"use-client"

import Link from "next/link";

export default function Menu() {
  return (
    <div className="relative">
      <nav className="flex justify-evenly items-center w-full fixed top-0 h-16 p-4 z-50 bg-[#021334] text-white">
        <Link href="/">
          Home
        </Link>
        <Link href="/projets">
          Projects
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <Link href="/about">
          About Me
        </Link>
      </nav>
      <div className="fixed top-16 left-0 right-0 h-4 bg-gradient-to-b from-[#021334] to-[#021334]/0 z-50"></div>
    </div>
  );
}