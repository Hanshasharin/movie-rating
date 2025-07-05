import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {

    const navigate = useNavigate()
const [data,setData] = useState({
        email:"",
        password:"",
        
    })

     const loginHandler=(event)=>{
        event.preventDefault()
        axios.post('https://movie-rating-backend-1-e9xx.onrender.com/user/login',{
            email:data.email,
            password:data.password
        }).then (res=>{
            localStorage.setItem("access_token",res.data.token)

            navigate("/")

console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
            
            // alert(err.response.message);
            
            
        })

    }

     const changeHandler =(event)=>{
        const name = event.target.name
        const value = event.target.value
        const tempData = {...data}
        tempData[name]= value
        setData(tempData)
    }

  return (
    <div>
      <form onSubmit={loginHandler}>
        <input type="email" placeholder='email Id' name='email' value={data.email} onChange={changeHandler} />
        <input type="password" placeholder='password' name='password' value={data.password} onChange={changeHandler}/>
        <input type="submit" value="login" />
<p>create account <Link to = "/Register">Register</Link></p>
      </form>
    </div>
  )
}

export default Login
