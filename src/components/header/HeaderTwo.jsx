import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderTwo() {
  return (
    <div className="main-banner">
      <div className="header-box-glitch">
        <div className="logo-left">
          <Link to="/">
            <img
              src="/assets/images/LOGO_SUPERVIVENCIA_LEBIC.png"
              alt="Logo Supervivencia Lebic"
              className="logo-img glitch"
            />
          </Link>
        </div>
        <div className="button-right">
          <a href="/#niveles" className="btn-niveles">NIVELES</a>
          <Link to="/community" className="btn-niveles">PUNTUACIÓN</Link>
        </div>
      </div>
    </div>
  );
}
