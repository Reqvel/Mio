import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeader } from '../redux/features/dashboardSlice'

const Settings = () => {
  const dispatch = useDispatch()
  const header = 'Settings'
  const details = "Don't forget to set the details for the Settings!"

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <div>Settings</div>
  )
}

export default Settings