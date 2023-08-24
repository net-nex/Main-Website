import About from "./components/About"
import Hero from "./components/Hero"
import Domains from "./components/Domains"
import PreLoader from './preloader'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
export default function Home() {
  return (
    <>
    <PreLoader />
    <Navbar/>
    <div className="wrap relative">
    <Hero/>
    <div className="relative h-full snap-y snap-mandatory overflow-y-auto scroll-smooth">
    <About/>
    <Domains/>
    </div>
    </div>
    </>
  )
}
