import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import background from './images/background.svg'
import heart from './images/heart-group.svg'
import hero from './images/hero-image.svg'
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
import Book from './images/book.png'
import Arrow from './images/Arrow.svg'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'






export default function home() {

  useGSAP(()=>{
    gsap.from(".heart", {scale:1.8, repeat: -1, repeatDelay: 1})
  })

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = ()=>{
    setIsClicked(!isClicked)
    console.log(isClicked);
  }


  useEffect(()=>{
    const elements = document.querySelectorAll('.each-project')
  console.log(elements)

    // const ids  = elements.length - 1
    if (isClicked){
        elements.forEach((element, index) => {
          element.style.display = "block";
    });
  }else{
    elements.forEach((element,index) =>{
      if(index >= 2)
      element.style.display = "none";
    })
  }
  } ,[isClicked])
  
  
  
  return (
    <div>
    <div className='home-container'>
        <Navbar/>
        <div className="hero">
            <div className="hero-text-group">
              <h5 className='identity'>I am Deborah, a</h5>
              <h2 className='profession'>Project Manager <br/> & Speaker</h2>
            </div>
            <div className="hero-image-group">
                <img src={heart} alt="heart" className='heart'/>
                <img className='hero-image' src={hero} alt="hero image" />
            </div>
        </div>
        <Link to={'/contact'}><button className='contact-me-btn'>Contact Me</button></Link>
    </div>
    <div className="about-section">
      <h2 className="about-header">About Me</h2>
      <p className="about-paragraph">
      Hello, I’m Deborah, a seasoned Web 3 project manager and community builder with three years of immersive experience in the blockchain space. 
      My journey has been defined by a passion for nurturing innovative projects from inception to fruition,
       with a keen focus on fostering vibrant and engaged communities.
      </p>
      <div className="about-socials">
        <div className="about-social-links">
          <Link><img src={twitter} alt="twitter-icon" /></Link>
          <Link><img src={tiktok} alt="tiktok-icon" /></Link>
          <Link><img src={instagram} alt="instagram-icon" /></Link>
        </div>
        <img src={curly} alt="social icon grouper" className="curly" />
      </div>

      <div className="project-overview">
        <div className="project-overview-header-group">
        <h2 className="project-overview-header">Project Overview</h2>
        <img src={doubleCurly} alt="" className="project-overview-header-design" />
        </div>
      </div>
      <p className="project-overview-text">
      Throughout my career, I’ve had the privilege of collaborating with groundbreaking projects such as DeSpace Protocol, 
      Coinstore, Dojima Network, ByteonBlast, and Cassava Network, miss peaches etc From their nascent stages, I’ve been intricately 
      involved in shaping their trajectories towards success.
      </p>
    </div>

    <div className="roles-and-responsibilities">
      <h2 className="roles-header">Roles And Responsibilities</h2>
      <p className="roles-paragraph">In my role, <span className='color-pink'> I meticulously orchestrate project strategies</span>, ensuring they are finely tuned for maximum impact in the Web 3 landscape.
      <span className='color-pink'>My expertise lies in community cultivation</span>, KOL marketing, and compelling content creation, all geared 
      towards propelling projects towards unparalleled growth and visibility.
      </p>
      </div>

      <div className={`project-details ${!isClicked ? "bottom-blur" : "blur-off"}`}>
        <h2 className="project-details-header">Project Details</h2>
        <div className="each-project">
          <img src={byte} alt="byte logo" className="project-image" />
          <h2 className='project-name'>ByteonBlast</h2>
          <p className='each-project-text'>Oversaw the rapid development of ByteonBlast from ideation to execution, 
          culminating in a presale sell-out within two hours.</p>
          <div className="each-projects-social">
            <img src={twitter} alt="twitter icon" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="each-project">
          <img src={coinstore} alt="coinstore log" className="project-image" />
          <h2 className='project-name'>Coinstore</h2>
          <p className='each-project-text'>Oversaw the rapid development of ByteonBlast from ideation to execution, 
          culminating in a presale sell-out within two hours.</p>
          <div className="each-projects-social">
            <img src={twitter} alt="twitter icon" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="each-project">
          <img src={cassava} alt="cassava log" className="project-image" />
          <h2 className='project-name'>Cassava Network</h2>
          <p className='each-project-text'>Oversaw the rapid development of ByteonBlast from ideation to execution, 
          culminating in a presale sell-out within two hours.</p>
          <div className="each-projects-social">
            <img src={twitter} alt="twitter icon" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        
      </div>  
      <button className='see-more' onClick={handleClick}>{isClicked ? 'See less': 'See more'}</button>

      <div className="learn-crypto">
        <h2 className="learn-header">Learn From the Best</h2>
        <div className="books">
          <Link to={'./'}><img src={Book} alt="" className="book-photo" /></Link>
          <Link to={'./'}><h3 className="book-title">Master Web3 With Easy Books <img src={Arrow} alt="" /></h3></Link>
        </div>
        <div className="youtube">
          <p className="encouragement">You might have tried a couple places or being to a couple tutorials but this is your one stop! join the team as we take 
            you on a ride to career and investment prowess!
          </p>
          <YoutubeEmbed embedId="_gxoP30TxHk" />
        </div>

      </div>
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
            <p className="testifiyer-name">Carlos Remirez</p>
          </div>
          <p className="testimony">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere nisi odio recusandae quam.</p>
        </div>
        <div className="each-testimony">
          <div className="pic-name">
            <img src={CARLOS} alt="" className="testifyer-pic" />
            <p className="testifiyer-name">Carlos Remirez</p>
          </div>
          <p className="testimony">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere nisi odio recusandae quam.</p>
        </div>
        <div className="each-testimony">
          <div className="pic-name">
            <img src={CARLOS} alt="" className="testifyer-pic" />
            <p className="testifiyer-name">Carlos Remirez</p>
          </div>
          <p className="testimony">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere nisi odio recusandae quam.</p>
        </div>
        <div className="each-testimony">
          <div className="pic-name">
            <img src={CARLOS} alt="" className="testifyer-pic" />
            <p className="testifiyer-name">Carlos Remirez</p>
          </div>
          <p className="testimony">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere nisi odio recusandae quam.</p>
        </div>
       
      </div>


    <Footer/>
    </div>
  )
}
