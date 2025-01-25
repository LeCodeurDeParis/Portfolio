export default function Menu() {
  return (
    <nav className="flex justify-between items-center w-full fixed bottom-0 h-32 p-4 lg:hidden bg-gradient-to-t from-black via-black/80 to-black/0">
      <ul className="flex flex-1 justify-evenly text-white gap-2 mx-auto">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  );
}