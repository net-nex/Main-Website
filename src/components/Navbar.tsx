import React,{useState} from 'react'
import { useScrollDirection } from './useScroll';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
    const scrollDirection = useScrollDirection(); 
    const [nav,setNav] = useState(false);
  return (
    <div className=' z-50 '>
    <div className={` transition-all fixed ${ scrollDirection === "down" ? "-top-20" : "top-0"} z-50 max-w-[100vw] min-w-[100vw] bg-black`}>
    <Fade triggerOnce className='z-[900]'> 
    <div className="hidden sm:flex flex-row items-center justify-between w-full">
                <div className="text-white mx-9 py-5"><Link to="/" className="text-3xl font-kanit">
                NET-NEX
                </Link>
                </div>
                <ul className='flex '>
                <li className="text-white mx-9 "><Link to="/events" className="hover:text-b3">EVENTS</Link></li>
                <li className="text-white mx-9 "><Link to="/projects" className="hover:text-b3">PROJECTS</Link></li>
                </ul>
            </div>
            <ul className="flex items-center justify-between sm:hidden">
                <li className="text-white mx-9 text-center py-3"><Link to="/" className=" text-3xl font-kanit">

                    Net-Nex
                    </Link></li>
                <li  className="cursor-pointer" onClick={() => {setNav((nav) => !nav)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-9 hover:text-b3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </li>
            </ul>
            {nav &&
            <Fade direction='down' cascade duration={100}>
            <div className="duration-600 transition-all">
                <ul className="flex sm:hidden flex-col items-center justify-center transition-all ease-in duration-300 ">
                    <li className="text-white mx-9 "><Link to="/events" className="hover:text-b3">events</Link></li>
                    <li className="text-white mx-9 "><Link to="/projects" className="hover:text-b3">Projects</Link></li>
 
                </ul>
            </div>
            </Fade>
              }
        </Fade>
        </div>
        </div>
  )
}

export default Navbar;
