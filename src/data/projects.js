// src/data/projects.js

const PROJECTS_DATA = [
  {
    id: 'topitop',
    title: 'Topitop',
    subtitle: 'Rediseño web con enfoque minimalista e intuitivo.',
    tags: ['UX/UI Design', 'Design System'],
    year: 2025,
    tool: 'Figma',
    link: '/proyectos/topitop',
    
    // Contenido detallado para ProjectDetail.jsx
    detail: {
      problem: 'Con más de 40 años de trayectoria, Topitop es un referente. Sin embargo, su web no transmitía completamente la esencia de la marca ni respondía de manera óptima a las necesidades de los usuarios.',
      objective: 'Rediseñar la página web priorizando la claridad en la navegación, la accesibilidad y la experiencia de compra digital. Se buscó una interfaz moderna y coherente con la identidad de la marca.',
      methodology: [
        'Investigación: Análisis de la web actual y entrevistas con usuarios.',
        'Ideación: Creación de *wireframes* y flujos de usuario reorganizados.',
        'Prototipado: Construcción de un prototipo navegable para pruebas A/B.',
        'Diseño Visual: Implementación del Design System y maquetación final.',
      ],
      // URLs de las imágenes: ¡Asegúrate de que estas rutas sean correctas!
      images: {
        hero: '/assets/images/topitop/topitop-hero.png',
        wireframes: '/assets/images/topitop/topitop-wireframes.png',
        finalDesktop: '/assets/images/topitop/topitop-final-desktop.png',
        finalMobile: '/assets/images/topitop/topitop-final-mobile.png', 
      }
    }
  },
  {
    id: 'reto-apps',
    title: 'Reto de Apps',
    subtitle: 'Explorando soluciones digitales centradas en el usuario (Travel, Organización, Ocio).',
    tags: ['UI Design', 'Identidad', 'Exploración'],
    year: 2024,
    tool: 'Figma, Proxima Nova, Roboto Flex',
    link: '/proyectos/reto-apps',

    // Contenido detallado
    detail: {
      problem: 'Un ejercicio personal para explorar diferentes problemáticas de UX y UI en periodos cortos.',
      objective: 'Desarrollar la línea gráfica y el concepto visual de tres apps distintas, experimentando con *layouts* y paletas de color para crear experiencias claras y atractivas.',
      methodology: [
        'App 1 (Viajes): Filtrado de zonas, recomendación de hospedajes y transporte (Colores vibrantes, ilustraciones).',
        'App 2 (Organización): Tareas, seguimiento de progreso y colaboración en equipo (Diseño limpio y funcional).',
        'App 3 (Ocio/Almuerzos): Facilitar la integración de trabajadores a través de almuerzos organizados.',
      ],
      images: {
        hero: '/assets/images/reto-apps/reto-hero.png',
        travelMockup: '/assets/images/reto-apps/travel-mockup.png',
        orgMockup: '/assets/images/reto-apps/org-mockup.png',
      }
    }
  },
  // Aquí iría el Proyecto 3: App de manualidades
];

export default PROJECTS_DATA;