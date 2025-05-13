import React from 'react'
import Subheader from '../../components/header/subheader';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import HeroBanner from './HeroBannerpuntuacion';
import MyRanking from "./myranking";
import CommunityArea from "./CommunityArea"

//import '../../../assets/css/LandingStyles.css';


function Community() {
  return (
	<>
		<Subheader />
		<HeaderTwo/>
		<HeroBanner/>
	<main>
		{/*<MyRanking/>*/}
		<CommunityArea/>
	</main>
		<Footer/>
	</>
  )
}

export default Community