import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Illustration } from '../svgs/SignIn.svg';
import FormWrapper from '../components/common/FormWrapper';
import SignInForm from '../components/SignInForm';
import { LogoTextL } from '../components/common/LogoText';

const Background = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.bgSecondary};
`;

const Container = styled.div`
  height: 100%;
  max-width: ${props => props.theme.mainTheme.maxWidth};
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Left = styled.div`
  max-width: 400px;
  padding-left: 80px;
  padding-right: 80px;
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.bgPrimary};
`;

const Right = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.mainTheme.sidePadding};
`;

const BottomText = styled.span`
  color: ${props => props.theme.textPrimary};
  font-weight: 600;
`

const StyledLink = styled.a`
  color: ${props => props.theme.textPrimary};
`

const SignIn = () => {
  return (
    <Background>
        <Container>
            <Left>
                <FormWrapper>
                  <LogoTextL/>
                  <SignInForm/>
                  <BottomText>
                    Don’t have an account? &nbsp;
                    <StyledLink href='/'>
                      Sign Up
                    </StyledLink>
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