import React from 'react'
import { useNavigate } from 'react-router'


export default function LauncherTable({data}) {
  const navigate = useNavigate()
  return (
    <div className='launcher-table'>
      
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>City</th>
                    <th>RocketType</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
              {data.length > 0 && data.map((item, index) => (
                <tr key={index} className='row' onClick={()=>navigate(`/DetailsLauncher/${item._id}`)}>
                    <td>{item._id}</td>
                    <td>{item.city}</td>
                    <td>{item.rocketType}</td>
                    <td>{item.latitude}</td>
                    <td>{item.longitude}</td>
                    <td>{item.name}</td>
                </tr>   
              ))}

            </tbody>
        </table>
    </div>
  )
}
