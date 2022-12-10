import React from 'react'
import styled from 'styled-components'
import useAppearAnimation from '../hooks/useAppearAnimation';
import FormWrapper from '../components/common/FormWrapper'
import { StyledLink } from '../components/common/Links';
import { LogoTextL } from '../components/common/LogoText';
import pagesPaths from '../routes/PagesPaths';
import { ReactComponent as Illustration } from '../svgs/EmailSent.svg';

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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  margin: 0 0 48px 0;
  font-size: 3.052rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
`

const Text = styled.span`
  color: ${props => props.theme.textColor.subtile};
  margin-top: 48px;
  margin-bottom: 48px;
`

const Details = styled.span`
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
`

const Filler = styled.div`
  height: 70px;
`

// const SpinnerCotainer = styled.div`
//   display: grid;
//   justify-content: center;
//   align-items: center;
// `

// const Spinner = styled.div`
//   width: 36px;
//   height: 36px;
//   border: 8px solid ${props => props.theme.components.spinner.backgroundColor};
//   border-top: 8px solid ${props => props.theme.components.spinner.foregroundColor};
//   border-radius: 60%;
//   animation: spinner 1.5s linear infinite;

//   @keyframes spinner {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `

const ConfirmEmail = () => {
  const componentRef = useAppearAnimation(0.3)

  return (
    <Background ref={componentRef}>
        <Wrapper>
            <Container>
                <FormWrapper>
                  <StyledLink to={pagesPaths.landing}>
                    <LogoTextL color={props => props.theme.textColor.primary}/>
                  </StyledLink>
                  <InnerContainer>
                    <Header>Confirm your email</Header>
                    <Illustration/>
                    <Text>
                      Thanks for signing up.
                      We emailed you a confirmation link to your email inbox.
                      After receiving the email follow the link provided to complete your verification.
                    </Text>
                    <Details>
                      Didn't get a confirmation email? <br/>
                      Check your spam folder or Send again
                    </Details>
                  </InnerContainer>
                  <Filler/>
                </FormWrapper>
            </Container>
        </Wrapper>
    </Background>
  )
}

export default ConfirmEmail