import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
