import React from 'react';
import styled from 'styled-components'
import LogoText from '../common/LogoText';
import NavBar from './NavBar';

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
  flex-grow: 1;
  flex-basis: 0;
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <InnerContainerComponent>
          <LogoText fontSize='3.052rem' 
                    color={props => props.theme.textPrimary}
                    text='Mio'/>
        </InnerContainerComponent>
        <InnerContainerComponent>
          <NavBar textColor={props => props.theme.textSecondary}
                  textColorHover={props => props.theme.textPrimary}
                  underscoreColor={props => props.theme.mainTheme.accentColor}
                  items={['Home', 'About Us', 'Pricing']}/>
        </InnerContainerComponent>
        <InnerContainerComponent>
          <a>hello</a>
        </InnerContainerComponent>
      </InnerContainer>
    </Container>
  )
};

export default Header;