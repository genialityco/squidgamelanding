// 4. Sección de Bienvenida
import React from 'react';

export default function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <h2 className="intro-title">Supervivencia Lebic</h2>
        <p className="intro-text">
            aprende de manera dinámica y desafiante, potenciando habilidades clave mientras se<br />
            compite en un entorno de alta emoción.
        </p>
        <div className="intro-logo">
          <img src="/assets/images/SIMBOLOS.png" alt="Logo decorativo" />
        </div>
      </div>
    </section>
  );
}