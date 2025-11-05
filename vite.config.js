import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // 🚨 Configuración Clave para el entorno local (después del build)
  preview: {
    // Esto asegura que cualquier ruta (que no sea un archivo estático) 
    // caiga de vuelta a index.html, permitiendo a React Router tomar el control.
    historyApiFallback: true,
  },

  // Opcional: Si tienes problemas en desarrollo ('npm run dev'), usa 'server'
  server: {
     historyApiFallback: true,
  },
});