export default function Header() {
    return (
        <header className="flex justify-center lg:justify-between lg:items-center p-4">
            <h1 className="lg:flex-1">Portfolio</h1>
            <nav className="hidden lg:flex lg:flex-1 lg:justify-evenly lg:items-center ">
                <ul className="flex gap-2">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            <div className="hidden lg:block lg:flex-1"></div>
        </header>
    );
}