import React from 'react'
import arrow from '../assets/arrow.png'
import '../styles/stack2.css'
import meeting from '../assets/meeting.png'

function Stack2() {
  return (
    <div className='meeting-stack'>
        <div className='inside-grey-stack-right'>
            <div className='img-inside-stack'>
                <img src={meeting} alt='meeting'/>
            </div>
        </div>
        <div className='para-grey-stack-right'>
        <div className='para-grey-stack'>
            <p className='para-stack2'>Customize the <br/>template to <br/> suit any brand</p>
        </div>
        <div className='feature-stack'>
            <ul className='list'>
                <li className='star'>Add a feature section about the product.</li>
                <li className='star'>Add a feature section about the product.</li>
                <li className='star'>Add a feature section about the product.</li>
            </ul>
        </div>
        <div className='stack-button'>
            <p>Get Started</p>
            <img className='arr' src={arrow} alt='arrow'/>
        </div>
        </div>
    </div>
  )
}

export default Stack2