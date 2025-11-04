// src/pages/ProjectDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PROJECTS_DATA from '../data/projects'; // ¡Importación clave!
import ScrollAnimation from '../components/ScrollAnimation'; 
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  // 1. Obtener el ID del proyecto de la URL (ej. 'topitop' o 'reto-apps')
  const { projectId } = useParams(); 

  // 2. Buscar los datos del proyecto
  const project = PROJECTS_DATA.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0); // Volver arriba al cargar
  }, [projectId]);

  if (!project) {
    return <div className="project-not-found">Error 404: Proyecto no encontrado.</div>;
  }

  const { title, subtitle, category, year, tool, detail } = project;

  return (
    <div className="project-detail-container">
      
      {/* 1. Sección Principal (Hero) */}
      <section className="project-hero fade-in-up">
        <div className="metadata">
          <p><strong>Categoría:</strong> {category}</p>
          <p><strong>Año:</strong> {year}</p>
          <p><strong>Herramienta:</strong> {tool}</p>
        </div>
        <h1 className="project-title">{title}</h1>
        <p className="project-subtitle">{subtitle}</p>
        <div className="hero-image-placeholder pulse-on-load" style={{backgroundImage: `url(${detail.images.hero})`}} />
      </section>

      {/* 2. Sección del Problema y Objetivo */}
      <ScrollAnimation animationClass="slide-in-left">
        <section className="challenge-section">
          <h2>El Reto y el Objetivo</h2>
          <div className="content-grid">
            {/* Usamos el objeto 'detail' */}
            <div><h3>El Problema</h3><p>{detail.problem}</p></div>
            <div><h3>El Objetivo</h3><p>{detail.objective}</p></div>
          </div>
        </section>
      </ScrollAnimation>

      {/* 3. Sección de Metodología y Proceso */}
      <ScrollAnimation animationClass="fade-in-scale">
        <section className="methodology-section">
          <h2>Metodología Centrada en el Usuario</h2>
          <ul>
            {detail.methodology.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </section>
      </ScrollAnimation>
      
      {/* 4. Sección de Resultados Visuales (dependiendo del proyecto, cargará diferentes imágenes) */}
      <ScrollAnimation animationClass="slide-in-right">
        <section className="results-section">
          <h2>Resultados Visuales</h2>
          <div className="image-mockups">
            {/* Un ejemplo de cómo cargarías una imagen específica del proyecto Topitop */}
            {projectId === 'topitop' && (
              <img src={detail.images.finalDesktop} alt="Diseño Final Escritorio" className="mockup desktop-view" />
            )}
            {/* Otro ejemplo para el Reto de Apps */}
            {projectId === 'reto-apps' && (
              <img src={detail.images.travelMockup} alt="Mockup App de Viajes" className="mockup travel-app-view" />
            )}
          </div>
        </section>
      </ScrollAnimation>

    </div>
  );
};

export default ProjectDetail;