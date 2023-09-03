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
    <Suspense fallback={<Preloader/>}>
    <Hero/>
    </Suspense>
    <About/>
    <Domains/>
    </>
  )
}

export default Homepage