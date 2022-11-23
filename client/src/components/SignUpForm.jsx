import React from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import EmailIcon from '../svgs/icons/Mail.svg'
import PasswordIcon from '../svgs/icons/Lock.svg'
import { ButtonBig } from './common/Buttons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  margin: 0 0 48px 0;
  font-size: 3.052rem;
  font-weight: 700;
  color: ${props => props.theme.textPrimary};
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 56px;
`

const SignUpForm = () => {
  return (
    <Container>
      <Header>Sign Up</Header>
      <Fields>
        <FormField label='Email' 
                   placeholder='Enter Email' 
                   icon={EmailIcon}/>
        <FormField label='Password' 
                   placeholder='Enter Password'
                   icon={PasswordIcon}/>
      </Fields>
      <ButtonBig>
        Sign Up
      </ButtonBig>
    </Container>
  )
}

export default SignUpForm