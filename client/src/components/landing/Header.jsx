import React from 'react';
import styled from 'styled-components'
import { LogoTextM } from '../common/LogoText';
import NavBar from './NavBar';
import { ButtonTransparent, ButtonOutlined } from '../common/Buttons';

const Wrapper = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: transparent;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.mainTheme.maxWidth};
  padding-left: ${props => props.theme.mainTheme.sidePadding};
  padding-right: ${props => props.theme.mainTheme.sidePadding};
`;

const Section = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
`;

const Logo = styled(Section)`
  justify-content: start;
`

const NavBarSection = styled(Section)`
  justify-content: center;
`

const Buttons = styled(Section)`
  justify-content: end;
  gap: 12px;
`

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <LogoTextM/>
        </Logo>
        <NavBarSection>
          <NavBar/>
        </NavBarSection>
        <Buttons>
          <ButtonTransparent>
            Sign In
          </ButtonTransparent>
          <ButtonOutlined>
            Sign Up
          </ButtonOutlined>
        </Buttons>
      </Container>
    </Wrapper>
  )
};

export default Header;