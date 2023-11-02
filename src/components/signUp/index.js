import React, {useState} from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({first_name:'', last_name: '', middle_name:'', email: '', password:'', confirm_password:''})
  const [formError, setFormError]= useState({})
  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData,[name]: value })
  }

  const handleSignup = ()=>{
    const errors = {}
    Object.keys(formData).map((key)=>{
      if(!['middle_name', 'last_name'].includes(key)){
        if (!formData[key]){
          errors[key] = `${key} is required.`
        } 
      }
    })

    if(Object.keys(errors).length){
      setFormError(errors)
    }else{
      console.log("api calling signup")
    }
  }
  return (
    <div>
      <h1 style={{ border: "2px solid red" }}> Signup </h1>

      <div>
        <input type="text" placeholder="first Name" name='first_name' onChange={handleChange} value={formData.first_name}/>
        <div>{formError?.first_name}</div>
      </div>

      <div>
        <input type="text" placeholder="middle Name" name = 'middle_name' onChange={handleChange} value={formData.middle_name}/>
        <div>{formError?.middle_name}</div>
      </div>

      <div>
        <input type="text" placeholder="last Name" name = "last_name" onChange={handleChange} value={formData.last_name}/>
        <div>{formError?.last_name}</div>
      </div>

      <div>
        <input type="email" placeholder="enter your email" name = "email" onChange={handleChange} value={formData.email}/>
        <div>{formError?.email}</div>
      </div>

      <div>
        <input type="password" placeholder="enter your password" name = 'password' onChange={handleChange} value={formData.password}/>
        <div>{formError?.password}</div>
      </div>

      <div>
        <input type="password" placeholder="confirmPassword" name="confirm_password" onChange={handleChange} value={formData.confirm_password}/>
        <div>{formError?.confirm_password}</div>
      </div>
      <button onClick={handleSignup}>SignUp</button>
    </div>
  );
};

export default SignUp;
