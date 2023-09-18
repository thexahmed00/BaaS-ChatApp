import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'


const Login = () => {
    const {user,handleLogin} = useAuth()
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({email:'',password:''})

    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[])

    const handleInput = (e) =>{
        let name = e.target.name
        let value = e.target.value

        setCredentials({...credentials,[name]:value})
       // console.log(credentials)
    }

  return (
    <div className="auth--container">
        <div className="form--wrapper">
            <form onSubmit={(e)=>{handleLogin(e,credentials)}}>
                <div className="field--wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" required name="email" 
                                placeholder="enter your email.."
                                value={credentials.email}
                                onChange={handleInput}/>
                </div>
                <div className="field--wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" required name="password" 
                                placeholder="enter your password.."
                                value={credentials.password}
                                onChange={handleInput}/>
                </div>
                <div className="field--wrapper">
                    <input type="submit" value="Login" className="btn btn--lg btn--main"/>
                </div>
            </form>
        </div>    
                
    </div>
  )
}

export default Login