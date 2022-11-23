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
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 24px;
`

const StyledLink = styled.a`
  font-weight: 600;
  color: ${props => props.theme.textSubtile};
  margin-bottom: 56px;
`

const SignInForm = () => {
  return (
    <Container>
      <Header>Sign In</Header>
      <Fields>
        <FormField label='Email' 
                   placeholder='Enter Email' 
                   icon={EmailIcon}/>
        <FormField label='Password' 
                   placeholder='Enter Password'
                   icon={PasswordIcon}/>
      </Fields>
      <StyledLink href='/'>
        Forgot Password?
      </StyledLink>
      <ButtonBig>
        Sign In
      </ButtonBig>
    </Container>
  )
}

export default SignInForm