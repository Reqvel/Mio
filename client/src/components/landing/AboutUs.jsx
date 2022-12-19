import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 256px;
  padding-bottom: 256px;
  background-color: ${props => props.theme.backgroundColor.secondary};
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.landing};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.landing};
  padding-right: ${props => props.theme.padding.landing};
`;

const Section = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 24px;
`

const Header = styled.h2`
  font-size: 3.052rem;
  font-weight: 700;
  margin: 0 0 64px 0;
  color: ${props => props.theme.textColor.primary};
`

const Details = styled.span`
  max-width: 768px;
  text-align: center;
  color: ${props => props.theme.textColor.subtile};
`

const AboutUs = () => {
  return (
    <Wrapper id='aboutUs'>
        <Container>
          <Section>
            About Us
          </Section>
          <Header>
            About Our Project
          </Header>
          <Details>
          A web application for content creators that aims to unify and facilitate the monitoring of statistics on selected social networks. 
          It also allows you to create a calendar plan and track the progress of tasks.
          Our target audience are content creators, regardless of the size of their audience, on platforms such as Instagram, YouTube and TikTok.
          </Details>
        </Container>
    </Wrapper>
  )
};

export default AboutUs;