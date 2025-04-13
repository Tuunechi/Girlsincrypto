import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import heart from './images/heart-group.svg'
import '../../reset.css'
import './home.css'
import { Link } from 'react-router-dom'
import instagram from './images/instagram.svg'
import tiktok from './images/tiktok.svg'
import twitter from './images/tiktok.svg'
import curly from './images/curly.svg'
import coinstore from './images/coinstore.svg'
import linkedin from './images/Linkedin.svg'
import cassava from './images/cassava.svg'
import Footer from '../Footer/footer'
import Book from './images/book-group.png'
// import Arrow from './images/Arrow.svg'
import {gsap, Linear} from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import deb from './images/de-deb.png'





export const metadata = {
  title: "Dcryptgirl",
  description: "Public speaker and Community Builder",
};

gsap.registerPlugin(ScrollTrigger);


export default function home() {

  // const [higherLimit, setHigherLimit] = useState(2)   
  // const [lowerLimit, setLowerLimit] = useState(0)   



  
  useGSAP(()=>{
    gsap.from(".heart", {scale:1.3, repeat: -1, repeatDelay: 1})
  })


    useGSAP(()=>{
      gsap.to(".project-image", {translateX:-window.innerWidth - 300, repeat:-1, duration: 10, ease:"linear",
        // onComplete: () => {
        //   gsap.set(".project-image", { translateX:-1});
        // },
      });
    })

    useGSAP(()=> {
      // Select all elements with the class ".section"
      const sections = document.querySelectorAll(".section");
      
      sections.forEach(section => {
        gsap.fromTo(section, 
          { opacity: 1, y: 120 }, // Initial state before scrolling
          {
            opacity: 1,
            y: 0,  // State after the scroll
            scrollTrigger: {
              trigger: section,   // Trigger for each individual section
              start: 'top 80%',   // Animation starts when top of section hits 80% of viewport
              end: 'bottom 25%',  // Animation ends when bottom of the section hits 20% of viewport
              scrub: 1,           // Smooth scrolling effect
              // markers: true,      // Show markers for debugging (remove later)
              toggleActions: "play none none none", // Only play once when section comes into view
            }
          });
      });
    });

  
  
  return (
  <div>
    <div className='home-container'>
        <Navbar/>
        <div className="hero">
            <div className="hero-text-group">
              <h5 className='identity'>Join the girls in GirlsInCryptoHub!</h5>
              <h2 className='profession'>Learn How to Start your <span className='span'>journey towards an active income</span> in the crypto market - even if you're a beginner!</h2>
            </div>
            <a href={'https://buy.stripe.com/test_dR6aHj4re0azdvG5kk'}><button className='contact-me-btn'>Get Access!</button></a>
        </div>
        <div className="hero-image-group">
          <img src={heart} alt="heart" className='heart'/>
          <img className='hero-image' src={deb} alt="hero image" />
      </div>
    </div>
    <section className='section'>
    <div className="about-section">
      {/* <h2 className="about-header">About Me</h2> */}
      <p className="about-paragraph">
      Built for beginners, dreamers, techies, creatives, and anyone ready to take charge of their financial future, GICH is a community driven movement.
       {/* Whether you're curious about trading, NFTs, DeFi, or building a full-blown crypto career, this is your launchpad. */}
      {/* Inside the club, you get exclusive access to powerful tools, expert-led sessions, curated resources, and a vibrant Discord where women are learning, earning, and growing — together. */}
      </p>
      <div className="about-socials" id='about'>
        <div className="about-social-links">
          <a href={'https://www.instagram.com/dcryptgirl?igsh=cndnM3owaGNzc3V2'}><img src={twitter} alt="twitter-icon" /></a>
          <a href={"https://www.tiktok.com/@dcryptgirl?_t=8opqXNNHb9a&_r=1"}><img src={tiktok} alt="tiktok-icon" /></a>
          <a href={"https://x.com/dcryptgirll?s=21&t=pxxd9peqVc3RFmQnIRJ9aQ"}><img src={instagram} alt="instagram-icon" /></a>
        </div>
        <img src={curly} alt="social icon grouper" className="curly" />
      </div>
    </div>

    </section>


    <section className='section'>
    <div className="roles-and-responsibilities">
      <h2 className="roles-header">💔Feeling stuck?</h2>
      <p className="roles-paragraph">- Tired of the 9 to 5 grind 😩??</p>
      <p className='roles-paragraph'>- Always round-tripping but never really moving forward?🔁</p>
      <p className='color-pink roles-paragraph'>- Struggling with your finances and don’t know where to start💸?</p>
      <p className='color-pink roles-paragraph'>- Looking for real inspiration and a community of driven, motivated women👭??</p>
      <p className='roles-paragraph'>- You're not alone — and you're in the right place.💅💅</p>
    </div>

    <div className="project-details">
      <h2 className="project-header">🔓Get Access To</h2>
      <p className="project-paragraph">- Beginner-friendly Web3 education — from crypto basics to advanced strategies</p>
      <p className="project-paragraph">- Live sessions with experts who’ve actually done it</p>
      <p className="project-paragraph">- A private, supportive Discord full of women on the same journey</p>
      <p className="project-paragraph">- Exclusive tools, resources, and playbooks to fast-track your results</p>
      <p className="project-paragraph">- Early access to jobs, grants, and earning opportunities in Web3 </p>
    </div>  
    <a href={'https://buy.stripe.com/test_dR6aHj4re0azdvG5kk'}><button className='contact-me-btn check-out'>Get Access!</button></a>
    </section>
   

    <section className='section'>
        <div className="community-building">
          <h2 className="community-header">Community Building Initiatives</h2>
          <p className="community-text">
           My community-building initiatives have been instrumental in driving adoption and fostering a sense of belonging
           within project ecosystems. From hosting engaging events to curating
           insightful forums and launching impactful social media campaigns<br/>
           I’ve consistently endeavored to cultivate thriving communities that serve as the bedrock of project success
          </p>
        </div>
    </section>

    <Footer/>
  </div>
  )
}
