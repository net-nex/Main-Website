"use client"
// import { useEffect } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import Image from 'next/image';
import {LodingImage} from '../public';


const PreLoader = () => {    
    return (
    <div className="z-50 fixed top-0 left-0 flex justify-center items-center bg-black dark:bg-primary text-3xl font-bold w-screen h-screen animate-splashScreen">
        <div className="flex flex-col items-center animate-splashScreenText">
          <div className='flex justify-center items-center '>
             <Image className='animate-spin w-[30%] h-[30%] flex justify-center items-center' src={LodingImage} alt='Loading_Image'/>
          </div>
          <div className='flex flex-row justify-center items-center'>
              <span className="text-primary dark:text-white animate-spin">NetNex&nbsp;</span>
              <span className="text-white">is&nbsp;</span>
              <span className="text-primary dark:text-white">Loading...&nbsp;</span>
              <span className="animate-spin text-blue-900 ml-2"><ImSpinner8 /></span>
          </div>
        </div>
    </div>
  )
}

export default PreLoader