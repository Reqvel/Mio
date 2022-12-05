import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Illustration } from '../svgs/SignIn.svg';
import FormWrapper from '../components/common/FormWrapper';
import SignInForm from '../components/forms/SignInForm';
import { StyledLink } from '../components/common/Links';
import { LogoTextL } from '../components/common/LogoText';
import pagesPaths from '../routes/PagesPaths'

const Background = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor.secondary};
`;

const Container = styled.div`
  height: 100%;
  max-width: ${props => props.theme.maxWidth.signIn};
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Left = styled.div`
  max-width: 400px;
  padding: 40px 80px;
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.padding.signIn};
`;

const Right = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.padding.signIn};
`;

const BottomText = styled.span`
  color: ${props => props.theme.textColor.primary};
  font-weight: 600;
`

const StyledLinkDecorated = styled(StyledLink)`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  color: ${props => props.theme.textColor.primary};
`

const SignIn = () => {
  return (
    <Background>
        <Container>
            <Left>
                <FormWrapper>
                  <StyledLink to={pagesPaths.landing}>
                    <LogoTextL color={props => props.theme.textColor.primary}/>
                  </StyledLink>
                  <SignInForm/>
                  <BottomText>
                    Don’t have an account?&nbsp;
                    <StyledLinkDecorated to={pagesPaths.signUp}>
                      Sign Up
                    </StyledLinkDecorated>
                  </BottomText>
                </FormWrapper>
            </Left>
            <Right>
                <Illustration/>
            </Right>
        </Container>
    </Background>
  )
}

export default SignIn