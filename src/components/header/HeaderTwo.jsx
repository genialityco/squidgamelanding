import React from 'react';

export default function HeaderTwo() {
  return (
    <div className="main-banner">
      <div className="header-box-glitch">
        <div className="logo-left">
          <img
            src="/assets/images/LOGO_SUPERVIVENCIA_LEBIC.png"
            alt="Logo Supervivencia Lebic"
            className="logo-img glitch"
          />
        </div>
        <div className="button-right">
          <a href="#niveles" className="btn-niveles">NIVELES</a>
        </div>
      </div>
    </div>
  );
}
