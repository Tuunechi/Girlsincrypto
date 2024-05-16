import { useState } from 'react'
import Home from './pages/Home/home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar/navbar'
import Contact from './pages/Contact/contact'


function App() {

  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/navbar' element={<Navbar/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default App
