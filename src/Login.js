import React,{useState} from 'react'
import Axios from "axios"

const Login = ({loginStatus}) => {
    const [passwordlogin, setPasswordlogin] = useState('')
    const [emaillogin, setEmaillogin] = useState('')
    const [message, setMessage] =  useState('')


    const login = (e) =>{
        e.preventDefault()
        Axios.post("http://localhost:3001/userlogin",{
            password:passwordlogin,
            email:emaillogin
        }).then(res=>{
            setMessage(res.data.message)
            loginStatus(res.data.message)
            setEmaillogin('')
            setPasswordlogin('')
            })
        
    }
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        
        <label>email</label>
        <input  type="email" value={emaillogin} onChange={(e)=>{setEmaillogin(e.target.value)}}/>
        <label>password</label>
        <input  type="password" value={passwordlogin} onChange={(e)=>{setPasswordlogin(e.target.value)}}/>
        <button onClick={e=>login(e)}>Login</button>
        {message}
    </div>
    )
}

export default Login
