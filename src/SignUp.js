import React,{useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
    const history =useHistory()
    const [userNameReg, setUserNameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [emailReg, setEmailReg] = useState('')

    const register = (e) =>{
        // e.preventDefault()
        // Axios.post("http://localhost:3001/register",{
        //     userName:userNameReg,
        //     password:passwordReg,
        //     email:emailReg
        // }).then(res=>{
        //     console.log(res)
        //     history.push("/login")

        // })
        
    }
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <label>name</label>
            <input type="text" onChange={(e)=>setUserNameReg(e.target.value)}/>
            <label>email</label>
            <input  type="email" onChange={(e)=>setEmailReg(e.target.value)}/>
            <label>password</label>
            <input type="password" onChange={(e)=>setPasswordReg(e.target.value)}/>
            <button onClick={register}>Register</button>
        </div>
    )
}

export default SignUp
