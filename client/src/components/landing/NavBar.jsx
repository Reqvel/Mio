import React from 'react';
import styled from 'styled-components';
import NavBarItem from './NavBarItem';

const Nav = styled.nav`
  text-align: center;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavBar = () => {
  return (
    <Nav>
        <List>
          <NavBarItem sectionId='#features'> Features </NavBarItem>
          <NavBarItem sectionId='#aboutUs'> About Us </NavBarItem>
          <NavBarItem sectionId='#pricing'> Pricing </NavBarItem>
        </List>
    </Nav>
  )
};

export default NavBar;