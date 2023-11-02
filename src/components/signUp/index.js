import React from 'react'

const SignUp = () => {
  return (
    <div>
       <div style={{border:"2px solid red"}}> Signup </div>
        
  <div><input type='text' placeholder='first Name'/></div>

  <div><input type='text' placeholder='middle Name'/></div>

  <div><input type='text' placeholder='last Name'/></div>

  <div><input type='email' placeholder='enter your email'/></div>

  <div><input type='password' placeholder='enter your password'/></div>

  <div><input type="password" placeholder='confirmPassword'/></div>
  <button>SignUp</button>
    </div>
  )
}

export default SignUp
