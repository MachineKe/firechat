import React from 'react'
import { LuImagePlus } from "react-icons/lu";
const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Fire Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input
            style={{display:'none'}}
            type="file" id='file' />
          <label htmlFor="file"><LuImagePlus className='icon'/>Add an avatar</label>
          <button>Sign up</button>
        </form>
        <p>Do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register