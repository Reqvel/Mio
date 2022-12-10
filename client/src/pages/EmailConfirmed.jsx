import React, { useEffect } from 'react'
import styled from 'styled-components'
import useAppearAnimation from '../hooks/useAppearAnimation';
import FormWrapper from '../components/common/FormWrapper'
import { StyledLink } from '../components/common/Links';
import { LogoTextL } from '../components/common/LogoText';
import pagesPaths from '../routes/PagesPaths';
import { tokenKey } from '../redux/features/authSlice';
import { getTokenFromUrl } from '../utils/GetTokenFromUrl.js'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Illustration } from '../svgs/CheckCircle.svg';

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
  margin-bottom: 64px;
`

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`

const Details = styled.span`
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
`

const Filler = styled.div`
  height: 70px;
`

const EmailConfirmed = () => {
  const componentRef = useAppearAnimation(0.3)
  const navigate = useNavigate()

  useEffect(() => {
    const token = getTokenFromUrl(window.location.search)
    if(token) {
      localStorage.setItem(tokenKey, token)
    }
    setTimeout(()=> { navigate(pagesPaths.dashboard) }, 3500);
  }, [])

  return (
    <Background ref={componentRef}>
        <Wrapper>
            <Container>
                <FormWrapper>
                  <StyledLink to={pagesPaths.landing}>
                    <LogoTextL color={props => props.theme.textColor.primary}/>
                  </StyledLink>
                  <InnerContainer>
                    <Header>Email confirmed</Header>
                    <Text>
                      Congratulations!
                      Your email address has been confirmed.
                      You can now login to the applicaton.
                    </Text>
                    <IllustrationContainer>
                      <Illustration/>
                    </IllustrationContainer>
                    <Details>
                      Redirecting you to home page...
                    </Details>
                  </InnerContainer>
                  <Filler/>
                </FormWrapper>
            </Container>
        </Wrapper>
    </Background>
  )
}

export default EmailConfirmed