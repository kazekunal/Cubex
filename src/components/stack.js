import React from 'react'
import '../styles/stack.css'
import custom from '../assets/custom.png'
import arrow from '../assets/arrow.png'
import task from '../assets/task.png'
// import tick from '../assets/tick.png'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'

function Stack() {
  return (
    <>
        <div className='stacks-cubex'>
            <img src={brand1} alt='brand1'/>
            <img src={brand2} alt='brand2'/>
            <img src={brand3} alt='brand3'/>
            <img src={brand4} alt='brand4'/>
            <img src={brand5} alt='brand5'/>
            <img src={brand6} alt='brand6'/>
        </div>
        <div className='custom-cubex'>
            <img src={custom} alt='custom-stack'/>
        </div>
        <div className='background-grey-stack'></div>
        <div className='inside-grey-stack'>
            <div className='inside-grey-stack-left'>
                <div className='para-grey-stack'>
                    <p>Describe your products for <br/> all customers</p>
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
            <div className='inside-grey-stack-right'>
                <div className='img-inside-stack'>
                    <img src={task} alt='task'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stack