// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 bg-gray-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold mb-4">Hola, soy Ronaldo Choez</h1>
      <p className="text-lg text-gray-700 mb-6">
        Desarrollador Frontend | Apuntando a DevSecOps
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Mis Proyectos
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Contáctame
        </button>
      </div>
    </motion.section>
  );
}