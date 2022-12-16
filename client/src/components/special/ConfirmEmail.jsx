import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Illustration } from '../../svgs/EmailSent.svg';

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
  margin-top: 48px;
  margin-bottom: 48px;
`

const Details = styled.span`
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
`

const ConfirmEmail = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default ConfirmEmail