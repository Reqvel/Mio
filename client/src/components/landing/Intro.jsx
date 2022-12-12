import React from 'react';
import styled from 'styled-components';
import { LinkButtonBig } from '../common/Links';
import pagesPaths from '../../routes/PagesPaths';
import { ReactComponent as LightIllustration } from '../../svgs/light/illustrations/Illustration.svg';
import { ReactComponent as DarkIllustration } from '../../svgs/dark/illustrations/Illustration.svg';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  padding-top: 166px;
  padding-bottom: 166px;
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.landing};
  display: flex;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.landing};
  padding-right: ${props => props.theme.padding.landing};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 36px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  font-size: 4.768rem;
  font-weight: 800;
  line-height: 98%;
  color: ${props => props.theme.textColor.primary};
`;

const Details = styled.p`
  margin: 0;
  width: 70%;
  font-size: 1rem;
  color: ${props => props.theme.textColor.subtile};
`;

const Intro = () => {
  const { isThemeDark } = useSelector(state => state.app)

  return (
    <Wrapper>
      <Container>
        <Left>
            <Text>
                <Header>
                    A simple tool <br/>
                    for social media <br/>
                    management
                </Header>
                <Details>
                    Our Many-In-One social media managment platform allows content creators to plan, track and see ... TODO
                </Details>
            </Text>
            <LinkButtonBig to={pagesPaths.signIn}>
              Start Free Trial
            </LinkButtonBig>
        </Left>
        <Right>
          {
            isThemeDark
              ? <DarkIllustration/>
              : <LightIllustration/>
          }
        </Right>
      </Container>
    </Wrapper>
  )
};

export default Intro;