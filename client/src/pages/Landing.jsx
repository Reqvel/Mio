import React from 'react';
import Header from '../components/landing/Header';
import Intro from '../components/landing/Intro';
import Features from '../components/landing/Features';
import AboutUs from '../components/landing/AboutUs';
import Pricing from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';
import styled from 'styled-components';

const Background = styled.div`
  background-color: ${props => props.theme.backgroundColor.primary};
`

const Landing = () => {
  return (
    <Background>
      <Header/>
      <Intro/>
      <Features/>
      <AboutUs/>
      <Pricing/>
      <Footer/>
    </Background>
  )
};

export default Landing;