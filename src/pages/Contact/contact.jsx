import React from 'react'
import Navbar from '../Navbar/navbar'
import '../../reset.css'
import './contact.css'
import Vector from './images/Vector.svg'
import Footer from '../Footer/footer'


export default function contact() {
  return (
    <div>
      <Navbar/>
      <div className='contact'>  
        <div className="get-intouch">
            <h2 className="get-intouch-header">Get in touch</h2>    
            <img src={Vector} alt="get in touch" className="get-intouch-vector" />   
        </div>
      <form action="">
        <div className="name-group">
            <h3 className="name-header">Name<span>(Required)</span></h3>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name='first-name' />
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name='last-name' />
        </div>
        <div className='email-group'>
        <h3 className="name-header">Email<span>(Required)</span></h3> 
            <label htmlFor="name">Email</label>
            <input type='email' className='contact-email'/><br/> 
        </div>    
        <div className='message-group'>
        <h3 className="name-header">Message<span>(Required)</span></h3>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="30" rows="10" />
        </div>    
        <button className="contact-subscribe">Subscribe</button>
      </form>    
    </div>
    <Footer/>
    </div>
  )
}
