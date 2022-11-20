import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  text-align: center;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline-block;
  position: relative;
  padding: 16px;
  margin-right: 24px;
  font-size: ${props => props.fontSize};
  cursor: pointer;
  color: ${props => props.textColor};
  transition: color 0.3s ease;

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

const NavBar = ({fontSize, 
                 textColor, 
                 textColorHover, 
                 underscoreColor, 
                 items}) => {
  let listItems = <></>

  if (items?.length) {
    listItems = items.map( (item, index) =>
        <Item key={index}
                     fontSize= {fontSize}
                     textColor={textColor}
                     textColorHover={textColorHover}
                     underscoreColor={underscoreColor}>
            {item}
        </Item>
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