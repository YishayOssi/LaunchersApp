import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import React from 'react'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'


export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/addLauncher' element={<AddLauncherPage/>}></Route>
          <Route path='/DetailsLauncher/:id' element={<LauncherDetailsPage/>}></Route>
        </Routes>
      </BrowserRouter>
   
  )
}


