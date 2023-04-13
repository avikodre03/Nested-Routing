import React from 'react'
import './Styling/Loginpage.css'
import { useContext, useState } from 'react'
import { myContext } from './Context/DataProvider'
const Login = () => {
  const {setLogin , setInput, input} = useContext(myContext)
  const [pass, setPass] = useState("")
  
  const checkfnc = ()=>{
    console.log(input)
    if((input === "avi" && pass === "avi@123") || (input === "admin" && pass === "admin@123")){
      console.log(input)
      setLogin(true);
    }else{
      alert("Fill proper credential..!(UserName: admin & Password: admin@123)")
    }
  }
  return (
    <div className='LoginPage'>
         <h1>Login Page</h1>
        <label>User Name :
        <input type="text" placeholder='Enter Name' style={{padding:".5rem .5rem" ,marginLeft:"10px"}} onChange={(e)=>{setInput(e.target.value)}}/>
        </label>
        <label> Password : 
        <input type="password" placeholder='Password'style={{padding:".5rem .5rem" ,marginLeft:"10px"}} onChange={(e)=>{setPass(e.target.value)}}/>
        </label>
        <button style={{padding:".5rem 1rem"}} onClick={()=>{checkfnc()}} >Login</button>
    </div>
  )
}

export default Login;