import React from 'react'
import Preloader from '../../components/preLoader'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
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
      <div className='fixed bottom-0 left-0 w-screen'>
      <Footer/>
      </div>
    </div>
  )
}

export default Projects