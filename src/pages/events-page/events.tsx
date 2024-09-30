import { Fade } from 'react-awesome-reveal'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Preloader from '../../components/preLoader'
import './events.css'

import server from '../../utils/servers.png'
type Props = {}

const Events = (props: Props) => {
  return (
    <div className='h-full w-full text-white bg-black'>
      <Navbar />
      <Preloader />
      <div className='container mx-auto'>
        {/* Heading */}
        <div className='font-extrabold font-Lexend pt-20 text-center text-4xl'>
          UPCOMING EVENT
        </div>
        {/* Main content */}
        <div className='flex flex-col md:flex-row w-full h-full pt-12'>
          {/* Event Info */}
          <div className='md:sticky w-full md:w-[50vw] top-10 flex flex-col items-center justify-start text-center text-3xl'>
            <div className='text-3xl w-[90vw] pt-9 font-Lexend'>
              <Fade duration={700}>Recruitment 2024</Fade>
            </div>
            <Fade duration={700}>
              <img src={`${server}`} alt='event' className='px-9 ' />
            </Fade>
            <Fade duration={700}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 w-full'>
                {/* Join Now button */}
                <a href="https://forms.gle/gjn8S8VvPx7QvCK36" target="_blank" rel="noreferrer" className='col-span-1'>
                  <div className='flex items-center justify-center text-lg text-gray-400 font-extrabold transition duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    Join Now
                  </div>
                </a>
                {/* Date */}
                <div className='flex items-center justify-center text-lg text-gray-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
                  </svg>
                  Oct 6th 2024
                </div>
              </div>
            </Fade>
          </div>
          {/* Timeline Section */}
          <div className='w-full h-full flex flex-col justify-start text-center'>
            <Fade>
              <div className="timeline">
                <div className="outer text-sm border-gray-600 md:border-l-2 p-4">
                  {/* Event Cards */}
                  <div className="card mb-8 transition transform ">
                    <div className="info">
                      <h3 className="title text-xl font-bold text-white">ESP EXPLORE.v2</h3>
                      <p className='text-gray-400'>🔌 A Hands-On IoT And Embedded Systems Workshop, Where Participants Learned To Design Smart Devices.</p>
                    </div>
                  </div>
                  <div className="card mb-8 transition transform ">
                    <div className="info">
                      <h3 className="title text-xl font-bold text-white">SERVING YOUR APP TO MILLIONS</h3>
                      <p className='text-gray-400'>🌟 This Session Focused On Scaling Applications To Serve Millions Of Users, Covering Key Topics Like Load Balancing And Microservices.</p>
                    </div>
                  </div>
                  <div className="card mb-8 transition transform ">
                    <div className="info">
                      <h3 className="title text-xl font-bold text-white">ESP EXPLORE</h3>
                      <p className='text-gray-400'>🔌 A Workshop Where Participants Learned To Design Smart Devices And Gained Proficiency In C/C++, TINKERCAD, And BLYNK.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events
