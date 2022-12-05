import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Illustration } from '../svgs/SignUp.svg';
import FormWrapper from '../components/common/FormWrapper';
import SignUpForm from '../components/forms/SignUpForm';
import { LogoTextL } from '../components/common/LogoText';
import { StyledLink } from '../components/common/Links';
import pagesPaths from '../routes/PagesPaths';

const Background = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor.secondary};
`;

const Container = styled.div`
  height: 100%;
  max-width: ${props => props.theme.maxWidth.signUp};
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
  background-color: ${props => props.theme.backgroundColor.primary};
`;

const Right = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.padding.signUp};
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

const SignUp = () => {
  return (
    <Background>
        <Container>
            <Left>
                <FormWrapper>
                  <StyledLink to={pagesPaths.landing}>
                    <LogoTextL color={props => props.theme.textColor.primary}/>
                  </StyledLink>
                  <SignUpForm/>
                  <BottomText>
                    Already have an account?&nbsp;
                    <StyledLinkDecorated to={pagesPaths.signIn}>
                        Sign In
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

export default SignUp