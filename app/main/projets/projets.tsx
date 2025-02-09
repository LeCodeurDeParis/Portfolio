export default function Projets() {
    return (
        <div className="relative flex flex-col self-start items-start justify-center ml-8 w-full p-8">
            <div className="flex flex-col self-end gap-4 z-10 rounded-lg w-1/3">
                <h2 className="text-xl font-bold text-start z-10">Quelques projets...</h2>
                <p className="text-start z-10">
                    Voici quelques projets sur lesquels j'ai travaillé. Vous pouvez retrouver l'intégralité de mes projets sur mon GitHub, ainsi que sur la page dédiée <a>projets</a>.
                </p>
            </div>
            
            {/* <motion.div className="absolute -inset-1 rounded-lg"
            style={{background:
                rotatingBg
            }}/> */}
        </div>
    );
}