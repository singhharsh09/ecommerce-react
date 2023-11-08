import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';

const ForgetPassword = () => {
  const navigate=useNavigate();
  const[email,setEmail]=useState("");
 const handleOnClick=()=>{
  navigate('/resetPassword', { state :{email:email}});
 }
 const handleChange=(e)=>{
  const email=e.target.value;
  setEmail(email);
 }

  return (
    <div>
     <form>
     <div> <input type='email' placeholder='type you email' onChange={handleChange} value={email}/></div>
     
     </form>
     <button onClick={handleOnClick}  >Send reset code</button>
    </div>
  )
}

export default ForgetPassword
