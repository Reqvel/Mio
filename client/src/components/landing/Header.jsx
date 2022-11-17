import React from 'react';
import styled from 'styled-components'

const Container = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: transparent;
`;

const InnerContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const InnerContainerComponent = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const Logo = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 3.052rem;
`;

const Nav = styled.nav`
  text-align: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavListItem = styled.li`
  display: inline;
  padding: 16px;
`

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <InnerContainerComponent>
          <Logo>
            Mio
          </Logo>
        </InnerContainerComponent>
        <InnerContainerComponent>
          <Nav>
            <NavList>
              <NavListItem>Home</NavListItem>
              <NavListItem>About Us</NavListItem>
              <NavListItem>Pricing</NavListItem>
            </NavList>
          </Nav>
        </InnerContainerComponent>
        <InnerContainerComponent>
          <a>hello</a>
        </InnerContainerComponent>
      </InnerContainer>
    </Container>
  )
};

export default Header;