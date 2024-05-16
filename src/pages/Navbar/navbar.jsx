import React from 'react'
import Contact from './images/contact-me.svg'
import { Link } from 'react-router-dom'
import './navbar.css'
import '../../reset.css'




export default function navbar() {
  return (
    <div>
        <nav className='navbar'>
            <h2 className='logo'>Dcryptgirl</h2>
            <Link><img src={Contact} className='nav-contact-link' alt="contact"/></Link>
        </nav>
    </div>
  )
}
