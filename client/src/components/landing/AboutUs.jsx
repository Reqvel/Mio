import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../common/CardWrapper';
import AboutUsCard from './AboutUsCard';
import { aboutUsCardsInfo } from '../../data/data';

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: ${props => props.theme.bgSecondary};
`;

const Container = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidth};
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.mainTheme.sidePadding};
  padding-right: ${props => props.theme.mainTheme.sidePadding};;
`;

const Cards = styled.div`
    display: flex;
    gap: ${props => props.theme.mainTheme.cardsGap};
`;

const AboutUs = () => {
  let cards = <></>

  if (aboutUsCardsInfo?.length) {
    cards = aboutUsCardsInfo.map( (cardInfo, index) => 
      <CardWrapper key={index}
                   padding='24px 48px 48px'
                   wrapperColor={props => props.theme.aboutUsCardColor}>
          <AboutUsCard info={cardInfo}
                       headerColor={props => props.theme.textSecondary}
                       detailsColor={props => props.theme.textSubtile}/>
      </CardWrapper>)
    }

  return (
    <Wrapper>
        <Container>
            <Cards>
              {cards}
            </Cards>
        </Container>
    </Wrapper>
  )
};

export default AboutUs;