import {Fade} from 'react-awesome-reveal'
type Props = {}

const About = (props: Props) => {
  return (
    <div className=' min-h-[100vh] max-w-[100vw]   text-white flex flex-col sm:flex-row items-center justify-around' >
            <div className='py-5 bg-black min-h-[50vh] sm:h-[100vh] w-full flex flex-col items-center justify-center'>
        <Fade>
                <div className='font-bold  tracking-[0.75rem] text-6xl xl:text-9xl sm:text-6xl md:text-5xl  mx-4 z-30 '>
                    ABOUT
                </div>
                <div className='text-md mt-2 mx-4 sm:w-[40vw] border-2 p-4 text-justify'>
                    <p>
                In the ever-expanding Tech Industry, students play a crucial role, meeting its demands for brainpower, effort, 
                and creativity. Networking Nexus was created by a group of like-minded students to address the absence of student 
                participation in Industry Grade Project Development. They aim to empower students and foster innovation by forming a 
                diverse team of innovators, developers, and creators. Networking Nexus also oversees the functioning of 
                &quot;Technical Multi-Discipline Rich&quot; communities to ensure the future of developers is not undermined by a lack of experience and effort.
                </p>
                </div>
            </Fade>
            </div>
            <div className='bg-white min-h-[50vh] sm:h-[100vh] w-full flex flex-col items-center justify-center py-2'>
            <Fade>
                <div className='text-black font-bold tracking-[0.75rem] text-5xl xl:text-9xl sm:text-xl md:text-5xl   mx-4'>
                    VISION 
                </div>
                <div className='text-justify text-black text-md mt-2 mx-4 sm:w-[40vw] border-2 p-4 border-black'>
                    Being a fraternity of future pioneers in the Internet of Things and Cloud Computing, we aim to create and curate a section of Innovators, Developers, and Creators who apply their domain-specific technical knowledge to work on Industrial Grade projects. With our base and initiatives in the Internet of Things, we have a pre-planned structure to create a Multi-Stack Learning and Project Experience providing community. Our organization highly believes in community learning, and for the same, with our “domain-wise specialized” teams, we would be looking up to the formation and functioning of Technical Multi-Discipline enriched Communities.
                </div>
            </Fade>
            </div>
            </div>

  )
}

export default About
