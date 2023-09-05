import React from 'react'
import Navbar from '../../components/Navbar'
import expExplore from '../../utils/components.webp'
import './events.css'
import Footer from '../../components/Footer'
import Preloader from '../../components/preLoader'
import {Fade} from 'react-awesome-reveal'
type Props = {}

const Events = (props: Props) => {
  return (
    <div className=' h-full w-full  text-white'>
      <Navbar/>
      <Preloader/>
      <div>
      <div className='font-extrabold font-Lexend pt-20 text-center text-4xl'>
        UPCOMING EVENT
      </div>
      <div className='flex flex-col md:flex-row w-full h-full pt-7'>
        <div className=' md:sticky w-full md:w-[50vw] top-10 flex flex-col items-center justify-start text-center text-3xl h-full '>
          <div className='text-3xl text-center w-[90vw] pt-9 font-Lexend'><Fade  duration={700}>ESP EXPLORE</Fade></div>
          <Fade  duration={700}><img src={`${expExplore}`} alt='event' className='px-9'/></Fade>
          <Fade  duration={700}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 justify-between w-full'>
            <a href="https://konfhub.com/netnexsrm" target="_blank" className='col-span-1'>
            <div className='flex text-lg text-blue-600 font-extrabold'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              Register Now
            </div>
            </a>
          <div className='flex text-lg col-span-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            7th and 8th September
          </div>

            <div className='flex text-lg col-span-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
            Tech Park 405-406
            </div>
             <div className='flex text-lg col-span-1'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            10 AM - 3 PM
            </div>
            
          </div>
          </Fade>
        </div>
        <div className='text-center text-3xl w-full h-full flex flex-col justify-start'>
    <Fade >
          <div className="timeline">
  <div className="outer text-sm border-slate-500 md:border-l-2 p-2 w-full">
    <div className="card">
      
      <div className="info">
        <h3 className="title text-xl">CIRCUITRY UNVEILED</h3>
        <p>🔌 Journey into the core of electronics and programming with us! This session is your gateway to understanding fundamental circuit operations – from breadboards to voltage. Plus, dive into the world of C++ and grasp the essentials that power embedded systems.</p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title text-xl">CRAFTING WONDERS</h3>
        <p>🌟 Time to roll up your sleeves! Channel your inner engineer as we guide you through hands-on circuit assembly. Learn to connect the dots, quite literally, and construct a functional embedded sensor circuit. Let's bring your ideas to life!</p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title text-xl">&lt;PlaceHolder&gt;</h3>
        <p>💻 Embark on a coding odyssey! Discover the realm of C++ programming tailored for embedded systems. Learn how to communicate with sensors and make your circuit respond intelligently. Unleash the power of code and electronics.</p>
      </div>
    </div>
    <div className="card" id='lastcard'>
      <div className="info">
        <h3 className="title text-xl">PROJECT LAUNCHPAD</h3>
        <p>🚀 Elevate your project to the digital realm! Understand the importance of version control and collaboration using GitHub. We'll guide you through uploading your masterpiece, ensuring your innovation is showcased for the world to see.</p>
      </div>
    </div>
  </div>
</div>
</Fade>
        </div>
      </div>
      </div>
<Footer/>
    </div>
  )
}

export default Events
