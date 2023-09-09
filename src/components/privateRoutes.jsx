import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


//if user is logged in, render the outlet, else redirect to login
const PrivateRoutes = () => {
  const user = true
    return (
    <>
        {user ? <Outlet/> : <Navigate to= '/login'/>}
    </>
  )
}

export default PrivateRoutes