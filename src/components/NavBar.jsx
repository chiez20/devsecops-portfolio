import React, { useEffect, useState } from "react";

export default function NavBar() {
  const sections = ["home", "projects", "about", "contact"];
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Caso especial: si estamos casi al final de la página, activar Contact
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setActiveSection("contact");
        return;
      }

      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const distance = Math.abs(element.getBoundingClientRect().top - 80); // offset por navbar sticky
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicializa al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio - Ronaldo Choóez</div>
        <div className="space-x-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-gray-700 hover:text-blue-500 ${
                activeSection === section ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}