import React from 'react'
import styled from 'styled-components';
import { StyledLink } from '../components/common/Links';
import pagesPaths from '../routes/PagesPaths';
import { LogoTextL } from '../components/common/LogoText';
import ResetPasswordForm from '../components/forms/ResetPasswordForm';

const Background = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.bgSecondary};
`;

const Wrapper = styled.div`
  height: 100%;
  max-width: ${props => props.theme.mainTheme.maxWidth};
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
  background-color: ${props => props.theme.bgPrimary};
`;

const FormWrapper = styled.div`
  max-height: 864px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  position: absolute;
`

const ResetPassword = () => {
  return (
    <Background>
        <Wrapper>
            <Container>
                <FormWrapper>
                    <Logo>
                        <StyledLink to={pagesPaths.landing}>
                            <LogoTextL/>
                        </StyledLink>
                    </Logo>
                    <ResetPasswordForm/>
                </FormWrapper>
            </Container>
        </Wrapper>
    </Background>
  )
}

export default ResetPassword