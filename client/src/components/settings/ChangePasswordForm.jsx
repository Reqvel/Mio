import React, { useRef, useEffect, useState } from 'react'
import { setHeader, setSelectedOption } from '../../redux/features/settingsSlice';
import { useDispatch } from 'react-redux';
import pagesPaths from '../../routes/PagesPaths';
import styled from 'styled-components';
import FormField from '../forms/FormField'
import { ButtonBig } from '../common/Buttons'
import { useSelector } from 'react-redux';
import LightPasswordIcon from '../../svgs/light/icons/Lock.svg'
import DarkPasswordIcon from '../../svgs/dark/icons/Lock.svg'
import { useResetPasswordInPlaceMutation } from '../../redux/features/authApiSlice'
import { ReactComponent as Illustration } from '../../svgs/CheckCircle.svg';

const Container = styled.form`
  display: flex;
  flex-direction: column;
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
`

const ErrMsg = styled.span`
  display: ${props => props.isVisible ? 'inline' : 'none'};
  color: red;
  font-weight: 600;
  margin-bottom: 24px;
`

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 24px;
`

const ConfirmHeader = styled.h1`
  margin: 0 0 24px 0;
  font-size: 2.441rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
`

const ChangePasswordForm = () => {
  const header = "Change password"
  const details = "Chnage your account's password"
  const dispatch = useDispatch()

  const { isThemeDark } = useSelector(state => state.app)
  const pwdCurrentRef = useRef()
  const pwdNewRef = useRef()
  const pwdNewConfirmRef = useRef()
  const [pwdCurrent, setPwdCurrent] = useState('')
  const [pwdNew, setPwdNew] = useState('')
  const [pwdNewConfirm, setPwdNewConfirm] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isNewPwdSet, setIsNewPwdSet] = useState(false)
  const [setNewPassword, { isLoading }] = useResetPasswordInPlaceMutation()

  const handlePwdCurrentInput = (e) => setPwdCurrent(e.target.value)
  const handlePwdNewInput = (e) => setPwdNew(e.target.value)
  const handlePwdNewConfirmInput = (e) => setPwdNewConfirm(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(pwdNew === pwdNewConfirm) {
      try {
        const response = await setNewPassword({ password: pwdCurrent,
                                                new_password: pwdNew}).unwrap()
        setPwdCurrent('')
        setPwdNew('')
        setPwdNewConfirm('')
        setIsNewPwdSet(true)
      } catch (err) {
        pwdCurrentRef.current.focus()
        setErrMsg('Invalid current password')
      }
    } else {
      pwdNewRef.current.focus()
      setErrMsg("Passwords doesn't match")
    }
  }

  useEffect(() => {
    pwdCurrentRef.current.focus()
  }, [])

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedOption(pagesPaths.settings.changePassword))
  }, [dispatch])

  useEffect(() => {
    setErrMsg('')
  }, [pwdCurrent ,pwdNew, pwdNewConfirm])

  return (
    <Container onSubmit={handleSubmit}>
      <Fields>
        <FormField label='Current password' 
                    icon={isThemeDark
                          ? DarkPasswordIcon
                          : LightPasswordIcon}
                    placeholder='Enter your current password'
                    refTo={pwdCurrentRef}
                    value={pwdCurrent}
                    onChange={handlePwdCurrentInput}
                    disabled={isLoading}
                    type={'password'}
                    pattern={".{8,}"}
                    title={"8 characters minimum"}/>
        <FormField label='New password' 
                    icon={isThemeDark
                          ? DarkPasswordIcon
                          : LightPasswordIcon}
                    placeholder='Enter new password'
                    refTo={pwdNewRef}
                    value={pwdNew}
                    onChange={handlePwdNewInput}
                    disabled={isLoading}
                    type={'password'}
                    pattern={".{8,}"}
                    title={"8 characters minimum"}/>
        <FormField label='Confirm new password' 
                    icon={isThemeDark
                      ? DarkPasswordIcon
                      : LightPasswordIcon}
                    placeholder='Enter new password'
                    refTo={pwdNewConfirmRef}
                    value={pwdNewConfirm}
                    onChange={handlePwdNewConfirmInput}
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
          : 'Changing password...'}
      </ButtonBig>
      {
        isNewPwdSet && 
        <ConfirmContainer>
          <ConfirmHeader>Password changed</ConfirmHeader>
          <Illustration/>
        </ConfirmContainer>
      }
    </Container>
  )
}

export default ChangePasswordForm