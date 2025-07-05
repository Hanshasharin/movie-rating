import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Register = () => {
const navigate = useNavigate()
    const [data,setData] = useState({
        email:"",
        password:"",
        cpassword:""
    })
    const registerHandler=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3000/user/register',{
            email:data.email,
            password:data.password
        }).then(res=>{
          alert(res.data.message)
navigate("/login")
        }).catch(err=>{
          alert(err.response.data.message)
          console.log(err);
          
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
      <form onSubmit={registerHandler}>
        <Row>
        <input type="email" placeholder='email Id' name='email' value={data.email} onChange={changeHandler}/>
        <input type="password" placeholder='password' name='password'value={data.password} onChange={changeHandler}/>
     <input type="password" placeholder='Confirmpassword' name='cpassword'/>

        <input type="submit" value="Register" />
<p>Already Have account <Link to = "/login">login</Link></p>
</Row>
      </form>
    </div>
  )
}

export default Register
