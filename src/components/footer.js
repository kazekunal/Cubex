import React from 'react'
import logo_white from '../assets/logo_white.png'
import social from '../assets/social-links.png'
import '../styles/footer.css'

function Footer() {
  return (
    <>
        <div className='footer-bgblack'></div> 
        <div className='footer-content'>
            <div className='footer-content1'>
                <div className='footer-logo-content'>
                <img src={logo_white} alt='white_logo'/>
                <p className='heading-footer'>Cubex</p>
                </div>
                <p className='para-footer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante dui Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante dui</p>
                <img className='img-footer' src={social} alt='links'/>
            </div>
            <div className='footer-content2'>
                <p className='head-footer1'>Pages</p>
                <ul>
                    <li className='list1'>Overview</li>
                    <li className='list1'>Home</li>
                    <li className='list1'>About</li>
                    <li className='list1'>Features</li>
                    <li className='list1'>Pricing</li>
                </ul>
            </div>
            <div className='footer-content3'>
                <p className='head-footer2'>Company</p>
                <ul className='head-footer'>
                    <li className='list1'>Integration</li>
                    <li className='list1'>Blog</li>
                    <li className='list1'>Blog Article</li>
                    <li className='list1'>Contact</li>
                </ul>
            </div>
            <div className='footer-content4'>
                <p className='head-footer3'>Contact</p>
                <ul className='head-footer'>
                    <li className='list1'>Login</li>
                    <li className='list1'>Register</li>
                    <li className='list1'>Forgot Password</li>
                    <li className='list1'>Update Password</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer