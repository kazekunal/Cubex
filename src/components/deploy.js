import React from 'react'
import '../styles/deploy.css'
import arrow from '../assets/arrow.png'
import brandimg1 from '../assets/brand-img1.png'
import brandimg2 from '../assets/brand-img2.png'
import brandimg3 from '../assets/brand-img3.png'
import brandimg4 from '../assets/brand-img4.png'
import brandimg5 from '../assets/brand-img5.png'
import brandimg6 from '../assets/brand-img6.png'

function Deploy() {
  return (
    <>
        <div className='main-body-deploy'>
            <p className='para-deploy'>INTEGRATIONS</p>
            <p className='para2-deploy'>Deploy your project <br/>with the right tools</p>
        </div>
        <div className='grid-deploy'>
              <div className='grid1'>
                <div className='logo-grid'>
                  <img src={brandimg1} alt='logo1'/>
                </div>
                <div className='content-grid'>
                <p className='brand-grid-name'>Figma</p>
                <p className='brand-grid-subtext'>Design tool</p>
                </div>
                <div className='button-grid'>
                <p className='circle-deploy'><img src={arrow} alt='arrow'/></p>
                </div>
              </div>
              <div className='grid2'>
                <div className='logo-grid'>
                  <img src={brandimg2} alt='logo2'/>
                </div>
                <div className='content-grid'>
                <p className='brand-grid-name'>Discord</p>
                <p className='brand-grid-subtext'>Chat Service</p>
                </div>
                <div className='button-grid'>
                <p className='circle-deploy'><img src={arrow} alt='arrow'/></p>
                </div>
              </div>
              <div className='grid3'>
                <div className='logo-grid'>
                  <img src={brandimg3} alt='logo3'/>
                </div>
                <div className='content-grid'>
                <p className='brand-grid-name'>Mailchamp</p>
                <p className='brand-grid-subtext'>Mail Service</p>
                </div>
                <div className='button-grid'>
                <p className='circle-deploy'><img src={arrow} alt='arrow'/></p>
                </div>
              </div>
              <div className='grid4'>
                <div className='logo-grid'>
                  <img src={brandimg4} alt='logo4'/>
                </div>
                <div className='content-grid'>
                <p className='brand-grid-name'>Facebook</p>
                <p className='brand-grid-subtext'>Social Media</p>
                </div>
                <div className='button-grid'>
                <p className='circle-deploy'><img src={arrow} alt='arrow'/></p>
                </div>
              </div>
              <div className='grid5'>
                <div className='logo-grid'>
                  <img src={brandimg5} alt='logo5'/>
                </div>
                <div className='content-grid'>
                <p className='brand-grid-name'>Trello</p>
                <p className='brand-grid-subtext'>Note Service</p>
                </div>
                <div className='button-grid'>
                <p className='circle-deploy'><img src={arrow} alt='arrow'/></p>
                </div>
              </div>
              <div className='grid6'>
                <div className='logo-grid'>
                  <img src={brandimg6} alt='logo6'/>
                </div>
                <div className='content-grid'>
                <p className='brand-grid-name'>Slack</p>
                <p className='brand-grid-subtext'>Communication</p>
                </div>
                <div className='button-grid'>
                <p className='circle-deploy'><img src={arrow} alt='arrow'/></p>
                </div>
              </div>
        </div>
    </>
  )
}

export default Deploy