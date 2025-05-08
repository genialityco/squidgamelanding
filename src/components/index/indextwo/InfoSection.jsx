// 6. Sección Informativa (SUPERVIVENCIA + DINÁMICA)
import React from 'react';

export default function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-text-left">
          <h2>SUPERVIVENCIA<br/>LEBIC</h2>
          <p>
          Lorem Ipsum es el término para referirnos a un texto falso que simula caracteres latinos y que utilizamos para ver de un modo rápido cómo quedaría una página conel contenido; antes de
          tener el texto definitivo, para componer fácilmente la maqueta.<br/><br/>
          Lorem Ipsum es el término para referirnos a un texto falso que simula caracteres latinos y que utilizamos.
          </p>
        </div>
        <div className="info-text-right">
          <h2>DINÁMICA</h2>
          <p>
          Lorem Ipsum es el término para referirnos a un textofalso que simul.<br/><br/>
          Lorem Ipsum es el término para referirnos a un textofalso que simul.<br/><br/>
          Lorem Ipsum es el término para referirnos a un textofalso que simul.<br/><br/>
          Lorem Ipsum es el término para referirnos a un textofalso que simul.
          </p>
        </div>
      </div>
    </section>
  );
}