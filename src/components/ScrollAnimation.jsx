// src/components/ScrollAnimation.jsx (Concepto)
import React, { useRef, useEffect, useState } from 'react';

const ScrollAnimation = ({ children, animationClass }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Implementación simple de Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: desconectar el observador para que la animación solo ocurra una vez
          observer.unobserve(ref.current); 
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // El 10% del componente debe estar visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-anim-wrapper ${isVisible ? animationClass : 'hidden-initial'}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;