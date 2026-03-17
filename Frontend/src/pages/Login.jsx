import React, { useContext, useState } from 'react'
import { fetchLogin, fetchMe } from '../api.js'
import UserContext from '../context/UserContext.js'
import { useNavigate } from 'react-router'


export default function Login() {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setmessage] = useState("Login")

    async function handleLogin(){
        const res = await fetchLogin(username, password)
        if(res){
            localStorage.setItem("token", res.token)
            const me = await fetchMe()
            
            
            setmessage(`Welcome ${user.username}`)
            setTimeout(()=>{
              setUser(me.user)
              navigate("/home")
            },2000)
            
        }
        
    }


  return (
    <div className='login'>
        <h1>{message}</h1>
        <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} value={username}/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
