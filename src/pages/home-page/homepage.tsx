import React,{Suspense} from 'react'
import Navbar from '../../components/Navbar'
import About from './components/about'
import Domains from './components/domains'
import Preloader from '../../components/preLoader'
type Props = {}

const Hero  = React.lazy(()=>import('./components/hero'))
const Homepage = (props: Props) => {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<div className='fixed top-0 left-0 min-w-[100vw] min-h-[100vh] bg-black z-[999] pt-14 text-4xl text-white'><Preloader/></div>}>
    <Hero/>
    </Suspense>
    <About/>
    <Domains/>
    </>
  )
}

export default Homepage