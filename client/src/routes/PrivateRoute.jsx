import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { tokenKey } from '../redux/features/authSlice'
import pagesPaths from './PagesPaths'

const PrivateRoute = () => {
  const token = localStorage.getItem(tokenKey)
  const location = useLocation()

  return (
    // token 
      // ? <Outlet/>
      // : <Navigate to={pagesPaths.signIn} state={{ from: location }} replace/>
    <Outlet/>
  )
}

export default PrivateRoute