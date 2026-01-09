// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import pruebaImg from "../assets/images/Portoaguas.png";

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
    name: "Temperatura y Humedad LABS",
    description: "Aplicacion para monitorear las temperaturas y humedad de los laboratorios de PORTOAGUAS",
    link: "https://frontend-proyecto-humedad.vercel.app/",
    image: pruebaImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
  key={index}
  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
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
    className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mx-auto"
  >
    Ver Proyecto
  </a>
</motion.div>
        ))}
      </div>
    </section>
  );
}