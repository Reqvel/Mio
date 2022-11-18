import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  text-align: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavListItem = styled.li`
  display: inline-block;
  position: relative;
  padding: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.textColor};

  :hover {
    color: ${props => props.textColorHover};
    transition: color 0.3s ease;
  };

  ::after {
    content: '';
    position: absolute;
    background: none repeat scroll 0 0 transparent;
    width: 0;
    bottom: 0;
    left: 50%;
    height: 2px;
    background: ${props => props.underscoreColor};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  };

  :hover::after {
    width: 100%;
    left: 0;
  };
`;

const NavBar = ({textColor, textColorHover, underscoreColor, items}) => {
  let navListItems = <></>

  if (items?.length) {
    navListItems = items.map( (item, index) =>
        <NavListItem key={index}
                     textColor={textColor}
                     textColorHover={textColorHover}
                     underscoreColor={underscoreColor}>
            {item}
        </NavListItem>
    )
  }

  return (
    <Nav>
        <NavList>
            {navListItems}
        </NavList>
    </Nav>
  )
};

export default NavBar;