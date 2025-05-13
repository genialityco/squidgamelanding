/// 4. Sección de Juegos
import React from 'react';

export default function GamesSection() {
  return (
    <section id ="niveles"className="games-section">
      <div className="games-grid">
        <div className="game-item">
          <img src="/assets/images/JUEGOS-01.png" alt="Juego 1" />
          <div className="game-caption">
            <h4 className="game-title">Título<br />Juego</h4>
            <button onClick={() => window.open('https://calamargenfar.netlify.app/', '_blank', 'noopener,noreferrer')}>Jugar</button>
          </div>
        </div>
        <div className="game-item">
          <img src="/assets/images/JUEGOS-03.png" alt="Juego 2" />
          <div className="game-caption">
            <h4 className="game-title">Título<br />Juego</h4>
            <button onClick={() => window.open('https://calamargenfar.netlify.app/', '_blank', 'noopener,noreferrer')}>Jugar</button>
          </div>
        </div>
        <div className="game-item">
          <img src="/assets/images/JUEGOS-02.png" alt="Juego 3" />
          <div className="game-caption">
            <h4 className="game-title">Título<br />Juego</h4>
            <button onClick={() => window.open('https://calamargenfar.netlify.app/', '_blank', 'noopener,noreferrer')}>Jugar</button>
          </div>
        </div>
        <div className="game-item">
          <img src="/assets/images/JUEGOS-04.png" alt="Juego 4" />
          <div className="game-caption">
            <h4 className="game-title">Título<br />Juego</h4>
            <button onClick={() => window.open('https://calamargenfar.netlify.app/', '_blank', 'noopener,noreferrer')}>Jugar</button>
          </div>
        </div>
        <div className="game-description">
          <p>
            Prepárense para una capacitación en vivo hecha juego, donde cada decisión,
            estrategia y reflejo rápido los acercará a la victoria. Aquí no solo se aprende…
            se compite, se sobrevive y se gana.
          </p>
        </div>
        <div className="game-item">
          <img src="/assets/images/JUEGOS-05.png" alt="Juego 5" />
          <div className="game-caption">
            <h4 className="game-title">Título<br />Juego</h4>
            <button onClick={() => window.open('https://calamargenfar.netlify.app/', '_blank', 'noopener,noreferrer')}>Jugar</button>
          </div>
        </div>
      </div>
    </section>
  );
}