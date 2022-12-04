import React from 'react';
import styled from 'styled-components'
import { LogoTextM } from '../common/LogoText';
import NavBar from './NavBar';
import { LinkButtonTransparent, LinkButtonOutlined } from '../common/Links';
import pagesPaths from '../../routes/PagesPaths';
import { StyledLink } from '../common/Links';

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
  max-width: ${props => props.theme.maxWidth.landing};
  padding-left: ${props => props.theme.padding.landing};
  padding-right: ${props => props.theme.padding.landing};
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
    <Wrapper id='header'>
      <Container>
        <Logo>
          <StyledLink to={pagesPaths.landing}>
            <LogoTextM color={props => props.theme.textColor.primary}/>
          </StyledLink>
        </Logo>
        <NavBarSection>
          <NavBar/>
        </NavBarSection>
        <Buttons>
          <LinkButtonTransparent to={pagesPaths.signIn}>
            Sign In
          </LinkButtonTransparent>
          <LinkButtonOutlined to={pagesPaths.signUp}>
            Sign Up
          </LinkButtonOutlined>
        </Buttons>
      </Container>
    </Wrapper>
  )
};

export default Header;