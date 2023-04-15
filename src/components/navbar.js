import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

function Navbar() {
  return (
    <>
        <div className='main-navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='navbar-content'>
                <p>Overview</p>
                <p className='navbar-home'>Home</p>
                <p>About</p>
                <p>Pricing</p>
                <p>Pages</p>
            </div>
            <div className='signup-container'>
                <p>Login</p>
                <p> <span className='signup-register'>Register</span> </p>
            </div>
        </div>
    </>
  )
}

export default Navbar