// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Para los estilos y el toggle móvil

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <Link to="/" className="logo">
        Andrea Apaza Cardenas
      </Link>
      
      {/* Menú de Escritorio */}
      <nav className="desktop-nav">
        <Link to="/">Proyectos</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      {/* Botón de Hamburguesa para Móvil */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'X' : 'Menú'} 
      </button>

      {/* Menú Desplegable Móvil */}
      <nav className={`mobile-nav ${isOpen ? 'is-open' : ''}`}>
        <Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link>
        <Link to="/sobre-mi" onClick={toggleMenu}>Sobre mí</Link>
        <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;