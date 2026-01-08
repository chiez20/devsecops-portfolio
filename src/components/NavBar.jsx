import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="home"      // el id de la sección
            smooth={true}  // scroll suave
            duration={500} // duración en ms
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
