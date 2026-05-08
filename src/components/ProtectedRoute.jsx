import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth()

  // If user is not logged in
  if (!user) {
    return <Navigate to='/' replace />
  }

  // Role based protection
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to='/' replace />
  }

  return children
}

export default ProtectedRoute