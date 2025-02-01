export default function Menu() {
  return (
    <nav className="flex justify-center items-center w-3/4 absolute bottom-4 left-1/2 transform -translate-x-1/2 h-16 p-4 lg:hidden bg-[#021334] rounded-full">
      <ul className="flex flex-1 justify-evenly text-white gap-2 mx-auto">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  );
}