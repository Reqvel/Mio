import React from 'react';
import Header from '../components/landing/Header';
import Intro from '../components/landing/Intro';
import Features from '../components/landing/Features';
import AboutUs from '../components/landing/AboutUs';
import Pricing from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';

const Landing = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <Features/>
      <AboutUs/>
      <Pricing/>
      <Footer/>
    </>
  )
};

export default Landing;