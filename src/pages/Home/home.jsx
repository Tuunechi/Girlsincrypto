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
import Arrow from './images/Arrow.svg'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import {gsap, Linear} from 'gsap'
import {useGSAP} from '@gsap/react'
import kwikpik from './images/kwik.svg'
import dojima from './images/dojima.svg'
import nft from './images/nft.svg'
import despace from './images/despace.svg'
// import images from '../Gallery/Gallery.js'
// import Gallery from '../Gallery/Gallery.jsx'
// import { images } from '../Gallery/Gallery.jsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import deb from './images/deb3.png'





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
          { opacity: 1, y: 80 }, // Initial state before scrolling
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
              <h5 className='identity'>Join the girls in GirlsInCryptoClub!</h5>
              <h2 className='profession'>Learn How to Start your <span className='span'>journey towards an active income</span> in the crypto market - even if you're a beginner!</h2>
            </div>
            <a href={'https://calendly.com/dcryptgirl/30min'}><button className='contact-me-btn'>Get Access!</button></a>
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
      I’m Deborah, a Web 3 project manager and community builder with three years of experience
       in the blockchain space. I’ve worked with projects like DeSpace Protocol, Coinstore, Dojima Network, ByteonBlast, 
       and Cassava Network, playing a key role in their growth from the early stages to success.
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


    <div className="roles-and-responsibilities">
      <h2 className="roles-header">Roles And Responsibilities</h2>
      <p className="roles-paragraph">In my role, <span className='color-pink'> I meticulously orchestrate project strategies</span>, ensuring they are finely tuned for maximum impact in the Web 3 landscape.
      <span className='color-pink'>My expertise lies in community cultivation</span>, KOL marketing, and compelling content creation, all geared 
      towards propelling projects towards unparalleled growth and visibility.
      </p>
    </div>

    <div className="project-details">
        <h2 className="project-details-header">Trusted By</h2>

        {/* <div className="projects">
          <img src={coinstore} alt="coinstore log" className="project-image coinstore" />
          <img src={kwikpik} alt="byte logo" className="project-image kwikpik" />
          <img src={cassava} alt="cassava log" className="project-image cassava" />
          <img src={dojima} alt="dojima logo" className="project-image dojima" />
          <img src={nft} alt="nft log" className="project-image nft" />
          <img src={despace} alt="nft log" className="project-image despace" />
          <img src={coinstore} alt="coinstore log" className="project-image coinstore" />
          <img src={kwikpik} alt="byte logo" className="project-image kwikpik" />
          <img src={cassava} alt="cassava log" className="project-image cassava" />
          <img src={dojima} alt="dojima logo" className="project-image dojima" />
          <img src={nft} alt="nft log" className="project-image nft" />
          <img src={despace} alt="nft log" className="project-image despace" />
        </div>   */}
    </div>  
      {/* <button className='see-more' onClick={handleClick}>{isClicked ? 'See less': 'See more'}</button> */}
    </section>

    {/* <section>
    <div className="image-proofs">
      // <h2 className='proofs-header'>For Your Eyes</h2>
      <div className='images'>
      {refinedImages}
      </div>
      <button className="load-more-pics" onClick={handleLoadMore}>Load More </button>
    </div>
    </section> */}

    <section className='section' id='learn'>
    <div className="learn-crypto">
        <h2 className="learn-header">Learn From the Best</h2>
        <div className="books">
          <a href={"https://selar.co/m/dcryptgirlStore"}><img src={Book} alt="" className="book-photo" /></a>
          <a href={"https://selar.co/m/dcryptgirlStore"}><h3 className="book-title">Master Web3 With Easy Books, materials, community, Dcryptgirl and other prominent and professionals in the space</h3></a>
          <a href={'https://calendly.com/dcryptgirl/30min'}><button className='contact-me-btn check-out'>Get Access!</button></a>
        </div>
    </div>
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
