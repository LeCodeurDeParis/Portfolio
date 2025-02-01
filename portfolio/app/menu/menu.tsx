import Image from "next/image";

export default function Menu() {
  return (
    <nav className="flex justify-center items-center w-3/4 lg:w-1/2 absolute bottom-4 left-1/2 transform -translate-x-1/2 h-16 p-4 bg-[#021334] rounded-full">
      <ul className="flex flex-1 justify-evenly text-white gap-2 mx-auto">
        <li><Image src="/accueil.png" alt="icon-accueil" width={32} height={32}/></li>
        <li><Image src="/about.png" alt="icon-accueil" width={32} height={32}/></li>
        <li><Image src="/projets.png" alt="icon-accueil" width={32} height={32}/></li>
        <li><Image src="/lettre.png" alt="icon-accueil" width={32} height={32}/></li>
      </ul>
    </nav>
  );
}