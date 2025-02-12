"use client";

import Projets from "./components/rProjets/rProjets";
import CustomHr from "./components/ui/customHr";
import Who from "./components/who/who";

export default function Main() {
    return(
        <main className="flex flex-col items-center justify-center mt-16 py-8 px-4 ">
            <div className="w-full h-full relative" style={{ minHeight: '100vh' }}>
                <Who />
                <CustomHr 
                    dotNbr={6}
                    start="-900%"
                    end="850%"
                    angle="10deg"
                    speed={2}
                    delay={0.5}
                    width="20rem"
                    top="35%"
                    left="40%"
                    className="border-[#021334] border-4 bg-[#021334] rounded-full"
                    classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
                />
                <Projets />
                <CustomHr
                    dotNbr={6}
                    start="0"
                    end="100"
                    angle="120deg"
                    speed={2}
                    delay={0.5}
                    width="15rem"
                    top="75%"
                    right="35%"
                    className="border-[#021334] border-4 bg-[#021334] rounded-full"
                    classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
                />
            </div>
            <h2 className="text-2xl font-bold text-[#021334]">Mes Compétences</h2>
            <div className="w-full h-full relative" style={{ minHeight: '100vh' }}>
                <CustomHr
                    dotNbr={6}
                    start="0"
                    end="100"
                    top="10%"
                    left="45%"
                    angle="90deg"
                    speed={2}
                    delay={0.5}
                    width="10%"
                    className="border-[#380F17] border-4 bg-[#380F17] rounded-full"
                    classNameDots="bg-[#A5C5CC] border-[#A5C5CC]"
                />
            </div>
        </main>
    )
}