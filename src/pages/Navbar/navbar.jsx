import React, { useState } from 'react'
import Contact from './images/contact-me.svg'
import { Link } from 'react-router-dom'
import './navbar.css'
import '../../reset.css'
import Instagram from './images/instagram.svg'
import X from './images/x.svg'
import Linkedin from'./images/linkedin.svg'
import logo from '/mixed.png'



export default function navbar() {

  // const [isClosed, setIsClosed ] = useState(false)

  

  // const handleToggle = () =>{
  //   setIsClosed(!isClosed)
  //   console.log(isClosed);
    
  // }


  return (
    <div>
        <nav className='navbar'>
            <img src={logo} className='logo' alt="logo" />
            
        </nav>
    </div>
)}
