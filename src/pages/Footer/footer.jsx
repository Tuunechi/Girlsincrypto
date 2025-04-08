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
import Whatsapp from './images/whatsapp.svg'


export default function Footer() {
  return (
    <div className='footer-cover'>
        <div className='footer'>
            <p className="footer-logo">GirlsInCryptoClub</p>
            <div className="contact-footer">
              <div className="contact-me-group">
                <h2 className="contact-us-header">Contact Us</h2>
                {/* <p className="mobile-footer"><img src={Whatsapp} alt="whatsapp" className="mobile-icon" /> +2348154154475</p> */}
                <p className="mail-footer"><img src={Mail} alt="phone icon" className="mail-icon" /> Contact@girlsincryptoclub</p>
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
          <a href={"https://x.com/dcryptgirll?s=21&t=pxxd9peqVc3RFmQnIRJ9aQ"}><img src={Twitter} alt="twitter link" /></a>
          <a href={"https://www.tiktok.com/@dcryptgirl?_t=8opqXNNHb9a&_r=1"}><img src={Tiktok} alt="tiktok link" /></a>
          <a href={"https://www.instagram.com/dcryptgirl?igsh=cndnM3owaGNzc3V2"}><img src={instagram} alt="instagram link" /></a>
          <a href={"https://www.linkedin.com/in/deborah-ifegwu-9717b7237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}><img src={Linkedin} alt="Linkedin link" /></a>
        </div>
    </div>
  )
}
