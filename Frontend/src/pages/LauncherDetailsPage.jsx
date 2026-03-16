import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router'
import { getLauncherById } from '../api.js'

export default function LauncherDetailsPage() {
    const {id} = useParams()
    const [launcher, setLauncher] = useState("")

    async function getLauncher(){
       const data = await getLauncherById(id)
       setLauncher(data)
    }

  useEffect(()=>{
    getLauncher()
  }, [])
    
  return (
    <>
    <Nav/>
    <div className='Launcher-details-page'>
        <div className='card'>
            <h3>id: {launcher._id}</h3>
            <h3>city: {launcher.city}</h3>
            <h3>rocketType: {launcher.rocketType}</h3>
            <h3>latitude: {launcher.latitude}</h3>
            <h3>longitude: {launcher.longitude}</h3>
            <h3>name: {launcher.name}</h3>
        </div>
    </div>
    </>
  )
}
