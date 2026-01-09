// src/layout/MainLayout.jsx
import React from "react";
import NavBar from "../components/NavBar"; // Navbar fijo arriba
import Home from "../pages/Home"; // Nuestra página única con todas las secciones
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}