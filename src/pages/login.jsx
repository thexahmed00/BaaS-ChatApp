import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'


const Login = () => {
    const {user} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[])

  return (
    <div>login</div>
  )
}

export default Login