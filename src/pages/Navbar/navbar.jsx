import React, { useState } from 'react'
import Contact from './images/contact-me.svg'
import { Link } from 'react-router-dom'
import './navbar.css'
import '../../reset.css'
import Instagram from './images/instagram.svg'
import X from './images/x.svg'
import Linkedin from'./images/linkedin.svg'




export default function navbar() {

  const [isClosed, setIsClosed ] = useState(false)

  

  const handleToggle = () =>{
    setIsClosed(!isClosed)
    console.log(isClosed);
    
  }


  return (
    <div>
        <nav className='navbar'>
            <h2 className='logo'>Dcryptgirl</h2>
            <div className='hamburger' onClick={handleToggle  }>
              <span className={`top ${isClosed? "top-open" : "top-close"} `}/><span/>
              <span className={`bottom ${isClosed? "bottom-open" : "bottom-close"} `}/><span/>
            </div>
            <div className={`nav-links-and-socials ${isClosed? "nav-open" : "nav-close"}`}>
              <div className={`nav-links ${isClosed? "nav-links-open" : "nav-links-close"}`}>
                <Link className='nav-link'>Home</Link>
                <Link className='nav-link'>Learn</Link>
                <Link className='nav-link'>Project</Link>
                <Link className='nav-link'>Contact</Link>
              </div>
              <div className="nav-socials">
                <Link className='contact-image'><img src={Instagram} className='nav-social' alt="contact"/></Link>
                <Link className='contact-image'><img src={Linkedin} className='nav-social' alt="contact"/></Link>
                <Link className='contact-image'><img src={X} className='nav-social' alt="contact"/></Link>
              </div>
            </div>
            <Link className='contact-image'><img src={Contact} className='nav-contact-link' alt="contact"/></Link>

        </nav>
    </div>
  )
}
