import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({ first_name: '', last_name: '', middle_name: '', email: '', password: '', confirm_password: '' })
  const [formError, setFormError] = useState({})
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [name]: value })
  }

  const postApi = async (formdata) => {
    const data = { data: {...formdata,activated:false}}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true

        // 'X-RapidAPI-Key': 'your-api-key',
        // 'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
      },
      body: JSON.stringify({ data: formData })
    };
    try {
      const responseData = await fetch('http://127.0.0.1:3000/accounts/signup', options)
      const response=await responseData.json();
      if(responseData.status==201){
        navigate('/verification',{state:{email:formData.email}})
      }
      console.log(formData)
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleSignup = () => {
    const errors = {}
    Object.keys(formData).map((key) => {
      if (!['middle_name', 'last_name'].includes(key)) {
        if (!formData[key]) {
          errors[key] = `${key} is required.`
        }
      }
    })

    if (Object.keys(errors).length) {
      setFormError(errors)
    } else {
      postApi(formData);

    }
  }
    return (
      <div>
        <h1 style={{ border: "2px solid red" }}> Signup </h1>

        <div>
          <input type="text" placeholder="first Name" name='first_name' onChange={handleChange} value={formData.first_name} />
          <div>{formError?.first_name}</div>
        </div>

        <div>
          <input type="text" placeholder="middle Name" name='middle_name' onChange={handleChange} value={formData.middle_name} />
          <div>{formError?.middle_name}</div>
        </div>

        <div>
          <input type="text" placeholder="last Name" name="last_name" onChange={handleChange} value={formData.last_name} />
          <div>{formError?.last_name}</div>
        </div>

        <div>
          <input type="email" placeholder="enter your email" name="email" onChange={handleChange} value={formData.email} />
          <div>{formError?.email}</div>
        </div>

        <div>
          <input type="password" placeholder="enter your password" name='password' onChange={handleChange} value={formData.password} />
          <div>{formError?.password}</div>
        </div>

        <div>
          <input type="password" placeholder="confirmPassword" name="confirm_password" onChange={handleChange} value={formData.confirm_password} />
          <div>{formError?.confirm_password}</div>
        </div>


        <div>  <button onClick={handleSignup}>Signp </button></div>



      </div>
    );
  };

  export default SignUp;
