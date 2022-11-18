import React from 'react';
import styled from 'styled-components'
import LogoText from '../common/LogoText';
import NavBar from './NavBar';
import { navBarItems } from '../../data/data';
import { Button } from '../common/Buttons';

const Container = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: transparent;
`;

const InnerContainer = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidth};
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const InnerContainerComponent = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  flex-grow: 1;
  flex-basis: 0;
  padding: 16px;
  gap: ${props => props.gap};
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <InnerContainerComponent justifyContent='start'>
          <LogoText fontSize='3.052rem' 
                    color={props => props.theme.textPrimary}
                    text='Mio'/>
        </InnerContainerComponent>
        <InnerContainerComponent justifyContent='center'>
          <NavBar fontSize='0.8rem'
                  textColor={props => props.theme.textSecondary}
                  textColorHover={props => props.theme.textPrimary}
                  underscoreColor={props => props.theme.mainTheme.accentColor}
                  items={navBarItems}/>
        </InnerContainerComponent>
        <InnerContainerComponent justifyContent='end' gap='12px'>
          <Button fontSize='1rem'
                  textColor={props => props.theme.textPrimary}
                  buttonColor='transparent'
                  buttonColorHover={props => props.theme.buttonColorHover}
                  borderColor='transparent'
                  text='Sign In'/>
          <Button fontSize='1rem'
                  textColor={props => props.theme.textPrimary}
                  buttonColor='transparent'
                  buttonColorHover={props => props.theme.buttonColorHover}
                  borderColor={props => props.theme.buttonBorderColor}
                  text='Sign Up'/>
        </InnerContainerComponent>
      </InnerContainer>
    </Container>
  )
};

export default Header;