import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import EmailIcon from '../../svgs/icons/Mail.svg'
import { ButtonBig } from '../common/Buttons'
import { useResetPasswordMutation } from '../../redux/features/authApiSlice'
import pagesPaths from '../../routes/PagesPaths'
import { useNavigate } from 'react-router-dom'

const Container = styled.form`
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  margin: 0 0 48px 0;
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

const ErrMsg = styled.span`
  display: ${props => props.isVisible ? 'inline' : 'none'};
  color: red;
  font-weight: 600;
  margin-bottom: 24px;
`

const ResetPasswordForm = () => {
  const emailRef = useRef()
  const [email, setEmail] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const redirectTo = window.location.origin + pagesPaths.changePassword
  const navigate = useNavigate()

  const handleEmailInput = (e) => setEmail(e.target.value)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await resetPassword({ email, 
                                             redirect_to: redirectTo }).unwrap()
      setEmail('')
      navigate(pagesPaths.resetPasswordCheckEmail)
    } catch (err) {
      setErrMsg('Error')
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Header>Reset password</Header>
      <Details>
        Enter your user account's email address and we will send you a password reset link.
      </Details>
      <Fields>
        <FormField label='Email' 
                    icon={EmailIcon}
                    placeholder='Enter Email'
                    refTo={emailRef}
                    value={email}
                    onChange={handleEmailInput}
                    disabled={isLoading}
                    type={'email'}/>
      </Fields>
      <ErrMsg isVisible={errMsg}>
        {errMsg}
      </ErrMsg>
      <ButtonBig disabled={isLoading}>
        {!isLoading
          ? 'Send password reset email'
          : 'Sending password reset email...'}
      </ButtonBig>
    </Container>
  )
}

export default ResetPasswordForm