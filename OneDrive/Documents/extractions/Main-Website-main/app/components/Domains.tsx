import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

type Props = {}

const Domains = (props: Props) => {
  return (
    <div className='bg-Background bg-center bg-cover h-full max-w-[100vw] pt-2'>
    <div   className='flex flex-col items-center'>
        <div className='tracking-[0.65rem] text-5xl xl:text-9xl sm:text-xl md:text-5xl pt-5 text-center text-white font-bold'>
            DOMAINS
        </div>
        <div className='mt-9 self-center grid grid-cols-2 items-center justify-items-center align-middle justify-around min-w-full max-w-full p-2'>
            <div className='flex flex-row items-center justify-items-start border-2 w-[135px] 
            h-[180px] rounded-lg overflow-hidden hover:w-[350px] transition-all duration-500 
            col-span-2 md:col-span-1 mt-3
            '>
                <div className=''>
                <Image
                    src='/tech.png'
                    width={100}
                    height={100}
                    alt=''
                    className='ml-3'
                />
                <div className='text-white text-xl ml-2 pb-2'>
                    TECHNICAL
                </div>
                </div>
                 <div className='text-white  pt-3 text-sm ml-5 pr-3 text-justify flex flex-col items-center justify-items-center'>
                    Tech enthusiast who wants to work with IoT, AI/ML, Cloud, Webdevelopment can join....
                    <br/>
                    <div className='py-3 px-4 text-center mt-3 w-40 bg-white text-black hover:text-white hover:bg-black cursor-pointer'>
                    <a >
                    View More
                    </a>
                    </div>
                </div> 
            </div>
            <div className='flex mt-3 col-span-2 md:col-span-1 flex-row items-center justify-items-start border-2 w-[135px] h-[180px] rounded-lg overflow-hidden hover:w-[350px] transition-all duration-500'>
                <div className=''>
                <Image
                    src='/corporate.png'
                    width={100}
                    height={100}
                    alt=''
                    className='ml-3'
                />
                <div className='text-white text-xl ml-1'>
                    CORPORATE
                </div>
                </div>
                <div className='text-white pt-3 text-sm ml-5 pr-3 text-justify flex flex-col items-center justify-items-center'>
                A playground for inventive minds, where ideas come alive in vivid colors                    <br/>
                    <div className='py-3 px-4 text-center mt-3 w-40 bg-white text-black hover:text-white hover:bg-black cursor-pointer'>
                    <a >
                            View More
                    </a>
                    </div>
                </div>  
            </div>
             <div className='mt-3 col-span-2 flex flex-row items-center justify-items-start border-2 w-[135px] h-[180px] rounded-lg overflow-hidden hover:w-[350px] transition-all duration-500 md:max-w-[50vw]'>
                <div className=''>
                <Image
                    src='/creative.png'
                    width={100}
                    height={100}
                    alt=''
                    className='ml-3'
                />
                <div className='text-white text-xl ml-4 pb-2'>
                    CREATIVE
                </div>
                </div>
                <div className='text-white pt-3 text-sm ml-5 pr-3 text-justify flex flex-col items-center justify-items-center'>
                    For people who are artistic and content writing enthusiasts and with creative minds 
                    <br/>
                    <div className='py-3 text-center px-4 mt-3 w-40 bg-white text-black hover:text-white hover:bg-black cursor-pointer'>
                    <a >
                            View More
                    </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Domains