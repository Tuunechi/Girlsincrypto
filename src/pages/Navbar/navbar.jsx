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
                <Link to={'/'} className='nav-link'>Home</Link>
                <a className='nav-link' href='#learn'>Learn</a>
                <a href='#about' className='nav-link'>Project</a>
                {/* <Link to={'./contact'} className='nav-link'>Contact</Link> */}
                <Link to={'https://selar.co/qiv320'} className='nav-link' id='mentor'>Mentorship</Link>
              </div>
              <div className="nav-socials">
               <a href={'https://www.instagram.com/dcryptgirl?igsh=cndnM3owaGNzc3V2'}><img src={Instagram} className='nav-social' alt="contact"/></a>
               <a href={"https://www.linkedin.com/in/deborah-ifegwu-9717b7237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}><img src={Linkedin} className='nav-social' alt="contact"/></a>
               <a href={"https://x.com/dcryptgirll?s=21&t=pxxd9peqVc3RFmQnIRJ9aQ"}><img src={X} className='nav-social' alt="contact"/></a>
              </div>
            </div>
            <Link className='contact-image'><img src={Contact} className='nav-contact-link' alt="contact"/></Link>

        </nav>
    </div>
  )
}
