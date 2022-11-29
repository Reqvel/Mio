import React from 'react'
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import CalendarIcon from '../../svgs/CalendarIcon.svg'

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: ${props => props.theme.bgPrimary};
`;

const Container = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.mainTheme.sidePadding};
  padding-right: ${props => props.theme.mainTheme.sidePadding};
`;

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

const Cards = styled.div`
    display: flex;
    gap: ${props => props.theme.mainTheme.cardsGap};
`;

const Features = () => {
  return (
    <Wrapper>
        <Container>
            <Section>
              Change This
            </Section>
            <Header>
              Change That
            </Header>
            <Cards>
                <FeatureCard icon={CalendarIcon}
                             header='Calendar'
                             details='Illuminate business-critical insights by tapping into the world’s largest and most transparent focus group: social media.'/>
                <FeatureCard icon={CalendarIcon}
                             header='Calendar'
                             details='Illuminate business-critical insights by tapping into the world’s largest and most transparent focus group: social media.'/>
                <FeatureCard icon={CalendarIcon}
                             header='Calendar'
                             details='Illuminate business-critical insights by tapping into the world’s largest and most transparent focus group: social media.'/>
            </Cards>
        </Container>
    </Wrapper>
  )
}

export default Features