import React from 'react';
import styled from 'styled-components'
import LogoText from '../common/LogoText';
import NavBar from './NavBar';
import { logoText, navBarItems } from '../../data/data';
import { Button } from '../common/Buttons';

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
          <LogoText fontSize='3.052rem' 
                    color={props => props.theme.textPrimary}>
            {logoText}
          </LogoText>
        </Item>
        <Item justifyContent='center'>
          <NavBar fontSize='0.8rem'
                  textColor={props => props.theme.textSubtile}
                  textColorHover={props => props.theme.textPrimary}
                  underscoreColor={props => props.theme.mainTheme.accentColor}
                  items={navBarItems}/>
        </Item>
        <Item justifyContent='end' gap='12px'>
          <Button fontSize='1rem'
                  textColor={props => props.theme.textPrimary}
                  buttonColorHover={props => props.theme.buttonColorHover}>
            Sign In
          </Button>
          <Button fontSize='1rem'
                  textColor={props => props.theme.textPrimary}
                  buttonColorHover={props => props.theme.buttonColorHover}
                  borderColor={props => props.theme.buttonBorderColor}>
            Sign Up
          </Button>
        </Item>
      </Container>
    </Wrapper>
  )
};

export default Header;