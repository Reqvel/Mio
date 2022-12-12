import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import { ButtonBig } from '../common/Buttons'
import { useRegisterMutation } from '../../redux/features/authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/features/authSlice'
import pagesPaths from '../../routes/PagesPaths'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LightEmailIcon from '../../svgs/light/icons/Mail.svg'
import LightPasswordIcon from '../../svgs/light/icons/Lock.svg'
import DarkEmailIcon from '../../svgs/dark/icons/Mail.svg'
import DarkPasswordIcon from '../../svgs/dark/icons/Lock.svg'

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
  const { isThemeDark } = useSelector(state => state.app)
  const emailRef = useRef()
  const pwdRef = useRef()
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()
  const dispatch = useDispatch()

  const redirectTo = window.location.origin + pagesPaths.emailConfirmed

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
      const userData = await register({ email, 
                                        password: pwd, 
                                        redirect_to: redirectTo }).unwrap()
      dispatch(setCredentials({...userData}))
      setEmail('')
      setPwd('')
      navigate(pagesPaths.confirmEmail)
    } catch (err) {
      pwdRef.current.focus()
      if(err?.status === 400) {
        setErrMsg('This email address is already in use')
      } else {
        setErrMsg('Idk')
      }
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Header>Sign Up</Header>
      <Fields>
        <FormField label='Email' 
                   icon={isThemeDark
                    ? DarkEmailIcon
                    : LightEmailIcon}
                   placeholder='Enter Email' 
                   refTo={emailRef}
                   value={email}
                   onChange={handleEmailInput}
                   disabled={isLoading}
                   type={'email'}/>
        <FormField label='Password' 
                   icon={isThemeDark
                    ? DarkPasswordIcon
                    : LightPasswordIcon}
                   placeholder='Enter Password'
                   refTo={pwdRef}
                   value={pwd}
                   onChange={handlePwdInput}
                   disabled={isLoading}
                   type={'password'}
                   pattern={".{8,}"}
                   title={"8 characters minimum"}/>
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