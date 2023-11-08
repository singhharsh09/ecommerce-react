import React, { useState } from 'react'
import ForgetPassword from '../forgetPassword';
import { Link } from 'react-router-dom';
const Login = () => {
  
  const[loginDetail,setLoginDetail]=useState({email:'',password:''});
  const [loginError,setLoginError]=useState({});

  const handleOnClickLogin=()=>{
    const error={}
    Object.keys(loginDetail).map((key)=>{
     if(!loginDetail[key]){
         error[key]=`${key} required`
       
     }
    })
  
    if(Object.keys(error).length){
      setLoginError(error);
      
    }
    else {console.log("signin calling done")}
  }
  const handleOnChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setLoginDetail({...loginDetail,[name]:value})
  }

  
  return (
    <div>
      <form>
        <div><input type='text' placeholder='enter your email' name='email' onChange={handleOnChange} value={loginDetail.email} /></div>
        <div>{loginError?.email}</div>
       
       <div><input type='password' placeholder='enter your password' name='password' onChange={handleOnChange} value={loginDetail.password} /></div>
       <div>{loginError?.password}</div>
      </form>
      <button onClick={handleOnClickLogin}>SignIn</button>
      {Object.keys(loginError)==0?<Link to="/verification"> SignIn</Link>:null}
      <div>
        <button ><Link to='/forgetPassword'>ForgetPassword</Link></button>
     
      </div>
    </div>
  )
}

export default Login
