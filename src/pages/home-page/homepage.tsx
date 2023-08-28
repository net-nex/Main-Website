import React,{Suspense} from 'react'
import Navbar from '../../components/Navbar'
import About from './components/about'
import Domains from './components/domains'
type Props = {}

const Hero  = React.lazy(()=>import('./components/hero'))
const Homepage = (props: Props) => {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<p className='h-[100vh] w-[100vw] bg-red'>This is Loading</p>}>
    <Hero/>
    </Suspense>
    <About/>
    <Domains/>
    </>
  )
}

export default Homepage