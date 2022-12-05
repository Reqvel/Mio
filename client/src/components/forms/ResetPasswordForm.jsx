import React from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import EmailIcon from '../../svgs/icons/Mail.svg'
import { ButtonBig } from '../common/Buttons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  margin: 0 0 16px 0;
  font-size: 3.052rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
`

const Details = styled.span`
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 36px;
`

const Fields = styled.div`
  margin-bottom: 56px;
`

const ResetPasswordForm = () => {
  return (
    <Container>
      <Header>Reset password</Header>
      <Details>
        Enter your user account's email address and we will send you a password reset link.
      </Details>
      <Fields>
        <FormField label='Email' 
                   placeholder='Enter Email' 
                   icon={EmailIcon}/>
      </Fields>
      <ButtonBig>
        Send password reset email
      </ButtonBig>
    </Container>
  )
}

export default ResetPasswordForm