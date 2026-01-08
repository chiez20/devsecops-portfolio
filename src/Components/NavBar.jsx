function Navbar() {
  return (
    <header className="w-full bg-gray-950 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-white font-bold text-xl">
          Ronaldo
        </h1>

        <ul className="flex gap-6 text-gray-400">
          <li className="hover:text-white transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Projects
          </li>
          <li className="hover:text-white transition cursor-pointer">
            About
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar
