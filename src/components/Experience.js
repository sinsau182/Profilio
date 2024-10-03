import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, duration, address, work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
            <a href={companyLink} 
            target={'_blank'} 
            className='text-primary dark:text-primaryDark capitalize'>
                @{company}
            </a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {duration} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute top-0.5 left-9 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                position="Software Engineer" company="Dawdle.live"
                companyLink="https://dawdle.live"
                duration="Aug 2024 - Present" address="Remote"
                work="Solely developed a video-sharing application from scratch,
                 managing the project from conception to AWS EC2 deployment, successfully
                  launching it with 5,000+ active users and a custom domain, boost engagement
                   and content access."

                />

                <Details 
            position="Native Android Developer" company="Excellence Technologies Pvt. Ltd."
                companyLink="https://excellencetechnology.in"
                duration="Jan 2023 - Jun 2023" address="Mohali, India"
                work="Gained Android development experience by collaborating on an app for 2K+ users,
                 contributing to UI design, functionality, and fixing 20+ production bugs, improving 
                 performance and user experience."

                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
