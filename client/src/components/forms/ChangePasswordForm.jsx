import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import { ButtonBig } from '../common/Buttons'
import { getResetTokensFromUrl } from '../../utils/GetResetTokensFromUrl'
import { useSetNewPasswordMutation } from '../../redux/features/authApiSlice'
import { useNavigate } from 'react-router-dom'
import pagesPaths from '../../routes/PagesPaths'
import { useSelector } from 'react-redux';
import LightPasswordIcon from '../../svgs/light/icons/Lock.svg'
import DarkPasswordIcon from '../../svgs/dark/icons/Lock.svg'

const Container = styled.form`
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

const ErrMsg = styled.span`
  display: ${props => props.isVisible ? 'inline' : 'none'};
  color: red;
  font-weight: 600;
  margin-bottom: 24px;
`

const ChangePasswordForm = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const pwdRef = useRef()
  const pwdConfirmRef = useRef()
  const [pwd, setPwd] = useState('')
  const [pwdConfirm, setPwdConfirm] = useState('')
  const [token, setToken] = useState(null)
  const [uidb64, setUidb64] = useState(null)
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()
  const [setNewPassword, { isLoading }] = useSetNewPasswordMutation()

  const handlePwdInput = (e) => setPwd(e.target.value)
  const handlePwdConfirmInput = (e) => setPwdConfirm(e.target.value)

  useEffect(() => {
    const { token, uidb64 } = getResetTokensFromUrl(window.location.search)
    setToken(token)
    setUidb64(uidb64)
    pwdRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [pwd, pwdConfirm])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(pwd === pwdConfirm) {
      try {
        const response = await setNewPassword({ password: pwd,
                                                token,
                                                uidb64 }).unwrap()
        setPwd('')
        setPwdConfirm('')
        navigate(pagesPaths.passwordChanged)
      } catch (err) {
        pwdRef.current.focus()
        setErrMsg('Error')
      }
    } else {
      pwdRef.current.focus()
      setErrMsg("Passwords doesn't match")
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Header>Change password</Header>
      <Details>
        Enter your user account's new password and confirm it.
      </Details>
      <Fields>
        <FormField label='New password' 
                    icon={isThemeDark
                          ? DarkPasswordIcon
                          : LightPasswordIcon}
                    placeholder='Enter new password'
                    refTo={pwdRef}
                    value={pwd}
                    onChange={handlePwdInput}
                    disabled={isLoading}
                    type={'password'}
                    pattern={".{8,}"}
                    title={"8 characters minimum"}/>
        <FormField label='Confirm new password' 
                    icon={isThemeDark
                      ? DarkPasswordIcon
                      : LightPasswordIcon}
                    placeholder='Enter new password'
                    refTo={pwdConfirmRef}
                    value={pwdConfirm}
                    onChange={handlePwdConfirmInput}
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
          ? 'Change password'
          : 'Sending...'}
      </ButtonBig>
    </Container>
  )
}

export default ChangePasswordForm