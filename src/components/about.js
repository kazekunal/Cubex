import React from 'react'
import arrow from '../assets/arrow.png'
import image from '../assets/image.png'
import '../styles/about.css'

function About() {
  return (
    <div className='main-body'>
        <div className='body-left'>
            <p className='about-para'>Cubex makes it <br/>easy to run <br/>your business.</p>
            <p className='aboutsub-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc, fermentum id ex non, dapibus hendrerit eros.</p>
            <div className='signup-para'>
                <p className='signup-para1'>Get Started</p>
                <img className='arrow-signup' src={arrow} alt='arrow'/>
            </div>
        </div>
        <div className='body-right'>
            <img className='about-right-img' src={image} alt='img'/>
        </div>
    </div>
  )
}

export default About