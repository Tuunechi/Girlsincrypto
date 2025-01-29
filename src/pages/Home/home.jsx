import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import background from './images/background.svg'
import heart from './images/heart-group.svg'
import hero from './images/hero.svg'
import '../../reset.css'
import './home.css'
import { Link } from 'react-router-dom'
import instagram from './images/instagram.svg'
import tiktok from './images/tiktok.svg'
import twitter from './images/tiktok.svg'
import curly from './images/curly.svg'
import doubleCurly from './images/double-curly.svg'
import coinstore from './images/coinstore.svg'
import linkedin from './images/Linkedin.svg'
import byte from './images/byte.svg'
import cassava from './images/cassava.svg'
import community from './images/community.png'
import Footer from '../Footer/footer'
import CARLOS from './images/Carlos-Remirez.jpg'
import EMILY from './images/Aisha-Khan.jpg'
import Lady from './images/Ananya-Patel.jpg'
import Guy from './images/Lars-Johansson.jpg'
import Guy2 from './images/John-Smith.jpg'
import Lady2 from './images/Li-Wei.jpg'
import Book from './images/book.png'
import Arrow from './images/Arrow.svg'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import {gsap, Linear} from 'gsap'
import {useGSAP} from '@gsap/react'
import kwikpik from './images/kwik.svg'
import dojima from './images/dojima.svg'
import nft from './images/nft.svg'
import despace from './images/despace.svg'
// import images from '../Gallery/Gallery.js'
import Gallery from '../Gallery/Gallery.jsx'
import { images } from '../Gallery/Gallery.jsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger';





export const metadata = {
  title: "Dcryptgirl",
  description: "Public speaker and Community Builder",
};

gsap.registerPlugin(ScrollTrigger);


export default function home() {

  const [higherLimit, setHigherLimit] = useState(2)   
  const [lowerLimit, setLowerLimit] = useState(0)   



const refinedImages = images.filter((_, index) => index >= lowerLimit && index <= higherLimit)
.map((image, index)=>{
  return <div className='pictorial-proof'><img key={index} className="refinedImages" src={image}/></div>
})

const imageIndex = images.length - 1

const handleLoadMore = ()=>{
  if(higherLimit >= imageIndex && lowerLimit >= imageIndex - 5){
    setHigherLimit(5)
    setLowerLimit(0)
  }else{
    setHigherLimit(prevLimit => prevLimit + 5)
    setLowerLimit(prevLimit => prevLimit + 5)
  }
}

  
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
          { opacity: 0.05, y: 100 }, // Initial state before scrolling
          {
            opacity: 1,
            y: 0,  // State after the scroll
            scrollTrigger: {
              trigger: section,   // Trigger for each individual section
              start: 'top 60%',   // Animation starts when top of section hits 80% of viewport
              end: 'bottom 25%',  // Animation ends when bottom of the section hits 20% of viewport
              scrub: 1,           // Smooth scrolling effect
              // markers: true,      // Show markers for debugging (remove later)
              toggleActions: "play none none none", // Only play once when section comes into view
            }
          });
      });
    });

    // useGSAP(()=>{
    //   gsap.fromTo(".curly", {scaleX:0.5}, {scaleX:1})
    // })

  

  // const [isClicked, setIsClicked] = useState(false)

  // const handleClick = ()=>{
  //   setIsClicked(!isClicked)
  //   console.log(isClicked);
  // }


  // useEffect(()=>{
  //   const elements = document.querySelectorAll('.each-project')
  // console.log(elements)

    // const ids  = elements.length - 1
  //   if (isClicked){
  //       elements.forEach((element, index) => {
  //         element.style.display = "block";
  //   });
  // }else{
  //   elements.forEach((element,index) =>{
  //     if(index >= 2)
  //     element.style.display = "none";
  //   })
  // }
  // } ,[isClicked])
  
  
  
  return (
  <div>
    <div className='home-container'>
        <Navbar/>
        <div className="hero">
            <div className="hero-text-group">
              <h5 className='identity'>I am Deborah, a</h5>
              <h2 className='profession'>Project Manager, <br/>Community Builder <br/> & Public Speaker</h2>
            </div>
            <div className="hero-image-group">
                <img src={heart} alt="heart" className='heart'/>
                <img className='hero-image' src={hero} alt="hero image" />
            </div>
        </div>
        <a href={'https://calendly.com/dcryptgirl/30min'}><button className='contact-me-btn'>Book a Call</button></a>
    </div>
    <section className='section'>
    <div className="about-section">
      <h2 className="about-header">About Me</h2>
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

        <div className="projects">
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
        </div>  
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
          <a href={"https://selar.co/m/dcryptgirlStore"}><h3 className="book-title">Master Web3 With Easy Books For Free <img src={Arrow} alt="" /></h3></a>
        </div>
        <div className="youtube">
          <p className="encouragement">You might have tried a couple places or being to a couple tutorials but this is your one stop! join the team as we take 
            you on a ride to career and investment prowess!
          </p>
          <YoutubeEmbed embedId="q47i6u3eX8w"  />
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

        <div className="testimonies">
        <div className="each-testimony">
          <div className="pic-name">
            <img src={CARLOS} alt="" className="testifyer-pic" />
            <p className="testifiyer-name">Adebayo Johnson</p>
          </div>
          <p className="testimony">"Deborah's expertise in project management is unparalleled. Her ability to strategize and execute complex Web 3 projects with precision brought our vision to life. Her leadership is invaluable."</p>
        </div>
        <div className="each-testimony">
          <div className="pic-name">
            <img src={EMILY} alt="" className="testifyer-pic" />
            <p className="testifiyer-name"> Emily Hartman</p>
          </div>
          <p className="testimony"> "I've had the pleasure of working with Deborah on multiple blockchain initiatives. Her commitment to fostering community engagement and driving project success is second to none. A true leader!"</p>
        </div>
        <div className="each-testimony">
          <div className="pic-name">
            <img src={Lady} alt="" className="testifyer-pic" />
            <p className="testifiyer-name"> Sarah Nguyen</p>
          </div>
          <p className="testimony">"Deborah’s speeches are always captivating, insightful, and filled with practical knowledge. Her ability to break down complex blockchain topics into digestible content is impressive."</p>
        </div>
        <div className="each-testimony">
          <div className="pic-name">
            <img src={Guy} alt="" className="testifyer-pic" />
            <p className="testifiyer-name">Michael Levine </p>
          </div>
          <p className="testimony">"Working with Deb has been an absolute privilege. Her energy, expertise, and passion for building thriving communities make her an exceptional project manager."</p>
        </div>
       
      </div>
    </section>

    <Footer/>
  </div>
  )
}
