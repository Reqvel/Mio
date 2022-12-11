import React, { useEffect } from 'react'
import { setHeader } from '../../redux/features/settingsSlice';
import { useDispatch } from 'react-redux';

const ChangePasswordForm = () => {
  const header = "Change password"
  const details = "Chnage your account's password"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <div>ChangePassword</div>
  )
}

export default ChangePasswordForm