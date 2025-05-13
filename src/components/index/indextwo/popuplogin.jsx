import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.endsWith('@genfar.com')) {
      setError('Solo se permite el accesso a colaboradoes de Genfar');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      //await signInWithEmailAndPassword(auth, email);
      onClose(); // cerrar modal si login exitoso
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="modal-overlay">
      <img className="logo_lebic" src="/assets/images/LOGO_SUPERVIVENCIA_LEBIC.png" alt="Logo LEBIC" />
        <div className="modal-content">
          <h2>Acceso EXCLUSIVO PARA COLABORADORES DE GENFAR</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Correo Genfar"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Ingresar</button>
          </form>
        </div>
    </div>
  );
};

export default LoginPopup;
