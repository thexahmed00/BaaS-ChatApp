import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPage = () => {
  return (
  <div className="Auth-form-container">
        <form className='Auth-form-forgetpass'>
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Reset your password</h3>
                <div className="form-group mt-3">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="form-control mt-1" type="email" required name="email" 
                                placeholder="enter your email.."
                                />
                </div>
                <div className="form-group mt-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input className="form-control mt-1" type="password" required name="password" 
                                placeholder="Enter your password.."
                                />
                </div>
                <div className="form-group mt-3">
                    <label className="label" htmlFor="password">Confirm password</label>
                    <input className="form-control mt-1" type="password" required name="password2" 
                                placeholder="Confirm your password.."
                                />
                </div>
                <div className="Auth--field">
                    <input type="submit" value="Change Password" className="Auth--field--input"/>
                </div>
       <p className="Forgot--password"> <Link to="/login" className="link--secondary">Already have an account? Login</Link></p>
        </div>    
        </form>
    </div>
  )
}

export default ForgetPage