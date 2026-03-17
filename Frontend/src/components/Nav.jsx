import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import UserContext from '../context/UserContext'


export default function Nav() {
  const {user, setUser} = useContext(UserContext)  
  const navigate = useNavigate()
  return (
    <div className='nav'> 
        <button onClick={()=> navigate("/home")}>Home</button>
        {user && user.user_type=="admin"&& <button onClick={()=> navigate("/register")}>Register</button>}
        <button onClick={()=> navigate("/addLauncher")}>Add Launcher</button>
    </div>
  )
}
