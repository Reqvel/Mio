import React from 'react';
import Header from '../components/landing/Header';
import Intro from '../components/landing/Intro';
import Features from '../components/landing/Features';
import AboutUs from '../components/landing/AboutUs';
import Pricing from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';
import styled from 'styled-components';
import useAppearAnimation from '../hooks/useAppearAnimation';

const Background = styled.div`
  background-color: ${props => props.theme.backgroundColor.primary};
`

const Landing = () => {
  const componentRef = useAppearAnimation(0.3)

  return (
    <Background ref={componentRef}>
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