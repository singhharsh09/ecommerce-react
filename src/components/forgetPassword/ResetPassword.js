import React, { useState } from 'react'

import { Link,useLocation } from 'react-router-dom'
import Verification from '../signUp/Verification';

const ResetPassword = () => {
  const location=useLocation();
  console.log(location,"location")
  const[resetDetail,setResetDetail]=useState({newPassword:'',conformPassword:''});
  const handleChange=(e)=>{
    const name=e.taget.name;
    const value=e.target.value;

  }
  return (
    <div>
       <Verification/>
      Eneter the code send on Email {location.state.email} and reset the password
      <div><input type='password' placeholder='Enter new Password' name="newPassword" value={resetDetail.newPassword} onChange={handleChange}/></div>

      <div><input type='password' placeholder='Confirm new Password' name="conformPassword" value={resetDetail.conformPassword} onChange={handleChange}/></div>
     

      <button> Reset PAssword</button>
    </div>
  )
}

export default ResetPassword
