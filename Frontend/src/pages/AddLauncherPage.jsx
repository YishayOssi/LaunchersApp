import React, { useState } from 'react'
import Nav from '../components/Nav'
import { sendLauncher } from '../api.js'

export default function AddLauncherPage() {
    const [name, setName] = useState("")
    const [rocketType, setRocketType] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [city, setCity] = useState("")
    const [result, setResult] = useState(null)
    
    async function handleSend(){
        if(!rocketType) return
        const newLauncher = {name, rocketType, latitude: Number(latitude), longitude: Number(longitude), city}
        const result = await sendLauncher(newLauncher)
        setResult(result.message)
        setTimeout(()=>{
          setResult("")
        }, 3000)

        setName("")
        rocketType("")
        latitude("")
        longitude("")
        city("")
    }
    
    return (
        <>
            <Nav />
            <div className='add-launcher-page'>
                <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name}/>
                <label htmlFor="RocketType">RocketType</label>
                <select id="RocketType" onChange={(e)=>setRocketType(e.target.value)} value={rocketType}>
                    <option value="" disabled>select type</option>
                    <option value="Shahab3">Shahab3</option>
                    <option value="Fetah110">Fetah110</option>
                    <option value="Radwan">Radwan</option>
                    <option value="Kheibar">Kheibar</option>
                </select>
                <input type="number" placeholder='Latitude' onChange={(e)=>setLatitude(e.target.value)} value={latitude}/>
                <input type="number" placeholder='Longitude' onChange={(e)=>setLongitude(e.target.value)} value={longitude}/>
                <input type="text" placeholder='City' onChange={(e)=>setCity(e.target.value)} value={city}/>
                <button onClick={handleSend}>Send</button>
                <h2>{result}</h2>
            </div>
        </>
    )
}
