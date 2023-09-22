import React from 'react'
import { useAuth } from '../useAuth'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const { user } = useAuth()

  if (user) {
    return <Navigate to="/gallery"  replace={true}/>
  }
  return children
}

export default PublicRoute
