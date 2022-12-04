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
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc
          </Details>
        </Container>
    </Wrapper>
  )
};

export default AboutUs;