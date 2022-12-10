import React from 'react'
import styled from 'styled-components'
import useAppearAnimation from '../hooks/useAppearAnimation';
import FormWrapper from '../components/common/FormWrapper'
import { StyledLink } from '../components/common/Links';
import { LogoTextL } from '../components/common/LogoText';
import pagesPaths from '../routes/PagesPaths';
import { Outlet } from 'react-router-dom';

const Background = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor.secondary};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  max-width: 400px;
  padding: 40px 80px;
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor.primary};
`;

const Filler = styled.div`
  height: 70px;
`

const Special = () => {
  const componentRef = useAppearAnimation(0.3)

  return (
    <Background ref={componentRef}>
        <Wrapper>
            <Container>
                <FormWrapper>
                  <StyledLink to={pagesPaths.landing}>
                    <LogoTextL color={props => props.theme.textColor.primary}/>
                  </StyledLink>
                  <Outlet/>
                  <Filler/>
                </FormWrapper>
            </Container>
        </Wrapper>
    </Background>
  )
}

export default Special