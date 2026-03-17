import React from 'react'
import Nav from '../components/Nav'

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [userType, setUserType] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  async function handleSend() {
 
  }

  return (
    <>
      <Nav />
      <div className='register-page'>
        <div className='add-launcher-page'>
          <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
          <label htmlFor="RocketType">user_type</label>
          <select id="RocketType" onChange={(e) => setUserType(e.target.value)} value={userType}>
            <option value="" disabled>select type</option>
            <option value="intelligenceCorps">intelligence corps</option>
            <option value="Fetah110">Fetah110</option>
            <option value="Radwan">Radwan</option>
          </select>
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
          <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
          <button onClick={handleSend}>Send</button>
          <h2>{result}</h2>
        </div>
      </div>
    </>
  )
}
