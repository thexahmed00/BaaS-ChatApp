import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'


//if user is logged in, render the outlet, else redirect to login
const PrivateRoutes = () => {
  const {user} = useAuth()
    return (
    <>
        {user ? <Outlet/> : <Navigate to= '/login'/>}
    </>
  )
}

export default PrivateRoutes