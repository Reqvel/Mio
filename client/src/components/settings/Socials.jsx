import React, { useEffect } from 'react'
import { setHeader, setSelectedOption } from '../../redux/features/settingsSlice';
import { useDispatch } from 'react-redux';
import pagesPaths from '../../routes/PagesPaths';

const Socials = () => {
  const header = "Socials"
  const details = "Connect your socials"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedOption(pagesPaths.settings.socials))
  }, [dispatch])

  return (
    <div>Socials</div>
  )
}

export default Socials