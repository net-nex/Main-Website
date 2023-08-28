import React,{useState} from 'react'
import { useScrollDirection } from './useScroll';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const scrollDirection = useScrollDirection(); 
    const [nav,setNav] = useState(false);
  return (

    <div className={` transition-all fixed ${ scrollDirection === "down" ? "-top-20" : "top-0"} z-50 max-w-[100vw] min-w-[100vw] bg-black`}>
    <ul className="hidden sm:flex flex-row items-center justify-center">
                <li className="text-white mx-9 py-5"><Link to="/" className="text-3xl">
                NET-NEX
                    </Link></li>
                <li className="text-white mx-9 "><Link to="/events" className="hover:text-b3">EVENTS</Link></li>
                <li className="text-white mx-9 "><Link to="/projects" className="hover:text-b3">PROJECTS</Link></li>
                
            </ul>
            <ul className="flex items-center justify-between sm:hidden">
                <li className="text-white mx-9 text-center py-3"><Link to="/" className="text-3xl">
                    Net-Nex
                    </Link></li>
                <li  className="cursor-pointer" onClick={() => {setNav((nav) => !nav)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-9 hover:text-b3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </li>
            </ul>
            {nav &&
            <div className="duration-600 transition-all">
                <ul className="flex sm:hidden flex-col items-center justify-center transition-all ease-in duration-300 ">
                    <li className="text-white mx-9 "><Link to="/events" className="hover:text-b3">events</Link></li>
                    <li className="text-white mx-9 "><Link to="/blogs" className="hover:text-b3">blogs</Link></li>
                    <li className="text-white mx-9 "><Link to="/team" className="hover:text-b3">team</Link></li>
                    <li className="text-white mx-9 "><Link to="/contact_us" className="hover:text-b3">contact us</Link></li>
                </ul>
            </div>
              }
        </div>
    
  )
}

export default Navbar;