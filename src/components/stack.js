import React from 'react'
import stack from '../assets/stack.png'
import '../styles/stack.css'
import custom from '../assets/custom.png'
import arrow from '../assets/arrow.png'
import task from '../assets/task.png'
import tick from '../assets/tick.png'

function Stack() {
  return (
    <>
        <div className='stack-cubex'>
            <img src={stack} alt='tech-stack'/>
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
            <div className='inside-grey-stack-left'>
                <div className='img-inside-stack'>
                    <img src={task} alt='task'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stack