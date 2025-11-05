// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Header from './components/Header';
import './styles/GlobalStyles.css'; // Estilos globales

const App = () => {
  return (
    <Router>
      <Header /> {/* Menú de navegación */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Ruta dinámica para detalles de proyectos */}
          <Route path="/proyectos/:projectId" element={<ProjectDetail />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          {/* Opcional: Ruta para ver todos los proyectos si los separas de Home */}
          {/* <Route path="/proyectos" element={<Projects />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;