import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaDocker, FaAws, FaTools } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGit } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", level: 85, icon: <FaReact className="text-blue-500 w-6 h-6" /> },
    { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-teal-500 w-6 h-6" /> },
    { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-500 w-6 h-6" /> },
    { name: "Python", level: 70, icon: <FaPython className="text-blue-600 w-6 h-6" /> },
    { name: "Git & GitHub", level: 85, icon: <SiGit className="text-red-500 w-6 h-6" /> },
    { name: "DevSecOps Concepts", level: 60, icon: <FaTools className="text-gray-800 w-6 h-6" /> },
    { name: "Docker", level: 50, icon: <FaDocker className="text-blue-400 w-6 h-6" /> },
    { name: "AWS / Cloud", level: 50, icon: <FaAws className="text-orange-400 w-6 h-6" /> },
  ];

  return (
    <motion.section
      id="about"
      className="px-4 py-12 bg-white max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">About Me & Skills</h2>

      {/* About text */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <p className="text-gray-700 mb-4">
          Hi! I'm Ronaldo Choez, a Frontend Developer aiming to grow into DevSecOps.
          I build web applications with React, Tailwind CSS, and I am exploring
          security, CI/CD, and cloud technologies.
        </p>
        <p className="text-gray-700">
          I enjoy learning new technologies and applying best practices in both
          development and security to create professional, robust, and scalable solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-2">{skill.icon}</div>
            <h3 className="font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <motion.div
                className="bg-blue-500 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
            <span className="text-sm text-gray-600 mt-1">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}