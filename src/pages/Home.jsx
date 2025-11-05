// src/pages/Home.jsx (VERSION MODIFICADA SIN BOTONES DE SCROLL)

import React, { useState } from 'react'; // Eliminamos 'useRef'
import ProjectCard from '../components/ProjectCard';
import PROJECTS_DATA from '../data/projects';
import '../styles/Home.css';

const Home = () => {
  // Estado para controlar qué proyecto está activo. Por defecto, el ID del primer proyecto.
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS_DATA[0]?.id || null);

  // Eliminamos la función scrollProjects, ya no es necesaria.

  // Manejador para cuando el mouse entra en una ProjectCard
  const handleMouseEnter = (projectId) => {
    setActiveProjectId(projectId);
  };

  // Manejador para cuando el mouse sale de una ProjectCard
  const handleMouseLeave = () => {
    // Vuelve al primer proyecto como activo por defecto
    setActiveProjectId(PROJECTS_DATA[0]?.id || null);
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="fade-in-up">Bienvenid@ a mi portafolio</h1>
        <p className="subtitle slide-in-delay">Recientemente he trabajado en:</p>
      </section>

      <div className="projects-preview-wrapper">
        <div className="projects-preview">
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id} 
              className={`project-card-container ${project.id === activeProjectId ? 'is-active' : ''}`} // 🚨 Clase 'is-active' movida aquí
              onMouseEnter={() => handleMouseEnter(project.id)} // Mantener hover en el contenedor
              onMouseLeave={handleMouseLeave} // Mantener hover en el contenedor
            >
              <ProjectCard
                project={project}
                isActive={project.id === activeProjectId} // Mantenemos esta prop para la lógica INTERNA de ProjectCard (mostrar info/imagen)
                // Eliminamos onMouseEnter/onMouseLeave de ProjectCard ya que está en el div padre
              />
            </div>
          ))}
        </div>
      </div>
      
      <footer className="footer-info">
        <p>Andrea Apaza Cardenas 2025</p>
      </footer>
    </div>
  );
};

export default Home;