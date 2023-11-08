import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom'

const Verification = () => {
    const location=useLocation();
    const [numToVerify, setNumToVerify] = useState({ num: '' });
    const [verError, setVerError] = useState({});
console.log(location);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNumToVerify({ ...numToVerify, [name]: value })
    }

    const handleOnVerify = () => {
        const error = {}
        Object.keys(numToVerify).map((key) => {
            if (!numToVerify[key]) {
                error[key] = `${key} is required`
            }
        })
        console.log(error)
        if (Object.keys(error) > 0) {
            setVerError(error);
        }

    }
    const handleOnClickResend = () => {
        alert("code send to email")
    }
    const postApi = async () => {
        const data = { data: {email:location.state.email,code:numToVerify.num}}
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
    
            // 'X-RapidAPI-Key': 'your-api-key',
            // 'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
          },
          body: JSON.stringify({ data: data })
        };
        try {
          const responseData = await fetch('http://127.0.0.1:3000/accounts/verify_code', options)
          const response=await responseData.json();
        //   if(responseData.status==201){
        //     navigate('/verification',{state:{email:formData.email}})
        //   }
          console.log(response)
        }
        catch (error) {
          console.log(error)
        }
      }
    const verifyCode=()=>{
        postApi();
    }
    return (
        <div>
            <div>

                <h1>Input The PassCode To Verify</h1>
                <input type='number' name='num' value={numToVerify.num}  onChange={handleOnChange} />
                {verError?.num}
                
            </div>
           <button onClick={verifyCode}>Verify Code </button>
            <button onClick={handleOnClickResend}><Link to='/verification'>Resend the code</Link></button>
        </div>
    )
}

export default Verification
