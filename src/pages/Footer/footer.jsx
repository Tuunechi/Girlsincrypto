import React from 'react'
import './footer.css'
import '../../reset.css'
import Phone from './images/Call.svg'
import Mail from './images/Mail.svg'
import Linkedin from './images/linkedin.svg'
import Twitter from './images/x.svg'
import Tiktok from './images/tiktok.svg'
import instagram from './images/instagram.svg'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='footer-cover'>
        <div className='footer'>
            <p className="footer-logo">Dcryptgirl</p>
            <div className="contact-footer">
              <div className="contact-me-group">
                <h2 className="contact-us-header">Contact Me</h2>
                <p className="mobile-footer"><img src={Phone} alt="phone ichromcon" className="mobile-icon" /> +2348154154475</p>
                <p className="mail-footer"><img src={Mail} alt="phone icon" className="mail-icon" /> Contact@dcryptgirl.com</p>
              </div>  
              <div className="subscribe">
                <h2 className="subscribe-header">Subscribe for more infomation</h2>
                <input type="text" className='email-input' placeholder='Enter Email'/>
                <button className='subscribe-button'>Subscribe</button>
              </div>  
            </div>
        </div>
        <div className='dermacation-line'></div>
        <div className="footer-socials">
          <Link><img src={Twitter} alt="twitter link" /></Link>
          <Link><img src={Tiktok} alt="tiktok link" /></Link>
          <Link><img src={instagram} alt="instagram link" /></Link>
          <Link><img src={Linkedin} alt="Linkedin link" /></Link>
        </div>
    </div>
  )
}
