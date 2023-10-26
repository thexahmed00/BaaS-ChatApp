import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const RegisterPage = () => {
    const {handleRegister} = useAuth()
    const [credentials, setCredentials] = React.useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const handleInput = (e) =>{
        let name = e.target.name
        let value = e.target.value

        setCredentials({...credentials,[name]:value})
       // console.log(credentials)
    }

  return (
    <div className="Auth-form-container">
        <form className='Auth-form-register' onSubmit={(e)=>{handleRegister(e,credentials)}}>
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
                    <label className="label" htmlFor="name">Name</label>
                    <input className="form-control mt-1" type="text" required name="name" 
                                placeholder="Enter your Name.."
                                value={credentials.name}
                                onChange={handleInput}/>
                </div>
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
                                placeholder="Enter your password.."
                                value={credentials.password}
                                onChange={handleInput}/>
                </div>
                <div className="form-group mt-3">
                    <label className="label" htmlFor="password">Confirm password</label>
                    <input className="form-control mt-1" type="password" required name="password2" 
                                placeholder="Confirm your password.."
                                value={credentials.password2}
                                onChange={handleInput}/>
                </div>
                <div className="Auth--field">
                    <input type="submit" value="Sign Up" className="Auth--field--input"/>
                </div>
       <p className="Forgot--password"> <Link to="/login" className="link--secondary">Already have an account? Login</Link></p>
        </div>    
        </form>
    </div>
  )
}

export default RegisterPage