import React, { useEffect, useState } from 'react'
import { getAllLauncher } from '../api.js'
import LauncherTable from '../components/LauncherTable.jsx'
import Nav from '../components/Nav.jsx'


export default function HomePage() {
    const [allLauncher, setAllLauncher] = useState([])
    const [filterr, setFilter] = useState([])
    


    async function getData() {
        const data = await getAllLauncher()
        setAllLauncher(data)
        setFilter(data)
    }

    useEffect(() => {
        getData()
    }, [])

    function handleFilterByCity(f) {
        const data = allLauncher.filter((item)=> item.city.includes(f))
        setFilter(data)
    }

    function handleFilterByRocketType(f){
        const data = allLauncher.filter((item)=> item.rocketType == f)
        
        setFilter(data)
        
    }

    return (
        <>
            <Nav />
            <div className='home-page'>
                <div className='filters'>
                <input type="text" placeholder='select launcher by city:' onChange={(e) => handleFilterByCity(e.target.value)} />
                <label htmlFor="RocketType">RocketType</label>
                <select id="RocketType" onChange={(e) => handleFilterByRocketType(e.target.value)} >
                    <option value="" disabled>select type</option>
                    <option value="Shahab3">Shahab3</option>
                    <option value="Fetah110">Fetah110</option>
                    <option value="Radwan">Radwan</option>
                    <option value="Kheibar">Kheibar</option>
                </select>
               </div>
                <LauncherTable data={filterr} />
            </div>
        </>
    )
}
