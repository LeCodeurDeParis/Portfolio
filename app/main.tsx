"use client";

import Projets from "./components/rProjets/rProjets";
import CustomHr from "./components/ui/customHr";
import Who from "./components/who/who";

import { motion } from "framer-motion";

export default function Main() {
    return(
        <main className="flex flex-col items-center justify-center mt-16 py-8 px-4">
            <Who />
            <CustomHr 
                dotNbr={6}
                width="w-1/5"
                start="20%"
                end="1880%"
                angle="18deg"
                speed={3}
                top="50"
                left="0"
                className="border-[#021334] border-4 bg-[#021334] rounded-full"
                classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
            />
            <Projets />
            <CustomHr
                dotNbr={6}
                width="w-64"
                start="20%"
                end="1880%"
                angle="150deg"
                speed={3}
                bottom="10"
                left="0"
                className="border-[#021334] border-4 bg-[#021334] rounded-full"
                classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
            />
            <h2 className="text-2xl font-bold text-[#021334] mt-8">Mes Compétences</h2>
        </main>
    )
}