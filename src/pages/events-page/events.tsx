import React from 'react'
import Navbar from '../../components/Navbar'
import expExplore from '../../utils/EspExplore.svg'
import './events.css'
type Props = {}

const Events = (props: Props) => {
  return (
    <div className='w-[100vw] h-[] min-h-[100vh] bg-[#161718] text-white'>
      <Navbar/>
      <div>
      <div className='font-extrabold  pt-20 text-center text-4xl'>
        UPCOMING EVENT
      </div>
      <div className='flex flex-row w-full h-full pt-7'>
        <div className='sticky top-0 flex flex-col items-start justify-start w-[50vw] text-center text-3xl h-full ml-3'>
          <div className='text-3xl text-center w-full pt-9'>ESP EXPLORE</div>
          <img src={`${expExplore}`} alt='event'/>
          <div className='flex gap-14 items-center justify-center mt-4'>
              <div className='w-[150px] h-[100px] bg-white'></div>
              <div className='w-[150px] h-[100px] bg-white'></div>
              <div className='w-[150px] h-[100px] bg-white'></div>
          </div>
        </div>
        <div className='text-center text-3xl w-full h-full flex flex-col justify-start'>
          <div className="timeline">
  <div className="outer text-sm w-[50vw]">
    <div className="card">
      <div className='text-3xl'>Event Timeline</div>
      <div className="info">
        <h3 className="title">Title 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">Title 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">Title 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">Title 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">Title 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">Title 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Events