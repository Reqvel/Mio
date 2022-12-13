import React, { useEffect } from 'react'
import { setHeader, setSelectedOption } from '../../redux/features/settingsSlice';
import { useDispatch } from 'react-redux';
import pagesPaths from '../../routes/PagesPaths';

const ChangePasswordForm = () => {
  const header = "Change password"
  const details = "Chnage your account's password"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedOption(pagesPaths.settings.changePassword))
  }, [dispatch])

  return (
    <div>ChangePassword</div>
  )
}

export default ChangePasswordForm