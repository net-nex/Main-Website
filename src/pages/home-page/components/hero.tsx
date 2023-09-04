import React from 'react'
import bgVideo from './../../../bgVideo.mp4';
import {Slide} from 'react-awesome-reveal'
type Props = {}

const Hero = (props: Props) => {
  return (
    <main>
    <div className="relative flex items-center      
        justify-center h-screen overflow-hidden">
      <div className='flex flex-col xs:flex-row sm:flex-row md:flex-row items-center justify-center'>
          <Slide direction='left' duration={500}>
      <div className='z-30 w-[35vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]'>
    <svg  viewBox="0 0 710 687" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4_70)">
      <path d="M211.06 686.99C201.34 686.99 191.96 683.44 184.67 676.99L17.12 528.86C6.24 519.24 0 505.4 0 490.88V192.05C0 177.29 6.41 163.3 17.59 153.66L181.53 12.3C190.73 4.37 202.49 0 214.64 0C226.79 0 238.6 4.39 247.81 12.36L529.48 256.09C540.62 265.73 547 279.7 547 294.42V416.73C547 423.48 544.23 430.06 539.39 434.76L510.03 463.34C505.3 467.94 499.07 470.47 492.48 470.47C485.88 470.47 479.64 467.93 474.91 463.32L445.6 434.75C440.77 430.04 438 423.47 438 416.73V343.26C438 334.41 434.18 325.99 427.52 320.17L234.94 151.59C229.34 146.69 222.16 143.99 214.72 143.99C207.28 143.99 200.11 146.69 194.51 151.58L114.48 221.61C107.82 227.44 104 235.86 104 244.71V439.55C104 448.01 107.54 456.17 113.71 461.95L256.73 595.88C272.12 610.29 273.61 634.27 260.13 650.47L241.72 672.6C234.12 681.73 222.94 686.97 211.05 686.97L211.06 686.99Z" fill="url(#paint0_linear_4_70)"/>
      <path d="M503.06 454.71L532.42 426.13C535.35 423.27 537.01 419.36 537.01 415.26V292.95C537.01 281.14 531.88 269.91 522.94 262.18L241.26 18.46C225.99 5.24999 203.35 5.22999 188.06 18.41L24.12 159.77C15.15 167.5 10 178.75 10 190.59V489.42C10 501.08 15 512.18 23.74 519.91L191.3 668.04C203.92 679.2 223.27 677.72 234.04 664.76L252.45 642.63C262.56 630.47 261.45 612.54 249.9 601.73L106.88 467.8C98.66 460.11 94 449.35 94 438.1V243.25C94 231.52 99.07 220.35 107.9 212.63L187.93 142.6C203.27 129.17 226.19 129.18 241.53 142.6L434.11 311.18C442.94 318.91 448 330.07 448 341.8V415.27C448 419.36 449.65 423.28 452.58 426.13L481.89 454.7C487.78 460.44 497.17 460.44 503.06 454.7V454.71Z" fill="url(#paint1_linear_4_70)"/>
      <path d="M495.36 686.99C483.18 686.99 471.4 682.6 462.19 674.63L180.52 430.9C169.38 421.26 163 407.29 163 392.57V270.26C163 263.51 165.77 256.94 170.61 252.23L199.97 223.65C204.7 219.05 210.93 216.52 217.52 216.52C224.11 216.52 230.36 219.06 235.09 223.67L264.4 252.24C269.23 256.95 272 263.52 272 270.26V343.73C272 352.58 275.82 361 282.48 366.82L475.06 535.4C480.66 540.3 487.84 543 495.28 543C502.72 543 509.89 540.3 515.49 535.41L595.52 465.38C602.18 459.55 606 451.13 606 442.28V247.43C606 238.97 602.46 230.81 596.29 225.03L453.26 91.1C437.87 76.69 436.38 52.71 449.86 36.51L468.27 14.38C475.87 5.25001 487.05 0.0100098 498.94 0.0100098C508.66 0.0100098 518.04 3.56001 525.33 10.01L692.89 158.14C703.77 167.76 710.01 181.6 710.01 196.12V494.94C710.01 509.7 703.6 523.69 692.42 533.33L528.48 674.69C519.28 682.62 507.52 686.99 495.38 686.99H495.36Z" fill="url(#paint2_linear_4_70)"/>
      <path d="M206.94 230.81L177.58 259.39C174.65 262.25 172.99 266.16 172.99 270.26V392.57C172.99 404.38 178.12 415.61 187.06 423.34L468.73 667.07C484 680.28 506.64 680.3 521.93 667.12L685.87 525.76C694.84 518.03 699.99 506.78 699.99 494.94V196.11C699.99 184.45 694.99 173.35 686.25 165.62L518.7 17.49C506.08 6.33 486.73 7.81 475.96 20.77L457.55 42.9C447.44 55.06 448.55 72.99 460.1 83.8L603.12 217.73C611.34 225.42 616 236.18 616 247.43V442.27C616 454 610.93 465.17 602.1 472.89L522.07 542.92C506.73 556.35 483.81 556.34 468.47 542.92L275.89 374.34C267.06 366.61 262 355.45 262 343.72V270.25C262 266.16 260.35 262.24 257.42 259.39L228.11 230.82C222.22 225.08 212.83 225.08 206.94 230.82V230.81Z" fill="url(#paint3_linear_4_70)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_4_70" x1="77.9475" y1="82.4387" x2="743.723" y2="462.08" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6E0380"/>
      <stop offset="1" stopColor="#49FFFF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_4_70" x1="85.099" y1="88.578" x2="728.955" y2="452.908" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6E0380"/>
      <stop offset="1" stopColor="#49FFFF"/>
      </linearGradient>
      <linearGradient id="paint2_linear_4_70" x1="240.949" y1="82.4475" x2="906.726" y2="462.102" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6E0380"/>
      <stop offset="1" stopColor="#49FFFF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_4_70" x1="248.088" y1="90.0363" x2="891.938" y2="454.355" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6E0380"/>
      <stop offset="1" stopColor="#49FFFF"/>
      </linearGradient>
      <clipPath id="clip0_4_70">
      <rect width="710" height="686.99" fill="white"/>
      </clipPath>
      </defs>
    </svg>
    </div>
    </Slide>
    <Slide direction='right' duration={500}>
    <div className='font-bold m-5 flex flex-col  '>
        <div className='text-4xl sm:text-6xl z-30 text-white text-center'>NETWORKING</div> 
        <div className='z-30 text-6xl sm:text-8xl mt-3 bg-transperant pl-3 rounded-3xl text-[#000] bg-white tracking-[1rem] text-center mix-blend-screen'>
          
          NEXUS</div> 
    </div>
    </Slide>
    </div>
        <video src=
            {`${bgVideo}`}
            autoPlay
            loop
             muted
            className="fixed -z-[10] w-auto 
            min-w-full min-h-full max-w-none"
            >
        </video>
    </div>
</main>
  )
}

export default Hero