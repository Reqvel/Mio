import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 128px;
  padding-bottom: 128px;
  background-color: ${props => props.theme.bgSecondary};
`;

const Container = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.textSubtile};
  margin-bottom: 24px;
`

const Header = styled.h2`
  font-size: 3.052rem;
  font-weight: 700;
  margin: 0 0 64px 0;
`

const Details = styled.span`
  max-width: 768px;
  text-align: center;
  color: ${props => props.theme.textSubtile};
`

const AboutUs = () => {
  return (
    <Wrapper>
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