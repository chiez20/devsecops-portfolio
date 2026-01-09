// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="text-gray-700 mb-4">
        Correo: <strong>ronaldo20choez@gmail.com</strong>
      </p>
      <p className="text-gray-700 mb-4">
        Telefono: <strong>+593 981867619</strong>
      </p>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Ronaldo Choez
      </p>
    </section>
  );
}