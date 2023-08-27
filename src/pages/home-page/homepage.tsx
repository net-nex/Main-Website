import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/hero'
import About from './components/about'
import Domains from './components/domains'
type Props = {}

const Homepage = (props: Props) => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Domains/>
    </>
  )
}

export default Homepage