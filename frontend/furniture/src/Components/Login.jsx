import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-cotainer">
        <h1>Sign Up</h1>
        <div className="login-signup-fields"><form>
            <input type='text' placeholder='Your Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            </form>


        </div>
        <button>Continue</button>
        <p className='Loginsignup-login'>
            Already have an account? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing i agree to the terms of use & privacy policy </p>
        </div>

    </div>
</div>
  )
}
