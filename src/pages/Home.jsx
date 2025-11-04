// src/pages/Home.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import PROJECTS_DATA from '../data/projects'; // ¡Importación clave!
import '../styles/Home.css';

const Home = () => {
  // Solo mostramos los primeros 3 proyectos en el Home
  const projectsToDisplay = PROJECTS_DATA.slice(0, 3); 

  return (
    <div className="home-container">
      {/* Sección de Bienvenida */}
      <section className="hero-section">
        <h1 className="fade-in-up">Bienvenid@ a mi portafolio</h1>
        <p className="subtitle slide-in-delay">Recientemente he trabajado en:</p>
      </section>

      {/* Sección de Proyectos */}
      <section className="projects-preview">
        {projectsToDisplay.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title}
            description={project.subtitle} // Usamos el subtitle como descripción corta
            tags={project.tags}
            link={project.link}
          />
        ))}
      </section>
      
      {/* Footer */}
      <footer className="footer-info">
        <p>Andrea Apaza Cardenas 2025</p>
      </footer>
    </div>
  );
};

export default Home;