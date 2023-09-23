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
    <div className="auth--container">
        <div className="form--wrapper">
            <form onSubmit={(e)=>{handleRegister(e,credentials)}}>
            <div className="field--wrapper">
                    <label htmlFor="name">Name</label>
                    <input type="text" required name="name" 
                                placeholder="Enter your Name.."
                                value={credentials.name}
                                onChange={handleInput}/>
                </div>
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
                                placeholder="Enter your password.."
                                value={credentials.password}
                                onChange={handleInput}/>
                </div>
                <div className="field--wrapper">
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" required name="password2" 
                                placeholder="Confirm your password.."
                                value={credentials.password2}
                                onChange={handleInput}/>
                </div>
                <div className="field--wrapper">
                    <input type="submit" value="Register" className="btn btn--lg btn--main"/>
                </div>
       <p> <Link to="/login" className="link--secondary">Already have an account? Login</Link></p>
            </form>
        </div>    
    </div>
  )
}

export default RegisterPage