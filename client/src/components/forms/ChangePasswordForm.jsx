import React from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import PasswordIcon from '../../svgs/icons/Lock.svg'
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
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 56px;
`

const ChangePasswordForm = () => {
  return (
    <Container>
      <Header>Change password</Header>
      <Details>
        Enter your user account's new password and confirm it.
      </Details>
      <Fields>
        <FormField label='New password' 
                   placeholder='Enter new password'
                   icon={PasswordIcon}/>
        <FormField label='Confirm new password' 
                   placeholder='Enter new password'
                   icon={PasswordIcon}/>
      </Fields>
      <ButtonBig>
        Change password
      </ButtonBig>
    </Container>
  )
}

export default ChangePasswordForm