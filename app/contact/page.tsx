export default function Home() {
    return(
        <header className="flex flex-col gap-8 justify-center items-center px-4 py-8 absolute top-32 inset-x-0">
            <h1 className="text-2xl font-bold text-[#021334]">Contact me</h1>
            <form className="flex flex-col gap-4 items-center w-full">
                <input type="text" placeholder="Name" className="w-1/3 h-12 px-4 border-2 border-[#021334] rounded-full"/>
                <input type="email" placeholder="Email" className="w-1/3 h-12 px-4 border-2 border-[#021334] rounded-full"/>
                <textarea placeholder="Message" className="w-1/3 h-32 px-4 border-2 border-[#021334] rounded-xl"/>
                <button className="w-32 h-12 bg-[#021334] text-white rounded-full">Send</button>
            </form>
        </header>
    )
}
