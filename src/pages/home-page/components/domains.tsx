import React from 'react'
import Footer from './../../../components/Footer'
import Creative from '../../../utils/Creatives.webp'
import Tech from '../../../utils/tech.webp'
import Corporate from '../../../utils/corp.webp'
import {Fade} from 'react-awesome-reveal'
type Props = {}

const Domains = (props: Props) => {
  return (
    <div className='bg-Background bg-center bg-cover min-h-[80vh] max-w-[100vw] pt-2' >
    <div className='flex flex-col items-center'>
        <div className='tracking-[0.65rem] text-5xl xl:text-9xl sm:text-xl md:text-5xl pt-5 text-center text-white font-Lexend font-bold'>
            DOMAINS
        </div>
        <div className='mt-9 self-center grid grid-cols-2 items-center justify-items-center align-middle justify-around min-w-full max-w-full p-2'>
            <div className='flex mt-3 col-span-2 md:col-span-1 flex-row items-center border-2 w-[125px] h-[180px] rounded-lg overflow-hidden hover:w-[350px] transition-all duration-500'>
                <div className='flex flex-col items-center'>
                <img
                    src={`${Tech}`}
                    className='object-cover w-[105px] h-[140px] ml-2'
                    alt='tech'
                />
                <div className='text-white text-xl text-center ml-2 mt-0'>
                    TECHNICAL
                </div>
                </div>
                <div className='text-white  pt-3  ml-5 pr-3 text-center flex flex-col text-lg items-center justify-items-center'>
                    Tech enthusiast who wants to work with IoT, AI/ML, Cloud, Webdevelopment can join....
                    <br/>
                    
                </div> 
            </div>
            <div className='flex mt-3 col-span-2 md:col-span-1 flex-row items-center border-2 w-[125px] h-[180px] rounded-lg overflow-hidden hover:w-[350px] transition-all duration-500'>
            <div className='flex flex-col items-center'>
                <img
                    src={`${Corporate}`}
                    className='object-cover w-[105px] h-[140px] ml-2'
                    alt='corporate'
                />
                <div className='text-white text-xl text-center ml-1 mt-0'>
                    CORPORATE
                </div>
                </div>
                <div className='text-white  pt-3 text-lg ml-5 pr-3 text-center flex flex-col items-center justify-items-center'>
                        A playground for inventive minds, where ideas come alive in vivid colors <br/>
                   
                </div> 
            </div>
             <div className='mt-3 col-span-2 flex flex-row items-center justify-items-start border-2 w-[115px] h-[180px] rounded-lg overflow-hidden hover:w-[350px] transition-all duration-500 md:max-w-[50vw]'>
             <div className='flex flex-col items-center'>
                <img
                    src={`${Creative}`}
                    className='object-cover w-[105px] h-[140px] ml-2'
                    alt='creative'
                />
                <div className='text-white text-xl text-center ml-3 mt-0 '>
                CREATIVE
                </div>
                </div>
                <div className='text-white pt-3 text-lg ml-5 pr-3 text-center flex flex-col items-center justify-items-center'>
                For people who are artistic and content writing enthusiasts and with creative minds                    <br/>
                </div> 
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Domains