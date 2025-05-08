import React from 'react';

// 5. Footer

export function Footer() {
  return (
    <>
      <div className="footer-rounded"></div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo-lebic">
            <img src="/assets/images/LEBIC_BLANCO.png" alt="Logo LEBIC" />
          </div>
          <div className="footer-symbols">
            <img src="/assets/images/SIMBOLOS_FOOTER.png" alt="Símbolos" />
            <p>USO EXCLUSIVO PARA COLABORADORES DE GENFAR*</p>
          </div>
          <div className="footer-logo">
            <img src="/assets/images/LOGO_BLANCO.png" alt="Logo Genfar" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;