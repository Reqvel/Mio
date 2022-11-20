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

const NavBar = ({items}) => {
  let listItems = <></>

  if (items?.length) {
    listItems = items.map( (item, index) =>
        <NavBarItem key={index}> {item} </NavBarItem>
    )
  }

  return (
    <Nav>
        <List>
            {listItems}
        </List>
    </Nav>
  )
};

export default NavBar;