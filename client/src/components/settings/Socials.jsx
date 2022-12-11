import React, { useEffect } from 'react'
import { setHeader } from '../../redux/features/settingsSlice';
import { useDispatch } from 'react-redux';

const Socials = () => {
  const header = "Socials"
  const details = "Connect your socials"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <div>Socials</div>
  )
}

export default Socials