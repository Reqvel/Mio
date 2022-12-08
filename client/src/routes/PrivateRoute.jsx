import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import pagesPaths from './PagesPaths'

const PrivateRoute = () => {
  const { token } = useSelector( state => state.auth )
  const location = useLocation()

  return (
    token 
      ? <Outlet/>
      : <Navigate to={pagesPaths.signIn} state={{ from: location }} replace/>
  )
}

export default PrivateRoute