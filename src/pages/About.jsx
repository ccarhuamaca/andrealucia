// src/pages/About.jsx
import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation'; 
import '../styles/About.css';

const tools = [
  { name: 'Figma', role: 'Diseño, Prototipado', icon: 'F' },
  { name: 'Miro', role: 'Research', icon: 'M' },
  { name: 'Illustrator', role: 'Diseño', icon: 'Ai' },
  { name: 'Photoshop', role: 'Edición', icon: 'Ps' },
  { name: 'After Effects', role: 'Animación', icon: 'Ae' },
  { name: 'Notion', role: 'Organización', icon: 'N' },
  { name: 'Chat GPT', role: 'Brainstorming', icon: 'GPT' },
];

const About = () => {
  return (
    <div className="about-container">
      
      {/* 1. Sección de Bienvenida y Bio */}
      <section className="bio-section">
        <h1 className="fade-in-up">Holaaa :)</h1>
        <p className="subtitle slide-in-delay">
          Soy **Andrea, Diseñadora UX/UI** viviendo en Perú.
        </p>

        {/* Bloque de Texto Principal con animación sutil */}
        <ScrollAnimation animationClass="fade-in-up">
          <div className="bio-text">
            <p>
              La Andrea más jovén (tengo 29 por cierto) siempre estaba dibujando, pintando y creando, y eso es lo que me trae aquí hoy. Creo en el diseño como una forma de resolver problemas y conectar con las personas. Me inspiro en cada etapa del proceso, desde la investigación hasta el diseño visual, buscando siempre aportar valor real.
            </p>
            <p>
              Cuando no estoy en mi laptop, seguramente me encontrarás haciendo *journaling*, leyendo un libro de romance o disfrutando un *latte*.
            </p>
            <a href="/Andrea_Apaza_CV.pdf" download className="cv-button">
              Descargar CV
            </a>
          </div>
        </ScrollAnimation>
      </section>

      {/* 2. Sección de Herramientas */}
      <section className="tools-section">
        <h2>Herramientas que me ayudan</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            // Animación: Cada tarjeta aparece escalando sutilmente con un retraso
            <ScrollAnimation key={index} animationClass="tool-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.role}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* 3. Enlaces Sociales */}
      <section className="social-section">
        <h2 className="fade-in-up">También puedes encontrarme aquí:</h2>
        <div className="social-links">
          <a href="[Tu enlace de LinkedIn]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="[Tu enlace de Behance]" target="_blank" rel="noopener noreferrer">Behance</a>
        </div>
      </section>
    </div>
  );
};

export default About;