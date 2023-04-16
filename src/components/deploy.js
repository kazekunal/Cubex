import React from 'react'
import '../styles/deploy.css'
import grid from '../assets/grid.png'

function Deploy() {
  return (
    <>
        <div className='main-body-deploy'>
            <p className='para-deploy'>INTEGRATIONS</p>
            <p className='para2-deploy'>Deploy your project <br/>with the right tools</p>
        </div>
        <div className='grid-deploy'>
            <img className='grid' src={grid} alt='grid'/>
        </div>
    </>
  )
}

export default Deploy