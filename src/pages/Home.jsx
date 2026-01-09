// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}