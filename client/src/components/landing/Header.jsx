import React from 'react';
import styled from 'styled-components'
import { LogoTextM } from '../common/LogoText';
import NavBar from './NavBar';
import { navBarItems } from '../../data/data';
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

const Item = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  gap: ${props => props.gap};
  justify-content: ${props => props.justifyContent};
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Item justifyContent='start'>
          <LogoTextM/>
        </Item>
        <Item justifyContent='center'>
          <NavBar items={navBarItems}/>
        </Item>
        <Item justifyContent='end' gap='12px'>
          <ButtonTransparent>
            Sign In
          </ButtonTransparent>
          <ButtonOutlined>
            Sign Up
          </ButtonOutlined>
        </Item>
      </Container>
    </Wrapper>
  )
};

export default Header;