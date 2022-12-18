import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import { ButtonBig } from '../common/Buttons'
import { useCancelSubscriptionMutation } from '../../redux/features/paymentApiSlice'
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

const CancelSubscription = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const pwdRef = useRef()
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()
  const [cancelSubscription, { isLoading }] = useCancelSubscriptionMutation()
  const redirectTo = `${pagesPaths.dashboard}/${pagesPaths.settings.main}/${pagesPaths.settings.subscription}`

  const handlePwdInput = (e) => setPwd(e.target.value)

  useEffect(() => {
    pwdRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await cancelSubscription({ password: pwd }).unwrap()
      setPwd('')
      navigate(redirectTo)
    } catch (err) {
      pwdRef.current.focus()
      setErrMsg('Error')
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Header>Subscription cancellation</Header>
      <Details>
        To cancel your current subscription please enter your user account's password.
      </Details>
      <Fields>
        <FormField label='Password' 
                    icon={isThemeDark
                          ? DarkPasswordIcon
                          : LightPasswordIcon}
                    placeholder='Enter password'
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
          ? 'Cancel subscription '
          : 'Cancelling subscription...'}
      </ButtonBig>
    </Container>
  )
}

export default CancelSubscription