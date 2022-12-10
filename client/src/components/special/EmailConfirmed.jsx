import React, { useEffect } from 'react'
import styled from 'styled-components'
import pagesPaths from '../../routes/PagesPaths';
import { tokenKey } from '../../redux/features/authSlice';
import { getTokenFromUrl } from '../../utils/GetTokenFromUrl.js'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Illustration } from '../../svgs/CheckCircle.svg';

const Container = styled.div`
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

const EmailConfirmed = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = getTokenFromUrl(window.location.search)
    if(token) {
      localStorage.setItem(tokenKey, token)
    }
    setTimeout(()=> { navigate(pagesPaths.dashboard) }, 3500);
  }, [])

  return (
    <Container>
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
    </Container>
  )
}

export default EmailConfirmed