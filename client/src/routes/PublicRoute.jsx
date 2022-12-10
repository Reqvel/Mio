import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { tokenKey } from '../redux/features/authSlice'
import pagesPaths from './PagesPaths'

const PublicRoute = () => {
  const token = localStorage.getItem(tokenKey)
  const location = useLocation()

  return (
    token
      ? <Navigate to={pagesPaths.dashboard} state={{ from: location }} replace/>
      : <Outlet/>
  )
}

export default PublicRoute