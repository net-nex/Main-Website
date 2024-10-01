import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { useScrollDirection } from './useScroll';

const Navbar = () => {
    const scrollDirection = useScrollDirection(); 
    const [nav, setNav] = useState(false);

    return (
        <div className='z-50'>
            {/* Navbar container */}
            <div className={`transition-all fixed ${scrollDirection === "down" ? "-top-20" : "top-0"} z-50 max-w-[100vw] w-full bg-black`}>
                <Fade triggerOnce className='z-[900]'> 
                    {/* Desktop view */}
                    <div className="hidden sm:flex flex-row items-center justify-between w-full py-5 px-6">
                        <div className="text-white">
                            <Link to="/" className="text-3xl font-kanit">NET-NEX</Link>
                        </div>
                        <ul className='flex'>
                            <li className="text-white mx-4">
                                <Link to="/events" className="hover:text-b3 transition duration-300">EVENTS</Link>
                            </li>
                            <li className="text-white mx-4">
                                <a 
                                    href="https://forms.gle/gjn8S8VvPx7QvCK36" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:text-b3 transition duration-300"
                                >
                                    RECRUITMENTS
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile view */}
                    <div className="flex items-center justify-between sm:hidden px-6 py-4">
                        <Link to="/" className="text-3xl font-kanit text-white">NET-NEX</Link>
                        <div onClick={() => setNav(!nav)} className="cursor-pointer text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Mobile menu */}
                    {nav && (
                        <Fade direction='down' cascade duration={100}>
                            <div className="bg-black w-full sm:hidden flex flex-col items-center py-6 space-y-6">
                                <Link to="/events" onClick={() => setNav(false)} className="text-white text-xl hover:text-b3 transition duration-300">EVENTS</Link>
                                <a 
                                    href="https://forms.gle/gjn8S8VvPx7QvCK36" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    onClick={() => setNav(false)}
                                    className="text-white text-xl hover:text-b3 transition duration-300"
                                >
                                    RECRUITMENTS
                                </a>
                            </div>
                        </Fade>
                    )}
                </Fade>
            </div>
        </div>
    );
};

export default Navbar;
