import React, { useEffect,useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
    }

  return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={(e)=>{handleLogin(e,credentials)}}>
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Log In</h3>
                <div className="form-group mt-3">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="form-control mt-1" type="email" required name="email" 
                                placeholder="enter your email.."
                                value={credentials.email}
                                onChange={handleInput}/>
                </div>
                <div className="form-group mt-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input className="form-control mt-1" type="password" required name="password" 
                                placeholder="enter your password.."
                                value={credentials.password}
                                onChange={handleInput}/>
                </div>
                <div className="Auth--field">
                    <input type="submit" value="Login" className="Auth--field--input"/>
                </div>
       <p className="Forgot--password"> <Link to="/register" className="link--secondary">Don't have an account? Register</Link></p>
       <p className="Forgot--password">
                <a href="#">Forgot password?</a>
            </p>
        </div>    
        </form>
    </div>
  )
}

export default Login