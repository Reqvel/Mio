import React from 'react'
import styled from 'styled-components'
import { LogoTextS } from '../common/LogoText';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import ToggleSwitch from '../common/ToggleSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { setIsThemeDark } from '../../redux/features/appSlice';

const Wrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: ${props => props.theme.components.footer.color};
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.landing};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.landing};
  padding-right: ${props => props.theme.padding.landing};
`;

const Left = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Center = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
  color: inherit;
`

const Right = styled.div`
  flex-grow: 1;
`;

const Theme = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.textColor.subtile};
  padding-bottom: 8px;
`

const Footer = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setIsThemeDark(!isThemeDark))
  }

  return (
    <Wrapper>
        <Container>
            <Left>
              <Theme>
                Dark mode
              </Theme>
              <ToggleSwitch checked={isThemeDark}
                            showToggle={false}
                            onChange={handleClick}/>
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