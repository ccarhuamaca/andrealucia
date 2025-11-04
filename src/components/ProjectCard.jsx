// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'; // Estilos específicos para la tarjeta

const ProjectCard = ({ project }) => {
  return (
    // Aplicamos la clase `card-hover-effect` para la animación sutil
    <div className="project-card card-hover-effect">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag-pill">{tag}</span>
        ))}
      </div>
      <Link to={project.link} className="ver-mas-link">
        Ver más
      </Link>
      {/*  O la imagen correspondiente */}
    </div>
  );
};

export default ProjectCard;