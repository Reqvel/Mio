import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Buttons';
import { ReactComponent as Illustration } from '../../svgs/Illustration.svg';

const Container = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
`;

const InnerContainer = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidth};
  display: flex;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.mainTheme.sidePadding};
  padding-right: ${props => props.theme.mainTheme.sidePadding};
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-grow: 13;
  flex-basis: 0;
  gap: 36px;
`;

const RightContainer = styled.div`
  flex-grow: 11;
  flex-basis: 0;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const H1 = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  font-size: 4.768rem;
  font-weight: 800;
  line-height: 98%;
  color: ${props => props.theme.textPrimary};
`;

const P = styled.p`
  margin: 0;
  width: 70%;
  font-size: 1rem;
  color: ${props => props.theme.textSubtile};
`;

const Home = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
            <TextContainer>
                <H1>
                    A simple tool <br/>
                    for social media <br/>
                    management
                </H1>
                <P>
                    Our Many-In-One social media managment platform allows content creators to plan, track and see ... TODO
                </P>
            </TextContainer>
            <Button padding='20px 64px'
                    fontSize='1rem'
                    textColor={props => props.theme.textSecondary}
                    buttonColor={props => props.theme.buttonColor}
                    text='Start Free Trial'/>
        </LeftContainer>
        <RightContainer>
            <Illustration/>
        </RightContainer>
      </InnerContainer>
    </Container>
  )
};

export default Home;