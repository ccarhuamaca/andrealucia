// src/components/ProjectCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProjectCard.css';

// ProjectCard ahora recibe una prop 'isActive'
const ProjectCard = ({ project, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`project-card ${isActive ? 'is-active' : ''} card-hover-effect`}
      onMouseEnter={() => onMouseEnter(project.id)} // Llama a la función del padre
      onMouseLeave={() => onMouseLeave(null)} // Opcional: para volver al estado por defecto
    >
      {/* Si el proyecto está activo, muestra la información completa */}
      {isActive ? (
        <>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p> {/* Usamos 'subtitle' como descripción corta */}
          <div className="tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag-pill">{tag}</span>
            ))}
          </div>
          <Link to={project.link} className="ver-mas-link">
            Ver más
          </Link>
        </>
      ) : (
        // Si no está activo, muestra solo la imagen de preview
        <div className="project-image-preview" 
             style={{ backgroundImage: `url(${project.previewImage})` }} 
             title={project.title}>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;