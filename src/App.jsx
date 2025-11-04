// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
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
          {/* Ruta para el Proyecto 1: Rediseño Topitop */}
          <Route path="/proyectos/topitop" element={<ProjectDetail projectId="topitop" />} />
          {/* Ruta para el Proyecto 2: Reto de apps */}
          <Route path="/proyectos/reto-apps" element={<ProjectDetail projectId="reto-apps" />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={/* Componente de Contacto */} />
          {/* Opcional: Ruta para ver todos los proyectos si los separas de Home */}
          {/* <Route path="/proyectos" element={<Projects />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;