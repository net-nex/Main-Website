import React from 'react'
import Preloader from '../../components/preLoader'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import loading from '../../utils/loading.mp4'
import web from '../../utils/web.webp'
import {Fade} from 'react-awesome-reveal'
type Props = {}

const Projects = (props: Props) => {
  return (
    <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Navbar/>
      <Preloader/>
      <div className="text-white w-[100vw] h-[100vh] flex flex-col text-xl justify-center items-center z-10">
        <div className='max-w-[500px] md:max-w-[550px]'>
      <Fade>
          <img src={`${web}`} alt='logo'/>
        </Fade>
        </div>
        <div className='text-3xl font-extrabold font-kanit'>Coming Soon.....</div>
      <Footer/>
      </div>
     
    </div>
  )
}

export default Projects