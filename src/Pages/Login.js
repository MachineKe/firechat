import React from 'react'
import { LuImagePlus } from "react-icons/lu";
const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Fire Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <button>Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login