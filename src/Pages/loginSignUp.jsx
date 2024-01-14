import React from 'react'
import './CSS/loginsignup.css'

const LoginSignUp = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type='ttext' placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account ?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id='' />
          <p>By contining, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp