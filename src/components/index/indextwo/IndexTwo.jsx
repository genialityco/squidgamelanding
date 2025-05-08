import React from 'react';

import Subheader from '../../header/subheader';
import HeaderTwo from '../../header/HeaderTwo';
import HeroBanner from './HeroBanner';
import IntroSection from './IntroSection';
import GamesSection from './GamesSection';
import InfoSection from './InfoSection';
import Footer from '../../footer/Footer';
import '../../../assets/css/LandingStyles.css';


export default function IndexTwo() {
  return (
    <>
      <Subheader />
      <HeaderTwo />
      <HeroBanner />
      <IntroSection />
      <GamesSection />
      <InfoSection />
      <Footer />
    </>
  );
}
