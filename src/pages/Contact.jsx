// src/pages/Contact.jsx
import React, { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation'; 
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. Aquí se enviaría el formulario a un servicio de backend (como Formspree, Netlify Forms, o un endpoint propio)
    console.log('Datos del formulario:', formData);
    alert('Mensaje enviado. ¡Gracias por contactar!');
    
    // 2. Limpiar el formulario
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <ScrollAnimation animationClass="fade-in-up">
        <h1 className="contact-title">¿Interesado en una colaboración?</h1>
        <p className="contact-subtitle">
          ¡Me encantaría saber de ti! Hablemos sobre tu proyecto o simplemente toma un café virtual.
        </p>
      </ScrollAnimation>

      <ScrollAnimation animationClass="slide-in-left">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button hover-scale-effect">
            Enviar Mensaje
          </button>
        </form>
      </ScrollAnimation>

      <ScrollAnimation animationClass="fade-in-up">
        <div className="contact-info">
          <p>O si lo prefieres, escríbeme a:</p>
          <a href="mailto:tu.email@ejemplo.com" className="email-link">
            tu.email@ejemplo.com
          </a>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Contact;