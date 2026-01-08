// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

// Lista de proyectos de ejemplo
const projects = [
  {
    name: "Portfolio Frontend",
    description: "Mi primer portafolio desarrollado en React y Tailwind CSS.",
    link: "https://github.com/Chiez/portfolio-frontend",
    image: "https://via.placeholder.com/400x200?text=Portfolio+Frontend",
  },
  {
    name: "App de Tareas",
    description: "Aplicación CRUD para gestionar tareas diarias.",
    link: "https://github.com/Chiez/todo-app",
    image: "https://via.placeholder.com/400x200?text=Todo+App",
  },
  {
    name: "Blog Personal",
    description: "Blog personal con posts y comentarios usando React y Firebase.",
    link: "https://github.com/Chiez/blog-personal",
    image: "https://via.placeholder.com/400x200?text=Blog+Personal",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Presentación */}
      <motion.section
        id="home"
        className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hola, soy Ronaldo Choez</h1>
        <p className="text-lg text-gray-700 mb-6">
          Desarrollador Frontend | Apuntando a DevSecOps
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Mis Proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Contáctame
          </a>
        </div>
      </motion.section>

      {/* Sección Projects */}
      <section
        id="projects"
        className="px-4 py-12 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center"
              >
                Ver Proyecto
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Contacto */}
      <section
        id="contact"
        className="px-4 py-12 bg-gray-100 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-700 mb-4">
          Correo:<strong> ronaldo20choez@gmail.com</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Telefono: <strong>+593 981867619</strong>
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ronaldo Choez
        </p>
      </section>
    </div>
  );
}