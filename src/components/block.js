import React from 'react'
import arrow from '../assets/arrow.png'
import '../styles/block.css'

function Block() {
  return (
    <>
    <div className='block-bgblack'></div>
        <div className='block-stack'>
            <div className='block-para-right'>
                <p>Save time and build <br/> better products faster.</p>
            </div>
            <div className='block-para'>
                <p className='block-para-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc.</p>
                <div className='stack-button'>
                    <p>Get Started</p>
                    <img className='arr' src={arrow} alt='arrow'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Block