import React from 'react'
import styled from 'styled-components'
import { LogoTextS } from '../common/LogoText';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Wrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: ${props => props.theme.components.footer.color};
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.landing};
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.landing};
  padding-right: ${props => props.theme.padding.landing};
`;

const Left = styled.div`
  flex-grow: 1;
`;

const Center = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
  color: inherit;
`

const Right = styled.div`
  flex-grow: 1;
`;

const Footer = () => {
  return (
    <Wrapper>
        <Container>
            <Left>

            </Left>
            <Center>
              <StyledAnchorLink href='#header'>
                <LogoTextS color={props => props.theme.textColor.secondary}/>
              </StyledAnchorLink>
            </Center>
            <Right>
                
            </Right>
        </Container>
    </Wrapper>
  )
}

export default Footer