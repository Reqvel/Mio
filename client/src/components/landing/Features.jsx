import React from 'react'
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import CalendarIcon from '../../svgs/CalendarIcon.svg'

const Wrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
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

const Cards = styled.div`
    display: flex;
    gap: ${props => props.theme.gap.cards.landing};
`;

const Features = () => {
  return (
    <Wrapper id='features'>
        <Container>
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