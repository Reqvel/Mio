import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import { ButtonBig } from '../common/Buttons'
import { StyledLink } from '../common/Links'
import pagesPaths from '../../routes/PagesPaths'
import { useLoginMutation } from '../../redux/features/authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/features/authSlice'
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
  margin-bottom: 24px;
`

const ErrMsg = styled.span`
  display: ${props => props.isVisible ? 'inline' : 'none'};
  color: red;
  font-weight: 600;
  margin-bottom: 24px;
`

const StyledLinkDecorated = styled(StyledLink)`
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 56px;
`

const SignInForm = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const emailRef = useRef()
  const pwdRef = useRef()
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
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
      const userData = await login({ email, password : pwd }).unwrap()
      dispatch(setCredentials({...userData}))
      setEmail('')
      setPwd('')
      navigate(pagesPaths.dashboard)
    } catch (err) {
      pwdRef.current.focus()
      setErrMsg('Invalid credentials')
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Header>Sign In</Header>
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
                  type={'password'}/>
      </Fields>
      <ErrMsg isVisible={errMsg}>
        {errMsg}
      </ErrMsg>
      <StyledLinkDecorated to={pagesPaths.resetPassword}>
        Forgot Password?
      </StyledLinkDecorated>
      <ButtonBig disabled={isLoading}>
        {!isLoading
          ? 'Sign In'
          : 'Signing In...'}
      </ButtonBig>
    </Container>
  )
}

export default SignInForm