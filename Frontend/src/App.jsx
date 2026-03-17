import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import RegisterPage from './pages/RegisterPage'
import Login from './pages/Login'
import UserContext from "./context/UserContext.js"
import { useEffect, useState } from 'react'
import { fetchMe } from './api.js'

export default function App() {
  const [user, setUser] = useState(null)
  const [isReqDone, setIsReqDone] = useState(false)

  async function getUser(){
    const me = await fetchMe()
    setUser(me.user)
    setIsReqDone(true)
  }


  useEffect(()=>{
      if(localStorage.getItem("token")){
        getUser()
      }
      else{
        setIsReqDone(true)
      }
  }, [])

  // useEffect(()=>{
  // }, [user])

  return (
      <UserContext.Provider value={{user, setUser, isReqDone}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/addLauncher' element={<AddLauncherPage/>}></Route>
          <Route path='/DetailsLauncher/:id' element={<LauncherDetailsPage/>}></Route>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
   
  )
}


