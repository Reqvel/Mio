import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import EmailIcon from '../../svgs/icons/Mail.svg'
import PasswordIcon from '../../svgs/icons/Lock.svg'
import { ButtonBig } from '../common/Buttons'
import { useRegisterMutation } from '../../redux/features/authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/features/authSlice'
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

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 56px;
`

const ErrMsg = styled.span`
  display: ${props => props.isVisible ? 'inline' : 'none'};
  color: red;
  font-weight: 600;
  margin-bottom: 24px;
`

const SignUpForm = () => {
  const emailRef = useRef()
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, pwd])

  const handleEmailInput = (e) => setEmail(e.target.value)
  const handlePwdInput = (e) => setPwd(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userData = await register({ email, pwd }).unwrap()
      dispatch(setCredentials({...userData}))
      setEmail('')
      setPwd('')
      navigate(pagesPaths.dashboard)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response')
      } else if (err?.originalStatus === 400) {
        setErrMsg('Missing email or pwd')
      } else if (err?.originalStatus === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Undef. error')
      }
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Header>Sign Up</Header>
      <Fields>
        <FormField label='Email' 
                   icon={EmailIcon}
                   placeholder='Enter Email' 
                   refTo={emailRef}
                   value={email}
                   onChange={handleEmailInput}
                   disabled={isLoading}
                   type={'email'}/>
        <FormField label='Password' 
                   icon={PasswordIcon}
                   placeholder='Enter Password'
                   value={pwd}
                   onChange={handlePwdInput}
                   disabled={isLoading}
                   type={'password'}/>
      </Fields>
      <ErrMsg isVisible={errMsg}>
        {errMsg}
      </ErrMsg>
      <ButtonBig disabled={isLoading}>
        {!isLoading
          ? 'Sign Up'
          : 'Signing Up...'}
      </ButtonBig>
    </Container>
  )
}

export default SignUpForm