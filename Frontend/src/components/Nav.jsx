import React from 'react'
import { Link, useNavigate } from 'react-router'


export default function Nav() {
    const navigate = useNavigate()
  return (
    <div className='nav'>
        <button onClick={()=> navigate("/")}>Home</button>
        <button onClick={()=> navigate("/addLauncher")}>Add Launcher</button>
        {/* <button onClick={()=> useNavigate("/")}>Home</button> */}
    </div>
  )
}
