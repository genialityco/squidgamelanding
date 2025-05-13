import React, { useEffect, useState } from 'react';
//import React, { useEffect } from 'react';
import Subheader from '../../header/subheader';
import HeaderTwo from '../../header/HeaderTwo';
import HeroBanner from './HeroBanner';
import IntroSection from './IntroSection';
import GamesSection from './GamesSection';
import InfoSection from './InfoSection';
import LoginPopUp from './popuplogin'
import Footer from '../../footer/Footer';
import '../../../assets/css/LandingStyles.css';


// Firebase conexion
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

export default function IndexTwo() {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email.endsWith('@genfar.com')) {
        setShowLogin(false); // si está autenticado
      } else {
        setShowLogin(true);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {/*{showLogin && <LoginPopUp onClose={() => setShowLogin(false)} />}
      {!showLogin && (*/}
        <>
          <Subheader />
          <HeaderTwo />
          <HeroBanner />
          <IntroSection />
          <GamesSection />
          <InfoSection />
          <Footer />
        </>
      {/*)}*/}
    </>
  );
}